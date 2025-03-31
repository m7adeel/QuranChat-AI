import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { router } from 'expo-router';

// Signup Screen Component
const SignupScreen = () => {
    const [name, setName] = useState('');
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
                        Create Account
                    </Text>
                    <Text className="text-white text-lg opacity-80">
                        Begin your journey of Quranic wisdom and guidance
                    </Text>
                </View>

                {/* Signup Form */}
                <View className="mb-6">
                    <Text className="text-white mb-2">Full Name</Text>
                    <TextInput
                        className="bg-white bg-opacity-10 px-4 py-3 rounded-lg text-white mb-4"
                        placeholder="Enter your full name"
                        placeholderTextColor="rgba(255, 255, 255, 0.5)"
                        value={name}
                        onChangeText={setName}
                    />

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
                    <View className="flex-row bg-white bg-opacity-10 rounded-lg mb-6">
                        <TextInput
                            className="flex-1 px-4 py-3 text-white"
                            placeholder="Create a password"
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

                    <TouchableOpacity
                        className="bg-yellow-400 py-4 rounded-full items-center mb-6"
                        activeOpacity={0.8}
                    >
                        <Text className="text-black text-xl font-semibold">
                            Sign Up
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

                {/* Terms and Privacy */}
                <View className="px-8 mb-6">
                    <Text className="text-white opacity-70 text-center text-sm">
                        By signing up, you agree to our Terms of Service and Privacy Policy
                    </Text>
                </View>

                {/* Login Link */}
                <View className="flex-row justify-center mt-auto mb-6">
                    <Text className="text-white opacity-80">Already have an account? </Text>
                    <TouchableOpacity onPress={() => router.replace('/(auth)/sign-in')}>
                        <Text className="text-yellow-400">Login</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default SignupScreen;