# Animated Portrait Assets

Use this reference when the user asks for dynamic standing art, moving hair, floating sleeves, breathing animation, sprite loops, Live2D-like assets, or web demo character animation.

## Recommended Mode

For the current Dream Palace web demo, prefer lightweight web layers:

```text
base portrait
+ front hair transparent layer
+ back hair transparent layer
+ sleeve/ribbon transparent layer
+ optional blink overlays
+ CSS keyframes
```

This is cheaper and safer than Live2D while still making the portrait feel alive.

## Ask When Unclear

Ask the user to choose:

1. Lightweight web layers for CSS animation.
2. Sprite-frame loop with 2-6 transparent frames.
3. Live2D-prep layered asset.

If the user says "for the current demo/site", default to lightweight web layers.

## Lightweight Web Layers

Generate or request:

- `pt_character_base.webp`: complete portrait without moving hair/sleeve if possible.
- `anim_character_hair_front.webp`: only front hair strands, transparent.
- `anim_character_hair_back.webp`: only back hair mass or long hair, transparent.
- `anim_character_sleeve.webp`: sleeve/ribbon/cape layer, transparent.
- optional `anim_character_blink_01.webp`, `anim_character_blink_02.webp`.

All layers must:

- share the same canvas size
- align to the base portrait
- keep transparent background
- avoid changing face/costume identity
- include no text, no UI frame, no opaque background

Suggested CSS direction:

```text
hair front: slow rotate/translate, 4-6s ease-in-out infinite
hair back: slower translate, 6-8s ease-in-out infinite
sleeve/ribbon: subtle sway, 5-7s ease-in-out infinite
base body: very subtle breathing scale/translate, 4-5s ease-in-out infinite
blink: brief opacity swap every 4-7s
```

## Sprite-Frame Loop

Use when the implementation wants a single animated image sequence.

Generate:

- 2-6 transparent frames
- same canvas
- same pose
- only subtle hair, sleeve, blink, or breathing differences

Avoid large pose changes. If the face or body changes identity, regenerate from a canonical base.

## Live2D-Prep Layers

Use only when the user explicitly wants Live2D preparation.

Required separated layers:

- face base
- left eye open/closed
- right eye open/closed
- mouth neutral/open
- front hair groups
- side hair groups
- back hair
- neck
- torso
- left arm/sleeve
- right arm/sleeve
- accessories
- prop layers

Keep the cut lines hidden under hair/costume overlaps when possible.

## Dream Palace Motion Tone

Motion should feel like:

- quiet breathing
- silk and hair reacting to palace air
- gentle Morning Court atmosphere
- dignified companion presence

Avoid:

- bouncy mascot motion
- exaggerated idle loops
- combat animation
- magical particle overload
- motion that makes the character feel less mature or less grounded

## QA

Check:

- all layers align
- transparent edges are clean
- no background residue
- identity preserved
- no chibi anatomy
- hair/sleeve motion supports the character's personality
- movement does not steal attention from dialogue
