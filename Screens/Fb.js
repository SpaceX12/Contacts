import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Fb extends React.Component{
    render(){
        return(
            <View>
                <Text style={styling.text} >Contact Us On Facebook</Text>
            </View>
        )
    }
}

const styling = StyleSheet.create({
    text:{flex:1,
     justifyContent:"center", 
     alignItems:"center"}
})