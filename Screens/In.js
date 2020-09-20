import * as React from 'react';
import { View, Text } from 'react-native';

export default class In extends React.Component{
    render(){
        return(
            <View>
                <Text style={styling.text} >Contact Us On Instagram</Text>
            </View>
        )
    }
}

const styling = StyleSheet.create({
    text:{flex:1,
     justifyContent:"center", 
     alignItems:"center"
    }

})