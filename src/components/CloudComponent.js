import React, { Component } from 'react';
import { DetailScreen, ThirdScreen } from './screenNames';
import Button from 'react-native-button';
import {
    Text, View, Image,StatusBar
} from 'react-native';
const backgroundColor = '#e97600';

export default class CloudComponent extends Component {    
    static navigationOptions = ({ navigation }) => {        
        let tabBarIcon = () => (
            <Image
                source={require('../images/try.png')}
                style={{ width: 26, height: 26, tintColor: backgroundColor }}
            />
        );
        return { tabBarIcon };
    }
    render() {           
        return (<View style={{
            flex: 1,
            backgroundColor: backgroundColor,
            alignItems: 'center',
            justifyContent: 'center'
        }}>

          <Text style={{ fontWeight: 'bold', fontSize: 22, color: 'white' }}>
                Toplu Gider
            </Text>            
        </View>);
    }
}