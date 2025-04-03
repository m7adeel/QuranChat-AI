import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet, Pressable } from "react-native";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const styles = {
    container: "flex-1 px-6 py-10 w-full",
    avatarContainer: "relative items-center border w-44",
    avatar: "w-32 h-32 rounded-full border-4 border-gray-800",
    cameraIconContainer: "absolute bottom-0 right-0 bg-gray-200 p-1 rounded-full",
    inputContainer: "mt-4",
    label: "text-white text-sm mb-1",
    inputField:
        "flex-row items-center bg-white/15 border border-white/50 text-white px-4 py-3 rounded-lg",
    icon: "mr-2 text-gray-400",
    saveButton:
        "mt-8 bg-yellow-400 py-4 rounded-full items-center justify-center",
    saveButtonText: "text-black font-bold text-lg",
};

const styleSheetStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

const ProfileScreen = () => {
    return (
        <LinearGradient
            colors={['#0A333A', '#236952']} // Define your gradient colors
            start={{ x: 0, y: 0 }} // Top-left corner
            end={{ x: 1, y: 1 }} // Bottom-right corner
            style={styleSheetStyles.container}>
            <View className={styles.container}>

                {/* Profile Avatar */}
                <View className="flex flex-row items-center justify-center">
                    <View className={styles.avatarContainer}>
                        {/* Profile Image */}
                        <Image
                            source={{ uri: 'https://via.placeholder.com/150' }} // Replace with actual user image
                            className={styles.avatar}
                        />
                        {/* Edit Icon Button */}
                        <Pressable className="absolute bottom-2 right-2 bg-white p-2 rounded-full shadow-lg">
                            <FontAwesome name="camera" size={20} color="black" />
                        </Pressable>
                    </View>
                </View>

                {/* Name Input */}
                <View className={styles.inputContainer}>
                    <Text className={styles.label}>Name</Text>
                    <View className={styles.inputField}>
                        <FontAwesome name="user" size={20} className={styles.icon} />
                        <TextInput
                            placeholder="Macoto"
                            placeholderTextColor="#bbb"
                            className="flex-1 text-white"
                        />
                    </View>
                </View>

                {/* Number Input (Incorrectly showing Email, fix it as needed) */}
                <View className={styles.inputContainer}>
                    <Text className={styles.label}>Number</Text>
                    <View className={styles.inputField}>
                        <FontAwesome name="phone" size={20} className={styles.icon} />
                        <TextInput
                            placeholder="macoto1122@gmail.com"
                            placeholderTextColor="#bbb"
                            className="flex-1 text-white"
                        />
                    </View>
                </View>

                {/* Email Input */}
                <View className={styles.inputContainer}>
                    <Text className={styles.label}>Email</Text>
                    <View className={styles.inputField}>
                        <MaterialIcons name="email" size={20} className={styles.icon} />
                        <TextInput
                            placeholder="macoto1122@gmail.com"
                            placeholderTextColor="#bbb"
                            className="flex-1 text-white"
                        />
                    </View>
                </View>

                {/* Save Button */}
                <TouchableOpacity className={styles.saveButton}>
                    <Text className={styles.saveButtonText}>Save</Text>
                </TouchableOpacity>

            </View>
        </LinearGradient>
    );
};

export default ProfileScreen;
