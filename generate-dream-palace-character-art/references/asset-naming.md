# Character Asset Naming

Use predictable names so Codex can implement assets without guessing.

## Prefixes

- `pt_`: portrait
- `sp_`: sprite
- `cg_`: character-focused CG
- `sheet_`: character sheet or reference sheet
- `anim_`: animated portrait package or layer

## Character Folders

```text
assets/portraits/mp/
assets/portraits/tab/
assets/portraits/kel/
assets/portraits/cx/
assets/portraits/mika/
assets/portraits/vincey/
assets/portraits/shian/
assets/portraits/player/
```

## Dialogue Portrait Names

```text
pt_mp_idle.webp
pt_mp_concerned.webp
pt_mp_relieved.webp
pt_tab_neutral.webp
pt_tab_strict.webp
pt_tab_approving.webp
pt_kel_neutral.webp
pt_kel_focused.webp
pt_kel_hopeful.webp
pt_cx_silhouette.webp
pt_player_face_hidden.webp
```

## Full-Body / Sprite Source

```text
assets/sprites/mp/sp_mp_fullbody_idle.webp
assets/sprites/tab/sp_tab_fullbody_idle.webp
assets/sprites/kel/sp_kel_fullbody_idle.webp
```

## Animated Portrait Assets

```text
assets/portraits/mp/animated/pt_mp_base.webp
assets/portraits/mp/animated/anim_mp_hair_front.webp
assets/portraits/mp/animated/anim_mp_hair_back.webp
assets/portraits/mp/animated/anim_mp_sleeve.webp
assets/portraits/mp/animated/anim_mp_blink_01.webp
assets/portraits/mp/animated/anim_mp_blink_02.webp
```

For sprite-frame loops:

```text
assets/portraits/mp/animated/frames/pt_mp_breath_01.webp
assets/portraits/mp/animated/frames/pt_mp_breath_02.webp
assets/portraits/mp/animated/frames/pt_mp_breath_03.webp
```

## Sheets

```text
assets/characters/mp/sheet_mp_reference.webp
assets/characters/tab/sheet_tab_reference.webp
assets/characters/kel/sheet_kel_reference.webp
```

## Concepts vs Production

Exploratory generations belong in:

```text
assets/concepts/characters/
```

Approved game-ready files belong in the production folders above.

Only approved production assets should be referenced by code.
