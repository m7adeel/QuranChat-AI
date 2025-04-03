import '../global.css';

import { Redirect, Stack } from 'expo-router';

export default function Layout() {

  // Redirect({href:'/(settings)/(privaci&security)/app_lock'})

  return <Stack screenOptions={{
    headerShown: false
  }}></Stack>;
}
