# Chapter 4 — Character Bible

> *The kingdom exists because of the people who choose to stand beside the throne.*

---

# Purpose

The World Bible defines the kingdom.

The Gameplay Bible defines the player's daily journey.

The Character Bible defines the seven companions who give the kingdom its heart.

These companions are not quest givers.

They are not generic menu owners.

They are trusted advisors, system owners, emotional anchors, and living participants in the Morning Court.

Every companion should grow together with the player and the kingdom.

---

# Character & Narrative Lock

> **Golden Rule: Players should fall in love with the companions, not admire the writing.**

Sprint 2.4 locks the official companion names, identity, voice, and relationship style. Internal IDs remain unchanged for code and asset continuity. Display names below are the official in-game names for UI, dialogue, CG briefs, audio scripts, and localization. Do not infer, substitute, optimize, or replace display names.

## Official Companion Identity Lock

| Internal ID | Chinese Display Name | English Display Name | Title | Nickname | Personality Summary | Core Motivation | Speaking Style | Emotional Keywords |
|---|---|---|---|---|---|---|---|---|
| `mp` | 慕平 | Mu Ping | Treasury Advisor | 慕平姐, Mu | Warm, mature, calm, practical, quietly protective | Keep the kingdom stable enough that no one is abandoned by a decision | Patient, composed, gently direct; explains cost without losing warmth | safety, trust, restraint, care |
| `kel` | 恺宁 | Kai Ning | Court Engineer | - | Earnest, direct, hopeful, hands-on, emotionally transparent | Build working answers that let people survive the decision | Short practical sentences; action first; honest hope | effort, repair, invention, reliability |
| `tab` | 清棠 | Qing Tang | Court Inspector | - | Precise, disciplined, principled, firm but not cruel | Protect people by refusing unsafe shortcuts | Concise verdicts; clear conditions; professional pressure | accountability, standards, restraint, approval |
| `cx` | 承玄 | Cheng Xuan | Shadow Investigator | - | Quiet, observant, dry, guarded, difficult to deceive | Reveal hidden causes before they become public disasters | Minimal words; controlled reveals; understated warning | suspense, truth, threat, uncertainty |
| `mika` | 慧莹 | Hui Ying | Cultural Designer | - | Gentle, imaginative, emotionally perceptive, tender | Help the kingdom remember beauty, grief, hope, and identity | Soft, visual, emotionally plain; image before argument | wonder, memory, healing, beauty |
| `vincey` | 圆宁 | Yuan Ning | Public Events Lead | 小圆 | Bright, energetic, persuasive, socially intelligent | Turn policy into public belief and emotional momentum | Fast, optimistic, action-first; playful but purposeful | morale, momentum, celebration, courage |
| `shian` | 修远 | Xiu Yuan | Strategic Planner | - | Measured, strategic, long-view focused, composed | Make choices fit a future the kingdom can actually sustain | Deliberate, structured, calm; trade-offs over slogans | perspective, structure, patience, future |

## Naming Lock

Dream Palace is an original Eastern fantasy kingdom, not historical China. Names should feel elegant, warm, pronounceable, and memorable. Avoid direct English transliterations, overly historical naming, television-drama naming, or ornamental fantasy names that slow recognition.

## Voice Lock

- Mu Ping comforts through clarity. She should never panic or reduce people to numbers.
- Kai Ning solves by building. He should sound like someone already reaching for the tools.
- Qing Tang protects through standards. She should be concise, never cruel for comedy.
- Cheng Xuan creates suspense through restraint. He should reveal, not lecture.
- Hui Ying makes emotional damage visible. She should be gentle without becoming vague.
- Yuan Ning moves public feeling. She should be energetic without becoming empty hype.
- Xiu Yuan gives the long view. He should stay human, not abstract.

For localization rules, dialogue rhythm, forbidden wording, and relationship address defaults, use `docs/09_Localization_Bible.md`.

## First Demo Reveal Rule

