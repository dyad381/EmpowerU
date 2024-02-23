import React, { Component } from 'react';
import { StyleSheet, SafeAreaView, Platform, StatusBar, View, Text, TouchableOpacity } from 'react-native';

export default class HomeScreen extends Component {
  render(){
    return(
      <View>

        <SafeAreaView style={styles.droidSafeArea} />

        <View style={styles.titleContainer}>
          <Text style={styles.titleText}> EmpowerU </Text>
        </View>

        <View>
          <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate("Login")}>
            ~Login~
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate("Signup")}>
            ~Sign Up~
          </TouchableOpacity>
        </View>

      </View>
    )
  }
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