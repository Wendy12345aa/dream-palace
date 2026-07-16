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
let decisionTimer = null;
let ledgerOpened = false;
let bridgeInspected = false;
let decisionLocked = false;
let dragState = null;
let ignoreTokenClickUntil = 0;
let tutorialTimer = null;
let tutorialStep = null;
let revealTimer = null;
let activeRevealId = null;
let revealIsSettled = false;

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
  decisionWorkbench: document.querySelector("#decisionWorkbench"),
  workbenchKicker: document.querySelector("#workbenchKicker"),
  workbenchInstruction: document.querySelector("#workbenchInstruction"),
  ledgerBook: document.querySelector("#ledgerBook"),
  ledgerPageTitle: document.querySelector("#ledgerPageTitle"),
  ledgerReserveLabel: document.querySelector("#ledgerReserveLabel"),
  ledgerReserveValue: document.querySelector("#ledgerReserveValue"),
  ledgerRequestLabel: document.querySelector("#ledgerRequestLabel"),
  ledgerRequestValue: document.querySelector("#ledgerRequestValue"),
  ledgerMarginLabel: document.querySelector("#ledgerMarginLabel"),
  ledgerMarginValue: document.querySelector("#ledgerMarginValue"),
  ledgerOwner: document.querySelector("#ledgerOwner"),
  ledgerCoverTitle: document.querySelector("#ledgerCoverTitle"),
  northbridgeDrop: document.querySelector("#northbridgeDrop"),
  dropLabel: document.querySelector("#dropLabel"),
  dropHint: document.querySelector("#dropHint"),
  bridgeInspection: document.querySelector("#bridgeInspection"),
  bridgePiece: document.querySelector("#bridgePiece"),
  bridgePieceLabel: document.querySelector("#bridgePieceLabel"),
  bridgePieceHint: document.querySelector("#bridgePieceHint"),
  bridgeFinding: document.querySelector("#bridgeFinding"),
  bridgeFindingKicker: document.querySelector("#bridgeFindingKicker"),
  bridgeFindingText: document.querySelector("#bridgeFindingText"),
  decisionTokenTray: document.querySelector("#decisionTokenTray"),
  grainTokenLabel: document.querySelector("#grainTokenLabel"),
  grainTokenHint: document.querySelector("#grainTokenHint"),
  auditTokenLabel: document.querySelector("#auditTokenLabel"),
  auditTokenHint: document.querySelector("#auditTokenHint"),
  workbenchFallbackLabel: document.querySelector("#workbenchFallbackLabel"),
  workbenchChoiceFallback: document.querySelector("#workbenchChoiceFallback"),
  workbenchStatus: document.querySelector("#workbenchStatus"),
  tutorialVeil: document.querySelector("#tutorialVeil"),
  tutorialPrompt: document.querySelector("#tutorialPrompt"),
  tutorialStep: document.querySelector("#tutorialStep"),
  tutorialText: document.querySelector("#tutorialText"),
  kingdomAnswer: document.querySelector("#kingdomAnswer"),
  answerKicker: document.querySelector("#answerKicker"),
  answerTitle: document.querySelector("#answerTitle"),
  answerDetail: document.querySelector("#answerDetail"),
  bridgeStatus: document.querySelector("#bridgeStatus"),
  ledgerSlip: document.querySelector("#ledgerSlip"),
  reserveStatus: document.querySelector("#reserveStatus"),
  villageStatus: document.querySelector("#villageStatus"),
  consequenceToast: document.querySelector("#consequenceToast"),
  characterReveal: document.querySelector("#characterReveal"),
  revealName: document.querySelector("#revealName"),
  revealRole: document.querySelector("#revealRole"),
  revealTagline: document.querySelector("#revealTagline"),
  revealPortraitFrame: document.querySelector("#revealPortraitFrame"),
  revealPortrait: document.querySelector("#revealPortrait"),
  revealContinueIndicator: document.querySelector("#revealContinueIndicator"),
  dialogueLayer: document.querySelector(".dialogue-layer"),
  speakerToken: document.querySelector("#speakerToken"),
  speakerPortrait: document.querySelector("#speakerPortrait"),
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

