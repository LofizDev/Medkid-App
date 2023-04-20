import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/auth/Login';

const Stack = createStackNavigator();

console.log('here', Stack);

export default function AuthNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
    )
}