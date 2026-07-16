# Dream Palace Project Brain

Project Brain is the compact, tool-neutral memory shared by Codex, ChatGPT, Claude Code, Cursor, Gemini CLI, and future agents.

It compresses the project. It does not replace `docs/`.

## Context Budget

Default context:

- `CORE.md`
- `CURRENT.md`
- `ROUTING.md`

Then load at most one or two task files. Read a full Bible only when the task needs details not present here.

## Files

| File | Purpose | Update cadence |
|---|---|---|
| `CORE.md` | Permanent identity and non-negotiables | Rare |
| `CURRENT.md` | Current build, focus, next work | Every milestone |
| `ROUTING.md` | Context map and canonical sources | When structure changes |
| `DEMO.md` | Compressed demo contract | When demo direction changes |
| `UI_ART.md` | Shared visual and interaction rules | When art/UI direction changes |
| `CHARACTERS.md` | Compact cast reference | When canon changes |
| `WORLD.md` | Compact world vocabulary | When canon changes |
| `DECISIONS.md` | Durable approved decisions | Append selectively |

## Maintenance Rules

1. Prefer facts, constraints, and links over explanation.
2. Do not paste chat transcripts.
3. Do not repeat the same rule across several files unless it is a true non-negotiable.
4. Keep `CURRENT.md` current; replace completed plans instead of accumulating history.
5. Move detailed history to `devlog/` and detailed specifications to `docs/`.
6. Aim to keep the default three-file pack under 250 lines total.

Last verified: 2026-07-16.
