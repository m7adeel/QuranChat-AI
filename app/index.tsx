import { Stack, Link, router } from 'expo-router';
import { View, Image, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import Logo from '../assets/images/logo.png';
import LandingPageRating from '../assets/images/landing_page_rating.png'

export default function Home() {
  return (
    <LinearGradient
    colors={['#0A333A', '#236952']} // Define your gradient colors
    start={{ x: 0, y: 0 }} // Top-left corner
    end={{ x: 1, y: 1 }} // Bottom-right corner
    style={styles.container}
  >
    <StatusBar barStyle="light-content" backgroundColor="#0E3B43" />
    <View className="flex-1 bg-gradient-to-b from-green-900 to-green-700 items-center justify-center px-6">
      
    {/* Logo */}
    <Image 
      source={Logo} // Replace with actual image URL
      className="w-32 h-32 mb-4"
      resizeMode="contain"
    />

    {/* Title */}
    <Text className="text-white text-3xl font-bold">QuranChat</Text>
    
    {/* Subtitle */}
    <Text className="text-gray-300 text-sm italic">An AI-Powered Islamic Therapy App</Text>

    {/* Description */}
    <Text className="text-gray-200 text-center mt-2">
      Find answers from the Quran, Hadith & Islamic scholars
    </Text>

    {/* Rating */}
    <View className="flex-row mt-3 space-x-1">
      <Image 
        source={LandingPageRating} 
        className="w-50 h-12"
        resizeMode="contain"
      />
    </View>

    {/* Button */}
    <TouchableOpacity className="bg-yellow-400 px-6 py-3 rounded-full mt-6" onPress={() => {router.push('/onboarding')}}>
      <Text className="text-black font-semibold text-lg">Bismillah</Text>
    </TouchableOpacity>

    {/* Security Note */}
    <Text className="text-gray-300 text-xs mt-4">
      You are protected.{" "}
      <Link href="/security" className="underline text-blue-300">
        Find out how?
      </Link>
    </Text>
    
  </View>
  </LinearGradient>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
});