import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const DeviceListItem = ({ deviceName, location, date, isCurrentDevice, onDelete }) => {
    return (
        <View className="bg-white/20 rounded-lg p-4 mb-3 flex-row items-center justify-between">
            <View className="flex-row items-center">
                <View className="mr-2">
                    <Ionicons name='phone-portrait-outline' size={30} color='white' />
                </View>
                <View>
                    <View className='flex flex-row items-center'>
                        <Text className="text-white text-base font-semibold">{deviceName}</Text>
                        {isCurrentDevice && (
                            <View className="bg-white/20 border border-white rounded-full px-2 py-1 mt-1 ml-2">
                                <Text className="text-white text-xs tracking-wider">Current device</Text>
                            </View>
                        )}
                    </View>
                    <Text className="text-gray-400 text-sm mt-1">{location} · {date}</Text>
                </View>
            </View>
            <TouchableOpacity onPress={onDelete} className="p-2">
                <Ionicons name='trash-outline' size={24} color="#F04438" />
            </TouchableOpacity>
        </View>
    );
};

export default DeviceListItem;