Characterization comes before identification. In the current Morning Court demo, Mu Ping, Qing Tang, and Kai Ning must each demonstrate their role through action or dialogue before a reveal card confirms their identity.

Reveal cards are confirmation moments only. They may contain the official display name, the demo reveal role, and one short thematic line. They must not include biography, relationship state, gameplay statistics, archive content, department exposition, or long personality descriptions.

Sprint 2.6 adds a restrained portrait or bust crop to each visible companion reveal card. The reveal portrait confirms identity; it must support the main scene portrait rather than compete with it. Normal dialogue may show one compact current-speaker portrait token, using the same identity visibility rules as speaker labels and the dialogue log.

Current approved reveal copy:

| Internal ID | Chinese Name | English Name | Chinese Role | English Role | Chinese Line | English Line |
|---|---|---|---|---|---|---|
| `mp` | 慕平 | Mu Ping | 司库顾问 | Treasury Advisor | 让每一个决定，都留有余地。 | Every decision needs room to endure. |
| `tab` | 清棠 | Qing Tang | 监察使 | Court Inspector | 标准不是阻碍，是保护。 | Standards are not obstacles. They are protection. |
| `kel` | 恺宁 | Kai Ning | 工造官 | Court Engineer | 没有完美方案，就先造出能用的。 | If perfection must wait, build what works. |

CX is the exception in the current demo. He remains internally `cx` / 承玄 / Cheng Xuan, but player-facing UI must show only ??? / ？？？ until a later formal reveal. Seeing the current teaser does not count as revealing his identity. Any current-demo CX portrait treatment must be an obscured silhouette and must not expose his face, title, accessories, or identity through alt text.

---
# Character Philosophy

Dream Palace is built around companions.

Players should remember people before systems.

Every companion represents:

- a responsibility
- a perspective
- a gameplay system
- an emotional role
- a visual language
- a reason to return tomorrow

No companion exists only to provide information.

If a character can be replaced by a button, the character is not designed deeply enough.

---

# Companion Design Principles

## Rule 1 — Every Companion Owns Gameplay

Each companion should own part of the player's daily experience.

They do not own menus.

They own responsibilities.

---

## Rule 2 — Every Companion Has A Point Of View

Companions should disagree sometimes.

Agreement is efficient, but disagreement creates personality.

The court should feel alive because its members think differently.

---

## Rule 3 — Every Companion Has Strengths And Flaws

No companion should be perfect.

Strengths make them useful.

Flaws make them human.

---

## Rule 4 — Every Companion Changes

Static characters feel artificial.

Companions should evolve through trust, responsibility, mistakes, success, and the kingdom's growth.

---

## Rule 5 — Every Companion Remembers

Companions should remember important player decisions.

They should reference past successes, failures, arguments, risks, and sacrifices.

---

## Rule 6 — Every Companion Can Surprise The Player

A companion should occasionally act outside their usual pattern when the story, trust level, or crisis demands it.

Surprise makes characters feel alive.

---

# Companion Structure

Each companion should be defined through the same structure.

## Identity

Who are they?

## Kingdom Responsibility

Which part of the kingdom do they protect or manage?

## Gameplay Ownership

Which systems do they represent?

## Emotional Role

What should the player feel when speaking with them?

## Leadership Dynamic

How do they support the player?

How do they challenge the player?

## Personality

Core personality, strengths, flaws, and habits.

## Visual Language

Color, silhouette, clothing, props, motion, and expression.

## Dialogue Style

How do they speak?

What words, rhythm, and tone belong to them?

## Camera Language

How should the camera treat them?

## Joining The Court

When do they officially join the Morning Court?

What changes after they arrive?

Which gameplay systems become available?

## Relationship Growth

How does trust evolve from early game to late game?

## Crisis Behaviour

How do they react under pressure?

## Signature Moment

If players remember only one scene with this companion, what should it be?

---

# Joining The Court Philosophy

The seven companions should not all become equally important at the same time.

The player should feel that they are slowly building a real court.

Each companion's arrival should change the Morning Court.

Each arrival should unlock:

- a new voice
- a new conflict
- a new system
- a new emotional texture
- a new way to understand the kingdom

The court should feel more complete over time.

This makes companion growth more meaningful than simply presenting seven characters on day one.

---

# Companion Roster

| Character | Kingdom Responsibility | Gameplay Ownership | Emotional Role |
|-----------|------------------------|--------------------|----------------|
| MP | Treasury and resources | Budget, allocation, stability | Reassurance and pressure |
| Kel | Technology and construction | Research, engineering, infrastructure | Effort, invention, vulnerability |
| Tab | Quality and administration | Audits, standards, risk control | Accountability and restraint |
| CX | Investigation and intelligence | Secrets, threats, hidden causes | Suspense and warning |
| Mika | Art and culture | Morale, identity, visual development | Wonder and tenderness |
| Vincey | Events and public mood | Festivals, announcements, public support | Energy and emotional release |
| Shian | Planning and strategy | Logistics, expansion, long-term structure | Clarity and perspective |

---

# 01 — MP / 慕平 / Mu Ping

## Identity

MP is the senior treasury advisor and one of the earliest pillars of the court.

She understands that a kingdom survives through careful allocation, not dramatic speeches.

She is calm, mature, reliable, and quietly protective.

## Kingdom Responsibility

Treasury, tax, budget, resource allocation, emergency reserves, and economic stability.

## Gameplay Ownership

- treasury reports
- budget approval
- construction funding
- food reserves
- crisis spending
- economic warnings
- resource trade-offs

## Emotional Role

MP should make the player feel that the kingdom is real because every decision costs something.

She brings warmth, responsibility, and pressure.

When MP relaxes, the player should feel that the kingdom is safe for now.

## Leadership Dynamic

MP supports the player by making complex resource problems understandable.

She challenges the player by refusing reckless spending and reminding them of consequences.

## Personality

Strengths:

- calm under pressure
- reliable
- emotionally steady
- practical

Flaws:

- may become too cautious
- may prioritize stability over ambition
- may hide stress to protect others

Habits:

- reviews ledgers before speaking
- pauses before approving large spending
- drinks tea when thinking

## Visual Language

Representative color: royal gold.

Props:

- ledger
- abacus
- treasury seal
- budget scrolls

Motion:

- opens books
- writes notes
- sets a seal on proposals
- looks out toward the city when worried

## Dialogue Style

Formal, composed, and gently direct.

Typical phrasing:

> Your Majesty, the treasury can support this.

> I recommend caution.

> If we spend here, we must delay something elsewhere.

## Camera Language

Stable, warm, and slow.

Use gentle push-ins, morning light, desks, books, and gold-tinted highlights.

MP scenes should feel grounded.

## Joining The Court

MP should be present from the beginning.

Her presence establishes that Dream Palace is about responsibility, not power fantasy.

Gameplay unlocked:

- treasury overview
- first budget decision
- resource consequence feedback

## Relationship Growth

Early Game:

MP treats the player respectfully but cautiously.

Mid Game:

She begins to trust the player's priorities and shares more honest concerns.

Late Game:

She becomes one of the player's strongest emotional anchors, willing to support bold decisions if trust has been earned.

## Crisis Behaviour

MP becomes quieter during disaster.

She focuses on numbers, reserves, and survivability.

When frightened, she becomes more precise, not louder.

## Signature Moment

After a difficult season, MP closes the treasury ledger and says:

> This year, no one will go hungry.

The player should feel that a number became a human victory.

---

# 02 — Tab / 清棠 / Qing Tang

## Identity

Tab is the court inspector responsible for standards, quality, risk, and accountability.

She is serious, precise, and often the first person to say no.

Her rejection is not cruelty.

It is protection.

## Kingdom Responsibility

Administration, audits, quality control, public safety, procedural integrity, and approval gates.

## Gameplay Ownership

- risk review
- project approval
- policy audits
- quality checks
- exploit detection
- failure prevention
- launch readiness

## Emotional Role

Tab should make the player feel accountable.

