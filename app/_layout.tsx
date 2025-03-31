import '../global.css';

import { Redirect, Stack } from 'expo-router';

export default function Layout() {

  Redirect({href:'/chat'})

  return <Stack screenOptions={{
    headerShown: false
  }}></Stack>;
}
