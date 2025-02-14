import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './navigation/AppNavigator';
import AuthNavigator from './navigation/AuthNavigator';
import { AuthProvider } from './context/AuthContext';
import { ItineraryProvider } from './context/ItineraryContext';
import { ThemeProvider } from './theme';
import { StatusBar } from 'react-native';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <ItineraryProvider>
        <ThemeProvider>
          <NavigationContainer>
            <StatusBar barStyle="light-content" />
            <AppNavigator />
          </NavigationContainer>
        </ThemeProvider>
      </ItineraryProvider>
    </AuthProvider>
  );
};

export default App;
