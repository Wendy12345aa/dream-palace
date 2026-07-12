---
name: generate-game-character-art
description: Create, revise, visually QA, and deliver production-ready game character illustrations with normal, realistic, heroic, or fashion-illustration body proportions. Use for character splash art, full-body or half-body 立绘, visual-novel characters, RPG character art, character sheets, orthographic views, costume or expression variants, and transparent-background game assets when the user wants a mature non-chibi silhouette rather than a cute mascot, pet, super-deformed, Q-version, or big-head-small-body design.
---

# Generate Game Character Art

## Overview

Create polished game character 立绘 with intentional adult, adolescent, or user-specified anatomy. Treat "normal ratio," "正常比例," "非 Q 版," and "立绘" as hard art-direction requirements, not loose style hints.

Use `$imagegen` for all visual generation and editing. Load and follow the installed image generation skill before generating. Do not call image APIs, CLIs, or local drawing scripts as substitutes.

## Intake

Infer harmless missing details when possible. Ask only when an unresolved choice would materially change the character, such as age category, presentation, historical setting, or whether the deliverable is full-body versus half-body.

Capture:

- character role, world, genre, personality, and age category
- presentation, physique, height impression, and target body proportion
- face, hair, skin, costume, materials, palette, equipment, and signature motifs
- pose, expression, camera angle, crop, lighting, and background requirement
- output type: hero 立绘, visual-novel portrait, transparent game asset, turnaround, or variant sheet
- reference-image roles: identity, costume, style, pose, palette, or equipment

If the user supplies references, attach every image that defines identity, anatomy, costume, material, or equipment. State which reference controls which attribute. Never silently replace a user-defined identity with a generic face.

## Proportion Contract

Choose a proportion target before generation and repeat it in the authoritative prompt. Use the user's target when specified; otherwise default to a believable adult game-character proportion around 7.5–8 heads tall for a full-body figure.

Adjust appropriately:

- adult realistic: about 7.5–8 heads tall
- heroic or fashion: about 8–9 heads tall, with elongated legs only when stylistically intended
- adolescent: age-appropriate proportions without adult sexualization
- stylized non-chibi: preserve a recognizably normal torso, pelvis, limb length, hands, and feet even when shapes are graphic or painterly

Reject or regenerate when the result has a disproportionately large head, shortened limbs, compressed torso, tiny hands or feet, baby-like facial construction, mascot silhouette, toy-like body, or super-deformed/Q-version anatomy. Do not use words such as `cute`, `adorable`, `chibi`, `kawaii`, `doll-like`, `tiny body`, or `oversized head` unless the user explicitly requests a localized feature and normal proportions remain intact.

Read [art-direction.md](references/art-direction.md) when choosing a deliverable type, writing the generation prompt, or performing final QA.

## Workflow

Maintain a visible four-step checklist:

1. Define the character and deliverable.
2. Establish silhouette and proportions.
3. Generate the final art or coherent variant set.
4. Inspect, repair, and deliver.

### 1. Define

Write a compact character brief. Separate immutable identity traits from flexible art-direction choices. If the request is based only on a brand or existing franchise, use official or user-provided sources and avoid copying logos, text, or protected character designs unless the user has supplied authorized material and explicitly requests faithful adaptation.

### 2. Establish

For a single illustration, generate one strong composition directly. For a complex character, turnaround, or multi-variant request, first establish one canonical neutral full-body reference with readable anatomy and costume construction. Use that approved image as the identity source for later views or variants.

Keep the whole figure inside frame when full-body output is requested. Preserve hands, feet, hair, weapons, capes, and other silhouette-defining elements. Avoid foreshortening that hides proportion quality in the canonical view.

### 3. Generate

Use one coherent generation for a single sheet whenever the requested views or variants must match. When separate generations are necessary, attach the canonical reference every time and lock identity, proportion, costume construction, palette, material, and equipment handedness.

Prompt in this order:

1. asset purpose and framing
2. character identity and age category
3. explicit body-proportion target
4. costume, materials, and equipment
5. pose, expression, camera, and lighting
6. style and rendering finish
7. background and isolation requirements
8. negative constraints against chibi/Q-version anatomy and common defects

Do not request text, labels, UI, borders, watermarks, or decorative callouts unless the user explicitly needs a labeled presentation sheet.

### 4. Inspect and Repair

Inspect at normal viewing size and zoomed detail. Check:

- head-to-body ratio and age-appropriate anatomy
- face identity, eye alignment, hands, fingers, feet, and joints
- costume continuity, closures, layers, patterns, and material behavior
- weapon geometry, grip, handedness, and attachment points
- complete silhouette with no cropping or merged elements
- pose balance, center of gravity, and readable gesture
- background transparency or clean isolation when requested
- consistency across every view or variant

If one local detail fails and image editing can preserve the rest, edit the selected image with `$imagegen`. If anatomy, silhouette, identity, or multi-view consistency fails broadly, regenerate the complete affected image or coherent sheet. Never hide anatomy defects with cropping unless the requested deliverable is intentionally half-body.

## Deliverable Modes

- **Full-body 立绘:** one complete character, neutral or expressive pose, readable from head to feet.
- **Half-body portrait:** deliberate waist/thigh crop for dialogue or visual-novel UI; preserve hands if they matter to the pose.
- **Transparent game asset:** isolated character with clean alpha, no cast shadow unless requested separately.
- **Character sheet:** canonical full-body plus a small, coherent set of views, expressions, costume details, or equipment callouts.
- **Turnaround:** front, three-quarter, side, and back views in matching scale and neutral stance; prioritize construction clarity over dramatic lighting.
- **Variants:** preserve identity and anatomy while changing only the requested costume, expression, damage state, or palette.

## Acceptance Criteria

Deliver only when:

- the result reads immediately as game character 立绘 rather than a mascot or pet
- the figure uses the chosen normal, realistic, heroic, or fashion proportion target
- no chibi, Q-version, super-deformed, baby-like, or big-head-small-body traits remain
- anatomy and pose are plausible for the selected style and age category
- face, costume, materials, palette, equipment, and identity are internally consistent
- full-body requests include the entire silhouette without accidental cropping
- variant or turnaround views remain recognizably the same character
- the requested background, transparency, dimensions, and file type are satisfied
- final visual QA has no unresolved major defect

Report the selected output path and a concise note describing the proportion target and delivered mode.
