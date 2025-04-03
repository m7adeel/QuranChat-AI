import React, { useState } from "react";
import { View, Text, FlatList, Switch, TouchableOpacity, TextInput, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { settingsMenu } from "../content/menus";
import { router } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

const SettingsScreen = () => {
    const [settings, setSettings] = useState(settingsMenu);
    const [searchQuery, setSearchQuery] = useState("");
    const [isSearchActive, setIsSearchActive] = useState(false);

    const handleToggle = (categoryIndex: number, optionIndex: number) => {
        const updatedSettings = [...settings];
        updatedSettings[categoryIndex].options[optionIndex].value = !updatedSettings[categoryIndex].options[optionIndex].value;
        setSettings(updatedSettings);
        updatedSettings[categoryIndex].options[optionIndex].onChange?.(updatedSettings[categoryIndex].options[optionIndex].value);
    };

    const filteredSettings = settings.map(category => ({
        ...category,
        options: category.options.filter(option =>
            option.label.toLowerCase().includes(searchQuery.toLowerCase())
        )
    })).filter(category => category.options.length > 0);

    const renderOption = (option: any, categoryIndex: number, optionIndex: number) => {
        return (
            <TouchableOpacity
                style={styles.optionContainer}
                onPress={() => option.navigateTo && router.replace(option.navigateTo as never)}
                activeOpacity={option.navigateTo ? 0.6 : 1}
            >
                <Ionicons name={option.icon} size={24} color="white" style={styles.icon} />
                <Text style={styles.optionText}>{option.label}</Text>

                {option.isToggleInput ? (
                    <Switch
                        value={option.value}
                        onValueChange={() => handleToggle(categoryIndex, optionIndex)}
                        trackColor={{ false: "#767577", true: "#FFD700" }}
                        thumbColor={option.value ? "#fff" : "#f4f3f4"}
                    />
                ) : option.type === "selection" ? (
                    <Text style={styles.selectionText}>{option.value}</Text>
                ) : (
                    <Ionicons name="chevron-forward" size={20} color="gray" />
                )}
            </TouchableOpacity>
        );
    };

    return (
        <View style={{ flex: 1 }}>
            <LinearGradient colors={['#0A333A', '#236952']} style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity 
                        onPress={() => router.back()}
                        style={styles.headerButton}
                    >
                        <Ionicons name="arrow-back" size={24} color="white" />
                    </TouchableOpacity>
                    {isSearchActive ? (
                        <View style={styles.searchContainer}>
                            <TextInput
                                style={styles.searchInput}
                                placeholder="Search settings..."
                                placeholderTextColor="#888"
                                value={searchQuery}
                                onChangeText={setSearchQuery}
                                autoFocus
                            />
                            <TouchableOpacity 
                                onPress={() => {
                                    setSearchQuery("");
                                    setIsSearchActive(false);
                                }}
                                style={styles.headerButton}
                            >
                                <Ionicons name="close" size={24} color="white" />
                            </TouchableOpacity>
                        </View>
                    ) : (
                        <>
                            <Text style={styles.headerTitle}>Settings</Text>
                            <TouchableOpacity 
                                onPress={() => setIsSearchActive(true)}
                                style={styles.headerButton}
                            >
                                <Ionicons name="search" size={24} color="white" />
                            </TouchableOpacity>
                        </>
                    )}
                </View>
                <FlatList
                    data={filteredSettings}
                    keyExtractor={(item) => item.category}
                    renderItem={({ item, index: categoryIndex }) => (
                        <View style={styles.categoryContainer}>
                            <Text style={styles.categoryTitle}>{item.category}</Text>
                            {item.options.map((option, optionIndex) => renderOption(option, categoryIndex, optionIndex))}
                        </View>
                    )}
                />
            </LinearGradient>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1 },
    header: {
        flexDirection: "row",
        alignItems: "center",
        padding: 16,
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: "rgba(255,255,255,0.1)",
    },
    headerButton: {
        padding: 8,
    },
    headerTitle: {
        flex: 1,
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        marginLeft: 16,
    },
    searchContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 16,
    },
    searchInput: {
        flex: 1,
        color: "white",
        fontSize: 16,
        padding: 8,
    },
    categoryContainer: { marginBottom: 20, paddingHorizontal: 16 },
    categoryTitle: { color: "#888", fontSize: 16, marginBottom: 10 },
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

export default SettingsScreen;
