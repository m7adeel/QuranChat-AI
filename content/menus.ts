import events from "./events";

const chatMenu = [
    {
        value: 'Settings',
        icon: 'settings-outline',
        lib: 'Ionicons',
        action: events.NAVIGATE,
        to: '/(settings)'
    },
    {
        value: 'Saved',
        icon: 'bookmark',
        lib:'Feather'
    },
    {
        value: 'Light Mode',
        icon:'moon-o',
        lib: 'FontAwesome'
    }
]

const settingsMenu = [
  {
    category: "Account & Subscription",
    options: [
      { label: "Profile Information", icon: "person-outline", action: events.NAVIGATE, navigateTo: "/(settings)/(account)/profile_information" },
      { label: "Change Password", icon: "lock-closed-outline", action: events.NAVIGATE, navigateTo: "/(settings)/(account)/change_password" },
      { label: "Subscription Management", icon: "card-outline", action: events.NAVIGATE, navigateTo: "/(settings)/(account)/subscription_management" },
    ],
  },
  {
    category: "Chat Preferences",
    options: [
      { label: "Voice-to-Text Settings", icon: "mic-outline", action: events.NAVIGATE, navigateTo: "/(settings)/(chat_prefs)/voice_to_text" },
      {
        label: "AI Response Length",
        icon: "options-outline",
        type: "selection",
        value: "Medium",
        onChange: (value) => console.log("AI Response Length:", value),
      },
      {
        label: "Suggested Prompts",
        icon: "bulb-outline",
        isToggleInput: true,
        value: true,
        onChange: (value) => console.log("Suggested Prompts:", value),
      },
      {
        label: "Save Chat History",
        icon: "time-outline",
        isToggleInput: true,
        value: true,
        onChange: (value) => console.log("Save Chat History:", value),
      },
    ],
  },
  {
    category: "Appearance & Accessibility",
    options: [
      {
        label: "Dark Mode",
        icon: "moon-outline",
        isToggleInput: true,
        value: true,
        onChange: (value) => console.log("Dark Mode:", value),
      },
      {
        label: "Font Size Adjustments",
        icon: "text-outline",
        type: "selection",
        value: "Small",
        onChange: (value) => console.log("Font Size Adjustments:", value),
      },
      {
        label: "Background Theme",
        icon: "color-palette-outline",
        type: "selection",
        value: "Default",
        onChange: (value) => console.log("Background Theme:", value),
      },
      {
        label: "Text-to-Speech",
        icon: "volume-high-outline",
        isToggleInput: true,
        value: true,
        onChange: (value) => console.log("Text-to-Speech:", value),
      },
      {
        label: "Haptic Feedback",
        icon: "phone-portrait-outline",
        isToggleInput: true,
        value: true,
        onChange: (value) => console.log("Haptic Feedback:", value),
      },
    ],
  },
  {
    category: "Privacy & Security",
    options: [
      {
        label: "Two-Factor Authentication",
        icon: "shield-checkmark-outline",
        isToggleInput: true,
        value: true,
        onChange: (value) => console.log("Two-Factor Authentication:", value),
      },
      { label: "Set App Lock", icon: "lock-closed-outline", navigateTo: "SetAppLockScreen" },
      { label: "Clear Chat History", icon: "trash-outline", navigateTo: "ClearChatHistoryScreen" },
      { label: "Download My Data Option", icon: "download-outline", navigateTo: "DownloadDataScreen" },
      { label: "Manage Connected Devices", icon: "laptop-outline", navigateTo: "ManageDevicesScreen" },
    ],
  },
  {
    category: "Help & Support",
    options: [
      { label: "FAQs & Quick Tips", icon: "chatbubbles-outline", action: events.NAVIGATE, navigateTo: "/(settings)/(help)/faq_and_tips" },
      { label: "Contact Support", icon: "call-outline", navigateTo: "ContactSupportScreen" },
      { label: "Report a Problem", icon: "alert-circle-outline", navigateTo: "ReportProblemScreen" },
      { label: "Community & Feedback", icon: "people-outline", navigateTo: "CommunityFeedbackScreen" },
    ],
  },
];

export { settingsMenu, chatMenu }