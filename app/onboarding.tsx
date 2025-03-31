import React, { useState } from 'react';
import { View, Text, StatusBar, Image, TouchableOpacity, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { data } from '../content/onboarding';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';

const Onboarding = () => {
    const [currentStep, setCurrentStep] = React.useState(0);

    return (
        <LinearGradient colors={['#0A333A', '#236952']} // Define your gradient colors
            start={{ x: 0, y: 0 }} // Top-left corner
            end={{ x: 1, y: 1 }} // Bottom-right corner
            style={styles.container}>
            <SafeAreaView className="flex-1">
                <StatusBar barStyle="light-content" />
                <View className="flex-1 px-6">
                    {/* Progress bar / Steps indicator */}
                    <View className="flex-row justify-between mt-5">
                        {
                            data.map((item, index) => (
                                <View key={index} className={`h-1 w-16 ${index <= currentStep ? 'bg-white opacity-80' : 'bg-gray-500'}`} />
                            ))
                        }
                    </View>

                    {/* Main content area */}
                    <View className="flex-1 items-center justify-center">
                        {!data[currentStep].isIcon ?
                            <Image
                                source={data[currentStep].image}
                                className="w-full h-96 mb-6"
                                resizeMode="contain"
                            /> :
                            <View className='p-4 rounded-full bg-black/20'>
                                <Image
                                    source={data[currentStep].image}
                                    className="w-12 h-12"
                                    resizeMode="contain"
                                />
                            </View>}
                    </View>

                    {/* Text content */}
                    <View className="items-center">
                        <Text className="text-white text-3xl font-bold text-center mb-4">
                            {data[currentStep].title}
                        </Text>
                        <Text className="text-white text-center text-lg mb-5">
                            {data[currentStep].description}
                        </Text>

                        {/* Points list */}
                        {data[currentStep].points &&
                            <View className='w-full mb-2'>
                                {data[currentStep].points && data[currentStep].points.map((point, index) => (
                                    <View key={index} className="flex-row mb-2 border border-white bg-white/15 w-full py-4 rounded-xl">
                                        <Image
                                            source={point.icon}
                                            className="w-6 h-6 mr-2"
                                            resizeMode="contain"
                                        />
                                        <Text className="text-white text-lg">{point.text}</Text>
                                    </View>
                                ))}
                            </View>
                        }

                        {/* CTA Button */}
                        <TouchableOpacity
                            className="bg-yellow-400 w-full py-4 rounded-full items-center"
                            activeOpacity={0.8}
                            onPress={() => {
                                if (currentStep < data.length - 1) {
                                    setCurrentStep(currentStep + 1);
                                } else {
                                    router.replace('/(auth)/sign-in')
                                }
                            }}
                        >
                            <Text className="text-black text-xl font-semibold">
                                {data[currentStep].cta}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        </LinearGradient>
    );
};

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

export default Onboarding;