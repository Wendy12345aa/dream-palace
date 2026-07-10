const demo = window.DREAM_PALACE_DEMO;

const state = structuredClone(demo.initialState);
let beatIndex = 0;
let pendingFollowUps = [];
let currentLine = demo.beats[0];
let selectedChoice = null;

const elements = {
  dayChip: document.querySelector("#dayChip"),
  phaseChip: document.querySelector("#phaseChip"),
  kingdomStats: document.querySelector("#kingdomStats"),
  villageStatus: document.querySelector("#villageStatus"),
  mapMarkers: document.querySelector("#mapMarkers"),
  companionStack: document.querySelector("#companionStack"),
  speakerToken: document.querySelector("#speakerToken"),
  speakerName: document.querySelector("#speakerName"),
  speakerRole: document.querySelector("#speakerRole"),
  dialogueText: document.querySelector("#dialogueText"),
  choiceRow: document.querySelector("#choiceRow"),
  continueButton: document.querySelector("#continueButton"),
  consequenceLog: document.querySelector("#consequenceLog")
};

function formatStatName(key) {
  return key.replace(/([A-Z])/g, " $1").replace(/^./, (letter) => letter.toUpperCase());
}

function renderKingdom() {
  elements.dayChip.textContent = state.day;
  elements.phaseChip.textContent = state.phase;

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
  renderMap();
  renderConsequenceLog();
}

function renderMap() {
  elements.mapMarkers.innerHTML = state.mapMarkers
    .map(
      (marker) => `
        <li class="map-marker ${marker.tone}">
          <span>${marker.icon}</span>
          <div>
            <strong>${marker.label}</strong>
            <small>${marker.status}</small>
          </div>
        </li>
      `
    )
    .join("");
}

function renderConsequenceLog() {
  elements.consequenceLog.innerHTML = state.consequences
    .map((item) => `<li>${item}</li>`)
    .join("");
}

function renderCompanions(activeSpeakerId) {
  elements.companionStack.innerHTML = Object.values(state.companions)
    .map((companion) => {
      const isActive = companion.id === activeSpeakerId;
      const isHidden = companion.hidden && !companion.revealed;
      return `
        <article class="companion-card ${companion.color} ${isActive ? "active" : ""} ${isHidden ? "muted-card" : ""}">
          <div class="portrait">${isHidden ? "?" : companion.name}</div>
          <div>
            <h2>${isHidden ? "Unknown" : companion.name}</h2>
            <p>${isHidden ? "A shadow at the balcony" : companion.role}</p>
            <span>${isHidden ? "Not yet introduced" : companion.status}</span>
          </div>
        </article>
      `;
    })
    .join("");
}

function getCompanion(id) {
  const companion = state.companions[id] || state.companions.mp;
  if (companion.hidden) companion.revealed = true;
  return companion;
}

function renderLine(line) {
  const companion = getCompanion(line.speaker);

  if (line.phase) state.phase = line.phase;
  if (line.day) state.day = line.day;
  if (line.mapUpdate) updateMap(line.mapUpdate);
  if (line.consequence) addConsequence(line.consequence);

  elements.speakerToken.textContent = companion.name;
  elements.speakerName.textContent = companion.name;
  elements.speakerRole.textContent = line.role || companion.role;
  elements.dialogueText.textContent = line.text;

  renderKingdom();
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

function updateMap(update) {
  const marker = state.mapMarkers.find((item) => item.id === update.id);
  if (!marker) return;
  Object.assign(marker, update);
}

function addConsequence(message) {
  if (!state.consequences.includes(message)) {
    state.consequences.push(message);
  }
}

function applyChoice(choice) {
  selectedChoice = choice.id;
  const changes = choice.stateChange || {};

  for (const [key, value] of Object.entries(changes)) {
    if (typeof state.kingdom[key] === "number") {
      state.kingdom[key] += value;
    } else {
      state.kingdom[key] = value;
    }
  }

  state.companions.mp.status = choice.companionStatus.mp;
  state.companions.tab.status = choice.companionStatus.tab;
  state.companions.kel.status = choice.companionStatus.kel;

  if (choice.mapUpdate) updateMap(choice.mapUpdate);
  addConsequence(choice.consequence);
  pendingFollowUps = [...choice.followUps];
  currentLine = pendingFollowUps.shift();

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
    const ending = demo.endings[selectedChoice] || demo.endings.default;
    currentLine = ending;
    renderLine(currentLine);
    elements.choiceRow.innerHTML = "";
    elements.continueButton.hidden = true;
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
