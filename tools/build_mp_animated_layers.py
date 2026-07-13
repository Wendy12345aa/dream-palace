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
    if not BLINK_SOURCE.exists():
        return Image.new("RGBA", src.size, (0, 0, 0, 0))

    blink = Image.open(BLINK_SOURCE).convert("RGBA")
    if blink.size != src.size:
        blink = blink.resize(src.size, Image.Resampling.LANCZOS)

    scale = 3
    mask = Image.new("L", (src.width * scale, src.height * scale), 0)
    line_keep = Image.new("L", (src.width * scale, src.height * scale), 0)
    mask_draw = ImageDraw.Draw(mask)
    line_draw = ImageDraw.Draw(line_keep)

    # Use the original closed-eye artwork, but only from the real eye sockets.
    # Earlier large patches caught dark surrounding shadows and visibly crossed
    # the face; these tight patches keep the blink inside the eyes.
    eye_patches = [
        ((424, 360, 534, 420), [(429, 389), (458, 399), (495, 397), (524, 386)]),
        ((558, 360, 660, 420), [(563, 386), (592, 397), (628, 396), (654, 388)]),
    ]
    for box, curve in eye_patches:
        scaled_box = tuple(v * scale for v in box)
        mask_draw.rounded_rectangle(scaled_box, radius=18 * scale, fill=255)
        pts = [(x * scale, y * scale) for x, y in curve]
        line_draw.line(pts, fill=255, width=9 * scale, joint="curve")

    mask = mask.filter(ImageFilter.GaussianBlur(0.9 * scale)).resize(src.size, Image.Resampling.LANCZOS)
    line_keep = line_keep.filter(ImageFilter.GaussianBlur(1.2 * scale)).resize(src.size, Image.Resampling.LANCZOS)

    overlay = Image.new("RGBA", src.size, (0, 0, 0, 0))
    src_px = src.load()
    blink_px = blink.load()
    mask_px = mask.load()
    line_px = line_keep.load()
    out_px = overlay.load()

    for y in range(src.height):
        for x in range(src.width):
            ma = mask_px[x, y]
            if ma <= 0:
                continue
            br, bg, bb, ba = blink_px[x, y]
            if ba <= 0:
                continue

            sr, sg, sb, sa = src_px[x, y]
            blink_luma = 0.299 * br + 0.587 * bg + 0.114 * bb
            base_luma = 0.299 * sr + 0.587 * sg + 0.114 * sb
            keep_line = line_px[x, y] > 18

            # Remove dirty black shadow pixels while preserving the actual
            # closed eyelid strokes from the source artwork.
            if not keep_line and blink_luma + 18 < base_luma and blink_luma < 120:
                continue

            out_px[x, y] = (br, bg, bb, min(ba, ma))

    return overlay


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
  "blinkSource": "assets/reference/concepts/characters/mp/mp-dialogue-bust-blink-v01.png cleaned with tight eye-only masks",
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
