import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import PersonalProfile from '../components/profile/PersonalProfile';
import AppointmentBooking from '../screens/Appointments/AppointmentBooking';
import AppointmentCall from '../screens/Appointments/AppointmentCall';
import AppointmentChat from '../screens/Appointments/AppointmentChat';
import Appointments from '../screens/Appointments/Appointments';
import AppointmentSuccess from '../screens/Appointments/AppointmentSuccess';
import DoctorDetail from '../screens/Doctors/DoctorDetail';
import Doctors from '../screens/Doctors/Doctors';
import Home from '../screens/Home/Home';
import MedicationDetails from '../screens/Medications/MedicationDetails';
import Medications from '../screens/Medications/Medications';
import Profile from '../screens/Profile/Profile';
import Welcome from '../screens/Welcome';
import { theme } from '../theme';

const Stack = createStackNavigator();

const AppNavigator = (): JSX.Element => {
    const Avatar = <PersonalProfile />;
    const HIDDEN_HEADER = { headerShown: false, title: '' };

    const TRANSPARENT_HEADER = {
        headerStyle: { backgroundColor: theme.standardBackground },
        headerShown: true, title: '',
    };

    const dynamicOptionHeader = (title: string) => {
        return {
            headerStyle: { backgroundColor: theme.standardBackground },
            headerShown: true, title: title,
            headerRight: () => (Avatar) as React.ReactElement,
        };
    };

    return (
        <Stack.Navigator>

            <Stack.Screen
                name="welcome"
                options={HIDDEN_HEADER}
                component={Welcome}
            />
            <Stack.Screen
                name="profile"
                options={HIDDEN_HEADER}
                component={Profile}
            />
            <Stack.Screen
                name="home"
                options={HIDDEN_HEADER}
                component={Home}
            />
            <Stack.Screen
                name="appointmentSuccess"
                options={HIDDEN_HEADER}
                component={AppointmentSuccess}
            />
            <Stack.Screen
                options={HIDDEN_HEADER}
                name="appointmentChat"
                component={AppointmentChat}
            />
            <Stack.Screen
                name="appointmentCall"
                component={AppointmentCall}
                options={HIDDEN_HEADER}
            />
            <Stack.Screen
                name="doctors"
                component={Doctors}
                options={{ title: '', headerTransparent: true }}
            />
            <Stack.Screen
                name="doctorDetail"
                component={DoctorDetail}
                options={TRANSPARENT_HEADER}
            />
            <Stack.Screen
                name="appointmentBooking"
                options={dynamicOptionHeader('Book your appointment')}
                component={AppointmentBooking}
            />
            <Stack.Screen
                name="appointments"
                options={dynamicOptionHeader('Your appointment')}
                component={Appointments}
            />
            <Stack.Screen name="medications" component={Medications} />
            <Stack.Screen name="medicationDetails" component={MedicationDetails} />
        </Stack.Navigator>
    );
};

export default AppNavigator