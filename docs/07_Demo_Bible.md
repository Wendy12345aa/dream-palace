# Chapter 7 — Demo Bible

> *A great demo should leave players wanting one more morning.*

---

# Purpose

The Vision defines why Dream Palace exists.

The Demo defines why players should believe in it.

This document describes the smallest playable experience that demonstrates the identity of Dream Palace.

The demo is not a shortened version of the full game.

It is a carefully selected first impression.

Every minute should reinforce the project's core pillars.

---

# Demo Philosophy

The purpose of the demo is not to show every system.

The purpose is to convince players that Dream Palace is different.

Players should leave the demo saying:

> "I want to return tomorrow."

Not:

> "I have already seen everything."

The demo should prioritize emotional impact over feature quantity.

---

# Demo Title

**Dream Palace: The First Morning Court**

This demo represents the player's first meaningful day on the throne.

It should feel like the beginning of a relationship with the kingdom, not a tutorial level.

---

# Target Runtime

The target runtime is **15-20 minutes**.

This is long enough to create emotional attachment and short enough to respect players trying the demo for the first time.

The demo should reach the Morning Court quickly.

If the player has not experienced the Morning Court within the first five minutes, the demo is moving too slowly.

---

# Demo Promise

The demo must prove three things:

1. Dream Palace is character-driven.

2. The kingdom visibly reacts to player decisions.

3. Players want to return for another morning.

If the demo proves these three things, it succeeds.

---

# Demo Scope

The demo should be a vertical slice of the Dream Palace experience.

It should prove quality, not quantity.

## Included

- Morning Court
- Palace hub
- 3-4 active companions
- One village or kingdom location
- One first crisis
- One major player decision
- One visible kingdom consequence
- One evening reflection
- One tomorrow teaser

## Excluded

- Full MMORPG systems
- Guild warfare
- Large-scale battles
- Nation expansion
- PvP
- Romance systems
- Late-game economy
- Full technology tree
- One hundred cities
- All seven companions as fully active systems

Excluded systems are not removed from the full game vision.

They are intentionally withheld so the demo can focus on identity.

---

# First-Day Companion Scope

The demo should not give all seven companions equal weight immediately.

Players should be allowed to learn the court gradually.

Recommended active demo companions:

## MP

Represents responsibility, treasury, and the survival of the kingdom.

MP should be one of the first voices the player trusts.

## Tab

Represents standards, caution, and administrative pressure.

Tab gives the first decision real consequences.

## Kel

Represents hope, construction, and visible progress.

Kel helps turn the player's decision into a physical change in the kingdom.

## CX

Optional late-demo appearance.

CX should introduce mystery and tomorrow's hook rather than dominate the first day.

In the current web demo, CX is an unknown presence. His canonical identity remains internal; player-facing labels, log entries, teaser copy, and accessibility text should show only ??? / ？？？ until a later formal reveal.

The remaining companions can be referenced, seen in the environment, or teased, but they do not need full gameplay presence in the first demo.

---

# Companion Entrance & Reveal

Sprint 2.5 adds short first-introduction reveals for the visible Morning Court companions without rewriting the Northbridge storyline.

Core sequence:

```text
Meaningful companion action or line

↓

Short reveal card

↓

Return to normal dialogue
```

The reveal card confirms identity. It does not replace characterization. Sprint 2.6 reveal cards include restrained portrait crops for Mu Ping, Qing Tang, and Kai Ning so the card feels like a companion introduction, not a text-only chapter card.

Current reveal timing:

- Mu Ping reveals after she explains the Northbridge ledger situation.
- Qing Tang reveals after her first clear risk and standards judgment.
- Kai Ning reveals after he offers timber, crew, and a practical temporary crossing.

Reveal behavior:

- each visible reveal plays once per normal run
- reveal state is independent from dialogue replay and route replay
- normal continue input may complete the reveal without skipping the next dialogue line
- reduced motion keeps the same copy and order with simplified motion
- reveal copy is localized data, not rendering logic
- reveal and dialogue portrait assets, crop positions, and scales are configured per character
- normal dialogue shows only one compact portrait token for the current speaker

The CX teaser is not a formal reveal card. It may show only ??? / ？？？ and an obscured silhouette, and should preserve mystery.

---

# Demo Structure

The demo follows a compact emotional arc.

Opening CG

↓

Wake Up

↓

Walk Into Morning Court

↓

Meet MP

↓

Meet Tab

↓

First Decision

↓

Walk Around Palace

↓

Meet Kel

↓

Small Crisis

↓

First Investigation or Report

↓

Decision

↓

Visible Kingdom Change

↓

Evening Reflection

↓

Tomorrow Begins

↓

Demo Ends

---

# First Five Minutes

The first five minutes should establish the identity of the game.

## Minute 1 — Opening

The player hears urgent voices before seeing the throne.

The court is already alive.

The world does not begin because the player clicked Start.

## Minute 2 — Arrival

The player enters the Morning Court.

The throne is present, but the player has no fixed face or body.

The court turns toward the player.

## Minute 3 — MP Reports

MP explains the current kingdom situation through human stakes rather than pure numbers.

The player learns that resources affect people.

## Minute 4 — First Decision

The player makes a simple but meaningful choice.

