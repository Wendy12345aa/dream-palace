const demo = window.DREAM_PALACE_DEMO;

const state = structuredClone(demo.initialState);
let beatIndex = 0;
let pendingFollowUps = [];
let currentLine = demo.beats[0];
let selectedChoice = null;
let openingIndex = 0;
let openingTimer = null;
let openingFinished = false;
let experienceStarted = false;
let currentLanguage = "en";

const elements = {
  languageGate: document.querySelector("#languageGate"),
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

function localize(value) {
  if (value && typeof value === "object" && (value.en || value.zh)) {
    return value[currentLanguage] || value.en || value.zh;
  }
  return value;
}

function translate(key) {
  return demo.ui[currentLanguage][key] || demo.ui.en[key] || key;
}

function setLanguage(language) {
  currentLanguage = language === "zh" ? "zh" : "en";
  document.documentElement.lang = currentLanguage === "zh" ? "zh-CN" : "en";

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = translate(element.dataset.i18n);
  });

  document.querySelectorAll("[data-language]").forEach((button) => {
    const isActive = button.dataset.language === currentLanguage;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  if (experienceStarted && !openingFinished) {
    const shot = demo.openingShots[openingIndex];
    elements.openingKicker.textContent = localize(shot.kicker);
    elements.openingTitle.textContent = localize(shot.title);
    elements.openingImage.alt = localize(shot.title);
  }

  if (!elements.courtScene.hidden) renderLine(currentLine);
}

function startExperience(language) {
  if (experienceStarted) return;
  experienceStarted = true;
  setLanguage(language);
  elements.languageGate.classList.add("is-leaving");

  window.setTimeout(() => {
    elements.languageGate.hidden = true;
    elements.openingSequence.hidden = false;
    showOpeningShot(openingIndex);
  }, 420);
}

function preloadOpeningShot(index) {
  const shot = demo.openingShots[index];
  if (!shot) return;

  const image = new Image();
  image.src = shot.src;
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
    elements.openingImage.alt = localize(shot.title);
    elements.openingImage.style.objectPosition = shot.position;
    elements.openingImage.className = index % 2 === 0 ? "drift-right" : "drift-left";
    elements.openingKicker.textContent = localize(shot.kicker);
    elements.openingTitle.textContent = localize(shot.title);
    renderOpeningProgress();
    elements.openingSequence.classList.remove("is-changing");
    preloadOpeningShot(index + 1);
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

  elements.dayChip.textContent = translate(state.day);
  elements.phaseChip.textContent = translate(state.phase);
  elements.bridgeStatus.textContent = localize(state.kingdom.bridgeStatus);
  elements.reserveStatus.textContent = localize(state.kingdom.reserveStatus);
  elements.villageStatus.textContent = localize(state.kingdom.villageStatus);

  elements.courtScene.dataset.focus = currentLine.focus || currentLine.speaker;
  elements.courtScene.dataset.tone = state.sceneTone;
  elements.courtScene.dataset.tableState = tableState;

  document.querySelectorAll("[data-companion]").forEach((presence) => {
    presence.classList.toggle("active", presence.dataset.companion === currentLine.speaker);
  });
}

function showConsequence(message) {
  if (!message) return;
  elements.consequenceToast.textContent = localize(message);
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
  elements.speakerRole.textContent = localize(line.role || companion.role);
  elements.dialogueText.textContent = localize(line.text);

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
            <strong>${localize(choice.label)}</strong>
            <small>${localize(choice.description)}</small>
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

elements.languageGate.addEventListener("click", (event) => {
  const button = event.target.closest("[data-language]");
  if (button) startExperience(button.dataset.language);
});

document.querySelectorAll(".opening-actions [data-language], .court-tools [data-language]").forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.language));
});

elements.choiceRow.addEventListener("click", (event) => {
  const button = event.target.closest("[data-choice-id]");
  if (!button) return;

  const choice = (currentLine.choices || []).find((item) => item.id === button.dataset.choiceId);
  if (choice) applyChoice(choice);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && experienceStarted && !openingFinished) enterCourt();
  if ((event.key === "Enter" || event.key === " ") && openingFinished && !elements.continueButton.hidden) {
    event.preventDefault();
    nextLine();
  }
});

preloadOpeningShot(0);
