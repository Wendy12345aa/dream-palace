# Character Deliverable Types

Use this file to choose framing and output requirements.

## Dialogue Portrait

Purpose: dialogue UI and Morning Court interactions.

Default:

- transparent background
- half-body or waist-up
- 3/4 view or front-facing
- clean alpha
- no frame, UI, text, or background
- enough margin for hair, sleeves, hands, and props

Use filenames like:

```text
assets/portraits/mp/pt_mp_idle.webp
assets/portraits/tab/pt_tab_strict.webp
```

## Full-Body Standing Art

Purpose: character reveal, roster, reference, or standing sprite source.

Default:

- entire figure visible
- normal non-chibi proportions
- readable stance and silhouette
- transparent background unless requested otherwise
- include role-specific prop

## Expression Variant

Purpose: dialogue emotional states.

Default:

- preserve same identity, hair, costume, prop language, and crop
- change only expression and subtle posture
- transparent background

Common states:

- idle
- concerned
- relieved
- strict
- focused
- hopeful
- suspicious
- approving

## Costume Variant

Purpose: story progression, festival, crisis, promotion, or seasonal state.

Default:

- preserve identity and body proportion
- change outfit according to story reason
- keep companion color identity and role symbols
- do not redesign into unrelated character

## Animated Portrait Assets

Purpose: make dialogue portraits feel alive in the web demo without requiring full Live2D.

Ask which animation mode is intended when unclear:

1. Lightweight web layers: base portrait plus transparent hair/sleeve/accessory layers animated with CSS.
2. Sprite-frame loop: 2-6 transparent frames for breathing, hair sway, blink, or sleeve motion.
3. Live2D-prep layers: separated face, eyes, mouth, hair groups, torso, sleeves, props, and accessories.

Default for Dream Palace demo:

- lightweight web layers
- transparent background
- same crop and registration for all layers
- subtle movement only
- preserve the approved portrait identity
- no text, UI, or background

Recommended layers:

- base body
- front hair
- back hair
- sleeve or ribbon
- optional blink/eye overlay
- optional mouth shape if dialogue lip-sync is planned

Avoid:

- full-body action animation
- large pose changes
- changing face identity between frames
- effects that distract from dialogue
- rigid cutouts with visible gaps

## Character Sheet

Purpose: production reference.

Default:

- canonical full-body
- expression row
- prop callouts
- costume details
- color accents
- optional notes area only if user explicitly wants labels

Generate as a coherent sheet when possible.

## Turnaround / Reference Sheet

Purpose: construction for sprites, Live2D, 3D, or consistent future art.

Default:

- front, 3/4, side, back
- same scale and baseline
- neutral stance
- clear costume construction
- no dramatic lighting that hides detail

## Anonymous Player / Ruler Image

Purpose: imply player presence without fixing identity.

Default:

- face hidden or unseen
- gender-ambiguous
- elegant court clothing
- transparent background when used as asset
- no throne unless requested

## Character-Focused CG

Purpose: emotional story beat featuring a companion or player presence.

Default:

- 16:9
- cinematic framing
- no UI, no text, no logo
- role action visible: MP with ledger, Tab stamping document, Kel with blueprint, etc.
- warm, emotionally readable lighting

## Final QA Checklist

- Does it clearly belong to Dream Palace?
- Is the deliverable type correct?
- Is the character identity preserved?
- Are body proportions non-chibi?
- Are hands, face, and costume coherent?
- Is the role-specific prop readable?
- Is the background/alpha correct?
- Are text, UI, logo, and watermarks absent unless requested?
