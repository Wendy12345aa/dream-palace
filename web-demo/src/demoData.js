window.DREAM_PALACE_DEMO = {
  ui: {
    en: {
      demoTitle: "The First Morning Court",
      skipOpening: "Skip opening",
      continue: "Continue",
      northbridge: "Northbridge",
      emergencyReserve: "Emergency reserve",
      day1Morning: "Day 1 - Morning",
      day2Dawn: "Day 2 - Dawn",
      morningCourt: "Morning Court",
      visibleConsequence: "Visible Consequence",
      eveningReflection: "Evening Reflection",
      tomorrowTeaser: "Tomorrow Teaser"
    },
    zh: {
      demoTitle: "第一次早朝",
      skipOpening: "跳过开场",
      continue: "继续",
      northbridge: "北桥村",
      emergencyReserve: "紧急储备",
      day1Morning: "第一日 · 清晨",
      day2Dawn: "第二日 · 黎明",
      morningCourt: "第一次早朝",
      visibleConsequence: "王国的回应",
      eveningReflection: "暮色复盘",
      tomorrowTeaser: "明日悬念"
    }
  },

  openingShots: [
    {
      src: "../assets/cg/opening/cg_opening_01_city_before_dawn.webp",
      kicker: { en: "Before the first bell", zh: "晨钟响起之前" },
      title: { en: "The kingdom was already awake.", zh: "王国早已醒来。" },
      position: "center center"
    },
    {
      src: "../assets/cg/opening/cg_opening_02_petition_handover.webp",
      kicker: { en: "Northbridge Village", zh: "北桥村" },
      title: { en: "A request left home before sunrise.", zh: "一封请愿，在日出前离开了故乡。" },
      position: "center center"
    },
    {
      src: "../assets/cg/opening/cg_opening_03_messenger_to_capital.webp",
      kicker: { en: "The northern road", zh: "北境官道" },
      title: { en: "One message crossed the waking kingdom.", zh: "这一封信，穿过正在苏醒的王国。" },
      position: "center center"
    },
    {
      src: "../assets/cg/opening/cg_opening_04_mp_ledger.webp",
      kicker: { en: "The treasury", zh: "国库" },
      title: { en: "Every answer would cost something.", zh: "每一个答案，都有代价。" },
      position: "center center"
    },
    {
      src: "../assets/cg/opening/cg_opening_05_tab_review.webp",
      kicker: { en: "The review chamber", zh: "监察署" },
      title: { en: "Every exception would leave a precedent.", zh: "每一次破例，都会留下先例。" },
      position: "center center"
    },
    {
      src: "../assets/cg/opening/cg_opening_06_kel_blueprint.webp",
      kicker: { en: "The workshop", zh: "工坊" },
      title: { en: "Someone still had to build the answer.", zh: "而答案，终究要有人亲手造出来。" },
      position: "center center"
    },
    {
      src: "../assets/cg/opening/cg_opening_07_empty_morning_court.webp",
      kicker: { en: "Morning Court", zh: "早朝" },
      title: { en: "The court was ready. The decision was missing.", zh: "朝堂已经就绪，只差一个决定。" },
      position: "center center"
    },
    {
      src: "../assets/cg/opening/cg_opening_08_court_turns_to_player.webp",
      kicker: { en: "Your first morning", zh: "你的第一个清晨" },
      title: { en: "Then the doors opened.", zh: "然后，门开了。" },
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
      reserveStatus: { en: "Sealed", zh: "封存中" },
      villageStatus: {
        en: "Northbridge is waiting for the court's first decision.",
        zh: "北桥村正在等待朝廷的第一个决定。"
      },
      bridgeStatus: { en: "Old supply bridge damaged", zh: "旧补给桥已损坏" }
    },
    consequences: [],
    companions: {
      mp: {
        id: "mp",
        name: "MP",
        role: { en: "Treasury and responsibility", zh: "国库与财政责任" }
      },
      tab: {
        id: "tab",
        name: "Tab",
        role: { en: "Quality and risk", zh: "监察、标准与风险" }
      },
      kel: {
        id: "kel",
        name: "Kel",
        role: { en: "Engineering and construction", zh: "工程与建设" }
      },
      cx: {
        id: "cx",
        name: "CX",
        role: { en: "Intelligence and tomorrow's hook", zh: "情报与明日悬念" },
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
        zh: "殿下，北桥村的第一封请愿，在天亮前送到了。"
      }
    },
    {
      speaker: "mp",
      focus: "northbridge",
      revealLedger: true,
      text: {
        en: "Their granary is intact, but the supply bridge failed after last night's rain. Grain exists. People cannot reach it.",
        zh: "粮仓仍然完好，但昨夜大雨冲毁了补给桥。粮食就在河对岸，百姓却拿不到。"
      }
    },
    {
      speaker: "tab",
      focus: "tab",
      text: {
        en: "Emergency release is possible, but it reduces our margin before winter. Mercy without a repair plan only postpones the same failure.",
        zh: "可以动用紧急储备，但这会削弱入冬前的余量。没有修复方案的援助，只会把同一个问题推迟到明天。"
      }
    },
    {
      speaker: "kel",
      focus: "kel",
      text: {
        en: "Give me stored timber and a work crew. I can put a temporary frame across the river before the last cart leaves.",
        zh: "给我库存木料和一队工匠。最后一辆粮车出发前，我能先在河上架起临时桥。"
      }
    },
    {
      speaker: "mp",
      focus: "northbridge",
      text: {
        en: "The village is waiting. Do we release grain now, or verify the shortage before opening the reserve?",
        zh: "村民正在等候。我们立即放粮，还是先核实灾情，再开启储备？"
      },
      choices: [
        {
          id: "release_grain",
          label: { en: "Release emergency grain", zh: "立即发放紧急粮食" },
          description: {
            en: "Protect the village now and begin a temporary bridge repair.",
            zh: "先保住村庄，同时启动临时桥修复。"
          },
          stateChange: {
            grain: -900,
            trust: 8,
            stability: 2,
            reserveStatus: { en: "Opened before noon", zh: "午前已开启" },
            villageStatus: {
              en: "Grain carts are leaving the palace storehouse for Northbridge.",
              zh: "运粮车正从宫廷仓库驶向北桥村。"
            },
            bridgeStatus: { en: "Temporary repair underway", zh: "临时桥修复中" }
          },
          consequence: {
            en: "Emergency grain released. Repair crews dispatched.",
            zh: "紧急粮食已发放，修桥队伍已经出发。"
          },
          followUps: [
            {
              speaker: "mp",
              focus: "mp",
              text: {
                en: "Understood. I will open the reserve ledger and send the carts before noon.",
                zh: "明白。我会开启储备账册，让粮车在午前出发。"
              }
            },
            {
              speaker: "tab",
              focus: "tab",
              text: {
                en: "Approved with conditions. Kel's repair report will be on this table by sunset.",
                zh: "有条件批准。日落之前，Kel 的修复报告必须放到这张桌上。"
              }
            },
            {
              speaker: "kel",
              focus: "northbridge",
              text: {
                en: "The first beams are moving now. It will not be beautiful, but people will cross it safely.",
                zh: "第一批横梁已经在路上。它不会漂亮，但能让大家安全过河。"
              }
            }
          ]
        },
        {
          id: "audit_first",
          label: { en: "Audit before release", zh: "先核查，再开仓" },
          description: {
            en: "Protect the reserve and dispatch an inspection team first.",
            zh: "暂时保留储备，先派监察队核实情况。"
          },
          stateChange: {
            gold: -400,
            trust: -3,
            stability: 5,
            reserveStatus: { en: "Held for audit", zh: "等待核查" },
            villageStatus: {
              en: "Auditors travel north while the village remains under ration control.",
              zh: "监察队赶赴北境，村庄暂时维持配给。"
            },
            bridgeStatus: { en: "Inspection team dispatched", zh: "监察队已出发" }
          },
          consequence: {
            en: "Reserve held. Auditors sent to Northbridge.",
            zh: "储备暂缓开启，监察队已前往北桥村。"
          },
          followUps: [
            {
              speaker: "tab",
              focus: "tab",
              text: {
                en: "A cautious decision. I will verify the report and find who allowed the bridge to decay.",
                zh: "谨慎的决定。我会核实报告，也会查清是谁任由桥梁失修。"
              }
            },
            {
              speaker: "mp",
              focus: "mp",
              text: {
                en: "The reserve remains protected, but Northbridge will remember the delay. We must answer before sunset.",
                zh: "储备保住了，但北桥村会记得这段等待。日落前，我们必须给出答案。"
              }
            },
            {
              speaker: "kel",
              focus: "northbridge",
              text: {
                en: "I will prepare the timber anyway. If the report is true, we should not lose another hour.",
                zh: "我会先备好木料。如果报告属实，我们不能再浪费一个时辰。"
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
        zh: "请看，殿下。这张沙盘已经开始回应您的决定。"
      }
    },
    {
      speaker: "mp",
      focus: "mp",
      phase: "eveningReflection",
      sceneTone: "evening",
      text: {
        en: "Your first morning has ended. Northbridge will remember not only what the court decided, but how quickly we saw them.",
        zh: "您的第一个清晨结束了。北桥村记住的，不只是朝廷如何决定，还有我们用了多久才看见他们。"
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
        zh: "一个村庄已经看见了您的答案。明日，一个从未递交请愿的人，会来试探给出答案的究竟是怎样的君主。"
      }
    }
  ],

  endings: {
    release_grain: {
      speaker: "cx",
      focus: "cx",
      text: {
        en: "Northbridge eats tonight. A red mark waits in the reserve ledger for dawn. End of demo.",
        zh: "今晚，北桥村不会挨饿。而储备账册上的一道红痕，正等待黎明。试玩结束。"
      }
    },
    audit_first: {
      speaker: "cx",
      focus: "cx",
      text: {
        en: "The reserve is safe tonight. Northbridge is counting the hours until dawn. End of demo.",
        zh: "今晚，储备安然无恙。北桥村却在数着距离天亮还有几个时辰。试玩结束。"
      }
    },
    default: {
      speaker: "mp",
      focus: "mp",
      text: { en: "The next morning is waiting. End of demo.", zh: "下一个清晨正在等待。试玩结束。" }
    }
  }
};
