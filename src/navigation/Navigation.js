import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text } from 'react-native';
import React from 'react';
import PreloginScreen from '../onboardingScreens/PreloginScreen';
import LoginScreen from '../auth/loginScreen/LoginScreen';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="PreloginScreen"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="PreloginScreen" component={PreloginScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
