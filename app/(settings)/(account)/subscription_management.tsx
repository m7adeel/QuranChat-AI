import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const styles = {
    container: "p-4",
    title: "text-white text-4xl font-bold mb-8",
    subscriptionCard: "rounded-xl overflow-hidden mb-6 bg-white/20",
    cardHeader: "flex-row justify-between items-center p-4 bg-white/20",
    cardHeaderTitle: "text-white text-lg font-medium",
    cardHeaderSubtitle: "text-white text-xs",
    cardContent: "p-6 flex-row justify-between items-center",
    planTitle: "text-white text-xl font-bold mb-1",
    planPrice: "text-white text-lg",
    monthlyRate: "text-white text-2xl font-bold",
    actionButton: "flex-row justify-between items-center p-4 border-teal-700",
    buttonContent: "flex-row items-center",
    buttonText: "text-white text-xl ml-4"
};

const SubscriptionManagement = () => {
    return (
        <LinearGradient
            colors={['#0A333A', '#236952']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={{ flex: 1 }}>
            <View className={styles.container}>
                <Text className={styles.title}>
                    Subscription Management
                </Text>

                {/* Current Subscription Card */}
                <View className={styles.subscriptionCard}>
                    {/* Card Header */}
                    <View className={styles.cardHeader}>
                        <Text className={styles.cardHeaderTitle}>Current Subscription</Text>
                        <Text className={styles.cardHeaderSubtitle}>Ended in: Dec-2026</Text>
                    </View>

                    {/* Card Content */}
                    <View className={styles.cardContent}>
                        <View>
                            <Text className={styles.planTitle}>Yearly</Text>
                            <Text className={styles.planPrice}>12 month - 29.99$</Text>
                        </View>
                        <Text className={styles.monthlyRate}>2.50 $/mo</Text>
                    </View>
                </View>

                {/* Option Buttons */}
                <TouchableOpacity className={styles.actionButton}>
                    <View className={styles.buttonContent}>
                        <MaterialIcons name="arrow-upward" size={24} color="white" />
                        <Text className={styles.buttonText}>Upgrade Plan</Text>
                    </View>
                    <MaterialIcons name="chevron-right" size={24} color="white" />
                </TouchableOpacity>

                <TouchableOpacity className={styles.actionButton}>
                    <View className={styles.buttonContent}>
                        <MaterialIcons name="credit-card" size={24} color="white" />
                        <Text className={styles.buttonText}>Payment Method</Text>
                    </View>
                    <MaterialIcons name="chevron-right" size={24} color="white" />
                </TouchableOpacity>

                <TouchableOpacity className={styles.actionButton}>
                    <View className={styles.buttonContent}>
                        <MaterialIcons name="delete" size={24} color="white" />
                        <Text className={styles.buttonText}>Cancel Subscription</Text>
                    </View>
                    <MaterialIcons name="chevron-right" size={24} color="white" />
                </TouchableOpacity>
            </View>
        </LinearGradient>
    );
};

export default SubscriptionManagement;
