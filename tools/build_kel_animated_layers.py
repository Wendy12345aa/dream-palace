from __future__ import annotations

from collections import deque
from pathlib import Path

from PIL import Image, ImageFilter

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "assets/reference/concepts/characters/kel/kel-full-body-cutout-generated-v01.png"
OUT = ROOT / "assets/portraits/kel/animated"
WEB_OUT = ROOT / "web-demo/assets/portraits/kel/animated"


def ensure_dirs() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    WEB_OUT.mkdir(parents=True, exist_ok=True)


def save_webp(image: Image.Image, name: str) -> None:
    for folder in (OUT, WEB_OUT):
        image.save(folder / name, "WEBP", lossless=True, quality=95, method=6)


def is_checker_background(pixel: tuple[int, int, int, int]) -> bool:
    r, g, b, a = pixel
    if a < 16:
        return True
    return min(r, g, b) > 218 and max(r, g, b) - min(r, g, b) < 24


def remove_baked_checkerboard(src: Image.Image) -> Image.Image:
    img = src.convert("RGBA")
    width, height = img.size
    pixels = img.load()
    seen = bytearray(width * height)
    queue: deque[tuple[int, int]] = deque()

    def push(x: int, y: int) -> None:
        index = y * width + x
        if seen[index]:
            return
        seen[index] = 1
        if is_checker_background(pixels[x, y]):
            queue.append((x, y))

    for x in range(width):
        push(x, 0)
        push(x, height - 1)
    for y in range(height):
        push(0, y)
        push(width - 1, y)

    bg = Image.new("L", img.size, 0)
    bg_px = bg.load()
    while queue:
        x, y = queue.popleft()
        bg_px[x, y] = 255
        for nx, ny in ((x + 1, y), (x - 1, y), (x, y + 1), (x, y - 1)):
            if 0 <= nx < width and 0 <= ny < height:
                index = ny * width + nx
                if seen[index]:
                    continue
                seen[index] = 1
                if is_checker_background(pixels[nx, ny]):
                    queue.append((nx, ny))

    # Contract and feather the removed background slightly to avoid a pale halo.
    bg = bg.filter(ImageFilter.MaxFilter(3)).filter(ImageFilter.GaussianBlur(0.35))
    alpha = Image.eval(bg, lambda value: 255 - value)
    img.putalpha(alpha)
    return img


def make_masks(src: Image.Image) -> dict[str, Image.Image]:
    width, height = src.size
    masks = {
        "hair_front": Image.new("L", src.size, 0),
        "sleeve": Image.new("L", src.size, 0),
        "lantern_glow": Image.new("L", src.size, 0),
    }
    hair = masks["hair_front"].load()
    sleeve = masks["sleeve"].load()
    lantern = masks["lantern_glow"].load()

    px = src.load()
    for y in range(height):
        for x in range(width):
            r, g, b, a = px[x, y]
            if a < 32:
                continue

            is_dark_hair = r < 95 and g < 75 and b < 55
            if 310 < x < 610 and 35 < y < 360 and is_dark_hair:
                hair[x, y] = a

            is_green_fabric = g > r * 0.82 and g > b * 0.8 and 45 < g < 150 and r < 135
            lower_or_side = y > 500 or x < 300 or x > 625
            if lower_or_side and is_green_fabric:
                sleeve[x, y] = a

            is_lantern_green = g > 145 and b > 90 and r < 190 and x < 330 and 60 < y < 520
            if is_lantern_green:
                lantern[x, y] = min(255, a + 30)

    return {key: value.filter(ImageFilter.GaussianBlur(0.55)) for key, value in masks.items()}


def layer_from_mask(src: Image.Image, mask: Image.Image) -> Image.Image:
    layer = Image.new("RGBA", src.size, (0, 0, 0, 0))
    layer.alpha_composite(src)
    layer.putalpha(mask)
    return layer


def main() -> None:
    ensure_dirs()
    src = Image.open(SOURCE).convert("RGBA")
    base = remove_baked_checkerboard(src)
    save_webp(base, "pt_kel_base.webp")

    masks = make_masks(base)
    save_webp(layer_from_mask(base, masks["hair_front"]), "anim_kel_hair_front.webp")
    save_webp(layer_from_mask(base, masks["sleeve"]), "anim_kel_sleeve.webp")
    save_webp(layer_from_mask(base, masks["lantern_glow"]), "anim_kel_lantern_glow.webp")

    manifest = """{
  "character": "Kel",
  "mode": "lightweight-web-layers",
  "source": "assets/reference/concepts/characters/kel/kel-full-body-cutout-generated-v01.png",
  "canvas": { "width": 1024, "height": 1536 },
  "layers": [
    { "file": "pt_kel_base.webp", "role": "base portrait" },
    { "file": "anim_kel_hair_front.webp", "role": "short hair sway" },
    { "file": "anim_kel_sleeve.webp", "role": "robe and sleeve silk motion" },
    { "file": "anim_kel_lantern_glow.webp", "role": "subtle lantern glow pulse" }
  ],
  "cssNotes": {
    "base": "subtle breathing translate/scale, 4-5s",
    "hairFront": "gentle short-hair sway, 4-6s",
    "sleeve": "subtle robe sway, 5-7s",
    "lanternGlow": "soft green-gold pulse, 3-5s"
  }
}
"""
    for folder in (OUT, WEB_OUT):
        (folder / "kel_animated_layers.json").write_text(manifest, encoding="utf-8")


if __name__ == "__main__":
    main()
