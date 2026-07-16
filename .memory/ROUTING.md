# Context Routing

Read `CORE.md` and `CURRENT.md` first. Add only the row relevant to the task.

| Task | Compact memory | Deep source | Implementation |
|---|---|---|---|
| Demo flow or gameplay | `DEMO.md` | `docs/03_Gameplay_Bible.md`, `docs/07_Demo_Bible.md` | `web-demo/src/demoData.js`, `web-demo/src/main.js` |
| UI or frontend | `UI_ART.md` | `docs/05_UI_UX_Bible.md` | `web-demo/index.html`, `web-demo/src/styles.css` |
| Art, CG, or assets | `UI_ART.md` | `docs/06_Art_Bible.md` | `assets/` |
| Character or dialogue | `CHARACTERS.md` | Relevant section only in `docs/04_Character_Bible.md` | `web-demo/src/demoData.js`, portrait assets |
| World or narrative canon | `WORLD.md` | Relevant section only in `docs/02_World_Bible.md` | story data and assets |
| Product direction | `DECISIONS.md` | `docs/00_Project_Vision.md`, `docs/01_Vision_Bible.md` | `ROADMAP.md`, `tasks/` |
| Current planning | `CURRENT.md` | Latest file in `tasks/` | `ROADMAP.md` |

## Search Before Reading

Use headings or keywords to locate a small section before loading a long Bible.

Examples:

```text
rg -n "^# 03|^## Dialogue Style" docs/04_Character_Bible.md
rg -n "Kingdom Table|Context Before Menu" docs/05_UI_UX_Bible.md
rg -n "Northbridge|First Decision" docs/07_Demo_Bible.md
```

## Conflict Handling

- For identity conflicts, use `CORE.md` and the latest approved entry in `DECISIONS.md`.
- For detailed canon, use the relevant Bible section.
- For what the demo actually does, inspect code.
- For what should happen next, use `CURRENT.md`.
- When a conflict is resolved, update the stale compact memory rather than carrying both answers.
