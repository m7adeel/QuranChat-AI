import '../global.css';

import { Redirect, Stack } from 'expo-router';

export default function Layout() {

  Redirect({href:'/(settings)'})

  return <Stack screenOptions={{
    headerShown: false
  }}></Stack>;
}
