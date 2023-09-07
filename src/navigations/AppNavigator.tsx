import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import AppointmentBooking from '../screens/Appointments/AppointmentBooking';
import AppointmentCall from '../screens/Appointments/AppointmentCall';
import AppointmentChat from '../screens/Appointments/AppointmentChat';
import Appointments from '../screens/Appointments/Appointments';
import Home from '../screens/Home/Home';
import MedicationDetails from '../screens/Medications/MedicationDetails';
import Medications from '../screens/Medications/Medications';
import Profile from '../screens/Profile/Profile';
import Welcome from '../screens/Welcome';

const Stack = createStackNavigator();

const AppNavigator = (): JSX.Element => {
    const options = { title: '', headerMode: undefined };

    return (
        <Stack.Navigator >
            <Stack.Screen name="welcome" options={{ headerShown: false }} component={Welcome} />
            <Stack.Screen name="profile" options={options} component={Profile} />
            <Stack.Screen name="home" options={{ headerShown: false }} component={Home} />
            <Stack.Screen name="medications" options={options} component={Medications} />
            <Stack.Screen name="appointments" options={options} component={Appointments} />
            <Stack.Screen name="appointmentChat" options={options} component={AppointmentChat} />
            <Stack.Screen name="appointmentCall" options={options} component={AppointmentCall} />
            <Stack.Screen name="medicationDetails" options={options} component={MedicationDetails} />
            <Stack.Screen name="appointmentBooking" options={options} component={AppointmentBooking} />
        </Stack.Navigator>
    );
};

export default AppNavigator