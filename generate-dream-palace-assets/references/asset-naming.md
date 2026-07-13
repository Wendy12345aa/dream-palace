# Dream Palace Asset Naming

Use consistent names so Codex can implement assets without guessing.

## Root Folders

Recommended repository structure:

```text
assets/
  backgrounds/
  portraits/
  sprites/
  ui/
  icons/
  effects/
  cg/
  concepts/
  references/
```

## Prefixes

- `bg_`: background
- `pt_`: portrait
- `sp_`: sprite
- `ui_`: UI element
- `ic_`: icon
- `fx_`: visual effect
- `cg_`: story CG/key illustration

## Production vs Concept

Put exploratory AI generations in:

```text
assets/concepts/
```

Move approved, game-ready files to their production folder.

Only approved production assets should be referenced by code.

## Suggested Paths

Opening CG:

```text
assets/cg/opening/cg_opening_01_city_before_dawn.webp
```

Backgrounds:

```text
assets/backgrounds/bg_morning_court_day.webp
assets/backgrounds/bg_palace_corridor.webp
assets/backgrounds/bg_treasury_ledger_table.webp
assets/backgrounds/bg_workshop_corner.webp
```

Portraits:

```text
assets/portraits/mp/pt_mp_idle.webp
assets/portraits/mp/pt_mp_concerned.webp
assets/portraits/tab/pt_tab_strict.webp
assets/portraits/kel/pt_kel_focused.webp
assets/portraits/player/pt_player_face_hidden.webp
```

UI:

```text
assets/ui/dialogue/ui_dialogue_frame_gold.webp
assets/ui/choice/ui_choice_button_primary.webp
assets/ui/ledger/ui_ledger_panel_mp.webp
assets/ui/stamps/ui_stamp_approved_tab.webp
```

Icons:

```text
assets/icons/ic_grain.webp
assets/icons/ic_gold.webp
assets/icons/ic_trust.webp
assets/icons/ic_warning.webp
```

Effects:

```text
assets/effects/fx_lantern_glow.webp
assets/effects/fx_paper_unfold.webp
assets/effects/fx_dust_sunlight.webp
```