const workbenchCopy = {
  en: {
    kicker: "The Kingdom Table",
    ledgerOwner: "Mu Ping",
    closedInstruction: "Open Mu Ping's ledger before moving the court's resources.",
    bridgeInstruction: "Inspect the damaged span with Kai Ning's support beam.",
    readyInstruction: "Drag a court prop to Northbridge, or tap it to decide.",
    ledgerTutorial: "Open Mu Ping's ledger to review the available resources.",
    bridgeTutorial: "Fit Kai Ning's support beam to the damaged span and inspect what failed.",
    propsTutorial: "Now decide. Drag a court prop to Northbridge, or tap it.",
    ledgerTitle: "Reserve ledger",
    reserveLabel: "Emergency grain",
    requestLabel: "Northbridge request",
    marginLabel: "Winter margin",
    marginValue: "Guarded",
    sacks: "sacks",
    dropLabel: "Northbridge",
    dropHint: "Place your decision here",
    inspectionDropHint: "Fit the support beam here",
    bridgeLabel: "Kai Ning's support beam",
    bridgeHint: "Fit it to the damaged span",
    findingKicker: "Kai Ning / inspection",
    findingText: "The iron pins are rusted through. This damage began long before last night.",
    grainLabel: "Grain cart",
    grainHint: "Release grain and repair",
    auditLabel: "Audit flag",
    auditHint: "Hold reserve and inspect",
    fallback: "Keyboard or tap alternative",
    ledgerOpened: "Reserve ledger opened. Kai Ning's bridge model is ready.",
    bridgeInspected: "Bridge inspected. The court now has enough evidence to decide.",
    choicePlaced: "Decision placed on Northbridge."
  },
  zh: {
    kicker: "\u738b\u56fd\u6c99\u76d8",
    ledgerOwner: "\u6155\u5e73",
    closedInstruction: "\u5148\u7ffb\u5f00\u6155\u5e73\u7684\u8d26\u672c\uff0c\u518d\u8c03\u52a8\u671d\u5ef7\u8d44\u6e90\u3002",
    bridgeInstruction: "\u7528\u607a\u5b81\u7684\u652f\u6491\u6881\u68c0\u67e5\u65ad\u6865\u7ed3\u6784\u3002",
    readyInstruction: "\u5c06\u4e00\u4e2a\u671d\u5ef7\u9053\u5177\u62d6\u5230\u5317\u6865\u6751\uff0c\u6216\u76f4\u63a5\u70b9\u51fb\u505a\u51fa\u51b3\u5b9a\u3002",
    ledgerTutorial: "\u5148\u70b9\u51fb\u6155\u5e73\u7684\u8d26\u672c\uff0c\u67e5\u770b\u5f53\u524d\u53ef\u7528\u8d44\u6e90\u3002",
    bridgeTutorial: "\u628a\u607a\u5b81\u7684\u652f\u6491\u6881\u653e\u5230\u65ad\u6865\u5904\uff0c\u68c0\u67e5\u7a76\u7adf\u662f\u54ea\u91cc\u5931\u6548\u3002",
    propsTutorial: "\u73b0\u5728\u505a\u51fa\u51b3\u5b9a\uff1a\u5c06\u4e00\u4e2a\u671d\u5ef7\u9053\u5177\u62d6\u5230\u5317\u6865\u6751\uff0c\u6216\u76f4\u63a5\u70b9\u51fb\u3002",
    ledgerTitle: "\u50a8\u5907\u8d26\u672c",
    reserveLabel: "\u5e94\u6025\u7cae\u98df",
    requestLabel: "\u5317\u6865\u6751\u7533\u8bf7",
    marginLabel: "\u51ac\u5b63\u9884\u7559",
    marginValue: "\u9700\u4fdd\u7559",
    sacks: "\u888b",
    dropLabel: "\u5317\u6865\u6751",
    dropHint: "\u628a\u4f60\u7684\u51b3\u5b9a\u653e\u5728\u8fd9\u91cc",
    inspectionDropHint: "\u628a\u652f\u6491\u6881\u5b89\u5230\u8fd9\u91cc",
    bridgeLabel: "\u607a\u5b81\u7684\u652f\u6491\u6881",
    bridgeHint: "\u5b89\u5230\u65ad\u88c2\u7684\u6865\u8eab\u4e0a",
    findingKicker: "\u607a\u5b81 / \u7ed3\u6784\u68c0\u67e5",
    findingText: "\u94c1\u5236\u56fa\u5b9a\u9489\u5df2\u7ecf\u9508\u7a7f\u3002\u8fd9\u5904\u635f\u574f\u65e9\u5728\u6628\u591c\u4e4b\u524d\u5c31\u5f00\u59cb\u4e86\u3002",
    grainLabel: "\u7cae\u8f66",
    grainHint: "\u9a6c\u4e0a\u9001\u7cae\u5e76\u4fee\u6865",
    auditLabel: "\u5ba1\u6838\u65d7",
    auditHint: "\u4fdd\u7559\u50a8\u5907\u5e76\u8c03\u67e5",
    fallback: "\u70b9\u51fb\u6216\u952e\u76d8\u4e5f\u53ef\u9009\u62e9",
    ledgerOpened: "\u50a8\u5907\u8d26\u672c\u5df2\u7ffb\u5f00\uff0c\u607a\u5b81\u7684\u6865\u6881\u6a21\u578b\u5df2\u51c6\u5907\u597d\u3002",
    bridgeInspected: "\u65ad\u6865\u5df2\u68c0\u67e5\u3002\u671d\u5ef7\u73b0\u5728\u62e5\u6709\u8db3\u591f\u7684\u7ebf\u7d22\u505a\u51fa\u51b3\u5b9a\u3002",
    choicePlaced: "\u51b3\u5b9a\u5df2\u653e\u5230\u5317\u6865\u6751\u3002"
  }
};

