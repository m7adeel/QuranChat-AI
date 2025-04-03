import React from "react";
import { View, Text, StyleSheet } from "react-native";
import RenderOption from "./RenderOption";

interface SectionProps {
    item: any;
    categoryIndex: number;
    handleToggle: (categoryIndex: number, optionIndex: number) => void;
}

const RenderSection = ({ item, categoryIndex, handleToggle }: SectionProps) => {
    return (
        <View style={styles.categoryContainer}>
            <Text style={styles.categoryTitle}>{item.category}</Text>
            {item.options.map((option: any, optionIndex: number) => (
                <RenderOption
                    key={optionIndex}
                    option={option}
                    categoryIndex={categoryIndex}
                    optionIndex={optionIndex}
                    handleToggle={handleToggle}
                />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    categoryContainer: { marginBottom: 20, paddingHorizontal: 16 },
    categoryTitle: { color: "#888", fontSize: 16, marginBottom: 10 },
});

export default RenderSection;