The choice should involve trade-offs.

## Minute 5 — Immediate Reaction

Companions react.

The court atmosphere changes.

The player understands that decisions are remembered.

---

# Emotional Curve

The demo should follow this emotional rhythm:

Curiosity

↓

Comfort

↓

Responsibility

↓

Pressure

↓

Hope

↓

Belonging

↓

Tomorrow

The ending should not feel like a conclusion.

It should feel like the kingdom is about to continue.

---

# Core Demo Loop

The demo should express the full game loop in miniature.

Morning Court

↓

Report

↓

Companion disagreement

↓

Player decision

↓

Companion action

↓

Visible world change

↓

Reflection

↓

Tomorrow hook

This loop is the heart of Dream Palace.

---

# First Crisis

The crisis should be grounded and believable.

It should not begin with world-ending stakes.

Possible crisis examples:

- A northern village has a grain shortage.
- A bridge repair is delayed before harvest.
- A storehouse audit reveals missing supplies.
- A construction plan cannot proceed without reallocating resources.
- Citizens are anxious after a rumor spreads.

The crisis should involve at least two valid responses.

There should be no perfect answer.

---

# First Decision

The first major decision should teach the player what Dream Palace is.

It should include:

- incomplete information
- companion disagreement
- resource pressure
- visible outcome
- emotional consequence

Example:

A village needs urgent support before harvest.

MP recommends protecting grain reserves.

Tab warns that the current logistics plan is flawed.

Kel proposes a fast repair that may strain materials.

The player chooses what to prioritize.

The kingdom responds.

---

# Visible Consequence

The demo must show the result of the player's decision.

Do not rely only on text.

Examples:

- A bridge begins construction.
- A market becomes quieter or busier.
- A village receives lanterns and supplies.
- Court documents pile up or clear out.
- Citizens appear near the palace gate.
- A companion's expression or posture changes.

Players should see that the kingdom remembers.

---

# Palace Hub

The palace hub should be small but alive.

It should include:

- Morning Court
- Treasury area or ledger table
- Corridor or garden transition
- Workshop corner for Kel
- One exterior view of the kingdom

The palace is not a menu.

It is the player's first home.

---

# Interaction Model

The demo should avoid traditional menu-first navigation.

Players should interact through people and places.

Instead of:

Menu

↓

Treasury

↓

Food

Use:

MP reports shortage

↓

Player approaches MP

↓

Ledger opens in-world

↓

Decision appears

Context should always come before interface.

---

# Demo Ending

The demo should not end with a simple "To Be Continued" screen.

It should end with a new morning beginning.

Recommended ending:

The next Morning Court begins.

The court feels slightly changed because of the player's first decision.

A new seat, document, or shadow suggests another companion or system is about to enter the story.

MP says:

> "Your Highness, yesterday was only the beginning."

Tab adds a restrained warning.

Kel reacts with cautious optimism.

A door opens.

The screen cuts before the new arrival is fully revealed.

Dream Palace appears.

Wishlist prompt appears after the emotional beat, not before it.

---

# Success Criteria

The demo succeeds if players remember:

- the Morning Court
- MP
- Tab
- Kel
- the first decision
- the visible kingdom change
- the feeling of returning tomorrow

The demo fails if players only remember:

- menus
- resource numbers
- generic fantasy visuals
- unclear systems
- tutorial text

Players should remember people before mechanics.

---

# Vertical Slice Rule

The demo should prove quality.

Not quantity.

Every included feature should be representative of the final game.

Every excluded feature should be intentionally excluded.

Players should understand what Dream Palace is.

They should not wonder where everything else is.

---

# Required Assets

The first playable demo should keep the asset list small.

## Characters

- MP: neutral, concerned, relieved
- Tab: neutral, strict, quietly approving
- Kel: neutral, focused, hopeful
- CX: optional teaser pose or silhouette

## Backgrounds

- Morning Court
- Palace corridor or garden
- Treasury or ledger table
- Workshop corner
- Village or kingdom exterior
- Evening palace view

## UI / UX

- Dialogue presentation
- Choice interface
- Companion notification
- Resource display through MP's ledger
- Visible consequence screen or scene transition
- Wishlist ending card

## Motion

- Character idle motion or sprite transitions
- Ledger opening
- Document stamping
- Blueprint unfolding
- Lighting shift from morning to evening
- Door opening for tomorrow teaser

---

# Things The Demo Must Avoid

Avoid:

- Showing all systems at once
- Starting with a long lore dump
- Overloading players with seven full companion introductions
- Opening with combat
- Treating the palace like a static menu screen
- Ending with only a generic thank-you screen
- Turning the demo into a checklist of future features

The demo should feel curated.

Not compressed.

---

# Demo Test

Ask:

Does the player understand the throne within five minutes?

Does the player care about at least one companion by the end?

Does one decision visibly change the kingdom?

Does the ending make the player want another morning?

If the answer is no, the demo is not focused enough.

---

# Final Reminder

The demo is not about proving that Dream Palace has many systems.

It is about proving that Dream Palace has a heart.

Players should return because they miss the kingdom.

Not because they fear missing rewards.

---

> **The first demo should not show the whole kingdom.**
>
> **It should make players believe the kingdom is alive.**
