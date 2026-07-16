# Chapter 9 - Localization Bible

> **Golden Rule: Players should fall in love with the companions, not admire the writing.**

Dream Palace is an original Eastern fantasy kingdom. Its language should feel warm, readable, and native in both Chinese and English. The writing is successful when players remember Mu Ping, Kai Ning, Qing Tang, Cheng Xuan, Hui Ying, Yuan Ning, and Xiu Yuan as people, not when they stop to admire the prose.

---

# Purpose

This bible locks the naming, localization, dialogue rhythm, and character voice standards for Dream Palace.

It applies to:

- in-game dialogue
- CG captions and opening text
- UI labels and tutorial copy
- audio scripts and voice direction
- portrait, animation, and expression briefs
- future story, event, and companion writing

Localization is not literal translation. Chinese and English should each feel like a native version of the same game.

---

# Naming Philosophy

Dream Palace is not historical China. It is an original Eastern fantasy court.

Names should be:

- elegant
- memorable
- warm
- easy to pronounce
- easy to remember
- natural inside the Dream Palace world

Avoid:

- direct English transliterations
- overly historical names
- television-drama naming
- overly ornate fantasy names
- names that feel like placeholders or UI labels

Internal IDs remain unchanged for code and assets. Display names are the official in-game names.

---

# Official Companion Names

| Internal ID | Chinese Display Name | English Display Name | Title |
|---|---|---|---|
| `mp` | 慕平 | Mu Ping | Treasury Advisor |
| `kel` | 恺宁 | Kai Ning | Court Engineer |
| `tab` | 清棠 | Qing Tang | Court Inspector |
| `cx` | 承玄 | Cheng Xuan | Shadow Investigator |
| `mika` | 慧莹 | Hui Ying | Cultural Designer |
| `vincey` | 圆宁 | Yuan Ning | Public Events Lead |
| `shian` | 修远 | Xiu Yuan | Strategic Planner |

Use the internal ID only in code, filenames, implementation notes, or debugging. Use the display name in player-facing text unless a UI element intentionally needs a short system identifier.
---

# Name Lock Rule

These display names are approved canon.

Do not create alternatives. Do not derive names from old English placeholders. Do not swap names between characters. Do not alter Chinese characters while preserving pronunciation.

Internal IDs remain unchanged and are the only approved implementation identifiers: `mp`, `kel`, `tab`, `cx`, `mika`, `vincey`, and `shian`.

---

# Hidden Identity Localization

The current web demo intentionally withholds CX's identity. Canonical text may keep Cheng Xuan / 承玄 and Shadow Investigator / 密查使 in internal data, documentation, and future-scene planning, but the current player-facing demo must not display them.

Current demo player-facing CX identity:

| Language | Name shown | Role shown |
|---|---|---|
| English | ??? | *(blank)* |
| Chinese | ？？？ | *(blank)* |

This rule applies to speaker labels, dialogue log entries, portrait or teaser labels, tooltips, accessibility labels, and ending dialogue presentation.

Do not localize the current CX teaser as Unknown Investigator, Mysterious Man, Shadow Agent, Shadow Investigator, 密查使, or any phrase that describes his story function. The mystery is the point.

For current-demo CX portrait accessibility, use a non-identifying label such as "Unknown figure" / "神秘人物剪影", or mark the image decorative when the nearby ??? / ？？？ already gives context. Do not expose Cheng Xuan / 承玄 or Shadow Investigator / 密查使 through alt text.

---

# Companion Reveal Localization

First reveal cards for visible companions are short identity confirmations. They contain display name, reveal role, one thematic line, and a restrained portrait crop. The copy remains short; portrait presentation is not a place for biography or hidden identity hints.

Approved current demo reveal copy:

| Internal ID | English Name | English Role | English Line | Chinese Name | Chinese Role | Chinese Line |
|---|---|---|---|---|---|---|
| `mp` | Mu Ping | Treasury Advisor | Every decision needs room to endure. | 慕平 | 司库顾问 | 让每一个决定，都留有余地。 |
| `tab` | Qing Tang | Court Inspector | Standards are not obstacles. They are protection. | 清棠 | 监察使 | 标准不是阻碍，是保护。 |
| `kel` | Kai Ning | Court Engineer | If perfection must wait, build what works. | 恺宁 | 工造官 | 没有完美方案，就先造出能用的。 |

