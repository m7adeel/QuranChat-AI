import { hasCompletedOnboarding } from '~/services';
import '../global.css';
import { Stack, router } from 'expo-router';
import { useEffect } from 'react';

export default function Layout() {
  useEffect(() => {
    const checkOnboarding = async () => {
      const completed = await hasCompletedOnboarding();
      if (completed) {
        router.replace('/(auth)/sign-in');
      }
    };
    checkOnboarding();
  }, []);

  return <Stack screenOptions={{
    headerShown: false
  }}></Stack>;
}
