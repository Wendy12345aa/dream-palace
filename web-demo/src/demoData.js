window.DREAM_PALACE_DEMO = {
  ui: {
    en: {
      demoTitle: "The First Morning Court",
      skipOpening: "Skip opening",
      continue: "Continue",
      dialogueLog: "Dialogue log",
      closeLog: "Close",
      replayOther: "Replay another choice",
      restartDemo: "Restart demo",
      returnTitle: "Return to title",
      throne: "The Throne",
      rulerDecision: "Ruler's decision",
      northbridge: "Northbridge",
      emergencyReserve: "Emergency reserve",
      day1Morning: "Day 1 - Morning",
      day2Dawn: "Day 2 - Dawn",
      morningCourt: "Morning Court",
      visibleConsequence: "Visible Consequence",
      eveningReflection: "Evening Reflection",
      tomorrowTeaser: "Tomorrow Teaser",
      answerReleaseKicker: "Kel begins construction",
      answerReleaseTitle: "Grain moves. The bridge rises.",
      answerReleaseDetail: "Supply carts depart while a temporary crossing takes shape.",
      answerAuditKicker: "Tab begins inspection",
      answerAuditTitle: "The reserve holds. The inquiry begins.",
      answerAuditDetail: "Inspectors reach the damaged bridge while Northbridge remains on ration control."
    },
    zh: {
      demoTitle: "第一次早朝",
      skipOpening: "跳过开场",
      continue: "继续",
      dialogueLog: "对话记录",
      closeLog: "关闭",
      replayOther: "体验另一选择",
      restartDemo: "重新开始",
      returnTitle: "返回标题",
      throne: "王座",
      rulerDecision: "你的决定",
      northbridge: "北桥村",
      emergencyReserve: "应急粮食储备",
      day1Morning: "第一天 · 早晨",
      day2Dawn: "第二天 · 清晨",
      morningCourt: "第一次早朝",
      visibleConsequence: "决定带来的变化",
      eveningReflection: "当天总结",
      tomorrowTeaser: "明天的线索",
      answerReleaseKicker: "Kel 开始施工",
      answerReleaseTitle: "粮车出发，临时桥开工。",
      answerReleaseDetail: "运粮车正赶往北桥村，工人也开始搭建临时桥。",
      answerAuditKicker: "Tab 开始调查",
      answerAuditTitle: "粮食暂不动用，调查已经开始。",
      answerAuditDetail: "调查队已到断桥现场，北桥村目前只能限量领粮。"
    }
  },

  openingShots: [
    {
      src: "../assets/cg/opening/cg_opening_01_city_before_dawn.webp",
      kicker: { en: "Before the first bell", zh: "天还没亮" },
      title: { en: "The capital was already in motion.", zh: "王城里已经有人开始忙了。" },
      duration: 5200,
      position: "center center"
    },
    {
      src: "../assets/cg/opening/cg_opening_02_petition_handover.webp",
      kicker: { en: "Northbridge Village", zh: "北桥村" },
      title: { en: "A request left home before sunrise.", zh: "天亮前，一封求助信从村里送了出来。" },
      duration: 5200,
      position: "center center"
    },
    {
      src: "../assets/cg/opening/cg_opening_03_messenger_to_capital.webp",
      kicker: { en: "The northern road", zh: "前往王城" },
      title: { en: "One message crossed the waking kingdom.", zh: "信使带着求助信，一路赶往王城。" },
      duration: 5000,
      position: "center center"
    },
    {
      src: "../assets/cg/opening/cg_opening_04_mp_ledger.webp",
      kicker: { en: "The treasury", zh: "国库" },
      title: { en: "Every answer would cost something.", zh: "无论怎么选择，都要付出代价。" },
      duration: 4800,
      position: "center center"
    },
    {
      src: "../assets/cg/opening/cg_opening_05_tab_review.webp",
      kicker: { en: "The review chamber", zh: "审核室" },
      title: { en: "Every exception would leave a precedent.", zh: "一旦破例，以后就可能有人照着做。" },
      duration: 5000,
      position: "center center"
    },
    {
      src: "../assets/cg/opening/cg_opening_06_kel_blueprint.webp",
      kicker: { en: "The workshop", zh: "工坊" },
      title: { en: "Someone still had to build the answer.", zh: "决定做出来以后，还需要有人把它完成。" },
      duration: 4800,
      position: "center center"
    },
    {
      src: "../assets/cg/opening/cg_opening_07_empty_morning_court.webp",
      kicker: { en: "Morning Court", zh: "第一次早朝" },
      title: { en: "The court was ready. The decision was missing.", zh: "所有人都准备好了，只等你来做决定。" },
      duration: 5200,
      position: "center center"
    },
    {
      src: "../assets/cg/opening/cg_opening_08_court_turns_to_player.webp",
      kicker: { en: "Your first morning", zh: "你来到朝堂" },
      title: { en: "Then the doors opened.", zh: "大门打开，所有人都看向了你。" },
      duration: 5200,
      position: "center center"
    }
  ],

  initialState: {
    day: "day1Morning",
    phase: "morningCourt",
    sceneTone: "morning",
    kingdom: {
      grain: 8200,
      gold: 16000,
      trust: 42,
      stability: 58,
      reserveStatus: { en: "Sealed", zh: "还没动用" },
      villageStatus: {
        en: "Northbridge is waiting for the court's first decision.",
        zh: "北桥村正在等你的决定。"
      },
      bridgeStatus: { en: "Old supply bridge damaged", zh: "运粮用的旧桥断了" }
    },
    consequences: [],
    companions: {
      mp: {
        id: "mp",
        name: "MP",
        role: { en: "Treasury and responsibility", zh: "财政与物资" }
      },
      tab: {
        id: "tab",
        name: "Tab",
        role: { en: "Quality and risk", zh: "审核与风险" }
      },
      kel: {
        id: "kel",
        name: "Kel",
        role: { en: "Engineering and construction", zh: "工程与建设" }
      },
      cx: {
        id: "cx",
        name: "CX",
        role: { en: "Intelligence and tomorrow's hook", zh: "情报与调查" },
        hidden: true,
        revealed: false
      }
    }
  },

  beats: [
    {
      speaker: "mp",
      focus: "mp",
      text: {
        en: "Your Highness, Northbridge sent its first petition before dawn.",
        zh: "殿下，北桥村的求助信在天亮前送到了。"
      }
    },
    {
      speaker: "mp",
      focus: "northbridge",
      revealLedger: true,
      text: {
        en: "Their granary is intact, but the supply bridge failed after last night's rain. Grain exists. People cannot reach it.",
        zh: "村里的粮仓没有坏，但昨晚的暴雨冲断了运粮桥。粮食在河对岸，村民过不去，也运不回来。"
      }
    },
    {
      speaker: "tab",
      focus: "tab",
      text: {
        en: "Emergency release is possible, but it reduces our margin before winter. Mercy without a repair plan only postpones the same failure.",
        zh: "我们可以马上把应急粮食送过去，但这样一来，冬天前能用的储备就会变少。如果只送粮、不修桥，同样的问题很快还会再发生。"
      }
    },
    {
      speaker: "kel",
      focus: "kel",
      text: {
        en: "Give me stored timber and a work crew. I can put a temporary frame across the river before the last cart leaves.",
        zh: "给我仓库里的木料和一队工人。我可以先搭一座临时桥，让粮车今天就能过河。"
      }
    },
    {
      speaker: "mp",
      focus: "northbridge",
      text: {
        en: "The village is waiting. Do we release grain now, or verify the shortage before opening the reserve?",
        zh: "北桥村还在等。我们是现在送粮并修桥，还是先确认情况，再决定要不要动用储备？"
      },
      choices: [
        {
          id: "release_grain",
          label: { en: "Release emergency grain", zh: "马上送粮并修桥" },
          description: {
            en: "Protect the village now and begin a temporary bridge repair.",
            zh: "先让村民吃上粮，同时搭建临时桥。"
          },
          stateChange: {
            grain: -900,
            trust: 8,
            stability: 2,
            reserveStatus: { en: "Opened before noon", zh: "中午前开始发粮" },
            villageStatus: {
              en: "Grain carts are leaving the palace storehouse for Northbridge.",
              zh: "运粮车正在从王城出发，前往北桥村。"
            },
            bridgeStatus: { en: "Temporary repair underway", zh: "临时桥正在搭建" }
          },
          consequence: {
            en: "Emergency grain released. Repair crews dispatched.",
            zh: "运粮车和修桥队已经出发。"
          },
          followUps: [
            {
              speaker: "mp",
              focus: "mp",
              text: {
                en: "Understood. I will open the reserve ledger and send the carts before noon.",
                zh: "明白。我马上安排发粮，保证运粮车中午前出发。"
              }
            },
            {
              speaker: "tab",
              focus: "tab",
              text: {
                en: "Approved with conditions. Kel's repair report will be on this table by sunset.",
                zh: "同意，但有一个条件：天黑前，我要看到 Kel 的修桥报告。"
              }
            },
            {
              speaker: "kel",
              focus: "northbridge",
              text: {
                en: "The first beams are moving now. It will not be beautiful, but people will cross it safely.",
                zh: "第一批木料已经运过去了。临时桥不需要漂亮，只要能让大家安全过河。"
              }
            }
          ]
        },
        {
          id: "audit_first",
          label: { en: "Audit before release", zh: "先调查，再决定是否发粮" },
          description: {
            en: "Protect the reserve and dispatch an inspection team first.",
            zh: "先不动应急粮食，派调查队确认情况。"
          },
          stateChange: {
            gold: -400,
            trust: -3,
            stability: 5,
            reserveStatus: { en: "Held for audit", zh: "等待调查结果" },
            villageStatus: {
              en: "Auditors travel north while the village remains under ration control.",
              zh: "调查队正赶往北桥村，村民目前只能限量领粮。"
            },
            bridgeStatus: { en: "Inspection team dispatched", zh: "调查队已经出发" }
          },
          consequence: {
            en: "Reserve held. Auditors sent to Northbridge.",
            zh: "应急粮食暂不动用，调查队已前往北桥村。"
          },
          followUps: [
            {
              speaker: "tab",
              focus: "tab",
              text: {
                en: "A cautious decision. I will verify the report and find who allowed the bridge to decay.",
                zh: "这样比较谨慎。我会确认求助内容，也会查清这座桥为什么一直没人维修。"
              }
            },
            {
              speaker: "mp",
              focus: "mp",
              text: {
                en: "The reserve remains protected, but Northbridge will remember the delay. We must answer before sunset.",
                zh: "粮食储备保住了，但北桥村也会记得自己等了多久。我们必须在天黑前给他们一个答复。"
              }
            },
            {
              speaker: "kel",
              focus: "northbridge",
              text: {
                en: "I will prepare the timber anyway. If the report is true, we should not lose another hour.",
                zh: "我先准备木料。如果情况属实，我们不能再耽误。"
              }
            }
          ]
        }
      ]
    },
    {
      speaker: "kel",
      focus: "northbridge",
      phase: "visibleConsequence",
      text: {
        en: "Look closely, Your Highness. The table is already answering you.",
        zh: "请看，沙盘已经显示出你的决定带来的变化。"
      }
    },
    {
      speaker: "mp",
      focus: "mp",
      phase: "eveningReflection",
      sceneTone: "evening",
      text: {
        en: "Your first morning has ended. Northbridge will remember not only what the court decided, but how quickly we saw them.",
        zh: "今天的早朝结束了。北桥村记住的不只是我们的决定，也会记得我们用了多久才回应他们。"
      }
    },
    {
      speaker: "cx",
      focus: "cx",
      day: "day2Dawn",
      phase: "tomorrowTeaser",
      sceneTone: "dawn",
      text: {
        en: "One village saw your answer. Tomorrow, someone who never petitioned will test what kind of ruler gave it.",
        zh: "北桥村已经看到了你的选择。明天，一个从没递过求助信的人会来看看，你究竟是怎样的统治者。"
      }
    }
  ],

  endings: {
    release_grain: {
      speaker: "cx",
      focus: "cx",
      text: {
        en: "Northbridge eats tonight. A red mark waits in the reserve ledger for dawn. End of demo.",
        zh: "今晚，北桥村没人挨饿。但我们也动用了应急储备，明天还要面对新的压力。试玩到这里结束。"
      }
    },
    audit_first: {
      speaker: "cx",
      focus: "cx",
      text: {
        en: "The reserve is safe tonight. Northbridge is counting the hours until dawn. End of demo.",
        zh: "今晚，应急粮食没有动。但北桥村还在等待调查结果。试玩到这里结束。"
      }
    },
    default: {
      speaker: "mp",
      focus: "mp",
      text: { en: "The next morning is waiting. End of demo.", zh: "明天还会有人来早朝。试玩到这里结束。" }
    }
  }
};
