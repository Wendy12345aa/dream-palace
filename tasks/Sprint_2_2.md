# Sprint 2.2: Bring the Court to Life

## Status

Complete

## Goal

Replace the Morning Court's text-only companion markers with a cinematic character stage that makes MP, Tab, Kel, and the CX teaser feel present in the room.

This sprint improves character presence without adding dialogue generation, Live2D, 3D, or new gameplay systems.

## Experience Target

The player should read the current speaker before reading the name in the dialogue frame.

Only one or two companions should carry visual weight at a time:

- the current speaker is fully present
- the previous speaker may remain as a subdued reaction presence
- everyone else leaves the visual foreground
- CX appears alone as the final unresolved presence

## Scope

- integrate MP's existing layered portrait rig
- integrate Kel's existing layered portrait rig
- integrate a clearly labelled Tab preview portrait from the approved concept reference
- add subtle breathing, hair, sleeve, blink, lantern, and inspection-light motion
- connect stage focus to scripted speaker changes
- preserve character presence on mobile
- add a faceless dark-purple CX teaser silhouette
- keep the Kingdom Table and visible consequence readable beneath the character stage

## Asset Policy

MP and Kel use production-ready layered web assets.

Tab's current source is still a concept image with a baked background. Sprint 2.2 may use it as a masked preview to validate composition, but it must remain named `preview` until a clean transparent production portrait is approved.

CX remains an intentionally anonymous silhouette in this sprint.

## Non-Goals

- full Live2D rigs
- new companion dialogue
- facial expression systems
- voice acting
- all seven companions on screen
- replacing the Kingdom Table
- typewriter text, which remains Sprint 2.3 work

## Definition of Done

- [x] MP, Tab, Kel, and CX have distinct stage presentations.
- [x] The active speaker is visually dominant.
- [x] No more than two companions carry visual weight at once.
- [x] MP and Kel retain subtle layered motion without layout drift.
- [x] Tab reads as inspection and accountability, not a generic portrait card.
- [x] CX appears only during the tomorrow hook and ending.
- [x] Character staging remains readable at desktop and mobile widths.
- [x] Both languages and both Northbridge choices complete without errors.

## Validated

- English release-grain route at 1440 x 900
- Chinese audit-first route at 390 x 844
- opening skip and court entry
- MP, Tab, Kel, and CX speaker transitions
- no horizontal or vertical document overflow
- no runtime or console errors from demo code

## Production Follow-Ups

Completed in Sprint 2.3:

- replaced `pt_tab_idle_preview.png` with an approved transparent production portrait
- replaced the character-baked Kingdom Table concept with a character-free Northbridge background
- added typewriter pacing, dialogue log, and replay controls

---

> The player should remember who spoke, not which label lit up.
