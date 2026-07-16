# Dream Palace Agent Guide

This repository uses `.memory/` as its Project Brain: a compact shared context for AI tools.

## Read First

Before project work, read only:

1. `.memory/CORE.md`
2. `.memory/CURRENT.md`
3. `.memory/ROUTING.md`

Do not preload every Bible. Use `ROUTING.md` to add only the context required by the task.

## Task Packs

- Demo or gameplay: add `.memory/DEMO.md`.
- UI, frontend, or image work: add `.memory/UI_ART.md`.
- Character work: add `.memory/CHARACTERS.md`.
- World or narrative work: add `.memory/WORLD.md`.
- Direction changes: add `.memory/DECISIONS.md`.

The full `docs/*_Bible.md` files are deep references, not default context.

## Source Rules

- The user's latest instruction wins.
- `.memory/CORE.md` contains non-negotiable identity.
- `.memory/DECISIONS.md` records approved direction changes.
- `docs/` contains detailed design intent.
- The current code is the source of truth for implemented behavior.
- `.memory/CURRENT.md` is the source of truth for project status and next work.

## Working Rules

- Check `git status` before editing and preserve unrelated changes.
- Search for the relevant section before reading a full long document.
- Do not duplicate Bible prose into Project Brain files.
- Update `CURRENT.md` after a meaningful milestone, blocker, or priority change.
- Update `DECISIONS.md` only for durable choices that prevent future re-litigation.
- Keep Project Brain concise; remove stale details instead of appending forever.
