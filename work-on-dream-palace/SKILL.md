---
name: work-on-dream-palace
description: Route Dream Palace design, coding, review, planning, narrative, UI, art, character, and demo work through the repository's compact Project Brain. Use whenever a user mentions Dream Palace, asks to continue the project in a new Codex task, requests repository changes or a progress review, or needs consistent project context across AI tools.
---

# Work on Dream Palace

Use the repository's `.memory/` files as compressed context. Keep project facts in the repository, not in this skill.

## Workflow

1. Locate the active Dream Palace repository by finding both `AGENTS.md` and `.memory/CORE.md`.
2. Read the default pack: `CORE.md`, `CURRENT.md`, and `ROUTING.md`.
3. Classify the task and load only the relevant optional pack.
4. Inspect current code, assets, Git status, or detailed Bible sections only after loading the compact context.
5. Complete the requested work end to end.
6. Update Project Brain only when project state or durable direction changed.

Do not preload all Bible files.

## Pack Selection

| Task | Pack |
|---|---|
| Demo flow, gameplay, dialogue implementation, playtest | `demo` |
| UI, frontend, visual layout, CG, asset integration | `ui-art` |
| Character design, dialogue voice, portrait work | `characters` |
| Lore, location, resource, faction, narrative canon | `world` |
| Product direction, scope, roadmap, design disagreement | `decisions` |

For mixed tasks, load at most two optional packs initially. Add a detailed Bible section only when compact memory lacks a required fact.

## Load Context

Run the bundled script from this skill directory:

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File scripts/read_project_brain.ps1 -Root "<dream-palace-repo>" -Pack "demo"
```

Multiple optional packs are comma-separated:

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File scripts/read_project_brain.ps1 -Root "<dream-palace-repo>" -Pack "ui-art,characters"
```

Omit `-Root` only when the current directory is inside the repository or its task workspace.

## Repository Discovery

- Prefer the current Git worktree when it contains `.memory/CORE.md`.
- Otherwise check current-directory ancestors and their `work/dream-palace` or `dream-palace` children.
- If multiple repositories match, use the path explicitly supplied by the user; otherwise ask which worktree is active.
- Never merge state from separate worktrees.

## Source Discipline

- Follow `AGENTS.md` precedence rules.
- Treat code as truth for current behavior and `CURRENT.md` as truth for current priorities.
- Search a Bible by heading or keyword before reading a long file.
- Check `git status` and preserve unrelated changes.
- Do not reconstruct project direction from old chat when Project Brain already answers it.

## Memory Maintenance

Update `.memory/CURRENT.md` when a milestone, current focus, blocker, playable flow, or next step materially changes.

Append `.memory/DECISIONS.md` only when a durable choice should prevent future re-litigation. Include date, decision, and reason.

Do not update memory for formatting, isolated bug fixes, or transient implementation details. Replace stale status instead of appending history. Keep detailed history in `devlog/`.

## Related Skills

After loading Project Brain:

- Use `generate-dream-palace-assets` for Dream Palace environment, CG, UI, and general image assets.
- Use `generate-dream-palace-character-art` for companion portraits, expressions, sprites, and character-focused CGs.

These art skills handle production workflow; this skill supplies current project context.
