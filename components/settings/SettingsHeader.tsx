import { View, Text } from 'react-native'
import React from 'react'

interface SettingsHeaderProps {
  title: string;
  subtitle?: string;
}

export default function SettingsHeader({ title, subtitle }: SettingsHeaderProps) {
  return (
    <View>
      <Text className="text-white text-2xl font-bold tracking-wider mb-2">{title}</Text>
      {subtitle && (
        <Text className="text-white italic font-light">{subtitle}</Text>
      )}
    </View>
  )
}