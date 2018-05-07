import { AppRegistry, Platform, Image } from 'react-native';
import { TabNavigator } from 'react-navigation';
import HomeComponent from './src/components/HomeComponent';
import InfoComponent from './src/components/InfoComponent';
import SettingsComponent from './src/components/SettingsComponent';
import CloudComponent from './src/components/CloudComponent';
import { Home, Info, Settings, Cloud } from './src/components/screenNames';


const routeConfigs = {
    Home: {
        screen: HomeComponent,
    },
    Info: {
        screen: InfoComponent,
    },
    Settings: {
        screen: SettingsComponent,
    },
    Cloud: {
        screen: CloudComponent,
    },
};

const tabNavigatorConfig = { 
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: true,
    tabBarOptions: {
        activeTintColor: 'blue',
        style: {
           backgroundColor: '#c3cfe2',
            padding: 1,
            height: 60,
        },    
         showIcon: true,   
          showLabel: false
    },    
    // order: [Settings, Home, Cloud, Info],
};
const App = TabNavigator(routeConfigs, tabNavigatorConfig);
AppRegistry.registerComponent('deneme', () => App);