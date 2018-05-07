import React, { Component } from 'react';
import { DetailScreen, ThirdScreen } from './screenNames';
import Button from 'react-native-button';
import {
    Text, View, Image,StyleSheet,Platform
} from 'react-native';
const backgroundColor = '#e97600';

export default class InfoComponent extends Component {
    static navigationOptions = ({ navigation }) => {        
        const tabBarIcon = () => (
            <Image
                source={require('../images/personel.png')}
                style={{ width: 26, height: 31, tintColor: backgroundColor }}
            />
        );
        return { tabBarIcon };
    }
   
    render() {
        return (
        <View style={{
            flex: 1,
            backgroundColor: backgroundColor,
            justifyContent: 'center'
        }}>
            <Text style={{ fontWeight: 'bold', fontSize: 22, color: 'white' }}>
                Personel
            </Text>  
           
                     
        </View>);
    }
}

const style = StyleSheet.create({
        ali: {
            width: 100,
    height: 100,
    borderRadius: 100/2,
    backgroundColor: 'red'
        }
});