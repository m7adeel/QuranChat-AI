import React from 'react';
import { View } from 'react-native';
import { MaterialIcons, FontAwesome, Ionicons, Feather } from '@expo/vector-icons';

interface IconProps {
    lib: 'MaterialIcons' | 'FontAwesome' | 'Ionicons' | 'Feather';
    iconName: string;
    size?: number;
    color?: string;
    className?: string;
}

const Icon: React.FC<IconProps> = ({
    lib,
    iconName,
    size = 24,
    color = "white",
    className
}) => {
    try {
        switch (lib) {
            case 'MaterialIcons':
                return (
                    <View className={className}>
                        <MaterialIcons name={iconName} size={size} color={color} />
                    </View>
                );
            case 'FontAwesome':
                return (
                    <View className={className}>
                        <FontAwesome name={iconName} size={size} color={color} />
                    </View>
                );
            case 'Ionicons':
                return (
                    <View className={className}>
                        <Ionicons name={iconName} size={size} color={color} />
                    </View>
                );

            case 'Feather':
                return (
                    <View className={className}>
                        <Feather name={iconName} size={size} color={color} />
                    </View>
                )
            default:
                return null;
        }
    } catch (error) {
        console.error(`Icon error: ${error}`);
        return null;
    }
};

export default Icon;