import { hasCompletedOnboarding } from '~/services';
import '../global.css';
import { Stack, router } from 'expo-router';
import { useEffect } from 'react';
import useAuthStore from '~/store/authStore';

export default function Layout() {
  const { user } = useAuthStore();

  useEffect(() => {
    const checkOnboarding = async () => {
      const completed = await hasCompletedOnboarding();
      if (completed) {
        if (user) {
          router.replace('/chat');
        } else {
          router.replace('/(auth)/sign-in');
        }
      }
    };

    checkOnboarding();
  }, [user]);

  return <Stack screenOptions={{
    headerShown: false
  }}></Stack>;
}
