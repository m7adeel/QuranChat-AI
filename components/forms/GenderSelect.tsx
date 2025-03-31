import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

const GenderSelection = ({ handleOptionSelect }) => {
    const [selectedGender, setSelectedGender] = useState(null);

    const handleSelect = (gender) => {
        setSelectedGender(gender);
        handleOptionSelect();
    };

    return (
        <View className="flex-1 p-4 justify-center items-center">
            <View className="flex-row w-full justify-between items-center space-x-4">
                {/* Male Option */}
                <TouchableOpacity
                    className={`p-4 rounded-lg bg-white/10 w-40 items-center ${selectedGender === 'male' ? 'border-2 border-white' : 'border border-white/20'
                        }`}
                    onPress={() => handleSelect('male')}
                >
                    <View className="h-24 w-24 rounded-full bg-sky-200 items-center justify-center mb-4">
                        <Image
                            source={require('../../assets/images/male.png')}
                            className="h-20 w-20"
                            resizeMode="contain"
                        />
                    </View>
                    <Text className="text-white text-xl font-medium">Male</Text>
                </TouchableOpacity>

                {/* Female Option */}
                <TouchableOpacity
                    className={`p-4 rounded-lg bg-white/10 w-40 items-center ${selectedGender === 'female' ? 'border-2 border-white' : 'border border-white/20'
                        }`}
                    onPress={() => handleSelect('female')}
                >
                    <View className="h-24 w-24 rounded-full bg-pink-200 items-center justify-center mb-4">
                        <Image
                            source={require('../../assets/images/female.png')}
                            className="h-20 w-20"
                            resizeMode="contain"
                        />
                    </View>
                    <Text className="text-white text-xl font-medium">Female</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default GenderSelection;