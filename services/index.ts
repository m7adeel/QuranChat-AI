import AsyncStorage from '@react-native-async-storage/async-storage';

const ONBOARDING_KEY = 'completed-onboarding'

const completeOnboarding = async () => {
    try {
        await AsyncStorage.setItem(ONBOARDING_KEY, 'true');
        return true;
    } catch (e) {
        console.error('Error completing onboarding:', e);
        return false;
    }
}

const hasCompletedOnboarding = async () => {
    try {
        const value = await AsyncStorage.getItem(ONBOARDING_KEY);
        return value !== null;
    } catch (e) {
        console.error('Error checking onboarding status:', e);
        return false;
    }
}

export {
    completeOnboarding,
    hasCompletedOnboarding
}