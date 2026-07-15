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
let kingdomAnswerTimer = null;
let stagedSpeaker = null;
let supportingSpeaker = null;
let typingTimer = null;
let typingComplete = true;
let fullLineText = "";
let currentLineIsEnding = false;
let dialogueHistory = [];

const elements = {
  languageGate: document.querySelector("#languageGate"),
  openingSequence: document.querySelector("#openingSequence"),
  openingImage: document.querySelector("#openingImage"),
  openingKicker: document.querySelector("#openingKicker"),
  openingTitle: document.querySelector("#openingTitle"),
  openingProgress: document.querySelector("#openingProgress"),
  skipOpening: document.querySelector("#skipOpening"),
  courtScene: document.querySelector("#courtScene"),
  companionStage: document.querySelector("#companionStage"),
  dayChip: document.querySelector("#dayChip"),
  phaseChip: document.querySelector("#phaseChip"),
  northbridgeFocus: document.querySelector("#northbridgeFocus"),
  kingdomAnswer: document.querySelector("#kingdomAnswer"),
  answerKicker: document.querySelector("#answerKicker"),
  answerTitle: document.querySelector("#answerTitle"),
  answerDetail: document.querySelector("#answerDetail"),
  bridgeStatus: document.querySelector("#bridgeStatus"),
  ledgerSlip: document.querySelector("#ledgerSlip"),
  reserveStatus: document.querySelector("#reserveStatus"),
  villageStatus: document.querySelector("#villageStatus"),
  consequenceToast: document.querySelector("#consequenceToast"),
  dialogueLayer: document.querySelector(".dialogue-layer"),
  speakerToken: document.querySelector("#speakerToken"),
  speakerName: document.querySelector("#speakerName"),
  speakerRole: document.querySelector("#speakerRole"),
  dialogueText: document.querySelector("#dialogueText"),
  choiceRow: document.querySelector("#choiceRow"),
  continueButton: document.querySelector("#continueButton"),
  endActions: document.querySelector("#endActions"),
  dialogueLogButton: document.querySelector("#dialogueLogButton"),
  dialogueLog: document.querySelector("#dialogueLog"),
  dialogueLogClose: document.querySelector("#dialogueLogClose"),
  dialogueLogList: document.querySelector("#dialogueLogList")
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

  if (!elements.courtScene.hidden) {
    renderLine(currentLine, { record: false, animate: false, ending: currentLineIsEnding });
  }
  renderDialogueLog();
}

function getAnswerType() {
  if (selectedChoice === "release_grain") return "release";
  if (selectedChoice === "audit_first") return "audit";
  return "pending";
}

function renderKingdomAnswer() {
  const answerType = getAnswerType();
  elements.kingdomAnswer.dataset.answer = answerType;

  if (answerType === "release") {
    elements.answerKicker.textContent = translate("answerReleaseKicker");
    elements.answerTitle.textContent = translate("answerReleaseTitle");
    elements.answerDetail.textContent = translate("answerReleaseDetail");
  } else if (answerType === "audit") {
    elements.answerKicker.textContent = translate("answerAuditKicker");
    elements.answerTitle.textContent = translate("answerAuditTitle");
    elements.answerDetail.textContent = translate("answerAuditDetail");
  } else {
    elements.answerKicker.textContent = "";
    elements.answerTitle.textContent = "";
    elements.answerDetail.textContent = "";
  }
}

function playKingdomAnswer() {
  const answerDuration = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 250 : 3200;
  window.clearTimeout(kingdomAnswerTimer);
  renderKingdomAnswer();
  elements.kingdomAnswer.classList.remove("is-playing", "is-settled");
  elements.courtScene.classList.add("is-answering");
  elements.continueButton.disabled = true;

  void elements.kingdomAnswer.offsetWidth;
  elements.kingdomAnswer.classList.add("is-playing");

  kingdomAnswerTimer = window.setTimeout(() => {
    elements.kingdomAnswer.classList.remove("is-playing");
    elements.kingdomAnswer.classList.add("is-settled");
    elements.courtScene.classList.remove("is-answering");
    elements.continueButton.disabled = false;
  }, answerDuration);
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
  const transitionDelay = index === 0 ? 0 : 420;

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
  }, transitionDelay);

  window.clearTimeout(openingTimer);
  openingTimer = window.setTimeout(() => {
    if (index < demo.openingShots.length - 1) {
      openingIndex += 1;
      showOpeningShot(openingIndex);
    } else {
      enterCourt();
    }
  }, transitionDelay + (shot.duration ?? 4800));
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

