import { create } from "zustand";
import { responseLengths } from "~/content";

type ConnectedDeviceType = {
    name: string;
    location: string;
    lastSignIn: string;
}

type SettingsStoreType = {
    enableMicroPhone: boolean;
    voiceInputSensitivity: Number;
    responseLength: (typeof responseLengths)[keyof typeof responseLengths];
    showSuggestedPrompts: boolean;
    saveChatHistory: boolean;
    darkMode: boolean;
    fontSize: string;   // change
    backGroundTheme: string; // change
    textToSpeech: boolean;
    hapticFeedback: boolean;
    MFA: boolean;
    appLockEnabled: boolean;
    appPassword: string | null;
    connectedDevices: ConnectedDeviceType[];

    // Methods
    toggleAppLock: () => void;
    setAppLockPassword: (password: string) => void;
    toggleDarkMode: () => void;
    toggleTextToSpeech: () =>  void;
    toggleHapticFeedback: () => void;
    toggleSuggestedPrompts: () => void;
    toggleEnableMicroPhone: () => void;
    toggleMFA: () => void;
}

const useSettingsStore = create<SettingsStoreType>((set, get) => ({
    enableMicroPhone: false,
    voiceInputSensitivity: 0.5,
    responseLength: 'medium',
    showSuggestedPrompts: true,
    saveChatHistory: true,
    darkMode: true,
    fontSize: 'small',
    backGroundTheme: 'default',
    textToSpeech: true,
    hapticFeedback: true,
    MFA: true,
    appLockEnabled: false,
    appPassword: null,
    connectedDevices: [],

    toggleAppLock: () => {
        set({ appLockEnabled: !get().appLockEnabled })
    },

    setAppLockPassword: (password: string) => {
        set({ appPassword: password })
    },

    toggleDarkMode: () => {
        set({ darkMode: !get().darkMode })
    },

    toggleTextToSpeech: () => {
        set({ textToSpeech: !get().textToSpeech })
    },

    toggleHapticFeedback: () => {
        set({ hapticFeedback: !get().hapticFeedback })
    },

    toggleSuggestedPrompts: () => {
        set({ showSuggestedPrompts: !get().showSuggestedPrompts })
    },

    toggleEnableMicroPhone: () => {
        set({ enableMicroPhone: !get().enableMicroPhone })
    },

    toggleMFA: () => {
        set({ MFA: !get().MFA })
    }
}))

export default useSettingsStore;