# Decision Log

Only durable, approved choices belong here.

## Established Direction

- Dream Palace is character-driven Living Kingdom/court-life strategy, not a generic action RPG.
- The player has no fixed appearance or gender.
- Morning Court is the core loop and primary hub.
- Major interfaces belong to companions.
- Scripted state and authored dialogue come before real AI.
- The web demo validates experience before engine, backend, MMO, or 3D investment.

## 2026-07-15: Scene-Based UI Replaces Dashboard

Decision: remove permanent resource/companion panels and stage the demo as a full-screen Morning Court.

Reason: the dashboard looked like administrative software and weakened character presence.

## 2026-07-15: Kingdom Table Is a Physical Workbench

Decision: use a character-free tabletop scene with models, ledgers, props, and visible consequence layers.

Reason: governance should feel physical and shared, not like opening a world-map menu.

## 2026-07-15: Public Playtest Before Scope Expansion

Decision: polish one Northbridge route loop before adding a second petition, day, or companion system.

Reason: validate whether Morning Court itself is compelling.

## 2026-07-16: Increase Interaction Density In-World

Decision: add physical workbench actions inside the existing scene, not disconnected minigames.

Current example: open Mu Ping's ledger, fit Kai Ning's support beam, then place a grain cart or audit flag.

Reason: the player should participate in forming a judgment, not only read dialogue and choose A/B.

## 2026-07-16: Establish Project Brain

Decision: `.memory/` is the compact cross-tool context; `docs/` remains the detailed source.

Reason: reduce repeated context tokens while preserving stable project identity and current state.

## 2026-07-16: Character & Narrative Lock

Decision: Sprint 2.4 locks official companion display names, voice rules, relationship address style, and localization philosophy in `docs/04_Character_Bible.md` and `docs/09_Localization_Bible.md`.

Current official names: Mu Ping / 慕平, Kai Ning / 恺宁, Qing Tang / 清棠, Cheng Xuan / 承玄, Hui Ying / 慧莹, Yuan Ning / 圆宁, Xiu Yuan / 修远.

Reason: future dialogue, CG, portraits, audio, animation, UI, and localization need a stable character foundation. The writing goal is for players to love the companions, not admire the prose.

## 2026-07-16: Canonical Naming Correction

Decision: the Sprint 2.4 canonical character registry is locked exactly as listed: Mu Ping / 慕平, Kai Ning / 恺宁, Qing Tang / 清棠, Cheng Xuan / 承玄, Hui Ying / 慧莹, Yuan Ning / 圆宁 with nickname 小圆, and Xiu Yuan / 修远.

Reason: prior Sprint 2.4 implementation substituted several names. Future work must not infer, swap, optimize, or respell approved display names.
