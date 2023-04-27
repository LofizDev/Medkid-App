import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Register from '../screens/auth/Register';
import ChangeLocation from '../components/Joining-process/ChangeLocation';

const Stack = createStackNavigator();

export default function AuthNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="register" options={{ title: false, headerMode: 'none' }} component={Register} />
            <Stack.Screen name="changeLocation" options={{ title: false, headerMode: 'none' }} component={ChangeLocation} />
        </Stack.Navigator>
    );
}