function localize(value) {
  if (value && typeof value === "object" && ("en" in value || "zh" in value)) {
    return value[currentLanguage] || value.en || value.zh;
  }
  return value;
}

function translate(key) {
  return demo.ui[currentLanguage][key] || demo.ui.en[key] || key;
}

function getWorkbenchCopy() {
  return workbenchCopy[currentLanguage] || workbenchCopy.en;
}

function getDecisionTokens() {
  return Array.from(elements.decisionTokenTray.querySelectorAll("[data-drag-choice]"));
}

function getDraggableProps() {
  return [elements.bridgePiece, ...getDecisionTokens()];
}

function getCurrentChoice(choiceId) {
  return (currentLine.choices || []).find((choice) => choice.id === choiceId);
}

function clearTutorialSpotlight() {
  window.clearTimeout(tutorialTimer);
  tutorialTimer = null;
  tutorialStep = null;
  elements.tutorialVeil.hidden = true;
  elements.tutorialPrompt.hidden = true;
  elements.ledgerBook.classList.remove("is-tutorial-target");
  elements.bridgePiece.classList.remove("is-tutorial-target");
  elements.bridgeFinding.classList.remove("is-tutorial-target");
  elements.decisionTokenTray.classList.remove("is-tutorial-target");
}

function showTutorialSpotlight(step) {
  if (elements.decisionWorkbench.hidden || decisionLocked) return;

  const targets = {
    ledger: elements.ledgerBook,
    bridge: elements.bridgePiece,
    props: elements.decisionTokenTray
  };
  const target = targets[step];
  if (!target) return;
  const copy = getWorkbenchCopy();
  const rect = target.getBoundingClientRect();
  const padding = step === "props" ? 14 : 18;
  const promptWidth = Math.min(320, window.innerWidth - 32);
  const centerX = rect.left + rect.width / 2;
  const promptLeft = Math.max(16, Math.min(window.innerWidth - promptWidth - 16, centerX - promptWidth / 2));
  let promptTop = Math.max(76, rect.top - 54);
  if (window.innerWidth <= 760 && step === "props") {
    promptTop = Math.min(window.innerHeight - 88, rect.bottom + 12);
  }

  tutorialStep = step;
  elements.ledgerBook.classList.toggle("is-tutorial-target", step === "ledger");
  elements.bridgePiece.classList.toggle("is-tutorial-target", step === "bridge");
  elements.bridgeFinding.classList.toggle("is-tutorial-target", step === "props" && bridgeInspected);
  elements.decisionTokenTray.classList.toggle("is-tutorial-target", step === "props");
  elements.tutorialVeil.style.setProperty("--spot-x", `${centerX}px`);
  elements.tutorialVeil.style.setProperty("--spot-y", `${rect.top + rect.height / 2}px`);
  elements.tutorialVeil.style.setProperty("--spot-rx", `${rect.width / 2 + padding}px`);
  elements.tutorialVeil.style.setProperty("--spot-ry", `${rect.height / 2 + padding}px`);
  elements.tutorialPrompt.style.setProperty("--prompt-left", `${promptLeft}px`);
  elements.tutorialPrompt.style.setProperty("--prompt-top", `${promptTop}px`);
  elements.tutorialPrompt.style.setProperty("--prompt-width", `${promptWidth}px`);
  const stepCopy = {
    ledger: ["01", copy.ledgerTutorial],
    bridge: ["02", copy.bridgeTutorial],
    props: ["03", copy.propsTutorial]
  }[step];
  elements.tutorialStep.textContent = stepCopy[0];
  elements.tutorialText.textContent = stepCopy[1];
  elements.tutorialVeil.hidden = false;
  elements.tutorialPrompt.hidden = false;
}

