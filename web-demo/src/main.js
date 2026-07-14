const demo = window.DREAM_PALACE_DEMO;

const state = structuredClone(demo.initialState);
let beatIndex = 0;
let pendingFollowUps = [];
let currentLine = demo.beats[0];
let selectedChoice = null;
let openingIndex = 0;
let openingTimer = null;
let openingFinished = false;

const elements = {
  openingSequence: document.querySelector("#openingSequence"),
  openingImage: document.querySelector("#openingImage"),
  openingKicker: document.querySelector("#openingKicker"),
  openingTitle: document.querySelector("#openingTitle"),
  openingProgress: document.querySelector("#openingProgress"),
  skipOpening: document.querySelector("#skipOpening"),
  courtScene: document.querySelector("#courtScene"),
  dayChip: document.querySelector("#dayChip"),
  phaseChip: document.querySelector("#phaseChip"),
  northbridgeFocus: document.querySelector("#northbridgeFocus"),
  bridgeStatus: document.querySelector("#bridgeStatus"),
  ledgerSlip: document.querySelector("#ledgerSlip"),
  reserveStatus: document.querySelector("#reserveStatus"),
  villageStatus: document.querySelector("#villageStatus"),
  consequenceToast: document.querySelector("#consequenceToast"),
  speakerToken: document.querySelector("#speakerToken"),
  speakerName: document.querySelector("#speakerName"),
  speakerRole: document.querySelector("#speakerRole"),
  dialogueText: document.querySelector("#dialogueText"),
  choiceRow: document.querySelector("#choiceRow"),
  continueButton: document.querySelector("#continueButton")
};

function preloadOpening() {
  demo.openingShots.forEach((shot) => {
    const image = new Image();
    image.src = shot.src;
  });
}

function renderOpeningProgress() {
  elements.openingProgress.innerHTML = demo.openingShots
    .map(
      (_, index) =>
        `<span class="${index === openingIndex ? "active" : ""} ${index < openingIndex ? "seen" : ""}"></span>`
    )
    .join("");
}

function showOpeningShot(index) {
  const shot = demo.openingShots[index];
  if (!shot || openingFinished) return;

  elements.openingSequence.classList.add("is-changing");

  window.setTimeout(() => {
    elements.openingImage.src = shot.src;
    elements.openingImage.alt = shot.title;
    elements.openingImage.style.objectPosition = shot.position;
    elements.openingImage.className = index % 2 === 0 ? "drift-right" : "drift-left";
    elements.openingKicker.textContent = shot.kicker;
    elements.openingTitle.textContent = shot.title;
    renderOpeningProgress();
    elements.openingSequence.classList.remove("is-changing");
  }, index === 0 ? 0 : 420);

  window.clearTimeout(openingTimer);
  openingTimer = window.setTimeout(() => {
    if (index < demo.openingShots.length - 1) {
      openingIndex += 1;
      showOpeningShot(openingIndex);
    } else {
      enterCourt();
    }
  }, 3200);
}

function enterCourt() {
  if (openingFinished) return;
  openingFinished = true;
  window.clearTimeout(openingTimer);
  elements.openingSequence.classList.add("is-leaving");

  window.setTimeout(() => {
    elements.openingSequence.hidden = true;
    elements.courtScene.hidden = false;
    requestAnimationFrame(() => elements.courtScene.classList.add("is-visible"));
    renderLine(currentLine);
  }, 700);
}

function getCompanion(id) {
  const companion = state.companions[id] || state.companions.mp;
  if (companion.hidden) companion.revealed = true;
  return companion;
}

function renderState() {
  const tableState =
    selectedChoice === "release_grain" ? "release" : selectedChoice === "audit_first" ? "audit" : "pending";

  elements.dayChip.textContent = state.day;
  elements.phaseChip.textContent = state.phase;
  elements.bridgeStatus.textContent = state.kingdom.bridgeStatus;
  elements.reserveStatus.textContent = state.kingdom.reserveStatus;
  elements.villageStatus.textContent = state.kingdom.villageStatus;

  elements.courtScene.dataset.focus = currentLine.focus || currentLine.speaker;
  elements.courtScene.dataset.tone = state.sceneTone;
  elements.courtScene.dataset.tableState = tableState;

  document.querySelectorAll("[data-companion]").forEach((presence) => {
    presence.classList.toggle("active", presence.dataset.companion === currentLine.speaker);
  });
}

function showConsequence(message) {
  if (!message) return;
  elements.consequenceToast.textContent = message;
  elements.consequenceToast.classList.remove("show");
  requestAnimationFrame(() => elements.consequenceToast.classList.add("show"));
  window.setTimeout(() => elements.consequenceToast.classList.remove("show"), 3600);
}

function renderLine(line) {
  const companion = getCompanion(line.speaker);

  if (line.phase) state.phase = line.phase;
  if (line.day) state.day = line.day;
  if (line.sceneTone) state.sceneTone = line.sceneTone;
  if (line.revealLedger) elements.ledgerSlip.classList.add("is-visible");

  elements.speakerToken.textContent = companion.name;
  elements.speakerName.textContent = companion.name;
  elements.speakerRole.textContent = line.role || companion.role;
  elements.dialogueText.textContent = line.text;

  renderState();
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
      (choice, index) => `
        <button class="choice-button" type="button" data-choice-id="${choice.id}">
          <span class="choice-index">0${index + 1}</span>
          <span>
            <strong>${choice.label}</strong>
            <small>${choice.description}</small>
          </span>
        </button>
      `
    )
    .join("");
}

function applyChoice(choice) {
  selectedChoice = choice.id;

  for (const [key, value] of Object.entries(choice.stateChange || {})) {
    if (typeof state.kingdom[key] === "number") {
      state.kingdom[key] += value;
    } else {
      state.kingdom[key] = value;
    }
  }

  elements.ledgerSlip.classList.add("is-visible");
  pendingFollowUps = [...choice.followUps];
  currentLine = pendingFollowUps.shift();
  renderLine(currentLine);
  showConsequence(choice.consequence);
}

function nextLine() {
  if (pendingFollowUps.length > 0) {
    currentLine = pendingFollowUps.shift();
    renderLine(currentLine);
    return;
  }

  beatIndex += 1;

  if (beatIndex >= demo.beats.length) {
    currentLine = demo.endings[selectedChoice] || demo.endings.default;
    renderLine(currentLine);
    elements.continueButton.hidden = true;
    return;
  }

  currentLine = demo.beats[beatIndex];
  renderLine(currentLine);
}

elements.skipOpening.addEventListener("click", enterCourt);
elements.continueButton.addEventListener("click", nextLine);

elements.choiceRow.addEventListener("click", (event) => {
  const button = event.target.closest("[data-choice-id]");
  if (!button) return;

  const choice = (currentLine.choices || []).find((item) => item.id === button.dataset.choiceId);
  if (choice) applyChoice(choice);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !openingFinished) enterCourt();
  if ((event.key === "Enter" || event.key === " ") && openingFinished && !elements.continueButton.hidden) {
    event.preventDefault();
    nextLine();
  }
});

preloadOpening();
showOpeningShot(openingIndex);
