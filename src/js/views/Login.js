
import React ,{Component} from 'react';
import { View, Text,Button, TextInput, TouchableOpacity } from 'react-native';
import {NavigationActions} from 'react-navigation';
import LoginStyle from '../styles/LoginStyle';
import {connect} from 'react-redux';

class Login extends Component {

      constructor(props) {
        super(props);
          this.state ={
            email: " ",
            password: " "
          };
      }

    render() {
      return (
        <View style={LoginStyle.mainContainer}>

          <Text style={LoginStyle.header}>dinspo</Text>
          <TextInput style={LoginStyle.email}
              placeholder = "Email"
    
          />

         <TextInput style={LoginStyle.email}
              placeholder="Password"
              secureTextEntry={true}

          />

          <TouchableOpacity style={LoginStyle.buttonContainer} onPress={() => this.props.navigation.navigate('HomePage')} >
            <Text  style={LoginStyle.buttonText}>Log in</Text>
          </TouchableOpacity> 
        
          <TouchableOpacity style={LoginStyle.buttonContainer1} onPress={() => this.props.navigation.navigate('HomePage')} >
            <Text  style={LoginStyle.buttonText1}>f    Connect with Facebook</Text>
           </TouchableOpacity> 
         
         <Text style={LoginStyle.reset}> Reset Password </Text>
         
         <Text style={LoginStyle.acc}> I don't have an account</Text>
        
        </View>
      );
    }
  }

export default Login;
