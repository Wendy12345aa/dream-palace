from pathlib import Path

from PIL import Image, ImageChops, ImageDraw, ImageFilter


ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "assets/reference/concepts/characters/mp/mp-dialogue-bust-concept-v01.png"
BLINK_SOURCE = ROOT / "assets/reference/concepts/characters/mp/mp-dialogue-bust-blink-v01.png"
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
    safe_mask = ImageChops.multiply(mask, src.getchannel("A"))
    out.paste(src, (0, 0), safe_mask)
    return out


def in_face_protection_zone(x: int, y: int) -> bool:
    """Keep animated hair/sleeve masks out of MP's facial features."""
    return 330 <= x <= 700 and 310 <= y <= 655


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
                if in_face_protection_zone(x, y):
                    continue
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
            if side_or_lower and not in_face_protection_zone(x, y) and (is_dark_fabric or is_blue_shadow):
                sleeve[x, y] = a

    # Soften only the mask edge very slightly. Keep crisp enough for anime line art.
    return {key: value.filter(ImageFilter.GaussianBlur(0.35)) for key, value in masks.items()}


def make_blink_overlay(src: Image.Image) -> Image.Image:
    scale = 3
    overlay = Image.new("RGBA", (src.width * scale, src.height * scale), (0, 0, 0, 0))
    skin = Image.new("RGBA", overlay.size, (0, 0, 0, 0))
    line = Image.new("RGBA", overlay.size, (0, 0, 0, 0))

    def sample_skin(box: tuple[int, int, int, int]) -> tuple[int, int, int, int]:
        crop = src.crop(box).convert("RGBA")
        samples: list[tuple[int, int, int]] = []
        for r, g, b, a in crop.getdata():
            if a < 128:
                continue
            if r > 185 and g > 145 and b > 120 and r > b and g > b * 0.82:
                samples.append((r, g, b))
        if not samples:
            return (238, 205, 188, 238)
        samples.sort()
        mid = len(samples) // 2
        r, g, b = samples[mid]
        return (min(255, r + 4), min(255, g + 3), min(255, b + 2), 238)

    eye_patches = [
        (
            [(416, 379), (440, 368), (487, 364), (528, 377), (525, 396), (492, 405), (448, 402), (420, 391)],
            (404, 340, 550, 448),
            [(424, 390), (456, 397), (495, 396), (526, 386)],
        ),
        (
            [(552, 378), (588, 366), (633, 368), (670, 384), (664, 398), (625, 407), (582, 402), (555, 391)],
            (535, 340, 688, 448),
            [(557, 386), (590, 396), (630, 397), (663, 390)],
        ),
    ]

    skin_draw = ImageDraw.Draw(skin)
    line_draw = ImageDraw.Draw(line)
    for patch, sample_box, curve in eye_patches:
        fill = sample_skin(sample_box)
        skin_draw.polygon([(x * scale, y * scale) for x, y in patch], fill=fill)
        pts = [(x * scale, y * scale) for x, y in curve]
        line_draw.line(pts, fill=(76, 43, 36, 240), width=4 * scale, joint="curve")
        line_draw.line([(x, y + 2 * scale) for x, y in pts], fill=(164, 108, 88, 95), width=2 * scale, joint="curve")

    # Very light edge softening avoids a sticker edge without introducing source-image shadows.
    skin_alpha = skin.getchannel("A").filter(ImageFilter.GaussianBlur(0.65 * scale))
    skin.putalpha(skin_alpha)
    overlay.alpha_composite(skin)
    overlay.alpha_composite(line)
    return overlay.resize(src.size, Image.Resampling.LANCZOS)


def main() -> None:
    ensure_dirs()
    src = Image.open(SOURCE).convert("RGBA")
    save_webp(src, "pt_mp_base.webp")

    masks = make_masks(src)
    save_webp(layer_from_mask(src, masks["hair_front"]), "anim_mp_hair_front.webp")
    save_webp(layer_from_mask(src, masks["hair_back"]), "anim_mp_hair_back.webp")
    save_webp(layer_from_mask(src, masks["sleeve"]), "anim_mp_sleeve.webp")
    save_webp(make_blink_overlay(src), "anim_mp_blink_closed.webp")

    manifest = """{
  "character": "MP",
  "mode": "lightweight-web-layers",
  "source": "assets/reference/concepts/characters/mp/mp-dialogue-bust-concept-v01.png",
  "blinkSource": "generated clean eyelid overlay from base portrait skin samples",
  "canvas": { "width": 1024, "height": 1536 },
  "layers": [
    { "file": "pt_mp_base.webp", "role": "base portrait" },
    { "file": "anim_mp_hair_back.webp", "role": "slow back hair sway" },
    { "file": "anim_mp_hair_front.webp", "role": "front hair strand sway" },
    { "file": "anim_mp_sleeve.webp", "role": "sleeve and cape silk motion" },
    { "file": "anim_mp_blink_closed.webp", "role": "brief closed-eye blink overlay" }
  ],
  "cssNotes": {
    "base": "subtle breathing translate/scale, 4-5s",
    "hairBack": "slow translate/rotate, 6-8s",
    "hairFront": "slightly faster translate/rotate, 4-6s",
    "sleeve": "subtle sway, 5-7s",
    "blink": "eye-only opacity curve: half-close, close, half-open every 5-7s"
  }
}
"""
    for folder in (OUT, WEB_OUT):
        (folder / "mp_animated_layers.json").write_text(manifest, encoding="utf-8")


if __name__ == "__main__":
    main()
