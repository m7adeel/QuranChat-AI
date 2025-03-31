import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Selection({ options, handleOptionSelect, selectedOption }) {
    return (
        <View className="space-y-4">
            {options.map(option => (
                <TouchableOpacity
                    className="flex-row items-center bg-teal-800/50 p-6 rounded-lg border border-teal-700"
                    onPress={() => handleOptionSelect(option.value)}
                >
                    {/* <Iconify icon={option.icon} color="white" width={40} height={40} /> */}
                    <View className="ml-4">
                        <Text className="text-white text-xl font-semibold">{option.value}</Text>
                        <Text className="text-white text-lg"> - {option.description}</Text>
                    </View>
                </TouchableOpacity>
            ))}
        </View>
    )
}