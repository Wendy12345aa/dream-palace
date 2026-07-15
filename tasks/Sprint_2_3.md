# Sprint 2.3: Public Playtest Readiness

## Status

Complete

## Goal

Turn the complete Northbridge internal alpha into a focused build that can be handed to an unfamiliar player without explanation.

This sprint does not expand the world. It improves clarity, pacing, replayability, and production asset quality around the first Morning Court.

## Experience Target

An unfamiliar player should be able to:

- understand that they are the ruler entering an active court
- remember MP, Tab, and Kel by role and personality
- understand the trade-off in the Northbridge petition
- see the Kingdom Table answer their decision immediately
- reach the CX hook without interaction confusion
- replay the other decision without refreshing the browser

## Scope

- replace the character-baked Kingdom Table concept with a character-free Northbridge table background
- preserve the existing release-grain and audit-first consequence animation layers
- replace Tab's masked preview with an approved transparent production portrait
- add paced dialogue reveal
- make the first advance input reveal the full line and the next input continue
- add a compact dialogue log
- add end-of-demo actions for replaying the other choice, restarting, and returning to the title
- update the demo documentation to match the current build
- validate both routes in Chinese and English on desktop and mobile

## Non-Goals

- a second petition or playable day
- additional active companions
- facial expression systems
- voice acting
- full save/load
- Auto mode
- Live2D, Spine, or 3D
- real AI dialogue
- expanding the demo with filler dialogue to reach a target duration

## Definition of Done

- [x] The Morning Court uses a character-free Kingdom Table background.
- [x] The release-grain and audit-first results remain immediately readable.
- [x] Tab uses a clean transparent production portrait.
- [x] Dialogue appears at a readable pace.
- [x] Advance input reveals a line before moving to the next line.
- [x] A player can review the current session's dialogue.
- [x] The ending offers replay-other-choice, restart, and return-to-title actions.
- [x] Both routes complete in Chinese and English.
- [x] Desktop and mobile layouts have no overflow or incoherent overlap.
- [x] The browser console reports no demo runtime errors.
- [x] A 3-5 person external playtest is ready to begin.

## Playtest Feedback Pass 1

Feedback received on 2026-07-15:

- the eight-shot opening advanced too quickly to follow the images and captions
- the Chinese copy felt too literary for quick, comfortable reading

Resolved in the current build:

- each opening shot now remains fully visible for 4.8-5.2 seconds, bringing the sequence to roughly 43 seconds while keeping the skip control
- opening captions, court dialogue, choices, state labels, consequences, and endings now use plain modern Chinese
- setting-specific titles such as `殿下` remain, but the dialogue no longer depends on classical or bureaucratic vocabulary

Visual feedback received from the mobile result screen:

- the settled Kingdom Table result covered the active companion's face
- the companion portrait was too large for the narrow composition
- the mobile header repeated scene information and the speaker token sat too low in the dialogue frame

Resolved in the current build:

- the companion stage now fades out while the full result animation plays
- the settled result collapses into a compact summary above the restored companion portrait
- mobile portraits use a smaller full-body stage with a stable head-to-dialogue gap
- duplicate mobile scene-time text is hidden and the speaker token aligns with the speaker heading
- the corrected release-grain result was validated at 515 x 677 with no document overflow or console errors

Character staging feedback:

- portrait source files used different transparent margins and body proportions, making some companions appear much taller or smaller than others

Resolved in the current build:

- each companion now has an independent portrait scale and foot-line adjustment instead of sharing one uncorrected image box
- MP remains slightly taller, Kel remains subtly shorter, and Tab and CX keep their intended mature, slender silhouettes
- desktop and mobile use separate portrait calibration so the normalized cast does not crowd narrow screens

## Playtest Questions

- Who did you remember after the demo?
- What did MP, Tab, and Kel each want?
- What changed after your decision?
- Did any input or screen leave you unsure what to do?
- Did the CX ending make you want to see the next morning?

---

> Polish the first promise before making a second one.
