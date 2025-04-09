import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import useAuthStore from "~/store/authStore";

const styles = {
    container: "flex-1 px-6 py-10 w-full",
    title: "text-white text-2xl font-bold mb-8 text-center",
    inputContainer: "mt-4",
    label: "text-white text-sm mb-1",
    inputField:
        "flex-row items-center bg-white/15 border border-white/50 text-white px-4 py-3 rounded-lg",
    icon: "mr-2 text-gray-400",
    saveButton:
        "mt-8 bg-yellow-400 py-4 rounded-full items-center justify-center",
    saveButtonText: "text-black font-bold text-lg",
};

const ChangePasswordScreen = () => {
    const [currentPassword, setCurrentPassword] = useState('123456');
    const [newPassword, setNewPassword] = useState('12345678');
    const [confirmNewPassword, setConfirmNewPassword] = useState('12345678');

    const { changePassword } = useAuthStore();

    const updatePassword = () => {
        if(newPassword !== confirmNewPassword) {
            console.log("Password incorrect")
            return
        } 

        changePassword(currentPassword, newPassword)
    }

    return (
        <LinearGradient
            colors={['#0A333A', '#236952']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={{ flex: 1 }}>
            <View className={styles.container}>
                <Text className={styles.title}>Change Password</Text>

                {/* Current Password Input */}
                <View className={styles.inputContainer}>
                    <Text className={styles.label}>Current Password</Text>
                    <View className={styles.inputField}>
                        <MaterialIcons name="lock" size={20} className={styles.icon} />
                        <TextInput
                            placeholder="Enter current password"
                            placeholderTextColor="#bbb"
                            className="flex-1 text-white"
                            onChangeText={(text) => setCurrentPassword(text)}
                            secureTextEntry
                        />
                    </View>
                </View>

                {/* New Password Input */}
                <View className={styles.inputContainer}>
                    <Text className={styles.label}>New Password</Text>
                    <View className={styles.inputField}>
                        <MaterialIcons name="lock-outline" size={20} className={styles.icon} />
                        <TextInput
                            placeholder="Enter new password"
                            placeholderTextColor="#bbb"
                            className="flex-1 text-white"
                            onChangeText={(text) => setNewPassword(text)}
                            secureTextEntry
                        />
                    </View>
                </View>

                {/* Confirm New Password Input */}
                <View className={styles.inputContainer}>
                    <Text className={styles.label}>Confirm New Password</Text>
                    <View className={styles.inputField}>
                        <MaterialIcons name="lock-outline" size={20} className={styles.icon} />
                        <TextInput
                            placeholder="Confirm new password"
                            placeholderTextColor="#bbb"
                            className="flex-1 text-white"
                            onChangeText={(text) => setConfirmNewPassword(text)}
                            secureTextEntry
                        />
                    </View>
                </View>

                {/* Update Password Button */}
                <TouchableOpacity className={styles.saveButton} onPress={updatePassword}>
                    <Text className={styles.saveButtonText}>Update Password</Text>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    );
};

export default ChangePasswordScreen;