She is the companion who prevents easy answers from becoming careless decisions.

Her approval should feel earned.

## Leadership Dynamic

Tab supports the player by catching problems before they harm the kingdom.

She challenges the player by questioning shortcuts, emotional decisions, and untested plans.

## Personality

Strengths:

- disciplined
- observant
- principled
- dependable

Flaws:

- can seem cold
- struggles to praise openly
- may over-focus on flaws

Habits:

- marks documents aggressively
- stamps rejected proposals
- folds arms when unimpressed
- notices tiny inconsistencies

## Visual Language

Representative color: azure blue.

Props:

- inspection scrolls
- approval seal
- red correction marks
- official tablet

Motion:

- flips pages quickly
- places documents onto the table
- points at errors
- stamps decisions with force

## Dialogue Style

Short, precise, and dry.

Typical phrasing:

> Not approved.

> There are three unresolved risks.

> This can pass, but only after revision.

## Camera Language

Clean, structured, and controlled.

Use document close-ups, seals, hard cuts, and still framing.

Tab scenes should feel sharp and decisive.

## Joining The Court

Tab should join very early, either from the beginning or immediately after the first failed or risky decision.

Her arrival teaches the player that leadership requires accountability.

Gameplay unlocked:

- approval checks
- risk reports
- policy review

## Relationship Growth

Early Game:

Tab doubts whether the player understands responsibility.

Mid Game:

She begins to explain risks instead of only rejecting proposals.

Late Game:

Her rare praise becomes one of the strongest emotional rewards in the game.

## Crisis Behaviour

Tab becomes extremely focused.

She cuts through panic and identifies what must be fixed first.

She may clash with Vincey or Kel when morale or invention moves faster than safety.

## Signature Moment

After many rejected attempts, Tab reviews a major project, pauses, and says:

> This time, approved.

The player should feel that trust was earned through effort.

---

# 03 — Kel / 恺宁 / Kai Ning

## Identity

Kel is the engineer and builder who turns plans into functioning systems.

He is hardworking, inventive, occasionally scattered, and more emotionally transparent than he realizes.

## Kingdom Responsibility

Technology, construction, infrastructure, mechanical systems, automation, and practical implementation.

## Gameplay Ownership

- research
- building projects
- infrastructure upgrades
- engineering prototypes
- timers and project completion
- technology consequences

## Emotional Role

Kel should make the player feel that effort has a face.

When something is built, it should feel like Kel worked for it.

Not like a menu completed a progress bar.

## Leadership Dynamic

Kel supports the player by making difficult projects possible.

He challenges the player by requiring materials, time, iteration, and review.

## Personality

Strengths:

- sincere
- hardworking
- inventive
- resilient

Flaws:

- may overpromise
- can miss risks when excited
- sometimes needs others to slow him down

Habits:

- carries tools
- sketches while listening
- forgets to sleep during major projects
- reacts honestly when plans fail

## Visual Language

Representative color: emerald green.

Props:

- tool kit
- mechanical box
- blueprint scraps
- prototype models

Motion:

- repairs devices
- adjusts tiny parts
- scratches his head when confused
- lights up when an invention works

## Dialogue Style

Plain, earnest, slightly modern compared with the rest of the court.

Typical phrasing:

> I can build it.

> I need more materials.

> It works. Mostly.

> Okay. I will fix it.

## Camera Language

Start on the object, then reveal Kel.

Use moving parts, gears, small sparks, blueprints, and hands at work.

Kel scenes should feel constructive and kinetic.

## Joining The Court

Kel should join after the player makes their first major construction or technology decision.

His arrival should make the court feel more capable.

Gameplay unlocked:

- research projects
- construction timers
- technology upgrades
- prototype failures

## Relationship Growth

Early Game:

Kel wants to prove he is useful.

Mid Game:

He starts making suggestions before being asked.

Late Game:

He becomes confident enough to challenge impossible deadlines and protect his team.

## Crisis Behaviour

Kel works too hard during crises.

He may push himself beyond healthy limits unless the player or MP intervenes.