function scheduleTutorialSpotlight(step, delay = 0) {
  window.clearTimeout(tutorialTimer);
  tutorialTimer = window.setTimeout(() => showTutorialSpotlight(step), delay);
}

function resetDecisionToken(token) {
  token.classList.remove("is-dragging", "is-accepted");
  token.style.removeProperty("--drag-x");
  token.style.removeProperty("--drag-y");
}

function setDecisionControlsEnabled(enabled) {
  getDecisionTokens().forEach((token) => {
    token.disabled = !enabled;
    token.setAttribute("aria-disabled", String(!enabled));
  });

  elements.workbenchChoiceFallback.querySelectorAll("[data-choice-id]").forEach((button) => {
    button.disabled = !enabled;
  });
}

function setBridgeInspectionEnabled(enabled) {
  elements.bridgePiece.disabled = !enabled;
  elements.bridgePiece.setAttribute("aria-disabled", String(!enabled));
}

function updateWorkbenchCopy(choices) {
  const copy = getWorkbenchCopy();
  const releaseChoice = choices.find((choice) => choice.id === "release_grain");
  const requestedGrain = Math.abs(releaseChoice?.stateChange?.grain || 0);
  const numberLocale = currentLanguage === "zh" ? "zh-CN" : "en-US";
  const reserveValue = `${state.kingdom.grain.toLocaleString(numberLocale)} ${copy.sacks}`;
  const requestValue = `${requestedGrain.toLocaleString(numberLocale)} ${copy.sacks}`;

  elements.workbenchKicker.textContent = copy.kicker;
  elements.workbenchInstruction.textContent = !ledgerOpened
    ? copy.closedInstruction
    : bridgeInspected
      ? copy.readyInstruction
      : copy.bridgeInstruction;
  elements.ledgerPageTitle.textContent = copy.ledgerTitle;
  elements.ledgerOwner.textContent = copy.ledgerOwner;
  elements.ledgerCoverTitle.textContent = copy.ledgerTitle;
  elements.ledgerReserveLabel.textContent = copy.reserveLabel;
  elements.ledgerReserveValue.textContent = reserveValue;
  elements.ledgerRequestLabel.textContent = copy.requestLabel;
  elements.ledgerRequestValue.textContent = requestValue;
  elements.ledgerMarginLabel.textContent = copy.marginLabel;
  elements.ledgerMarginValue.textContent = copy.marginValue;
  elements.dropLabel.textContent = copy.dropLabel;
  elements.dropHint.textContent = ledgerOpened && !bridgeInspected ? copy.inspectionDropHint : copy.dropHint;
  elements.bridgePieceLabel.textContent = copy.bridgeLabel;
  elements.bridgePieceHint.textContent = copy.bridgeHint;
  elements.bridgeFindingKicker.textContent = copy.findingKicker;
  elements.bridgeFindingText.textContent = copy.findingText;
  elements.grainTokenLabel.textContent = copy.grainLabel;
  elements.grainTokenHint.textContent = copy.grainHint;
  elements.auditTokenLabel.textContent = copy.auditLabel;
  elements.auditTokenHint.textContent = copy.auditHint;
  elements.workbenchFallbackLabel.textContent = copy.fallback;
  elements.ledgerBook.setAttribute(
    "aria-label",
    ledgerOpened
      ? `${copy.ledgerOwner} - ${copy.ledgerTitle}. ${copy.reserveLabel}: ${reserveValue}. ${copy.requestLabel}: ${requestValue}. ${copy.marginLabel}: ${copy.marginValue}.`
      : copy.closedInstruction
  );
  elements.northbridgeDrop.setAttribute("aria-label", `${copy.dropLabel}: ${copy.dropHint}`);
  elements.bridgePiece.setAttribute("aria-label", `${copy.bridgeLabel}. ${copy.bridgeHint}`);

  getDecisionTokens().forEach((token) => {
    const choice = choices.find((item) => item.id === token.dataset.dragChoice);
    if (choice) token.setAttribute("aria-label", `${localize(choice.label)}. ${localize(choice.description)}`);
  });
}

