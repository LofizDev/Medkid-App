import React from 'react';

import { Image } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

import avartar from '../assets/images/mathew.jpg';
import AppointmentBooking from '../screens/Appointments/AppointmentBooking';
import AppointmentCall from '../screens/Appointments/AppointmentCall';
import AppointmentChat from '../screens/Appointments/AppointmentChat';
import Appointments from '../screens/Appointments/Appointments';
import Home from '../screens/Home/Home';
import MedicationDetails from '../screens/Medications/MedicationDetails';
import Medications from '../screens/Medications/Medications';
import Profile from '../screens/Profile/Profile';
import Welcome from '../screens/Welcome';
import {
    spacing,
    theme,
} from '../theme';

const Stack = createStackNavigator();

const AppNavigator = (): JSX.Element => {

    return (
        <Stack.Navigator >
            <Stack.Screen name="welcome" options={{ headerShown: false }} component={Welcome} />
            <Stack.Screen name="profile" options={{ headerShown: false }} component={Profile} />
            <Stack.Screen name="home" options={{ headerShown: false }} component={Home} />
            <Stack.Screen name="medications" component={Medications} />
            <Stack.Screen
                name="appointments"
                options={{
                    title: 'Your appointments',
                    headerStyle: { backgroundColor: theme.standardBackground },
                    headerRight: () => (
                        <Image
                            style={{ height: 30, width: 30, borderRadius: 50, margin: spacing.s, resizeMode: 'cover' }}
                            resizeMethod="auto" source={avartar} /> as React.ReactElement),
                }}
                component={Appointments} />
            <Stack.Screen
                options={{ title: '', headerTransparent: true }}
                name="appointmentChat"
                component={AppointmentChat} />
            <Stack.Screen
                options={{ title: '', headerTransparent: true }}
                name="appointmentCall"
                component={AppointmentCall} />
            <Stack.Screen name="medicationDetails" component={MedicationDetails} />
            <Stack.Screen name="appointmentBooking" component={AppointmentBooking} />
        </Stack.Navigator>
    );
};

export default AppNavigator