## Signature Moment

After working through the night, Kel activates a waterwheel that saves the harvest.

He says:

> It finally works.

The player should feel that infrastructure became hope.

---

# 04 — CX / 承玄 / Cheng Xuan

## Identity

CX is the shadow investigator and intelligence lead.

He sees what others miss and often arrives before the court understands there is a problem.

He is calm, mysterious, observant, and dryly amused by danger.

## Kingdom Responsibility

Intelligence, hidden threats, investigations, espionage, unusual events, and early warnings.

## Gameplay Ownership

- investigation reports
- hidden event discovery
- threat forecasting
- enemy movement
- corruption cases
- secret routes
- suspicious anomalies

## Emotional Role

CX should create suspense.

When CX speaks, players should feel that something unseen is moving beneath the surface.

## Leadership Dynamic

CX supports the player by revealing hidden truths.

He challenges the player by providing incomplete information and forcing decisions under uncertainty.

## Personality

Strengths:

- perceptive
- calm
- resourceful
- difficult to deceive

Flaws:

- secretive
- emotionally guarded
- may withhold information until he is certain

Habits:

- appears suddenly
- leans against pillars
- studies maps quietly
- smiles when others are nervous

## Visual Language

Representative color: dark purple.

Props:

- short blade
- intelligence scroll
- hidden map
- coded message

Motion:

- appears from shadow
- unfolds maps
- vanishes after reports
- turns before answering directly

## Dialogue Style

Quiet, sharp, and slightly teasing.

Typical phrasing:

> I found something.

> That is the official story.

> The truth is less convenient.

> I would not ignore this.

## Camera Language

Fast lateral movement, partial silhouettes, half-lit faces, rooftops, and map close-ups.

CX scenes should feel tense but controlled.

## Joining The Court

CX should join when the first visible crisis turns out to have a hidden cause.

His arrival teaches the player that not every problem is what it first appears to be.

Gameplay unlocked:

- investigation chains
- hidden information
- threat forecasting
- intelligence reports

## Relationship Growth

Early Game:

CX observes the player more than he trusts them.

Mid Game:

He begins sharing uncertain leads, not only confirmed facts.

Late Game:

He may risk himself for the kingdom because he trusts the player's judgment.

## Crisis Behaviour

CX becomes faster and more direct.

He may interrupt court when hidden danger becomes immediate.

He often conflicts with Tab over evidence and with Vincey over public messaging.

## Signature Moment

CX returns wounded but calm, places a map on the table, and says:

> They were not attacking the border. They were testing our response.

The player should feel the world suddenly become deeper.

---

# 05 — Mika / 慧莹 / Hui Ying

## Identity

Mika is the artist, cultural designer, and dreamer of the court.

She understands that a kingdom is not only fed and defended.

It must also have beauty, identity, memory, and hope.

## Kingdom Responsibility

Culture, art, morale, architecture identity, festivals visuals, public beauty, and emotional atmosphere.

## Gameplay Ownership

- morale improvements
- cultural projects
- city appearance changes
- public identity
- visual upgrades
- memorials
- celebration presentation

## Emotional Role

Mika should make the player feel wonder.

She turns practical progress into something the people can love.

## Leadership Dynamic

Mika supports the player by showing what the kingdom could become emotionally and visually.

She challenges the player by defending beauty even when other advisors prioritize survival.

## Personality

Strengths:

- imaginative
- gentle
- emotionally perceptive
- inspiring

Flaws:

- can seem impractical
- may be hurt by harsh criticism
- sometimes avoids conflict

Habits:

- sketches during meetings
- notices color, light, and atmosphere
- speaks softly when uncertain
- becomes excited when inspired

## Visual Language

Representative color: soft pink with light blue accents.

Props:

- brush
- scroll
- pigments
- charm-like artistic tools

Motion:

- paints in the air or on scrolls
- unfolds visual plans
- watches light through windows
- holds sketches close when nervous

## Dialogue Style

Gentle, poetic, and emotionally observant.

Typical phrasing:

> If we add light here, people may feel safer.

> The city should remember this day.

> Beauty is also a kind of strength.

## Camera Language

Use ink, scrolls, drifting petals, soft light, and visual reveals.

Mika scenes should feel graceful and emotionally open.

## Joining The Court

Mika should join after the kingdom survives its first practical crisis.

Her arrival teaches the player that survival alone is not enough.

Gameplay unlocked:

- morale projects
- cultural development
- city visual evolution
- public memory systems

## Relationship Growth

Early Game:

Mika is hesitant to argue for beauty.

Mid Game:

She learns to defend culture as a kingdom necessity.

Late Game:

She becomes the keeper of the kingdom's emotional memory.

## Crisis Behaviour

Mika focuses on people, fear, and morale.

She may notice emotional damage before others do.

She often pairs well with Vincey but may clash with Tab when safety concerns block public projects.

## Signature Moment

After rebuilding a ruined district, Mika reveals lanterns painted with citizens' names.

She says:

> I wanted them to know the kingdom remembered them.

The player should feel that culture can heal.

---

# 06 — Vincey / 圆宁 / Yuan Ning

## Identity

Vincey is the event planner, public voice, and morale spark of the court.

She understands crowds, ceremonies, announcements, public excitement, and emotional momentum.

She is energetic, clever, dramatic, and more strategic than she first appears.

## Kingdom Responsibility

Events, festivals, public announcements, ceremonies, diplomacy presentation, recruitment messaging, and public mood.

## Gameplay Ownership

- festivals
- public morale boosts
- announcements
- event chains
- diplomatic ceremonies
- recruitment campaigns
- crisis messaging

## Emotional Role

Vincey should make the court feel alive and unpredictable.

She gives players emotional release after heavy decisions.

## Leadership Dynamic

Vincey supports the player by turning policy into public belief.

She challenges the player by asking for resources, attention, and boldness.

## Personality

Strengths:

- energetic
- socially intelligent
- creative
- persuasive

Flaws:

- can over-sell ideas
- may underestimate logistics
- sometimes prioritizes excitement too quickly

Habits:

- enters quickly
- waves scrolls or announcements
- speaks with momentum
- pitches ideas before sitting down

## Visual Language

Representative color: orange.

Props:

- announcement scroll
- festival ribbons
- fireworks plan
- ceremonial fan or board

Motion:

- runs into scenes
- gestures widely
- spreads announcements on the table
- celebrates before others are ready

## Dialogue Style

Bright, fast, persuasive, and playful.

Typical phrasing:

> I have an idea.

> Hear me out.

> The people need something to believe in.

> This could be huge.

## Camera Language

Faster cuts, movement, banners, public spaces, colorful transitions, and lively framing.

Vincey scenes should feel active and social.

## Joining The Court

Vincey should join when the player first needs to influence public morale, not just manage internal systems.

Her arrival teaches the player that leadership must be communicated.

Gameplay unlocked:

- events
- public messaging
- festivals
- morale campaigns
- diplomatic presentation

## Relationship Growth

Early Game:

Vincey appears lighthearted and overly enthusiastic.

Mid Game:

The player sees that she understands public emotion deeply.

Late Game:

She becomes the court's bridge between policy and people.

## Crisis Behaviour

Vincey tries to prevent panic.

She may propose ceremonies, public speeches, or symbolic actions that others dismiss as secondary.

Her conflict with MP over budget should be frequent and useful.

## Signature Moment

During a dark winter, Vincey organizes a small lantern festival with almost no budget.

She says:

> If we cannot give them abundance yet, we can at least give them a reason to keep waiting for spring.

The player should feel that morale is not decoration.

---

# 07 — Shian / 修远 / Xiu Yuan

## Identity

Shian is the strategic planner and system architect of the court.

He sees the whole map, the long-term cost of short-term choices, and the hidden structure beneath kingdom decisions.

He is calm, intelligent, farsighted, and sometimes intimidatingly composed.

## Kingdom Responsibility