function showDecisionWorkbench(choices) {
  const wasVisible = !elements.decisionWorkbench.hidden;

  if (!wasVisible) {
    ledgerOpened = false;
    bridgeInspected = false;
    decisionLocked = false;
    dragState = null;
    elements.ledgerBook.classList.remove("is-open");
    elements.ledgerBook.setAttribute("aria-expanded", "false");
    elements.decisionWorkbench.classList.remove("is-ledger-open", "is-bridge-inspected");
    elements.bridgeFinding.hidden = true;
    elements.northbridgeDrop.classList.remove("is-hot", "is-accepted");
    getDraggableProps().forEach(resetDecisionToken);
  }

  elements.workbenchChoiceFallback.innerHTML = choices
    .map(
      (choice, index) => `
        <button class="fallback-choice-button" type="button" data-choice-id="${choice.id}">
          <span>0${index + 1}</span>
          <strong>${localize(choice.label)}</strong>
        </button>
      `
    )
    .join("");

  updateWorkbenchCopy(choices);
  setBridgeInspectionEnabled(ledgerOpened && !bridgeInspected && !decisionLocked);
  setDecisionControlsEnabled(bridgeInspected && !decisionLocked);
  elements.decisionWorkbench.hidden = false;
  elements.courtScene.classList.add("is-deciding");
  const nextStep = !ledgerOpened ? "ledger" : bridgeInspected ? "props" : "bridge";
  scheduleTutorialSpotlight(nextStep, 80);
}

function hideDecisionWorkbench() {
  window.clearTimeout(decisionTimer);
  decisionTimer = null;
  dragState = null;
  decisionLocked = false;
  clearTutorialSpotlight();
  elements.decisionWorkbench.hidden = true;
  elements.decisionWorkbench.classList.remove("is-moving-token", "is-ledger-open", "is-bridge-inspected");
  elements.courtScene.classList.remove("is-deciding");
  elements.northbridgeDrop.classList.remove("is-hot", "is-accepted");
  elements.bridgeFinding.hidden = true;
  getDraggableProps().forEach(resetDecisionToken);
}

function openLedger() {
  if (ledgerOpened || decisionLocked) return;

  ledgerOpened = true;
  elements.ledgerBook.classList.add("is-open");
  elements.decisionWorkbench.classList.add("is-ledger-open");
  elements.ledgerBook.setAttribute("aria-expanded", "true");
  updateWorkbenchCopy(currentLine.choices || []);
  elements.workbenchStatus.textContent = getWorkbenchCopy().ledgerOpened;
  setBridgeInspectionEnabled(true);
  setDecisionControlsEnabled(false);
  scheduleTutorialSpotlight("bridge", 520);
}

function completeBridgeInspection(token = elements.bridgePiece, originRect = null) {
  if (!ledgerOpened || bridgeInspected || decisionLocked || token.disabled) return;

  bridgeInspected = true;
  clearTutorialSpotlight();
  setBridgeInspectionEnabled(false);
  elements.decisionWorkbench.classList.remove("is-moving-token");
  elements.northbridgeDrop.classList.remove("is-hot");
  elements.northbridgeDrop.classList.add("is-accepted");

  if (originRect) {
    const dropRect = elements.northbridgeDrop.getBoundingClientRect();
    const targetX = dropRect.left + dropRect.width / 2 - (originRect.left + originRect.width / 2);
    const targetY = dropRect.top + dropRect.height / 2 - (originRect.top + originRect.height / 2);
    token.style.setProperty("--drag-x", `${targetX}px`);
    token.style.setProperty("--drag-y", `${targetY}px`);
    token.classList.remove("is-dragging");
    token.classList.add("is-accepted");
  }

  decisionTimer = window.setTimeout(() => {
    decisionTimer = null;
    elements.decisionWorkbench.classList.add("is-bridge-inspected");
    elements.bridgeFinding.hidden = false;
    elements.northbridgeDrop.classList.remove("is-accepted");
    updateWorkbenchCopy(currentLine.choices || []);
    setDecisionControlsEnabled(true);
    elements.workbenchStatus.textContent = getWorkbenchCopy().bridgeInspected;
    scheduleTutorialSpotlight("props", 360);
  }, originRect ? 420 : 160);
}

function isPointInside(element, x, y) {
  const rect = element.getBoundingClientRect();
  return x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom;
}

function beginTokenDrag(event) {
  const token = event.currentTarget;
  if (token.disabled || decisionLocked) return;

  event.preventDefault();
  token.setPointerCapture(event.pointerId);
  dragState = {
    token,
    pointerId: event.pointerId,
    startX: event.clientX,
    startY: event.clientY,
    originRect: token.getBoundingClientRect(),
    moved: false
  };
  token.classList.add("is-dragging");
  clearTutorialSpotlight();
  elements.decisionWorkbench.classList.add("is-moving-token");
}

