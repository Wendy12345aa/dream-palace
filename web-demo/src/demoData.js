window.DREAM_PALACE_DEMO = {
  initialState: {
    day: "Day 1 - Morning",
    phase: "Morning Court",
    kingdom: {
      grain: 8200,
      gold: 16000,
      trust: 42,
      stability: 58,
      villageStatus: "Northbridge Village is waiting for the court's first decision.",
      bridgeStatus: "Old supply bridge damaged"
    },
    consequences: ["The court has opened its first ledger."],
    mapMarkers: [
      {
        id: "palace",
        icon: "♕",
        label: "Dream Palace",
        status: "Morning court assembled",
        tone: "gold"
      },
      {
        id: "northbridge",
        icon: "⚠",
        label: "Northbridge Village",
        status: "Bridge damaged after rain",
        tone: "warning"
      },
      {
        id: "storehouse",
        icon: "◎",
        label: "Royal Storehouse",
        status: "Emergency reserve sealed",
        tone: "quiet"
      }
    ],
    companions: {
      mp: {
        id: "mp",
        name: "MP",
        role: "Treasury and responsibility",
        color: "gold",
        emotion: "concerned",
        status: "Waiting with the morning ledger"
      },
      tab: {
        id: "tab",
        name: "Tab",
        role: "Quality and risk",
        color: "blue",
        emotion: "reserved",
        status: "Reviewing emergency procedures"
      },
      kel: {
        id: "kel",
        name: "Kel",
        role: "Engineering and construction",
        color: "green",
        emotion: "quiet",
        status: "Preparing repair sketches"
      },
      cx: {
        id: "cx",
        name: "CX",
        role: "Mystery and tomorrow's hook",
        color: "violet",
        emotion: "watching",
        status: "Watching from the balcony",
        hidden: true,
        revealed: false
      }
    }
  },

  beats: [
    {
      speaker: "mp",
      text: "Your Highness, Northbridge Village sent its first petition before dawn.",
      role: "Treasury and responsibility"
    },
    {
      speaker: "mp",
      text: "Their granary is intact, but the supply bridge failed after last night's rain. Grain exists. People cannot reach it.",
      role: "Treasury and responsibility"
    },
    {
      speaker: "tab",
      text: "Emergency release is possible, but it will reduce our reserve margin. If this becomes habit, the treasury will break before winter.",
      role: "Quality and risk"
    },
    {
      speaker: "mp",
      text: "The court needs your first decision. Do we release grain immediately, or audit the shortage before spending reserves?",
      role: "Treasury and responsibility",
      choices: [
        {
          id: "release_grain",
          label: "Release emergency grain",
          description: "Protect the village now, but reduce reserves.",
          stateChange: {
            grain: -900,
            trust: 8,
            stability: 2,
            villageStatus: "Grain carts are leaving the palace storehouse for Northbridge Village.",
            bridgeStatus: "Temporary repair approved"
          },
          mapUpdate: {
            id: "northbridge",
            icon: "✚",
            status: "Grain carts en route; repair crew approved",
            tone: "hope"
          },
          consequence: "You released emergency grain before noon.",
          companionStatus: {
            mp: "Coordinating emergency supply carts",
            tab: "Recording conditional approval",
            kel: "Sketching a temporary bridge repair"
          },
          followUps: [
            {
              speaker: "mp",
              text: "Understood. I will open the reserve ledger and send the carts before noon.",
              role: "Treasury and responsibility"
            },
            {
              speaker: "tab",
              text: "Approved with conditions. Kel must repair the bridge, or this solution becomes tomorrow's problem.",
              role: "Quality and risk"
            },
            {
              speaker: "kel",
              text: "I can reinforce the old bridge with stored timber. It will not be beautiful, but it will hold.",
              role: "Engineering and construction"
            }
          ]
        },
        {
          id: "audit_first",
          label: "Audit before release",
          description: "Protect reserves, but make the village wait.",
          stateChange: {
            gold: -400,
            trust: -3,
            stability: 5,
            villageStatus: "Tab dispatches auditors while Northbridge Village waits under ration control.",
            bridgeStatus: "Inspection team dispatched"
          },
          mapUpdate: {
            id: "northbridge",
            icon: "⌕",
            status: "Auditors dispatched; ration line forming",
            tone: "blue"
          },
          consequence: "You ordered an audit before opening the reserve.",
          companionStatus: {
            mp: "Protecting reserves while watching public trust",
            tab: "Dispatching auditors to Northbridge",
            kel: "Sketching a temporary bridge repair"
          },
          followUps: [
            {
              speaker: "tab",
              text: "A cautious decision. I will verify the report and identify who allowed the bridge to decay.",
              role: "Quality and risk"
            },
            {
              speaker: "mp",
              text: "The reserve remains protected, but the village will remember the delay. We should answer them before sunset.",
              role: "Treasury and responsibility"
            },
            {
              speaker: "kel",
              text: "If the bridge is the real issue, I can start a temporary frame while Tab checks the accounts.",
              role: "Engineering and construction"
            }
          ]
        }
      ]
    },
    {
      speaker: "kel",
      phase: "Palace Walk",
      mapUpdate: {
        id: "storehouse",
        status: "Palace workers await your evening review",
        tone: "quiet"
      },
      text: "Walk with me to the western window. From here, every bridge is a line on paper until someone has to cross it.",
      role: "Engineering and construction"
    },
    {
      speaker: "mp",
      phase: "Evening Reflection",
      consequence: "Northbridge is now marked on the court map.",
      text: "Your first morning has ended, Your Highness. The kingdom has already changed because you answered it.",
      role: "Treasury and responsibility"
    },
    {
      speaker: "cx",
      day: "Day 2 - Dawn",
      phase: "Tomorrow Teaser",
      text: "One village saw your answer. Tomorrow, someone who did not petition will test whether you were kind, careful, or merely lucky.",
      role: "Mystery and tomorrow's hook"
    }
  ],

  endings: {
    release_grain: {
      speaker: "cx",
      role: "Mystery and tomorrow's hook",
      text: "End of demo. Northbridge eats tonight, and the reserve ledger has a red mark waiting for dawn. Return tomorrow?"
    },
    audit_first: {
      speaker: "cx",
      role: "Mystery and tomorrow's hook",
      text: "End of demo. The reserve is safe tonight, and Northbridge is counting the hours until dawn. Return tomorrow?"
    },
    default: {
      speaker: "mp",
      role: "Treasury and responsibility",
      text: "End of demo. The next morning is waiting."
    }
  }
};
