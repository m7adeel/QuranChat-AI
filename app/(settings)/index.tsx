import React, { useState } from "react";
import { View, Text, FlatList, Switch, TouchableOpacity, TextInput, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { settingsMenu } from "../../content/menus";
import { router } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import RenderSection from "../../components/settings/RenderSection";
import useAuthStore from "~/store/authStore";

const SettingsScreen = () => {
    const { logout } = useAuthStore();

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
                        <RenderSection
                            item={item}
                            categoryIndex={categoryIndex}
                            handleToggle={handleToggle}
                        />
                    )}
                />
                <TouchableOpacity 
                    style={styles.logoutButton}
                    onPress={() => {
                        logout()
                    }}
                >
                    <Ionicons name="log-out-outline" size={24} color="white" />
                    <Text style={styles.logoutText}>Logout</Text>
                </TouchableOpacity>
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
    logoutButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
        margin: 16,
        backgroundColor: 'rgba(255, 0, 0, 0.2)',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: 'rgba(255, 0, 0, 0.3)',
    },
    logoutText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 8,
    },
});

export default SettingsScreen;
