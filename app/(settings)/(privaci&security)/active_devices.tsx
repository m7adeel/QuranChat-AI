import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import DeviceListItem from '~/components/settings/DeviceListItem';
import SettingsHeader from '~/components/settings/SettingsHeader';


const DeviceList = () => {
    const devices = [
        {
            name: 'iPhone 13 pro',
            location: 'Melbourne, Australia',
            date: '22 Jan at 10:40am',
            isCurrentDevice: true,
        },
        {
            name: 'iPhone 13 pro',
            location: 'Melbourne, Australia',
            date: '22 Jan at 10:40am',
            isCurrentDevice: false,
        },
        {
            name: 'iPhone 13 pro',
            location: 'Melbourne, Australia',
            date: '22 Jan at 10:40am',
            isCurrentDevice: false,
        },
    ];

    const handleDelete = (index) => {
        // Implement your delete logic here
        console.log(`Delete device at index ${index}`);
    };

    return (
        <View className="flex-1 my-2">
            {devices.map((device, index) => (
                <DeviceListItem
                    key={index}
                    deviceName={device.name}
                    location={device.location}
                    date={device.date}
                    isCurrentDevice={device.isCurrentDevice}
                    onDelete={() => handleDelete(index)}
                />
            ))}
        </View>
    );
};


export default function ActiveDevices() {
    return (
        <LinearGradient
            colors={['#0A333A', '#236952']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styleSheetStyles.container}
            className=''
        >
            <SettingsHeader 
                title='Where you’re logged in'
                subtitle='We’ll alert you via olivia@gmail.com if there is any unusual activity on your account.'
            />
            <View className='h-4'/>
            <DeviceList />
        </LinearGradient>
    )
}

const styleSheetStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding:20
    },
});