function moveToken(event) {
  if (!dragState || dragState.pointerId !== event.pointerId) return;

  const deltaX = event.clientX - dragState.startX;
  const deltaY = event.clientY - dragState.startY;
  if (Math.hypot(deltaX, deltaY) > 6) dragState.moved = true;

  dragState.token.style.setProperty("--drag-x", `${deltaX}px`);
  dragState.token.style.setProperty("--drag-y", `${deltaY}px`);
  elements.northbridgeDrop.classList.toggle("is-hot", isPointInside(elements.northbridgeDrop, event.clientX, event.clientY));
}

function commitWorkbenchChoice(choiceId, token = null, originRect = null) {
  const choice = getCurrentChoice(choiceId);
  if (!choice || !bridgeInspected || decisionLocked) return;

  decisionLocked = true;
  clearTutorialSpotlight();
  elements.decisionWorkbench.classList.remove("is-moving-token");
  setDecisionControlsEnabled(false);
  elements.northbridgeDrop.classList.remove("is-hot");
  elements.northbridgeDrop.classList.add("is-accepted");
  elements.workbenchStatus.textContent = getWorkbenchCopy().choicePlaced;

  if (token && originRect) {
    const dropRect = elements.northbridgeDrop.getBoundingClientRect();
    const targetX = dropRect.left + dropRect.width / 2 - (originRect.left + originRect.width / 2);
    const targetY = dropRect.top + dropRect.height / 2 - (originRect.top + originRect.height / 2);
    token.style.setProperty("--drag-x", `${targetX}px`);
    token.style.setProperty("--drag-y", `${targetY}px`);
    token.classList.remove("is-dragging");
    token.classList.add("is-accepted");
  }

  decisionTimer = window.setTimeout(() => applyChoice(choice), token ? 360 : 120);
}

function endTokenDrag(event) {
  if (!dragState || dragState.pointerId !== event.pointerId) return;

  const { token, moved, originRect } = dragState;
  const dropped = moved && isPointInside(elements.northbridgeDrop, event.clientX, event.clientY);
  dragState = null;
  elements.decisionWorkbench.classList.remove("is-moving-token");
  elements.northbridgeDrop.classList.remove("is-hot");

  if (moved) ignoreTokenClickUntil = performance.now() + 350;

  if (dropped) {
    if (token.dataset.dragAction === "inspect_bridge") {
      completeBridgeInspection(token, originRect);
    } else {
      commitWorkbenchChoice(token.dataset.dragChoice, token, originRect);
    }
    return;
  }

  resetDecisionToken(token);
  if (moved) scheduleTutorialSpotlight(bridgeInspected ? "props" : "bridge", 120);
}

function cancelTokenDrag(event) {
  if (!dragState || dragState.pointerId !== event.pointerId) return;
  const { token } = dragState;
  dragState = null;
  elements.decisionWorkbench.classList.remove("is-moving-token");
  elements.northbridgeDrop.classList.remove("is-hot");
  resetDecisionToken(token);
  scheduleTutorialSpotlight(bridgeInspected ? "props" : "bridge", 120);
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
    if (activeRevealId) renderActiveRevealCopy(activeRevealId);
    renderLine(currentLine, { record: false, animate: false, ending: currentLineIsEnding });
    if (tutorialStep && !elements.decisionWorkbench.hidden) showTutorialSpotlight(tutorialStep);
    if (!elements.decisionWorkbench.hidden) {
      if (bridgeInspected) {
        elements.workbenchStatus.textContent = getWorkbenchCopy().bridgeInspected;
      } else if (ledgerOpened) {
        elements.workbenchStatus.textContent = getWorkbenchCopy().ledgerOpened;
      }
    }
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
  elements.courtScene.classList.add("is-answering", "has-kingdom-answer");
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
  return state.companions[id] || state.companions.mp;
}

function isCharacterIdentityRevealed(companion) {
  return Boolean(companion.revealed || (companion.identityRevealedKey && state[companion.identityRevealedKey]));
}

function isCharacterVisible(companion) {
  if (!companion.hidden) return true;
  return Boolean(isCharacterIdentityRevealed(companion) || (companion.teaserSeenKey && state[companion.teaserSeenKey]));
}

function resolveCharacterIdentity(id) {
  const companion = getCompanion(id);
  const isHidden = companion.hidden && !isCharacterIdentityRevealed(companion);
  return {
    name: isHidden ? companion.hiddenName : companion.name || companion.canonicalName,
    role: isHidden ? companion.hiddenRole : companion.role || companion.canonicalRole
  };
}

function getPortraitPresentation(id) {
  return getCompanion(id).portraitPresentation || {};
}

