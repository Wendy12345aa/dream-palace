# Sprint 1: Morning Court Vertical Slice

## Goal

Make the first minute of Dream Palace playable.

The player should be able to enter the Morning Court, hear MP's first report, make one meaningful decision, and see the kingdom react.

Sprint 1 is the bridge from documentation to playable prototype.

---

## Sprint Promise

Do not build the whole game.

Do not build MMO systems.

Do not build a full economy.

Do not add real AI yet.

Build one complete emotional loop:

Opening

-> Morning Court

-> MP report

-> first decision

-> companion reaction

-> visible kingdom change

---

## Non-Goals

The following are intentionally out of scope for Sprint 1:

- full seven-companion court
- combat
- exploration map
- live AI dialogue
- backend services
- save/load system
- production art
- animation polish
- audio polish
- complete Demo Bible runtime

Sprint 1 proves direction, not scale.

---

## Required Deliverables

1. `web-demo/README.md` explains how to open the prototype and what it is meant to prove.
2. `web-demo/index.html` loads the first Morning Court prototype.
3. `web-demo/src/demoData.js` stores scripted dialogue, choices, companion data, and kingdom state.
4. `web-demo/src/main.js` drives the prototype state machine.
5. `web-demo/src/styles.css` establishes the first UI direction: minimal HUD, character-owned interface, warm court atmosphere.
6. The prototype includes one complete decision and consequence chain.

---

## Critical Path

### Step 1 - Establish The Court

- Show a warm Morning Court scene.
- Show the throne as present but not visually defined as a fixed protagonist.
- Show MP as the first active companion.
- Keep the HUD minimal.

### Step 2 - MP First Report

- MP reports a village grain shortage.
- The report should describe people first and numbers second.
- The player should feel responsibility, not spreadsheet pressure.

### Step 3 - First Decision

Offer two choices:

1. Release emergency grain reserves.
2. Preserve the reserves and audit the shortage first.

Neither choice should be perfect.

### Step 4 - Companion Reactions

- MP responds emotionally to the decision.
- Tab comments on risk, procedure, or accountability.
- Kel becomes visible as the path toward construction and hope.

### Step 5 - Visible Consequence

The village/court state changes immediately.

Examples:

- resource values change
- a bridge or supply route begins repair
- citizens arrive at court
- court atmosphere shifts
- companion trust changes

---

## Prototype State Model

The first prototype only needs a tiny state model.

```text
kingdom = {
  grain,
  gold,
  trust,
  stability,
  villageStatus,
  bridgeStatus
}

companions = {
  mp,
  tab,
  kel
}

scene = {
  currentBeat,
  selectedChoice,
  consequenceShown
}
```

Keep the state readable.

The goal is design clarity, not system cleverness.

---

## Dialogue Rules

Dialogue should be scripted JSON-style data for now.

No AI generation in Sprint 1.

Each line should include:

- speaker
- emotion
- text
- optional companion reaction
- optional state update

This keeps the prototype deterministic and easy to revise.

---

## UI Rules

Follow the UI / UX Bible.

- Morning Court is the home screen.
- MP owns the treasury interface.
- Tab owns audit and risk language.
- Kel owns construction hope.
- Avoid traditional menu grids.
- Avoid permanent panels unless they feel like in-world objects.
- Numbers should support emotion, not replace it.

---

## Definition of Done

Sprint 1 is complete when a player can:

- open the web prototype
- understand they are entering the Morning Court
- receive MP's first report
- make one decision
- see MP, Tab, and Kel respond
- see at least one visible kingdom state change
- understand why they might want to return tomorrow

---

## Review Questions

After Sprint 1, ask:

- Did the prototype feel like Dream Palace within the first minute?
- Did the player interact through companions rather than menus?
- Did the decision create an emotional consequence?
- Did the kingdom visibly react?
- Did the prototype avoid looking like an admin dashboard?

If the answer is no, improve the Morning Court before adding more systems.

---

> Build one meaningful morning before building the whole kingdom.
