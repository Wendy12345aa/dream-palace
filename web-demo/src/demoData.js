window.DREAM_PALACE_DEMO = {
  openingShots: [
    {
      src: "../assets/cg/opening/cg_opening_01_city_before_dawn.png",
      kicker: "Before the first bell",
      title: "The kingdom was already awake.",
      position: "center center"
    },
    {
      src: "../assets/cg/opening/cg_opening_02_petition_handover.png",
      kicker: "Northbridge Village",
      title: "A request left home before sunrise.",
      position: "center center"
    },
    {
      src: "../assets/cg/opening/cg_opening_03_messenger_to_capital.png",
      kicker: "The northern road",
      title: "One message crossed the waking kingdom.",
      position: "center center"
    },
    {
      src: "../assets/cg/opening/cg_opening_04_mp_ledger.png",
      kicker: "The treasury",
      title: "Every answer would cost something.",
      position: "center center"
    },
    {
      src: "../assets/cg/opening/cg_opening_05_tab_review.png",
      kicker: "The review chamber",
      title: "Every exception would leave a precedent.",
      position: "center center"
    },
    {
      src: "../assets/cg/opening/cg_opening_06_kel_blueprint.png",
      kicker: "The workshop",
      title: "Someone still had to build the answer.",
      position: "center center"
    },
    {
      src: "../assets/cg/opening/cg_opening_07_empty_morning_court.png",
      kicker: "Morning Court",
      title: "The court was ready. The decision was missing.",
      position: "center center"
    },
    {
      src: "../assets/cg/opening/cg_opening_08_court_turns_to_player.png",
      kicker: "Your first morning",
      title: "Then the doors opened.",
      position: "center center"
    }
  ],

  initialState: {
    day: "Day 1 - Morning",
    phase: "Morning Court",
    sceneTone: "morning",
    kingdom: {
      grain: 8200,
      gold: 16000,
      trust: 42,
      stability: 58,
      reserveStatus: "Sealed",
      villageStatus: "Northbridge is waiting for the court's first decision.",
      bridgeStatus: "Old supply bridge damaged"
    },
    consequences: [],
    companions: {
      mp: {
        id: "mp",
        name: "MP",
        role: "Treasury and responsibility"
      },
      tab: {
        id: "tab",
        name: "Tab",
        role: "Quality and risk"
      },
      kel: {
        id: "kel",
        name: "Kel",
        role: "Engineering and construction"
      },
      cx: {
        id: "cx",
        name: "CX",
        role: "Intelligence and tomorrow's hook",
        hidden: true,
        revealed: false
      }
    }
  },

  beats: [
    {
      speaker: "mp",
      focus: "mp",
      text: "Your Highness, Northbridge sent its first petition before dawn."
    },
    {
      speaker: "mp",
      focus: "northbridge",
      revealLedger: true,
      text: "Their granary is intact, but the supply bridge failed after last night's rain. Grain exists. People cannot reach it."
    },
    {
      speaker: "tab",
      focus: "tab",
      text: "Emergency release is possible, but it reduces our margin before winter. Mercy without a repair plan only postpones the same failure."
    },
    {
      speaker: "kel",
      focus: "kel",
      text: "Give me stored timber and a work crew. I can put a temporary frame across the river before the last cart leaves."
    },
    {
      speaker: "mp",
      focus: "northbridge",
      text: "The village is waiting. Do we release grain now, or verify the shortage before opening the reserve?",
      choices: [
        {
          id: "release_grain",
          label: "Release emergency grain",
          description: "Protect the village now and begin a temporary bridge repair.",
          stateChange: {
            grain: -900,
            trust: 8,
            stability: 2,
            reserveStatus: "Opened before noon",
            villageStatus: "Grain carts are leaving the palace storehouse for Northbridge.",
            bridgeStatus: "Temporary repair underway"
          },
          consequence: "Emergency grain released. Repair crews dispatched.",
          tableState: "release",
          followUps: [
            {
              speaker: "mp",
              focus: "mp",
              text: "Understood. I will open the reserve ledger and send the carts before noon."
            },
            {
              speaker: "tab",
              focus: "tab",
              text: "Approved with conditions. Kel's repair report will be on this table by sunset."
            },
            {
              speaker: "kel",
              focus: "northbridge",
              text: "The first beams are moving now. It will not be beautiful, but people will cross it safely."
            }
          ]
        },
        {
          id: "audit_first",
          label: "Audit before release",
          description: "Protect the reserve and dispatch an inspection team first.",
          stateChange: {
            gold: -400,
            trust: -3,
            stability: 5,
            reserveStatus: "Held for audit",
            villageStatus: "Auditors travel north while the village remains under ration control.",
            bridgeStatus: "Inspection team dispatched"
          },
          consequence: "Reserve held. Auditors sent to Northbridge.",
          tableState: "audit",
          followUps: [
            {
              speaker: "tab",
              focus: "tab",
              text: "A cautious decision. I will verify the report and find who allowed the bridge to decay."
            },
            {
              speaker: "mp",
              focus: "mp",
              text: "The reserve remains protected, but Northbridge will remember the delay. We must answer before sunset."
            },
            {
              speaker: "kel",
              focus: "northbridge",
              text: "I will prepare the timber anyway. If the report is true, we should not lose another hour."
            }
          ]
        }
      ]
    },
    {
      speaker: "kel",
      focus: "northbridge",
      phase: "Visible Consequence",
      text: "Look closely, Your Highness. The table is already answering you."
    },
    {
      speaker: "mp",
      focus: "mp",
      phase: "Evening Reflection",
      sceneTone: "evening",
      text: "Your first morning has ended. Northbridge will remember not only what the court decided, but how quickly we saw them."
    },
    {
      speaker: "cx",
      focus: "cx",
      day: "Day 2 - Dawn",
      phase: "Tomorrow Teaser",
      sceneTone: "dawn",
      text: "One village saw your answer. Tomorrow, someone who never petitioned will test what kind of ruler gave it."
    }
  ],

  endings: {
    release_grain: {
      speaker: "cx",
      focus: "cx",
      text: "Northbridge eats tonight. A red mark waits in the reserve ledger for dawn. End of demo."
    },
    audit_first: {
      speaker: "cx",
      focus: "cx",
      text: "The reserve is safe tonight. Northbridge is counting the hours until dawn. End of demo."
    },
    default: {
      speaker: "mp",
      focus: "mp",
      text: "The next morning is waiting. End of demo."
    }
  }
};
