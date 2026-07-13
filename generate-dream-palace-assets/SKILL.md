---
name: generate-dream-palace-assets
description: Create or edit Dream Palace project art assets and image prompts using the project's established Art, UI/UX, Demo, and Character Bible rules. Use when Codex is asked to generate, revise, remove backgrounds from, name, organize, or prepare Dream Palace game images such as opening CGs, scene backgrounds, character portraits, player silhouette/anonymous ruler images, UI frames, buttons, icons, effects, Steam/key visuals, concept art, or demo-ready assets.
---

# Generate Dream Palace Assets

## Overview

Create Dream Palace visual assets that feel like the project, not generic fantasy art. Always prioritize companions, warm living-kingdom atmosphere, cinematic staging, minimal UI, and emotional memory.

Use this skill for both:

- **Direct image generation/editing** with the image generation tool.
- **Production-ready prompts/specs** for Codex or another image-capable session to use later.

## Source Of Truth

Use the latest Dream Palace repository docs as the source of truth whenever they are available.

Primary repo:

```text
Wendy12345aa/dream-palace
```

Before generating or judging an asset, first try to read the relevant latest project docs from the repo:

- `docs/04_Character_Bible.md`
- `docs/05_UI_UX_Bible.md`
- `docs/06_Art_Bible.md`
- `docs/07_Demo_Bible.md`

Prefer a local checked-out copy of the repo when the current workspace contains one. Otherwise use the GitHub connector or another available repository reader. If the repo docs cannot be accessed, fall back to this skill's bundled `references/` files.

When repo docs and bundled references disagree, follow the repo docs.

## First Step

If the user did not specify the asset type, ask one concise question:

> Which Dream Palace asset type do you want: opening CG, scene background, character portrait, anonymous player/ruler image, UI frame/button, icon, visual effect, Steam/key visual, or concept art?

If the asset type is clear from the request or filename, proceed without asking.

## Required Reference Loading

Load the latest repo docs first, then load only the fallback reference needed for the task:

- Always use latest `docs/06_Art_Bible.md` when available; otherwise read `references/art-rules.md`.
- Use latest `docs/05_UI_UX_Bible.md` for UI assets and interface screenshots; otherwise read `references/asset-types.md`.
- Use latest `docs/07_Demo_Bible.md` for opening CGs, demo screenshots, Morning Court, and first playable demo assets; otherwise read `references/asset-types.md`.
- Use latest `docs/04_Character_Bible.md` for character portraits, companion-focused CG, player/ruler assets, or any image containing MP, Tab, Kel, CX, Mika, Vincey, or Shian; otherwise read `references/character-visuals.md`.
- Read `references/asset-naming.md` when naming files or suggesting repo placement.

## Workflow

1. Identify asset type and intended use.
2. Load the relevant references.
3. Confirm only genuinely missing high-impact choices. Otherwise infer conservatively from Dream Palace rules.
4. Create a generation prompt or call the image generation tool directly.
5. Enforce the Dream Palace Signature:
   - companion or character presence when relevant
   - warm light
   - visible kingdom history
   - living background
   - emotional focus
   - camera storytelling
   - minimal UI
   - environmental motion
6. Reject or revise outputs that look like:
   - traditional page-game or mobile dashboard art
   - generic fantasy castles
   - dark grim fantasy
   - crowded character lineups
   - UI-heavy admin dashboards
   - over-designed armor or one-note palettes
7. Suggest the canonical asset path and filename.

## Image Generation Rules

For bitmap generation or editing, use the image generation tool. For edits based on an attached/local image, inspect the image first when possible, then preserve the identity and style unless the user asks for a redesign.

For transparent assets:

- Request transparent background explicitly.
- Avoid shadows or glow that imply an opaque background unless needed.
- Do not add text, logos, watermarks, or UI labels unless explicitly requested.

For UI assets:

- Keep text out of the image so Codex can render text dynamically.
- Leave safe empty regions for names, dialogue, choices, or icons.
- Make UI feel like an in-world object: ledger, scroll, seal, blueprint, map, document, lantern, or court artifact.

For CG/backgrounds:

- Use 16:9 unless the user asks otherwise.
- Prefer cinematic composition over asset catalog composition.
- Include story cues, not lore dumps.

## Asset Categories

Supported categories include:

- Opening CGs: `cg_opening_01_city_before_dawn.webp`, petition arrival, MP ledger, Tab review, Kel blueprint, court turning to player.
- Scene backgrounds: Morning Court, palace corridor/garden, treasury, workshop, village, evening palace.
- Character portraits: transparent half-body or full-body companion portraits for dialogue.
- Anonymous player/ruler assets: face-hidden, gender-ambiguous, never stealing the player's identity.
- UI frames and controls: dialogue frames, choice buttons, ledger panels, stamps, notifications.
- Icons: resources, trust, time, alerts, factions, technology, culture.
- Effects: sunlight, dust, paper, ink, petals, wind, lantern glow, rain, snow.
- Key visuals: official promotional compositions, Steam capsules, GitHub hero images.
- Concepts: exploratory art that must remain separate from approved production assets.

## Output Standard

When not directly generating an image, provide:

1. Asset type.
2. Intended repo path.
3. Filename.
4. Short art direction.
5. Final image prompt.
6. Negative prompt / avoid list.
7. Notes for Codex implementation if relevant.

When directly generating an image, keep the prompt self-contained and aligned to the references. After generation, do not add unnecessary explanation.

## Project Rule

Dream Palace art should make the player feel:

> I am not operating a menu. I am returning to a living kingdom where people are waiting for me.
