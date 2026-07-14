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
      tomorrowTeaser: "Tomorrow Teaser",
      answerReleaseKicker: "Kel begins construction",
      answerReleaseTitle: "Grain moves. The bridge rises.",
      answerReleaseDetail: "Supply carts depart while a temporary crossing takes shape.",
      answerAuditKicker: "Tab begins inspection",
      answerAuditTitle: "The reserve holds. The inquiry begins.",
      answerAuditDetail: "Inspectors reach the damaged bridge while Northbridge remains on ration control."
    },
    zh: {
      demoTitle: "初次早朝",
      skipOpening: "跳过开场",
      continue: "继续",
      northbridge: "北桥村",
      emergencyReserve: "应急储粮",
      day1Morning: "第一日 · 清晨",
      day2Dawn: "第二日 · 黎明",
      morningCourt: "初次早朝",
      visibleConsequence: "国事回响",
      eveningReflection: "暮间回顾",
      tomorrowTeaser: "明日暗流",
      answerReleaseKicker: "Kel 即刻动工",
      answerReleaseTitle: "粮车启程，临桥动工。",
      answerReleaseDetail: "运粮车队正赶往北桥村，河上的临时通道已开始搭建。",
      answerAuditKicker: "Tab 下令核查",
      answerAuditTitle: "储粮未动，核查已启。",
      answerAuditDetail: "监察队已赶赴断桥，北桥村暂按配给度日。"
    }
  },

  openingShots: [
    {
      src: "../assets/cg/opening/cg_opening_01_city_before_dawn.webp",
      kicker: { en: "Before the first bell", zh: "晨钟响起之前" },
      title: { en: "The capital was already in motion.", zh: "王城早已忙碌起来。" },
      position: "center center"
    },
    {
      src: "../assets/cg/opening/cg_opening_02_petition_handover.webp",
      kicker: { en: "Northbridge Village", zh: "北桥村" },
      title: { en: "A request left home before sunrise.", zh: "天亮之前，一封请愿书离开了北桥村。" },
      position: "center center"
    },
    {
      src: "../assets/cg/opening/cg_opening_03_messenger_to_capital.webp",
      kicker: { en: "The northern road", zh: "北境官道" },
      title: { en: "One message crossed the waking kingdom.", zh: "一封急信，沿北境官道奔向王城。" },
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
      title: { en: "Every exception would leave a precedent.", zh: "每一次破例，都会成为先例。" },
      position: "center center"
    },
    {
      src: "../assets/cg/opening/cg_opening_06_kel_blueprint.webp",
      kicker: { en: "The workshop", zh: "工坊" },
      title: { en: "Someone still had to build the answer.", zh: "朝堂定下的事，终究要有人亲手做成。" },
      position: "center center"
    },
    {
      src: "../assets/cg/opening/cg_opening_07_empty_morning_court.webp",
      kicker: { en: "Morning Court", zh: "早朝" },
      title: { en: "The court was ready. The decision was missing.", zh: "众臣已至，只候殿下定夺。" },
      position: "center center"
    },
    {
      src: "../assets/cg/opening/cg_opening_08_court_turns_to_player.webp",
      kicker: { en: "Your first morning", zh: "初临朝堂" },
      title: { en: "Then the doors opened.", zh: "殿门缓缓开启。" },
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
      reserveStatus: { en: "Sealed", zh: "尚未开仓" },
      villageStatus: {
        en: "Northbridge is waiting for the court's first decision.",
        zh: "北桥村正等候朝廷定夺。"
      },
      bridgeStatus: { en: "Old supply bridge damaged", zh: "北桥旧桥已毁" }
    },
    consequences: [],
    companions: {
      mp: {
        id: "mp",
        name: "MP",
        role: { en: "Treasury and responsibility", zh: "掌管国库与财政" }
      },
      tab: {
        id: "tab",
        name: "Tab",
        role: { en: "Quality and risk", zh: "掌管监察与验收" }
      },
      kel: {
        id: "kel",
        name: "Kel",
        role: { en: "Engineering and construction", zh: "掌管工程与营造" }
      },
      cx: {
        id: "cx",
        name: "CX",
        role: { en: "Intelligence and tomorrow's hook", zh: "掌管情报与隐患" },
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
        zh: "殿下，北桥村的请愿书已在天亮前送达。"
      }
    },
    {
      speaker: "mp",
      focus: "northbridge",
      revealLedger: true,
      text: {
        en: "Their granary is intact, but the supply bridge failed after last night's rain. Grain exists. People cannot reach it.",
        zh: "村中粮仓无损，可昨夜暴雨冲断了补给桥。粮就在河对岸，百姓却取不到。"
      }
    },
    {
      speaker: "tab",
      focus: "tab",
      text: {
        en: "Emergency release is possible, but it reduces our margin before winter. Mercy without a repair plan only postpones the same failure.",
        zh: "可以开仓赈济，只是储粮一旦动用，入冬前便少一分余裕。若不同时修桥，今日的援助也只是把难题留到明日。"
      }
    },
    {
      speaker: "kel",
      focus: "kel",
      text: {
        en: "Give me stored timber and a work crew. I can put a temporary frame across the river before the last cart leaves.",
        zh: "给我库中木料，再调一队工匠。最后一辆粮车启程之前，我能先在河上架起一座临桥。"
      }
    },
    {
      speaker: "mp",
      focus: "northbridge",
      text: {
        en: "The village is waiting. Do we release grain now, or verify the shortage before opening the reserve?",
        zh: "百姓正在等候。殿下，是立即开仓放粮，还是先核实灾情，再动用储备？"
      },
      choices: [
        {
          id: "release_grain",
          label: { en: "Release emergency grain", zh: "立即开仓赈粮" },
          description: {
            en: "Protect the village now and begin a temporary bridge repair.",
            zh: "先解北桥之急，同时抢修临桥。"
          },
          stateChange: {
            grain: -900,
            trust: 8,
            stability: 2,
            reserveStatus: { en: "Opened before noon", zh: "午前开仓" },
            villageStatus: {
              en: "Grain carts are leaving the palace storehouse for Northbridge.",
              zh: "运粮车正从王城粮仓赶往北桥村。"
            },
            bridgeStatus: { en: "Temporary repair underway", zh: "临桥抢修中" }
          },
          consequence: {
            en: "Emergency grain released. Repair crews dispatched.",
            zh: "赈粮令已下，修桥队伍已经出发。"
          },
          followUps: [
            {
              speaker: "mp",
              focus: "mp",
              text: {
                en: "Understood. I will open the reserve ledger and send the carts before noon.",
                zh: "遵命。臣这就开账放粮，确保粮车午前启程。"
              }
            },
            {
              speaker: "tab",
              focus: "tab",
              text: {
                en: "Approved with conditions. Kel's repair report will be on this table by sunset.",
                zh: "准予放粮，但有一事：日落前，Kel 的修桥报告必须送到案前。"
              }
            },
            {
              speaker: "kel",
              focus: "northbridge",
              text: {
                en: "The first beams are moving now. It will not be beautiful, but people will cross it safely.",
                zh: "第一批横梁已经上路。临桥不会好看，但足以让百姓平安过河。"
              }
            }
          ]
        },
        {
          id: "audit_first",
          label: { en: "Audit before release", zh: "先核灾情，再行开仓" },
          description: {
            en: "Protect the reserve and dispatch an inspection team first.",
            zh: "暂不动用储粮，先遣监察队查明实情。"
          },
          stateChange: {
            gold: -400,
            trust: -3,
            stability: 5,
            reserveStatus: { en: "Held for audit", zh: "封仓待查" },
            villageStatus: {
              en: "Auditors travel north while the village remains under ration control.",
              zh: "监察队已赶赴北境，北桥村暂按配给度日。"
            },
            bridgeStatus: { en: "Inspection team dispatched", zh: "监察队已启程" }
          },
          consequence: {
            en: "Reserve held. Auditors sent to Northbridge.",
            zh: "储粮暂不启封，监察队已赶往北桥村。"
          },
          followUps: [
            {
              speaker: "tab",
              focus: "tab",
              text: {
                en: "A cautious decision. I will verify the report and find who allowed the bridge to decay.",
                zh: "稳妥之举。臣会核实灾报，也会查清究竟是谁任由桥梁年久失修。"
              }
            },
            {
              speaker: "mp",
              focus: "mp",
              text: {
                en: "The reserve remains protected, but Northbridge will remember the delay. We must answer before sunset.",
                zh: "储粮得以保全，但北桥村也会记住这段等待。日落之前，朝廷必须给他们答复。"
              }
            },
            {
              speaker: "kel",
              focus: "northbridge",
              text: {
                en: "I will prepare the timber anyway. If the report is true, we should not lose another hour.",
                zh: "我先把木料备好。若灾情属实，便不能再耽搁一个时辰。"
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
        zh: "殿下请看，沙盘已显出这道决断带来的变化。"
      }
    },
    {
      speaker: "mp",
      focus: "mp",
      phase: "eveningReflection",
      sceneTone: "evening",
      text: {
        en: "Your first morning has ended. Northbridge will remember not only what the court decided, but how quickly we saw them.",
        zh: "殿下今日初临朝堂。北桥村记住的，不只是朝廷如何定夺，也会记得我们用了多久才听见他们。"
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
        zh: "北桥村已经见识了殿下的选择。明日，还会有一个从未递交请愿的人，来试探王座上的您。"
      }
    }
  ],

  endings: {
    release_grain: {
      speaker: "cx",
      focus: "cx",
      text: {
        en: "Northbridge eats tonight. A red mark waits in the reserve ledger for dawn. End of demo.",
        zh: "今夜，北桥村无人挨饿。只是储备账上的那道红痕，正等着天明。试玩至此结束。"
      }
    },
    audit_first: {
      speaker: "cx",
      focus: "cx",
      text: {
        en: "The reserve is safe tonight. Northbridge is counting the hours until dawn. End of demo.",
        zh: "今夜，储粮安然未动。北桥村却仍数着时辰，盼天早些亮。试玩至此结束。"
      }
    },
    default: {
      speaker: "mp",
      focus: "mp",
      text: { en: "The next morning is waiting. End of demo.", zh: "明日早朝，仍有人在等。试玩至此结束。" }
    }
  }
};