Reveal copy should remain in localization data. Rendering logic should request localized reveal fields and must not hardcode English or Chinese strings.

---

# Chinese Style Guide

Chinese copy should feel like modern Chinese with court etiquette.

Use:

- clear modern sentence order
- short clauses
- gentle court respect
- direct emotional stakes
- natural companion speech

Avoid:

- dense classical Chinese
- excessive four-character phrases
- literary decoration that slows comprehension
- modern slang that breaks court tone
- machine-translation phrasing

Preferred address for the player:

- 殿下 for formal court dialogue
- 你 only when intimacy, urgency, or a character's voice supports it
- avoid fixed gender, fixed age, or fixed player appearance

---

# English Style Guide

English copy should feel like natural fantasy localization, not literal Chinese translation.

Use:

- spoken, readable fantasy dialogue
- direct emotional stakes
- concise sentence rhythm
- warm formality when needed
- concrete nouns and actions

Avoid:

- Shakespearean English
- faux-medieval phrasing
- literal word order from Chinese
- ornate exposition
- generic RPG menu language

Preferred address for the player:

- Your Highness in court scenes
- ruler or sovereign in neutral system copy when needed
- never fixed gendered titles unless a future story choice explicitly supports it

---

# Dialogue Principles

One dialogue box should carry one idea.

Dialogue should:

- reveal character first
- deliver information second
- stay immediately understandable
- keep sentences short
- make choices feel like leadership, not menu selection
- leave room for the player to feel the consequence

Rewrite a line when it becomes clearer, warmer, or more character-specific. Do not preserve wording just because it sounds literary.

---

# Dialogue Rhythm

Daily Court:

- simple
- relaxed
- friendly
- practical

Important Decision:

- formal
- responsible
- thoughtful
- still readable

Major Story:

- more emotional
- more poetic
- more spacious
- never obscure

Not every scene should sound equally serious. The emotional intensity should rise only when the situation earns it.

---

# Character Voice Guide

## Mu Ping / 慕平

Voice: warm, patient, practical, gently protective.

Vocabulary:

- reserves, ledger, cost, delay, support, enough
- people, winter, pressure, answer

Rhythm:

- medium sentences
- calm explanations
- one concern at a time

Preferred wording:

- "We can support this, but..."
- "If we spend here, we must delay something elsewhere."
- "The village will remember how quickly we answered."

Forbidden wording:

- panic
- sarcasm
- cold accounting that forgets people
- heroic speeches

## Kai Ning / 恺宁

Voice: earnest, direct, hopeful, hands-on.

Vocabulary:

- build, repair, beam, frame, tools, crew, test
- works, holds, fix, try again

Rhythm:

- short to medium sentences
- practical action first
- emotion slips out honestly

Preferred wording:

- "I can build it."
- "Give me the materials and I will make it hold."
- "It does not need to be beautiful. It needs to be safe."

Forbidden wording:

- polished court rhetoric
- detached analysis
- overconfident miracle promises
- jokes that make his work feel unserious

## Qing Tang / 清棠

Voice: precise, professional, concise, firm but not cruel.

Vocabulary:

- approved, condition, risk, evidence, standard, audit, report
- unresolved, verified, precedent, pass

Rhythm:

- short sentences
- clear verdict first
- explanation only when necessary

Preferred wording:

- "Approved with conditions."
- "There are unresolved risks."
- "Mercy still needs a repair plan."

Forbidden wording:

- warmth that becomes softness
- cruelty for comedy
- long lectures
- vague suspicion without standards

## Cheng Xuan / 承玄

Voice: quiet, observant, economical, dry.

Vocabulary:

- trace, pattern, official story, hidden, report, dawn
- convenient, ignore, found, watched

Rhythm:

- minimal words
- controlled reveals
- leaves a pause after the threat

Preferred wording:

- "That is the official story."
- "I found something."
- "Someone is watching how you answer."

Forbidden wording:

- exposition dumps
- melodrama
- needless mystery words
- explaining what the player can already infer

## Hui Ying / 慧莹

