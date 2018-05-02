import React, { Component } from 'react';
import Button from 'react-native-button';
import {
    Text, View, Image
} from 'react-native';
const backgroundColor = '#e97600';

export default class SettingsComponent extends Component {    
    static navigationOptions = ({ navigation }) => {        
        let tabBarLabel = 'Settings';
        let tabBarIcon = () => (
            <Image
                source={require('../images/settings-icon.png')}
                style={{ width: 26, height: 26, tintColor: backgroundColor }}
            />
        );
        return { tabBarLabel, tabBarIcon };
    }    
    
    render() {           
        return (<View style={{
            flex: 1,
            backgroundColor: backgroundColor,
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Text style={{ fontWeight: 'bold', fontSize: 22, color: 'white' }}>
                This is Settings Screen
        </Text>            
        </View>);
    }
}