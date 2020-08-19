import 'react-native-gesture-handler';
import React, { Component } from 'react'
import Icon from 'react-native-vector-icons'
import {StyleSheet} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Home'
import About from './components/About';

const Stack = createStackNavigator();

class App extends Component {

  render() {
    return (
      <NavigationContainer>
       <Stack.Navigator initialRouteName="Home" > 
       <Stack.Screen  name="Home"  options={{ title: 'Corana Virus Updates',headerStyle:{
         backgroundColor:'black'
       },headerTintColor:'white' }} component={Home} />
        <Stack.Screen name="Details" component={About} />
      </Stack.Navigator>
      </NavigationContainer>
    )
  }
}


const styles = StyleSheet.create({
  header:{
    backgroundColor:'black'
  }
})

export default App