function renderCompanionStage(speaker) {
  const knownSpeaker = state.companions[speaker] ? speaker : "mp";

  if (knownSpeaker !== stagedSpeaker) {
    if (stagedSpeaker && stagedSpeaker !== "cx" && knownSpeaker !== "cx") {
      supportingSpeaker = stagedSpeaker;
    } else if (knownSpeaker === "cx") {
      supportingSpeaker = null;
    }
    stagedSpeaker = knownSpeaker;
  }

  elements.companionStage.dataset.speaker = knownSpeaker;
  document.querySelectorAll("[data-companion]").forEach((actor) => {
    const id = actor.dataset.companion;
    actor.classList.toggle("is-active", id === stagedSpeaker);
    actor.classList.toggle("is-supporting", id === supportingSpeaker && id !== stagedSpeaker);
    actor.classList.toggle("is-revealed", id !== "cx" || state.companions.cx.revealed);
  });
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
  renderKingdomAnswer();
  renderCompanionStage(currentLine.speaker);
}

function showConsequence(message) {
  if (!message) return;
  elements.consequenceToast.textContent = localize(message);
  elements.consequenceToast.classList.remove("show");
  requestAnimationFrame(() => elements.consequenceToast.classList.add("show"));
  window.setTimeout(() => elements.consequenceToast.classList.remove("show"), 3600);
}

function recordDialogue(line) {
  dialogueHistory.push({
    speaker: line.speaker,
    role: line.role || getCompanion(line.speaker).role,
    text: line.text
  });
  renderDialogueLog();
}

function recordChoice(choice) {
  dialogueHistory.push({
    speaker: "throne",
    role: { en: "Ruler's decision", zh: "你的决定" },
    text: choice.label
  });
  renderDialogueLog();
}

function renderDialogueLog() {
  if (!elements.dialogueLogList) return;
  elements.dialogueLogList.innerHTML = dialogueHistory
    .map((entry) => {
      const name = entry.speaker === "throne" ? translate("throne") : getCompanion(entry.speaker).name;
      return `
        <article class="dialogue-log-entry">
          <div>
            <strong>${name}</strong>
            <span>${localize(entry.role)}</span>
          </div>
          <p>${localize(entry.text)}</p>
        </article>
      `;
    })
    .join("");
}

function completeLineReveal() {
  typingComplete = true;

  if (currentLineIsEnding) {
    elements.choiceRow.innerHTML = "";
    elements.continueButton.hidden = true;
    elements.endActions.hidden = false;
    return;
  }

  renderChoices(currentLine.choices || []);
}

function revealFullLine() {
  window.clearTimeout(typingTimer);
  elements.dialogueText.textContent = fullLineText;
  completeLineReveal();
}

function revealLine(text, animate) {
  window.clearTimeout(typingTimer);
  fullLineText = text;
  elements.dialogueText.textContent = "";
  elements.choiceRow.innerHTML = "";
  elements.endActions.hidden = true;
  elements.continueButton.hidden = false;
  typingComplete = false;

  if (!animate || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    revealFullLine();
    return;
  }

  const characters = Array.from(text);
  const delay = currentLanguage === "zh" ? 34 : 22;
  let characterIndex = 0;

  const typeNextCharacter = () => {
    characterIndex += 1;
    elements.dialogueText.textContent = characters.slice(0, characterIndex).join("");

    if (characterIndex >= characters.length) {
      completeLineReveal();
      return;
    }

    const character = characters[characterIndex - 1];
    const pause = /[.!?。！？]/.test(character) ? delay * 5 : /[,;，；]/.test(character) ? delay * 2.5 : delay;
    typingTimer = window.setTimeout(typeNextCharacter, pause);
  };

  typeNextCharacter();
}

function renderLine(line, { record = true, animate = true, ending = false } = {}) {
  const companion = getCompanion(line.speaker);
  currentLineIsEnding = ending;

  if (line.phase) state.phase = line.phase;
  if (line.day) state.day = line.day;
  if (line.sceneTone) state.sceneTone = line.sceneTone;
  if (line.sceneTone && line.sceneTone !== "morning") {
    elements.kingdomAnswer.classList.remove("is-playing", "is-settled");
  }
  if (line.revealLedger) elements.ledgerSlip.classList.add("is-visible");

  elements.speakerToken.textContent = companion.name;
  elements.speakerName.textContent = companion.name;
  elements.speakerRole.textContent = localize(line.role || companion.role);

  renderState();
  if (record) recordDialogue(line);
  revealLine(localize(line.text), animate);
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
  recordChoice(choice);

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
  renderLine(currentLine, { ending: false });
  showConsequence(choice.consequence);
  playKingdomAnswer();
}

