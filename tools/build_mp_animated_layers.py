from pathlib import Path

from PIL import Image, ImageFilter


ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "assets/reference/concepts/characters/mp/mp-dialogue-bust-concept-v01.png"
OUT = ROOT / "assets/portraits/mp/animated"
WEB_OUT = ROOT / "web-demo/assets/portraits/mp/animated"


def ensure_dirs() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    WEB_OUT.mkdir(parents=True, exist_ok=True)


def save_webp(img: Image.Image, name: str) -> None:
    for folder in (OUT, WEB_OUT):
        img.save(folder / name, "WEBP", lossless=True, quality=95, method=6)


def layer_from_mask(src: Image.Image, mask: Image.Image) -> Image.Image:
    out = Image.new("RGBA", src.size, (0, 0, 0, 0))
    out.paste(src, (0, 0), mask)
    return out


def make_masks(src: Image.Image) -> dict[str, Image.Image]:
    pix = src.load()
    width, height = src.size
    masks = {
        "hair_front": Image.new("L", src.size, 0),
        "hair_back": Image.new("L", src.size, 0),
        "sleeve": Image.new("L", src.size, 0),
    }
    hair_front = masks["hair_front"].load()
    hair_back = masks["hair_back"].load()
    sleeve = masks["sleeve"].load()

    for y in range(height):
        for x in range(width):
            r, g, b, a = pix[x, y]
            if a < 16:
                continue

            is_hair = r > 160 and g > 130 and b > 130 and (r + g + b) > 440
            if is_hair:
                # Front hair: strands around the face and upper bust.
                if 250 <= x <= 760 and 230 <= y <= 980:
                    hair_front[x, y] = a
                # Back hair: side and lower hair masses that read well when swaying.
                if x < 335 or x > 685 or y > 760:
                    hair_back[x, y] = a
                continue

            # Sleeve/cape motion layer. Keep this broad and subtle; CSS will move it gently.
            is_dark_fabric = r < 95 and g < 90 and b < 115
            is_blue_shadow = b > r + 18 and b > g + 8 and r < 95
            side_or_lower = (x < 355 and y > 690) or (x > 665 and y > 690) or y > 1030
            if side_or_lower and (is_dark_fabric or is_blue_shadow):
                sleeve[x, y] = a

    # Soften only the mask edge very slightly. Keep crisp enough for anime line art.
    return {key: value.filter(ImageFilter.GaussianBlur(0.35)) for key, value in masks.items()}


def main() -> None:
    ensure_dirs()
    src = Image.open(SOURCE).convert("RGBA")
    save_webp(src, "pt_mp_base.webp")

    masks = make_masks(src)
    save_webp(layer_from_mask(src, masks["hair_front"]), "anim_mp_hair_front.webp")
    save_webp(layer_from_mask(src, masks["hair_back"]), "anim_mp_hair_back.webp")
    save_webp(layer_from_mask(src, masks["sleeve"]), "anim_mp_sleeve.webp")

    manifest = """{
  "character": "MP",
  "mode": "lightweight-web-layers",
  "source": "assets/reference/concepts/characters/mp/mp-dialogue-bust-concept-v01.png",
  "canvas": { "width": 1024, "height": 1536 },
  "layers": [
    { "file": "pt_mp_base.webp", "role": "base portrait" },
    { "file": "anim_mp_hair_back.webp", "role": "slow back hair sway" },
    { "file": "anim_mp_hair_front.webp", "role": "front hair strand sway" },
    { "file": "anim_mp_sleeve.webp", "role": "sleeve and cape silk motion" }
  ],
  "cssNotes": {
    "base": "subtle breathing translate/scale, 4-5s",
    "hairBack": "slow translate/rotate, 6-8s",
    "hairFront": "slightly faster translate/rotate, 4-6s",
    "sleeve": "subtle sway, 5-7s"
  }
}
"""
    for folder in (OUT, WEB_OUT):
        (folder / "mp_animated_layers.json").write_text(manifest, encoding="utf-8")


if __name__ == "__main__":
    main()
