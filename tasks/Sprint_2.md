# Sprint 2: Northbridge Morning Court Vertical Slice

## Goal

Expand the first-minute web prototype into a complete 10-15 minute playable vertical slice centered on the Northbridge petition.

Sprint 2 should prove that Dream Palace can feel like a game, not a dashboard.

The player should experience:

Opening CG

-> Morning Court

-> Kingdom Table

-> MP, Tab, and Kel discussion

-> first meaningful decision

-> immediate visible consequence

-> evening reflection

-> CX tomorrow hook

---

## Sprint Promise

Do not add more design bibles.

Do not build the full game.

Do not add real AI.

Do not build MMO systems.

Do not build a full economy.

Build one complete emotional gameplay loop:

The player enters court, understands the problem, makes a decision, sees the kingdom change, and wants to return tomorrow.

---

## Required Player Experience

By the end of Sprint 2, a first-time player should be able to say:

- I know I am the ruler.
- I understand what Northbridge needs.
- I remember MP, Tab, and Kel.
- I made a difficult decision.
- I saw the Kingdom Table react.
- I understand that my choice changed the world.
- I want to know what happens tomorrow.

---

## Critical Flow

### 1. Opening CG Player

Use the existing opening CG assets as a short cinematic sequence.

Required behavior:

- show CG 01-08 in order
- fade between shots
- apply subtle pan or zoom
- allow Skip
- automatically enter Morning Court

The opening should feel cinematic, but it should not become a long video project.

---

### 2. Scene-Based Morning Court

Replace the current dashboard-like layout with a scene-first layout.

Current prototype pattern to move away from:

- permanent kingdom state card
- companion cards as UI panels
- central placeholder circle
- generic dialogue card
- visible court memory panel

Target direction:

- full-screen court atmosphere
- characters and Kingdom Table as the visual focus
- dialogue frame layered over the scene
- choices appear only when needed
- resource numbers are hidden until MP reveals them

The player should feel present in court, not seated in front of an admin console.

---

### 3. Kingdom Table v1

Implement the first version of the Kingdom Table.

This does not need 3D.

Use layered 2D presentation:

- base Kingdom Table visual
- Northbridge focus area
- damaged bridge state
- repair-start state
- repaired or stabilized bridge state
- MP ledger marker
- Tab audit marker
- Kel bridge model marker

Required interaction:

1. Start with the table establishing shot.
2. Focus camera or layout on Northbridge.
3. Let MP explain the petition.
4. Let Tab and Kel add their markers.
5. After player choice, update the table immediately.

The table is not a map menu.

It is the court's shared language.

---

### 4. Companion Presentation

Use MP, Tab, and Kel as the active first-day companions.

CX appears only as a teaser or late-demo hook.

Required roles:

- MP frames the problem as responsibility and cost.
- Tab frames the risk and procedure.
- Kel frames the possible repair and hope.
- CX creates the next-day mystery, not a full investigation system.

Required presentation:

- active speaker is visually emphasized
- inactive companions remain present but secondary
- companion reactions follow the player's decision
- no character should feel like a static menu card

---

### 5. Dialogue and Choice Polish

Keep dialogue scripted.

Do not use AI generation in Sprint 2.

Required improvements:

- support scene beats
- support speaker changes
- support choices
- support follow-up lines
- support consequence lines
- support typewriter or paced text reveal if feasible
- connect dialogue to visible state changes

Dialogue should be written around companion conflict, not exposition.

---

### 6. Visible Consequence

The first decision must create an immediate visible response.

Examples:

If the player releases emergency grain:

- MP opens the reserve ledger
- grain carts appear on the table or result scene
- Tab marks conditional approval
- Kel begins temporary repair planning

If the player audits first:

- Tab places an audit marker
- Northbridge shows waiting pressure
- MP warns about public trust
- Kel still proposes a temporary frame

The consequence must be visual before it is numerical.

---

### 7. Evening Reflection

After the decision and visible consequence, transition to evening.

Purpose:

- let the player feel the day changed something
- summarize the emotional result
- show companion reactions
- prepare the next day

This should not be a score screen.

It should feel like the court breathing after its first decision.

---

### 8. Tomorrow Hook

End with a clear reason to continue.

CX should appear as:

- a silhouette
- a message
- a door opening
- a quiet line from the edge of court

CX should not become a full playable system in Sprint 2.

The ending should suggest:

Northbridge was only the first test.

---

## Minimal Asset Requirements

### Already Useful

- Opening CG 01-08
- MP animated or portrait assets
- Kel animated or portrait assets
- current scripted dialogue/state prototype

### Still Needed Or To Confirm

- Kingdom Table base visual
- Northbridge table layers
- Tab portrait or placeholder
- dialogue frame integration
- simple consequence visuals
- optional court background
- optional CX silhouette

Use placeholders only if they preserve the final layout and interaction intent.

Do not design around placeholders.

---

## Technical Scope

Keep the web demo simple.

Recommended approach:

- continue zero-dependency HTML/CSS/JS unless the implementation becomes painful
- refactor into clear scene states
- keep dialogue data in `demoData.js`
- keep state deterministic
- use CSS transitions for camera, fades, and table changes

No backend.

No AI.

No build system required unless needed later.

---

## Non-Goals

Sprint 2 does not include:

- full seven-companion court
- full exploration map
- combat
- MMO
- real AI dialogue
- complex economy
- save/load beyond optional localStorage
- complete accessibility pass
- full audio production
- 3D Kingdom Table
- Live2D or Spine integration

Do not expand scope to impress.

Make the first emotional loop work.

---

## Definition of Done

Sprint 2 is complete when a player can:

1. Open the web demo.
2. Watch or skip the opening sequence.
3. Enter the Morning Court.
4. See the Kingdom Table.
5. Understand the Northbridge petition.
6. Hear MP, Tab, and Kel disagree or add different perspectives.
7. Make one meaningful decision.
8. See the table or world change immediately.
9. Reach an evening reflection.
10. See a CX tomorrow hook.
11. Understand why they might want to continue.

---

## Review Questions

After Sprint 2, ask:

- Did the first five minutes feel like Dream Palace?
- Did the UI stop feeling like a dashboard?
- Did the player remember companions before numbers?
- Did the player understand the decision trade-off?
- Did the visible consequence feel satisfying?
- Did the ending create curiosity for tomorrow?

If the answer is no, improve the first Morning Court before adding new systems.

---

> Build one morning that players want to remember.