Planning, logistics, urban structure, expansion routes, schedules, strategic dependencies, and long-term development.

## Gameplay Ownership

- regional planning
- logistics
- road networks
- expansion strategy
- project dependencies
- milestone planning
- large-scale coordination

## Emotional Role

Shian should make the player feel that the kingdom has depth and direction.

He turns scattered actions into strategy.

## Leadership Dynamic

Shian supports the player by revealing the long-term shape of decisions.

He challenges the player by opposing short-term choices that damage the future.

## Personality

Strengths:

- strategic
- calm
- highly analytical
- dependable in planning

Flaws:

- can be distant
- may overvalue structure
- sometimes struggles with emotional urgency

Habits:

- unfolds maps before speaking
- arranges models on tables
- pauses before answering
- thinks several steps ahead

## Visual Language

Representative color: silver.

Props:

- architectural blueprint
- measuring ruler
- city model
- strategy map

Motion:

- places models carefully
- draws route lines
- adjusts plans after new information
- looks at the whole room before speaking

## Dialogue Style

Measured, strategic, and long-view focused.

Typical phrasing:

> In the long term...

> This solves today, but weakens next season.

> We should consider the route, not only the destination.

## Camera Language

Start wide, then move into detail.

Use maps, models, overhead composition, and deliberate camera movement.

Shian scenes should feel strategic and architectural.

## Joining The Court

Shian should join when isolated projects are no longer enough and the player must coordinate multiple systems.

His arrival turns the court from reaction into strategy.

Gameplay unlocked:

- long-term plans
- logistics networks
- regional development
- project dependencies
- expansion strategy

## Relationship Growth

Early Game:

Shian evaluates whether the player thinks beyond immediate wins.

Mid Game:

He starts offering multiple strategic paths instead of one recommended solution.

Late Game:

He trusts the player enough to discuss risks before they become visible to others.

## Crisis Behaviour

Shian becomes extremely clear and calm.

He identifies the chain reaction behind the crisis and what must be protected first.

He often mediates between Kel's implementation, MP's budget, and CX's intelligence.

## Signature Moment

Before a major national decision, Shian clears the table and reveals a full model of the kingdom's future paths.

He says:

> We are not choosing a road. We are choosing what kind of kingdom can exist at the end of it.

The player should feel the weight of leadership.

---

# Companion Relationship Matrix

The companions should feel like a working court, not isolated NPCs.

## MP And Kel

Budget versus ambition.

MP asks whether the kingdom can afford Kel's ideas.

Kel reminds MP that survival sometimes requires invention.

## Tab And Kel

Quality versus speed.

Kel builds quickly.

Tab slows him down.

Their conflict should be funny, useful, and emotionally familiar.

## Tab And CX

Evidence versus suspicion.

Tab wants proof.

CX acts on patterns before proof is complete.

## MP And Vincey

Stability versus morale.

MP protects reserves.

Vincey argues that people also need hope.

## Mika And Vincey

Emotion and presentation.

Mika creates meaning.

Vincey turns meaning into public momentum.

## Shian And Kel

Architecture and implementation.

Shian plans the system.

Kel makes it real.

## Shian And MP

Long-term plans versus current limits.

They should often agree in principle and disagree in timing.

## CX And Everyone

CX is trusted because he is useful, but not always comfortable.

He should know more than he says.

That tension keeps the court alert.

---

# Player Relationship Philosophy

The player should not become everyone's favorite immediately.

Trust is earned through decisions.

Respect is earned through consistency.

Closeness is earned through shared history.

The player should feel that the court slowly becomes theirs.

Not because they own it.

Because the companions choose to stand beside them.

---

# Character Test

Ask:

If this companion disappeared:

- would gameplay change?
- would the kingdom change?
- would the emotional experience change?
- would the Morning Court feel incomplete?

If the answer is no, the character is not important enough.

---

# Final Reminder

Players return for companions.

The kingdom gives them a place to meet.

The Morning Court gives them a reason to care.

---

> **Great kingdoms are remembered because great people chose to build them together.**
