import { Ionicons, Entypo } from '@expo/vector-icons';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';

const PinCreationScreen = () => {
  const [pin, setPin] = useState('');
  const [currentStep, setCurrentStep] = useState(0);

  const handleNumberPress = (number) => {
    if (pin.length < 4) {
      setPin(prevPin => prevPin + number);
    }
  };

  const handleDelete = () => {
    setPin(prevPin => prevPin.slice(0, -1));
  };

  const handleConfirm = () => {
    // Handle pin confirmation logic here
    console.log('PIN confirmed:', pin);
  };

  return (
    <SafeAreaView className="flex-1 bg-slate-800">
      <View className="flex-1 items-center justify-center px-6">
        {/* Lock Icon */}
        <View className="bg-slate-700/50 rounded-full w-16 h-16 items-center justify-center mb-4">
          <Ionicons name='lock-closed' size={30} color="#facc15" />
        </View>

        {/* Title */}
        <Text className="text-white text-xl mb-6">Create Pin</Text>

        {/* PIN Indicator */}
        <View className="flex-row space-x-3 mb-12">
          {[0, 1, 2, 3].map((dotIndex) => (
            <View 
              key={dotIndex}
              className={`w-3 h-3 mx-2 rounded-full ${
                dotIndex < pin.length ? 'bg-white' : 'bg-slate-600 border border-slate-500'
              }`}
            />
          ))}
        </View>

        {/* Number Pad */}
        <View className="w-full max-w-xs">
          <View className="flex-row justify-between mb-4">
            {[1, 2, 3].map((num) => (
              <TouchableOpacity
                key={num}
                className="w-16 h-16 rounded-full bg-slate-700/50 items-center justify-center"
                onPress={() => handleNumberPress(num.toString())}
              >
                <Text className="text-white text-2xl">{num}</Text>
              </TouchableOpacity>
            ))}
          </View>
          
          <View className="flex-row justify-between mb-4">
            {[4, 5, 6].map((num) => (
              <TouchableOpacity
                key={num}
                className="w-16 h-16 rounded-full bg-slate-700/50 items-center justify-center"
                onPress={() => handleNumberPress(num.toString())}
              >
                <Text className="text-white text-2xl">{num}</Text>
              </TouchableOpacity>
            ))}
          </View>
          
          <View className="flex-row justify-between mb-4">
            {[7, 8, 9].map((num) => (
              <TouchableOpacity
                key={num}
                className="w-16 h-16 rounded-full bg-slate-700/50 items-center justify-center"
                onPress={() => handleNumberPress(num.toString())}
              >
                <Text className="text-white text-2xl">{num}</Text>
              </TouchableOpacity>
            ))}
          </View>
          
          <View className="flex-row justify-between">
            <View className="w-16" />
            <TouchableOpacity
              className="w-16 h-16 rounded-full bg-slate-700/50 items-center justify-center"
              onPress={() => handleNumberPress('0')}
            >
              <Text className="text-white text-2xl">0</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="w-16 h-16 rounded-full bg-slate-700/50 items-center justify-center"
              onPress={handleDelete}
            >
              <Entypo name='cross' size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Confirm Button */}
        <TouchableOpacity
          className="bg-yellow-400 rounded-full w-full py-4 mt-12 items-center"
          onPress={handleConfirm}
        >
          <Text className="text-black font-medium text-lg">Confirm</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default PinCreationScreen;