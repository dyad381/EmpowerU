import React, { Component } from 'react';
import { StyleSheet, SafeAreaView, Platform, StatusBar, View, Text, TouchableOpacity, TextInput, Alert } from 'react-native';

export default class SignupScreen extends Component {
  constructor() {
    super();

    this.state = {
      username:null,
      password:null
    }
  };

  render() {

    checkSubmission = () => {

      if(this.state.username !== null, this.state.password.length > 5){
        this.props.navigation.navigate("Menu");
      } else {
        const simpleAlertHandler = () => {
          //function to make simple alert
          alert('Hello I am Simple Alert');
        };
        simpleAlertHandler();
      }
    }

    return(
      <View>
        <SafeAreaView style={styles.droidSafeArea} />

        <View style={styles.titleContainer}>
          <Text style={styles.titleText}> Sign Up Page </Text>
        </View>

        <View>
          <TextInput style={{}} placeholder="Username" placeholderTextColor="gray" onChangeText={text => this.setState({username:text})}/>
          <TextInput style={{}} placeholder="Password" placeholderTextColor="gray" onChangeText={text => this.setState({password:text})}/>
        </View>

        <View>
          <TouchableOpacity style={styles.button} onPress={() => checkSubmission()}>
            Submit
          </TouchableOpacity>
        </View>
        
        

      </View>
    )
  }
}

const styles = StyleSheet.create({
  droidSafeArea: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  }
})
