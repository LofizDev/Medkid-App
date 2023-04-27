import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './src/navigations/AuthNavigator';
import { StoreProvider } from './src/context/RegisterContext';
export default function App() {
  return (
    <NavigationContainer>
      <StoreProvider>
        <AuthNavigator />
      </StoreProvider>
    </NavigationContainer>
  );
}