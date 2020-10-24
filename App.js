//Import Important Packages
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons';
//Import Screens
import Featured from './Featured'
import Map from './Map'
//import MapLive from './resources/MapLive'


//Code that determains what is held on each screen
function MapScreen() { return (<Map></Map>); }
//function MapScreen() { return (<MapLive></MapLive>); }

import Account from './Account'
//Code that determains what is held on each screen
function FeaturedScreen() { return (<Featured></Featured>); }
function AccountScreen() { return (<Account></Account>);}
//Creates the bottom tabs and assigns screens to each tab
const Tab = createBottomTabNavigator();
function Tabs() {
    return (
        <Tab.Navigator
            //Sets up Tab Icons
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Map') {
                        iconName = focused ? 'map' : 'map';
                    } else if (route.name === 'BOSS') {
                        iconName = focused ? 'tree' : 'tree';
                    } else if (route.name === 'Account') {
                        iconName = focused ? 'user-alt' : 'user';
                    }
                    return <FontAwesome5 name={iconName} size={size} color={color} />;
                },
            })}
            //Sets Tab Colours
            tabBarOptions={{
                activeTintColor: 'white',
                inactiveTintColor: 'black',
                activeBackgroundColor: '#85c47c',
                inactiveBackgroundColor:'#85c47c'
            }}
            //Sets Inital Selected Tab
            initialRouteName={"BOSS"}
            
        >
            <Tab.Screen name="Map" component={MapScreen} />
            <Tab.Screen name="BOSS" component={FeaturedScreen} />
            <Tab.Screen name="Account" component={AccountScreen} />
        </Tab.Navigator>
    );
}
export default function App() {
    return (
        <NavigationContainer>
            <Tabs />
        </NavigationContainer>
    );
}