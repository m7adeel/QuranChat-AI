import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { Ionicons } from '@expo/vector-icons';
import ToggleButton from '~/components/general/ToggleButton';
import SettingsHeader from '~/components/settings/SettingsHeader';
import { router } from 'expo-router';

export default function AppLock() {
    const [isAppLockEnabled, setIsAppLockEnabled] = useState(true);
    return (
        <LinearGradient
            colors={['#0A333A', '#236952']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styleSheetStyles.container}
        >
            <SettingsHeader 
                title='Set App Lock'
                subtitle='Select password type'
            />
            <View className={styles.card}>
                <View className={styles.rowBetween}>
                    <View className={styles.row}>
                        <View className={styles.iconBox}>
                            <Ionicons name='lock-closed' size={24} color="white" />
                        </View>
                        <View>
                            <Text className={styles.title}>App Lock</Text>
                            <Text className={styles.subtitle}>Choose a password for your app</Text>
                        </View>
                    </View>
                    <ToggleButton value={isAppLockEnabled} onValueChange={() => { setIsAppLockEnabled(!isAppLockEnabled) }} />
                </View>
            </View>
            <TouchableOpacity className={styles.optionContainer} onPress={() => {
                router.push('/app_lock_pin')
            }}>
                <View className={styles.row}>
                    <View className={styles.iconBox}>
                        <Ionicons name='key' size={24} color="white" />
                    </View>
                    <View>
                        <Text className={styles.title}>Set password</Text>
                        <Text className={styles.subtitle}>Set or change password</Text>
                    </View>
                </View>
                <View className={styles.chevronBox}>
                    <Ionicons name='chevron-forward' size={24} color="white" />
                </View>
            </TouchableOpacity>
            <TouchableOpacity className={styles.optionContainer}>
                <View className={styles.row}>
                    <View className={styles.iconBox}>
                        <Ionicons name='document' size={24} color="white" />
                    </View>
                    <View>
                        <Text className={styles.title}>Security Question</Text>
                        <Text className={styles.subtitle}>If you forget password</Text>
                    </View>
                </View>
                <View className={styles.chevronBox}>
                    <Ionicons name='chevron-forward' size={24} color="white" />
                </View>
            </TouchableOpacity>
        </LinearGradient>
    )
}

const styles = {
    card: 'bg-white/20 rounded-lg p-4 my-3',
    optionContainer: 'bg-white/20 rounded-lg p-4 mb-3 flex-row items-center justify-between',
    row: 'flex-row items-center',
    rowBetween: 'flex-row items-center justify-between',
    iconBox: 'rounded-lg p-2 mr-4',
    chevronBox: 'bg-gray-700 rounded-full p-2',
    title: 'text-white text-base font-semibold',
    subtitle: 'text-gray-400 text-sm'
}

const styleSheetStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
});