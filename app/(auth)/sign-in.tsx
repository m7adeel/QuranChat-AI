import { router } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, ScrollView, Image } from 'react-native';

const Icons = {
  Google: () => (
    <View className="w-6 h-6 mr-2">
      <Text className="text-2xl">G</Text>
    </View>
  ),
  Apple: () => (
    <View className="w-6 h-6 mr-2">
      <Text className="text-2xl">🍎</Text>
    </View>
  ),
  ArrowLeft: () => (
    <View className="w-6 h-6">
      <Text className="text-2xl text-white">←</Text>
    </View>
  ),
  Eye: () => (
    <View className="w-6 h-6">
      <Text className="text-lg text-gray-500">👁️</Text>
    </View>
  ),
  EyeOff: () => (
    <View className="w-6 h-6">
      <Text className="text-lg text-gray-500">👁️‍🗨️</Text>
    </View>
  ),
};

// Login Screen Component
const SignInScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <SafeAreaView className="flex-1 bg-teal-900">
      <ScrollView contentContainerClassName="flex-1 px-6">
        {/* Back Button */}
        <TouchableOpacity 
          className="mt-6" 
          onPress={() => router.back()}
        >
          <Icons.ArrowLeft />
        </TouchableOpacity>

        {/* Header */}
        <View className="mt-8 mb-10">
          <Text className="text-white text-3xl font-bold mb-2">
            Welcome Back
          </Text>
          <Text className="text-white text-lg opacity-80">
            Sign in to continue your journey of Quranic wisdom
          </Text>
        </View>

        {/* Login Form */}
        <View className="mb-6">
          <Text className="text-white mb-2">Email</Text>
          <TextInput
            className="bg-white bg-opacity-10 px-4 py-3 rounded-lg text-white mb-4"
            placeholder="Enter your email"
            placeholderTextColor="rgba(255, 255, 255, 0.5)"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          
          <Text className="text-white mb-2">Password</Text>
          <View className="flex-row bg-white bg-opacity-10 rounded-lg mb-4">
            <TextInput
              className="flex-1 px-4 py-3 text-white"
              placeholder="Enter your password"
              placeholderTextColor="rgba(255, 255, 255, 0.5)"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity 
              className="px-3 justify-center" 
              onPress={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <Icons.EyeOff /> : <Icons.Eye />}
            </TouchableOpacity>
          </View>

          <TouchableOpacity className="items-end mb-6">
            <Text className="text-yellow-400">Forgot Password?</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            className="bg-yellow-400 py-4 rounded-full items-center mb-6" 
            activeOpacity={0.8}
            onPress={() => {
                router.replace('/(auth)/personalization')
            }}
          >
            <Text className="text-black text-xl font-semibold">
              Login
            </Text>
          </TouchableOpacity>
        </View>

        {/* Divider */}
        <View className="flex-row items-center mb-6">
          <View className="flex-1 h-px bg-white opacity-30" />
          <Text className="mx-4 text-white opacity-60">Or continue with</Text>
          <View className="flex-1 h-px bg-white opacity-30" />
        </View>

        {/* OAuth Buttons */}
        <View className="mb-6 gap-4">
          <TouchableOpacity 
            className="flex-row bg-white py-3 rounded-full items-center justify-center"
            activeOpacity={0.8}
          >
            <Icons.Google />
            <Text className="text-black font-semibold">Continue with Google</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            className="flex-row bg-black py-3 rounded-full items-center justify-center"
            activeOpacity={0.8}
          >
            <Icons.Apple />
            <Text className="text-white font-semibold">Continue with Apple</Text>
          </TouchableOpacity>
        </View>

        {/* Sign Up Link */}
        <View className="flex-row justify-center mt-auto mb-6">
          <Text className="text-white opacity-80">Don't have an account? </Text>
          <TouchableOpacity onPress={() => router.navigate('/(auth)/sign-up')}>
            <Text className="text-yellow-400">Sign Up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignInScreen;