import React, { Component } from 'react';
import { StyleSheet, SafeAreaView, Platform, StatusBar, View, Text, TouchableOpacity, TextInput } from 'react-native';

import LoginScreen from './Login'

export default class MenuScreen extends LoginScreen {
  constructor() {
    super()

    this.state={
      username: 'Indigo',
      password: 'uwu'
    }
  }

  render() {

    return(
      <View>
        <SafeAreaView style={styles.droidSafeArea} />
        <Text style={{}}> Welcome Back {this.state.username}! </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  droidSafeArea: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  }
})