Voice: gentle, imaginative, emotionally perceptive.

Vocabulary:

- light, color, memory, hope, names, beauty, home
- remember, heal, gather, feel

Rhythm:

- soft medium sentences
- image before argument
- emotion stated plainly

Preferred wording:

- "People need to see that the kingdom remembers them."
- "Beauty is also a kind of strength."
- "If we add light here, the street may feel safe again."

Forbidden wording:

- vague prettiness
- impractical whimsy without human stakes
- excessive poetry
- helplessness as her default

## Yuan Ning / 圆宁

Voice: bright, energetic, persuasive, action-first.

Vocabulary:

- idea, crowd, announce, festival, believe, momentum, today
- hear me out, we can make this visible

Rhythm:

- short energetic sentences
- quick turns
- enthusiasm with a real plan underneath

Preferred wording:

- "Hear me out."
- "The people need something to believe in."
- "We can make the answer visible before sunset."

Forbidden wording:

- empty cheerleading
- ignoring cost forever
- slangy modern hype
- jokes that erase crisis

## Xiu Yuan / 修远

Voice: measured, strategic, long-view focused.

Vocabulary:

- route, season, structure, dependency, pattern, long term
- today, next winter, future, coordination

Rhythm:

- medium sentences
- starts from the whole picture
- lands on a clear trade-off

Preferred wording:

- "This solves today, but weakens next season."
- "We should consider the route, not only the destination."
- "The question is what kind of kingdom this choice allows."

Forbidden wording:

- cold abstraction without people
- endless planning language
- prophecy-like vagueness
- treating emotion as irrelevant

---

# Relationship Address Guide

Small address differences should reveal relationships naturally.

Use these as defaults and revise only when a scene has a clear emotional reason.

| Speaker | Mu Ping | Kai Ning | Qing Tang | Cheng Xuan | Hui Ying | Yuan Ning | Xiu Yuan |
|---|---|---|---|---|---|---|---|
| Mu Ping | - | 恺宁 | 清棠 | 承玄 | 慧莹 | 圆宁 | 修远 |
| Kai Ning | 慕平姐 | - | 清棠 | 承玄 | 慧莹 | 圆宁 | 修远 |
| Qing Tang | 慕平 | 恺宁 | - | 承玄 | 慧莹 | 圆宁 | 修远 |
| Cheng Xuan | 慕平 | 工程师 | 清棠 | - | 慧莹 | 圆宁 | 策士 |
| Hui Ying | 慕平 | 恺宁 | 清棠 | 承玄 | - | 小圆 | 修远 |
| Yuan Ning | 慕平姐 | 恺宁！ | 清棠 | 承玄 | 慧莹 | - | 修远 |
| Xiu Yuan | 慕平 | 恺宁 | 清棠 | 承玄 | 慧莹 | 圆宁 | - |

English should usually use display names. Titles are reserved for distance, teasing, respect, or tension.

---

# Examples

Literal and weak:

> The emergency grain can be released, however the repair plan must be considered.

Better Qing Tang:

> Emergency release is possible. Without a repair plan, it repeats the same failure.

Literal and weak:

> I will conduct the construction of the temporary bridge.

Better Kai Ning:

> Give me timber and a crew. I can make the crossing hold.

Overwritten:

> Beneath the moon's unblinking judgment, the hungry wait for royal mercy.

Better Mu Ping:

> Northbridge is waiting. Whatever we choose, they will remember how quickly we answered.

---

# Common Mistakes

- Writing every companion in the same formal voice.
- Translating sentence structure instead of intent.
- Making Chinese too literary for quick reading.
- Making English faux-medieval.
- Letting UI labels sound like spreadsheets.
- Explaining lore before showing a person who cares.
- Using beauty, mystery, or strategy as decoration without a human stake.
- Treating companion names as replaceable labels.

---

# Review Checklist

Before approving dialogue or localization, ask:

1. Can the player understand the line immediately?
2. Could the player identify the speaker without the name label?
3. Does the line reveal a person before it explains a system?
4. Is the Chinese native and readable?
5. Is the English natural fantasy localization?
6. Does the emotional intensity match the scene?
7. Would players remember the companion more than the wording?
