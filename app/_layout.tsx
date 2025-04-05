import '../global.css';

import { Redirect, Stack } from 'expo-router';

export default function Layout() {
  return <Stack screenOptions={{
    headerShown: false
  }}></Stack>;
}
