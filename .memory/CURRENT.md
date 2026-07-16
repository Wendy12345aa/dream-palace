# Current State

Last verified: 2026-07-16.

## Stage

- Milestone: Web Demo, pre-external-playtest.
- Completed sprint: Sprint 2.4 Character & Narrative Lock.
- Current pass: external playtest validation of the locked narrative slice.

## Playable Build

The zero-dependency web demo currently supports:

`language -> eight-shot opening -> Morning Court -> Northbridge report -> Mu Ping ledger -> Kai Ning bridge inspection -> grain/audit decision -> visible table consequence -> evening reflection -> Cheng Xuan hook -> replay/restart/title`

Implemented presentation:

- Chinese and English.
- Scene-based Morning Court UI.
- Mu Ping, Qing Tang, Kai Ning staging and Cheng Xuan teaser.
- Dialogue pacing, log, replay controls, and responsive layouts.
- Character-free Kingdom Table background and two visual consequence scenes.
- Three-step physical workbench onboarding: open Mu Ping's ledger, fit Kai Ning's support beam, place a policy prop.

## Current Product Question

Does manipulating in-world court objects make Morning Court engaging enough to sustain play, rather than feeling like dialogue plus a binary choice?

The current slice is intentionally short. Do not extend it with filler dialogue. The next evidence should come from playtest behavior and measured runtime.

## Next

1. Run a 3-5 person external playtest with no explanation.
2. Record route time, interaction confusion, remembered characters, and understood consequences.
3. Decide whether to deepen the Northbridge investigation, add character assignment, or add a second event only after feedback.

## Not Now

- Second playable day or petition.
- Seven active companion systems.
- Traditional disconnected minigames.
- Combat, 3D, Live2D, true AI, backend, networking, or save service.
- Large world expansion.

## Implementation Entry Points

- `web-demo/index.html`: scene and workbench markup.
- `web-demo/src/main.js`: dialogue, tutorial, drag/drop, and decision state.
- `web-demo/src/demoData.js`: bilingual story and consequences.
- `web-demo/src/styles.css`: staging, motion, and responsive layout.
- `assets/backgrounds/kingdom-table/`: decision-result scenes.
- `work-on-dream-palace/`: version-controlled source for the user-level cross-task Project Brain skill.

## Repository Caution

The working tree may contain uncommitted demo and generated-asset changes. Always inspect `git status`; never discard them automatically.
