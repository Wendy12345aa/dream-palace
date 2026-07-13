---
name: generate-dream-palace-character-art
description: Create, edit, QA, and prepare Dream Palace character artwork using the project's Character, Art, UI/UX, and Demo Bible rules. Use when Codex is asked to generate Dream Palace companion portraits, transparent dialogue sprites, full-body character art, expression variants, costume variants, animated portrait assets, hair/sleeve/breathing animation layers, sprite frame loops, Live2D-prep layers, character sheets, turnaround/reference sheets, anonymous player/ruler images, or character-focused CGs for MP, Tab, Kel, CX, Mika, Vincey, Shian, or new Dream Palace-compatible characters.
---

# Generate Dream Palace Character Art

## Overview

Create Dream Palace character art that preserves the project's anime fantasy identity, non-chibi game-character proportions, companion-first design, and warm Living Kingdom tone.

Use this skill for character art only. Use `$generate-dream-palace-assets` for backgrounds, CGs without character focus, UI frames, icons, effects, or broad asset planning.

## Source Of Truth

Use the latest Dream Palace repository docs as the source of truth whenever they are available.

Primary repo:

```text
Wendy12345aa/dream-palace
```

Before generating or judging character art, first try to read the relevant latest project docs from the repo:

- `docs/04_Character_Bible.md`
- `docs/06_Art_Bible.md`
- `docs/05_UI_UX_Bible.md` for dialogue portraits or UI-facing character assets
- `docs/07_Demo_Bible.md` for demo-specific companion scope and opening/teaser usage

Prefer a local checked-out copy of the repo when the current workspace contains one. Otherwise use the GitHub connector or another available repository reader. If the repo docs cannot be accessed, fall back to this skill's bundled `references/` files.

When repo docs and bundled references disagree, follow the repo docs.

## First Step

If the user has not specified the character-art type, ask one concise choice question:

> Which Dream Palace character art type do you want: dialogue portrait, full-body standing art, expression variant, costume variant, animated portrait assets, character sheet, turnaround/reference sheet, anonymous player/ruler image, or character-focused CG?

If the type is clear from the request or filename, proceed without asking.

## Required Reference Loading

Load the latest repo docs first, then load fallback references as needed:

- Always use latest `docs/04_Character_Bible.md` when available; otherwise read `references/character-roster.md`.
- Always use latest `docs/06_Art_Bible.md` when available; otherwise read `references/dream-palace-character-rules.md`.
- Use latest `docs/05_UI_UX_Bible.md` for dialogue portraits and UI-facing character assets; otherwise read `references/deliverable-types.md`.
- Use latest `docs/07_Demo_Bible.md` for demo-specific portraits, CX teaser usage, and first-day companion scope; otherwise read `references/deliverable-types.md`.
- Read `references/deliverable-types.md` when choosing framing, transparency, sheet structure, variants, or QA criteria.
- Read `references/animated-portrait-assets.md` for hair sway, sleeve motion, breathing loops, layered web portraits, sprite-frame loops, or Live2D-prep requests.
- Read `references/asset-naming.md` when naming files or suggesting repository placement.

## Tool Use

Use image generation for bitmap generation and image editing. If the task is based on an attached reference, preserve the supplied identity, costume, pose, or style according to the user's stated role for the reference.

Do not replace a user-provided Dream Palace character with a generic fantasy face.

## Workflow

1. Identify character and deliverable type.
2. Load the required references.
3. Establish immutable traits: identity, gender/presentation when defined, role, color identity, props, costume cues, and emotional function.
4. Establish proportion contract: normal non-chibi game-character proportions unless the user explicitly requests otherwise.
5. Generate or edit the asset.
6. QA silhouette, face, hands, costume, props, transparency, and Dream Palace identity.
7. Suggest the canonical path and filename.

## Proportion Contract

Dream Palace characters are not chibi, Q-version, mascot, pet, toy, plush, or sticker characters.

Default proportions:

- full-body adult or mature fantasy character: about 7.5 to 8 heads tall
- heroic/fashion character art: about 8 heads tall when appropriate
- dialogue half-body: normal torso, shoulders, hands, neck, and head scale
- adolescent or younger character: age-appropriate, never baby-like unless explicitly designed as a child character

Reject outputs with oversized heads, compressed torsos, shortened limbs, tiny hands/feet, baby-like faces, doll-like styling, mascot silhouettes, or super-deformed anatomy.

## Dream Palace Character Rules

Every character asset should communicate:

- who owns this part of the kingdom
- what emotional role the character plays for the player
- a clear color identity
- a recognizable prop or motif
- a readable silhouette
- warm, polished anime fantasy presentation

For transparent portraits and sprites:

- no background
- no baked-in UI frame
- no text
- clean alpha edges
- enough margin around hair, sleeves, props, and silhouette

For character-focused CG:

- use cinematic framing
- make the character action tell a story
- keep UI absent
- avoid lineup composition unless requested

For animated portrait assets:

- keep animation subtle and character-driven
- prefer separated transparent layers for web demo use
- generate base portrait and motion layers from the same identity
- avoid changing the face, costume, proportions, or pose between frames
- provide implementation notes for CSS, sprite-frame, or Live2D-prep usage

## Output Standard

When not directly generating an image, provide:

1. Character.
2. Deliverable type.
3. Intended repo path.
4. Filename.
5. Character art direction.
6. Final prompt.
7. Negative prompt / avoid list.
8. Animation/layer plan when relevant.
9. QA checklist.

When directly generating an image, keep the final prompt self-contained and aligned to Dream Palace references.

## Acceptance Criteria

Deliver only if:

- the character reads as Dream Palace, not generic fantasy
- the role, color, prop, and emotional function are clear
- anatomy is normal-proportion and non-chibi
- hands, face, costume, and props are coherent
- transparent assets are cleanly isolated
- variants preserve identity
- animated layers or frames preserve identity and registration
- anonymous player/ruler art does not fix the player's face, gender, or official identity

## Project Rule

The player should remember a person, not a function.
