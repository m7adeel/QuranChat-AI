import React, { useState } from 'react';
import { View, Text, SafeAreaView, Pressable, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';
import ToggleButton from '~/components/general/ToggleButton';
import { LinearGradient } from "expo-linear-gradient";

const styles = {
  container: "flex-1 px-6 py-10 w-full",
  title: "text-white text-3xl font-bold mb-2",
  subtitle: "text-gray-300 text-base mb-8",
  settingContainer: "flex-row justify-between items-center mb-8",
  settingText: "text-white text-lg",
  sliderContainer: "mt-4",
};

const styleSheetStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

const VoiceToTextSettings = () => {
  const [microphoneEnabled, setMicrophoneEnabled] = useState(true);
  const [sensitivity, setSensitivity] = useState(0.2); // 0.2 = 20% on the slider

  const toggleMicrophone = () => {
    setMicrophoneEnabled(previousState => !previousState);
  };

  const handleSensitivityChange = (value) => {
    setSensitivity(value);
  };

  return (
    <LinearGradient
      colors={['#0A333A', '#236952']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styleSheetStyles.container}
    >
      <View className={styles.container}>
        <Text className={styles.title}>
          Voice-to-Text Settings
        </Text>
        
        <Text className={styles.subtitle}>
          Check voice to text settings.
        </Text>
        
        {/* Enable microphone toggle */}
        <View className={styles.settingContainer}>
          <Text className={styles.settingText}>Enable microphone input</Text>
          <ToggleButton
            value={microphoneEnabled}
            onValueChange={toggleMicrophone}
          />
        </View>
        
        {/* Sensitivity slider */}
        <View className={styles.sliderContainer}>
          <Text className={styles.settingText}>Adjust voice input sensitivity</Text>
          <View className="relative mt-4">
            <Slider
              style={{ height: 40 }}
              minimumValue={0}
              maximumValue={1}
              value={sensitivity}
              onValueChange={handleSensitivityChange}
              minimumTrackTintColor="#fccd35"
              maximumTrackTintColor="#475b6b"
              thumbTintColor="#fccd35"
            />
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

export default VoiceToTextSettings;
