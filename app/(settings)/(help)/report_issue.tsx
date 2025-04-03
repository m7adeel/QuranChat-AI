import { View, Text, StyleSheet, TextInput as RNTextInput } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import TextInput from '~/components/forms/TextInput'
import SettingsHeader from '~/components/settings/SettingsHeader'

import { issueTypes } from '~/content'
import Chip from '~/components/general/Chip'

export default function ReportIssue() {
  return (
    <LinearGradient
      colors={['#0A333A', '#236952']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styleSheetStyles.container}
      className='text-white'
    >
        <SettingsHeader 
          title="Report a Problem"
          subtitle="Facing an issue? Let us know, and we'll work on resolving it as soon as possible."
        />

        <TextInput label='Title' placeholder='Your problem title'/>

        <Text className={styles.descriptionHeading}>Select Issue Type</Text>
        <View className={styles.issueContainer}>
            {issueTypes.map(issue => <Chip label={issue}/>)}
        </View>
        <Text className={styles.descriptionHeading}>Describe the Issue</Text>
        <RNTextInput 
            className={styles.descriptionText}
            multiline
        />
    </LinearGradient>
  )
}

const styles = Object.freeze({
    issueContainer: 'flex flex-row flex-wrap mb-3',
    descriptionHeading: 'text-white text-lg font-bold tracking-wider',
    descriptionText: 'border w-full h-40 p-2 rounded-lg border-white text-white bg-white/10'
} as const)

const styleSheetStyles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 25
    },
  });
  