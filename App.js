import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Fb from './Screens/Fb';
import In from './Screens/In';

export default class App extends React.Component{
 render(){
  return (
    <AppContainer></AppContainer>
  );
 }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const tabNavigator = createBottomTabNavigator({
  FaceBook:{screen:Fb},
  Instagram:{screen:In}
})

const AppContainer = createAppContainer(tabNavigator);