/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {View} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import Register from './Screen/Register/Register';
import Login from './Screen/Login/Login';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator();

export default class App extends Component {
  componentDidMount() {
    firestore()
      .collection('users')
      .get()
      .then((querySnapshot) => {   
        console.log('Total users: ', querySnapshot.size);

        querySnapshot.forEach((documentSnapshot) => {
          console.log(
            'User ID: ',
            documentSnapshot.id,
            documentSnapshot.data(),
          );
        });
      });
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Registration" component={Register} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
