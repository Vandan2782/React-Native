import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import IntroScreen from '../screens/IntroScreen';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import OtpScreen from '../screens/OtpScreen';
import PhoneScreen from '../screens/PhoneScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Intro" component={IntroScreen} />
        <Stack.Screen name="Home"  component={HomeScreen} />
         <Stack.Screen name="Login" component={LoginScreen} />
           <Stack.Screen name="Phone" component={PhoneScreen} />
          <Stack.Screen name="OTP" component={OtpScreen} />
         
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
