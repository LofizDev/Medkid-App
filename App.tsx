import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { MedicalProvider } from './src/context/MedicalContext';
import AppNavigator from './src/navigations/AppNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <MedicalProvider>
        <AppNavigator />
      </MedicalProvider>
    </NavigationContainer>
  );
}