function localizePortraitLabel(id, type) {
  const companion = getCompanion(id);
  const identity = resolveCharacterIdentity(id);
  if (companion.hidden && !isCharacterIdentityRevealed(companion)) {
    return currentLanguage === "zh" ? "神秘人物剪影" : "Unknown figure";
  }

  const name = localize(identity.name);
  if (!name) return "";
  if (currentLanguage === "zh") return `${name}头像`;
  return type === "reveal" ? `Portrait of ${name}` : `${name} portrait`;
}

function applyPortraitPresentation(frame, image, presentation, type, id) {
  const asset = type === "reveal" ? presentation.revealAsset : presentation.dialogueAsset;
  if (!frame || !image || !asset) {
    if (frame) frame.hidden = true;
    return;
  }

  const position = type === "reveal" ? presentation.revealPosition : presentation.dialoguePosition;
  const scale = type === "reveal" ? presentation.revealScale : presentation.dialogueScale;

  frame.hidden = false;
  frame.classList.toggle("is-hidden-portrait", Boolean(presentation.hiddenPortrait));
  frame.style.setProperty("--portrait-object-position", position || "50% 20%");
  frame.style.setProperty("--portrait-crop-scale", scale || 1);
  image.src = asset;
  image.alt = localizePortraitLabel(id, type);
}

