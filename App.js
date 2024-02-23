import React, { Component } from 'react';
import { StyleSheet, SafeAreaView, Platform, StatusBar, View, Text, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/Home';
import LoginScreen from './screens/Login';
import MenuScreen from './screens/Menu';
import SignupScreen from './screens/Signup';

const Stack = createStackNavigator();

export default function App() {
  
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: true}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  droidSafeArea: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
  container: {

  },
  titleContainer: {

  },
  titleText: {

  },
  button: {

  }
})