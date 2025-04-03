import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import events from "~/content/events";
import ToggleButton from "../general/ToggleButton";

interface OptionProps {
    option: any;
    categoryIndex: number;
    optionIndex: number;
    handleToggle: (categoryIndex: number, optionIndex: number) => void;
}

const RenderOption = ({ option, categoryIndex, optionIndex, handleToggle }: OptionProps) => {
    return (
        <TouchableOpacity
            style={styles.optionContainer}
            onPress={() => {
                if(option.action == events.NAVIGATE) {
                    router.push(option.navigateTo as never)
                } else if (option.action == events.OPEN_MODAL) {
                    // open modal code
                } else {
                    // NO EVENTS
                }
            }}
            activeOpacity={option.navigateTo ? 0.6 : 1}
        >
            <Ionicons name={option.icon} size={24} color="white" style={styles.icon} />
            <Text style={styles.optionText}>{option.label}</Text>

            {option.isToggleInput ? (
                <ToggleButton
                    value={option.value}
                    onValueChange={() => handleToggle(categoryIndex, optionIndex)}
                />
            ) : option.type === "selection" ? (
                <Text style={styles.selectionText}>{option.value}</Text>
            ) : (
                <Ionicons name="chevron-forward" size={20} color="gray" />
            )}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    optionContainer: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 12,
        borderBottomWidth: 0.5,
        borderBottomColor: "#444",
    },
    icon: { marginRight: 12 },
    optionText: { color: "white", fontSize: 16, flex: 1 },
    selectionText: { color: "#bbb", fontSize: 14, marginRight: 10 },
});

export default RenderOption;
