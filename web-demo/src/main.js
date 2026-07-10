const demo = window.DREAM_PALACE_DEMO;

const state = structuredClone(demo.initialState);
let beatIndex = 0;
let pendingFollowUps = [];
let currentLine = demo.beats[0];

const elements = {
  dayChip: document.querySelector("#dayChip"),
  kingdomStats: document.querySelector("#kingdomStats"),
  villageStatus: document.querySelector("#villageStatus"),
  companionStack: document.querySelector("#companionStack"),
  speakerToken: document.querySelector("#speakerToken"),
  speakerName: document.querySelector("#speakerName"),
  speakerRole: document.querySelector("#speakerRole"),
  dialogueText: document.querySelector("#dialogueText"),
  choiceRow: document.querySelector("#choiceRow"),
  continueButton: document.querySelector("#continueButton")
};

function formatStatName(key) {
  return key.replace(/([A-Z])/g, " $1").replace(/^./, (letter) => letter.toUpperCase());
}

function renderKingdom() {
  elements.dayChip.textContent = state.day;

  const stats = ["grain", "gold", "trust", "stability"];
  elements.kingdomStats.innerHTML = stats
    .map(
      (key) => `
        <div class="stat-row">
          <dt>${formatStatName(key)}</dt>
          <dd>${state.kingdom[key]}</dd>
        </div>
      `
    )
    .join("");

  elements.villageStatus.textContent = state.kingdom.villageStatus;
}

function renderCompanions(activeSpeakerId) {
  elements.companionStack.innerHTML = Object.values(state.companions)
    .map((companion) => {
      const isActive = companion.id === activeSpeakerId;
      return `
        <article class="companion-card ${companion.color} ${isActive ? "active" : ""}">
          <div class="portrait">${companion.name}</div>
          <div>
            <h2>${companion.name}</h2>
            <p>${companion.role}</p>
            <span>${companion.status}</span>
          </div>
        </article>
      `;
    })
    .join("");
}

function getCompanion(id) {
  return state.companions[id] || state.companions.mp;
}

function renderLine(line) {
  const companion = getCompanion(line.speaker);

  elements.speakerToken.textContent = companion.name;
  elements.speakerName.textContent = companion.name;
  elements.speakerRole.textContent = line.role || companion.role;
  elements.dialogueText.textContent = line.text;

  renderCompanions(companion.id);
  renderChoices(line.choices || []);
}

function renderChoices(choices) {
  if (!choices.length) {
    elements.choiceRow.innerHTML = "";
    elements.continueButton.hidden = false;
    return;
  }

  elements.continueButton.hidden = true;
  elements.choiceRow.innerHTML = choices
    .map(
      (choice) => `
        <button class="choice-card" type="button" data-choice-id="${choice.id}">
          <strong>${choice.label}</strong>
          <span>${choice.description}</span>
        </button>
      `
    )
    .join("");
}

function applyChoice(choice) {
  const changes = choice.stateChange || {};

  for (const [key, value] of Object.entries(changes)) {
    if (typeof state.kingdom[key] === "number") {
      state.kingdom[key] += value;
    } else {
      state.kingdom[key] = value;
    }
  }

  state.companions.mp.status = choice.id === "release_grain"
    ? "Coordinating emergency supply carts"
    : "Protecting reserves while watching public trust";

  state.companions.tab.status = choice.id === "release_grain"
    ? "Recording conditional approval"
    : "Dispatching auditors to Northbridge";

  state.companions.kel.status = "Sketching a temporary bridge repair";

  pendingFollowUps = [...choice.followUps];
  currentLine = pendingFollowUps.shift();

  renderKingdom();
  renderLine(currentLine);
}

function nextLine() {
  if (pendingFollowUps.length > 0) {
    currentLine = pendingFollowUps.shift();
    renderLine(currentLine);
    return;
  }

  beatIndex += 1;

  if (beatIndex >= demo.beats.length) {
    currentLine = {
      speaker: "mp",
      role: "Treasury and responsibility",
      text: "End of Sprint 1 prototype. The next morning is waiting."
    };
    elements.continueButton.hidden = true;
    elements.choiceRow.innerHTML = "";
    renderLine(currentLine);
    return;
  }

  currentLine = demo.beats[beatIndex];
  renderLine(currentLine);
}

elements.continueButton.addEventListener("click", nextLine);

elements.choiceRow.addEventListener("click", (event) => {
  const button = event.target.closest("[data-choice-id]");
  if (!button) return;

  const choices = currentLine.choices || [];
  const choice = choices.find((item) => item.id === button.dataset.choiceId);
  if (!choice) return;

  applyChoice(choice);
});

renderKingdom();
renderCompanions("mp");
renderLine(currentLine);