function nextLine() {
  if (pendingFollowUps.length > 0) {
    currentLine = pendingFollowUps.shift();
    renderLine(currentLine, { ending: false });
    return;
  }

  beatIndex += 1;

  if (beatIndex >= demo.beats.length) {
    currentLine = demo.endings[selectedChoice] || demo.endings.default;
    renderLine(currentLine, { ending: true });
    return;
  }

  currentLine = demo.beats[beatIndex];
  renderLine(currentLine, { ending: false });
}

function advanceDialogue() {
  if (!typingComplete) {
    revealFullLine();
    return;
  }
  nextLine();
}

function resetRunState() {
  window.clearTimeout(openingTimer);
  window.clearTimeout(kingdomAnswerTimer);
  window.clearTimeout(typingTimer);

  const freshState = structuredClone(demo.initialState);
  Object.keys(state).forEach((key) => delete state[key]);
  Object.assign(state, freshState);

  beatIndex = 0;
  pendingFollowUps = [];
  currentLine = demo.beats[0];
  selectedChoice = null;
  openingIndex = 0;
  kingdomAnswerTimer = null;
  stagedSpeaker = null;
  supportingSpeaker = null;
  typingComplete = true;
  fullLineText = "";
  currentLineIsEnding = false;
  dialogueHistory = [];

  elements.openingSequence.classList.remove("is-leaving", "is-changing");
  elements.courtScene.classList.remove("is-visible", "is-answering");
  elements.ledgerSlip.classList.remove("is-visible");
  elements.kingdomAnswer.classList.remove("is-playing", "is-settled");
  elements.consequenceToast.classList.remove("show");
  elements.consequenceToast.textContent = "";
  elements.choiceRow.innerHTML = "";
  elements.endActions.hidden = true;
  elements.continueButton.hidden = false;
  elements.continueButton.disabled = false;
  renderDialogueLog();
}

function restartDemo() {
  resetRunState();
  experienceStarted = true;
  openingFinished = false;
  elements.languageGate.hidden = true;
  elements.openingSequence.hidden = false;
  elements.courtScene.hidden = true;
  showOpeningShot(0);
}

function replayOtherChoice() {
  resetRunState();
  experienceStarted = true;
  openingFinished = true;
  elements.languageGate.hidden = true;
  elements.openingSequence.hidden = true;
  elements.courtScene.hidden = false;
  beatIndex = demo.beats.findIndex((beat) => beat.choices?.length);
  currentLine = demo.beats[beatIndex];
  requestAnimationFrame(() => elements.courtScene.classList.add("is-visible"));
  renderLine(currentLine, { ending: false });
}

function returnToTitle() {
  resetRunState();
  experienceStarted = false;
  openingFinished = false;
  elements.openingSequence.hidden = true;
  elements.courtScene.hidden = true;
  elements.languageGate.hidden = false;
  elements.languageGate.classList.remove("is-leaving");
}

elements.skipOpening.addEventListener("click", enterCourt);
elements.continueButton.addEventListener("click", advanceDialogue);

elements.dialogueLogButton.addEventListener("click", () => {
  renderDialogueLog();
  elements.dialogueLog.showModal();
});

elements.dialogueLogClose.addEventListener("click", () => elements.dialogueLog.close());

elements.dialogueLog.addEventListener("click", (event) => {
  if (event.target === elements.dialogueLog) elements.dialogueLog.close();
});

elements.endActions.addEventListener("click", (event) => {
  const action = event.target.closest("[data-end-action]")?.dataset.endAction;
  if (action === "other") replayOtherChoice();
  if (action === "restart") restartDemo();
  if (action === "title") returnToTitle();
});

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
  if (
    (event.key === "Enter" || event.key === " ") &&
    openingFinished &&
    !elements.continueButton.hidden &&
    !elements.continueButton.disabled
  ) {
    event.preventDefault();
    advanceDialogue();
  }
});

preloadOpeningShot(0);
