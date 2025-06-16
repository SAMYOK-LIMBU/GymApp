import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text } from 'react-native';
import React from 'react';
import PreloginScreen from '../onboardingScreens/PreloginScreen';
import LoginScreen from '../auth/loginScreen/LoginScreen';
import RegisterScreen from '../auth/registerScreen/RegisterScreen';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const AuthStack = () => {
    return (
      <Stack.Navigator
        initialRouteName="PreloginScreen"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="PreloginScreen" component={PreloginScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      </Stack.Navigator>
    );
  };
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
};

export default Navigation;
