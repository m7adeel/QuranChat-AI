import { Switch } from 'react-native'
import React from 'react'

interface ToggleButtonProps {
    value: boolean;
    onValueChange: () => void;
}

export default function ToggleButton({ value, onValueChange }: ToggleButtonProps) {
    return (
        <Switch
            value={value}
            onValueChange={onValueChange}
            trackColor={{ false: "#767577", true: "#FFD700" }}
            thumbColor={value ? "#fff" : "#f4f3f4"}
        />
    )
}