function renderCompanionStage(speaker) {
  const knownSpeaker = state.companions[speaker] ? speaker : "mp";
  const knownSpeakerIsHidden = Boolean(getCompanion(knownSpeaker).hidden);

  if (knownSpeaker !== stagedSpeaker) {
    if (stagedSpeaker && !getCompanion(stagedSpeaker).hidden && !knownSpeakerIsHidden) {
      supportingSpeaker = stagedSpeaker;
    } else if (knownSpeakerIsHidden) {
      supportingSpeaker = null;
    }
    stagedSpeaker = knownSpeaker;
  }

  elements.companionStage.dataset.speaker = knownSpeaker;
  document.querySelectorAll("[data-companion]").forEach((actor) => {
    const id = actor.dataset.companion;
    const companion = getCompanion(id);
    actor.classList.toggle("is-active", id === stagedSpeaker);
    actor.classList.toggle("is-supporting", id === supportingSpeaker && id !== stagedSpeaker);
    actor.classList.toggle("is-revealed", isCharacterVisible(companion));
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
  const identity = resolveCharacterIdentity(line.speaker);
  dialogueHistory.push({
    speaker: line.speaker,
    name: identity.name,
    role: line.role || identity.role,
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
      const name = entry.speaker === "throne" ? translate("throne") : localize(entry.name || resolveCharacterIdentity(entry.speaker).name);
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
    hideDecisionWorkbench();
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
  const identity = resolveCharacterIdentity(line.speaker);
  currentLineIsEnding = ending;

  if (line.phase) state.phase = line.phase;
  if (line.day) state.day = line.day;
  if (line.sceneTone) state.sceneTone = line.sceneTone;
  if (line.sceneTone && line.sceneTone !== "morning") {
    elements.kingdomAnswer.classList.remove("is-playing", "is-settled");
    elements.courtScene.classList.remove("has-kingdom-answer");
  }
  if (line.revealLedger) elements.ledgerSlip.classList.add("is-visible");
  if (companion.hidden && companion.teaserSeenKey) state[companion.teaserSeenKey] = true;

  elements.speakerName.textContent = localize(identity.name);
  elements.speakerRole.textContent = localize(line.role || identity.role) || "";
  applyPortraitPresentation(
    elements.speakerToken,
    elements.speakerPortrait,
    getPortraitPresentation(line.speaker),
    "dialogue",
    line.speaker
  );

  renderState();
  if (record) recordDialogue(line);
  revealLine(localize(line.text), animate);
}

function getPendingRevealId() {
  const revealId = currentLine.revealAfter;
  if (!revealId || !demo.characterReveals?.[revealId]) return null;
  return state.revealsSeen?.[revealId] ? null : revealId;
}

function renderActiveRevealCopy(revealId) {
  const reveal = demo.characterReveals[revealId];
  const companion = getCompanion(revealId);
  if (!reveal || !companion) return;

  elements.revealName.textContent = localize(companion.name);
  elements.revealRole.textContent = localize(reveal.role);
  elements.revealTagline.textContent = localize(reveal.tagline);
  elements.revealContinueIndicator.textContent = translate("revealContinue");
}

function finishCharacterReveal({ advance = false } = {}) {
  window.clearTimeout(revealTimer);
  revealTimer = null;

  if (advance) {
    elements.characterReveal.hidden = true;
    elements.characterReveal.className = "character-reveal";
    activeRevealId = null;
    revealIsSettled = false;
    nextLine();
    return;
  }

  revealIsSettled = true;
  elements.characterReveal.classList.add("is-settled");
}

function showCharacterReveal(revealId) {
  const reveal = demo.characterReveals[revealId];
  state.revealsSeen[revealId] = true;
  activeRevealId = revealId;
  revealIsSettled = false;

  renderActiveRevealCopy(revealId);
  applyPortraitPresentation(
    elements.revealPortraitFrame,
    elements.revealPortrait,
    getPortraitPresentation(revealId),
    "reveal",
    revealId
  );
  elements.characterReveal.className = `character-reveal is-active theme-${reveal.theme}`;
  elements.characterReveal.hidden = false;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const settleDelay = prefersReducedMotion ? 80 : 900;
  revealTimer = window.setTimeout(() => finishCharacterReveal(), settleDelay);
}

function renderChoices(choices) {
  if (!choices.length) {
    hideDecisionWorkbench();
    elements.choiceRow.innerHTML = "";
    elements.continueButton.hidden = false;
    return;
  }

  elements.continueButton.hidden = true;
  elements.choiceRow.innerHTML = "";
  showDecisionWorkbench(choices);
}

function applyChoice(choice) {
  if (selectedChoice) return;

  hideDecisionWorkbench();
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
  if (activeRevealId) {
    if (revealIsSettled) {
      finishCharacterReveal({ advance: true });
      return;
    }
    finishCharacterReveal();
    return;
  }

  if (!typingComplete) {
    revealFullLine();
    return;
  }

  const pendingRevealId = getPendingRevealId();
  if (pendingRevealId) {
    showCharacterReveal(pendingRevealId);
    return;
  }

  nextLine();
}

function resetRunState() {
  window.clearTimeout(openingTimer);
  window.clearTimeout(kingdomAnswerTimer);
  window.clearTimeout(typingTimer);
  window.clearTimeout(decisionTimer);
  window.clearTimeout(revealTimer);

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
  decisionTimer = null;
  revealTimer = null;
  activeRevealId = null;
  revealIsSettled = false;
  window.clearTimeout(tutorialTimer);
  ledgerOpened = false;
  bridgeInspected = false;
  decisionLocked = false;
  dragState = null;
  ignoreTokenClickUntil = 0;
  clearTutorialSpotlight();

  elements.openingSequence.classList.remove("is-leaving", "is-changing");
  elements.courtScene.classList.remove("is-visible", "is-answering", "is-deciding", "has-kingdom-answer");
  elements.ledgerSlip.classList.remove("is-visible");
  elements.kingdomAnswer.classList.remove("is-playing", "is-settled");
  elements.consequenceToast.classList.remove("show");
  elements.consequenceToast.textContent = "";
  elements.characterReveal.hidden = true;
  elements.characterReveal.className = "character-reveal";
  elements.choiceRow.innerHTML = "";
  elements.workbenchChoiceFallback.innerHTML = "";
  elements.decisionWorkbench.hidden = true;
  elements.ledgerBook.classList.remove("is-open");
  elements.ledgerBook.setAttribute("aria-expanded", "false");
  elements.bridgeFinding.hidden = true;
  elements.northbridgeDrop.classList.remove("is-hot", "is-accepted");
  elements.decisionWorkbench.classList.remove("is-moving-token", "is-ledger-open", "is-bridge-inspected");
  getDraggableProps().forEach(resetDecisionToken);
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
elements.characterReveal.addEventListener("click", advanceDialogue);

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

elements.ledgerBook.addEventListener("click", openLedger);

elements.workbenchChoiceFallback.addEventListener("click", (event) => {
  const button = event.target.closest("[data-choice-id]");
  if (!button || button.disabled) return;
  commitWorkbenchChoice(button.dataset.choiceId);
});

getDraggableProps().forEach((token) => {
  token.addEventListener("pointerdown", beginTokenDrag);
  token.addEventListener("pointermove", moveToken);
  token.addEventListener("pointerup", endTokenDrag);
  token.addEventListener("pointercancel", cancelTokenDrag);
  token.addEventListener("click", () => {
    if (performance.now() < ignoreTokenClickUntil || token.disabled || decisionLocked) return;
    if (token.dataset.dragAction === "inspect_bridge") {
      completeBridgeInspection(token, token.getBoundingClientRect());
    } else {
      commitWorkbenchChoice(token.dataset.dragChoice);
    }
  });
});

window.addEventListener("resize", () => {
  if (tutorialStep) scheduleTutorialSpotlight(tutorialStep, 40);
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
