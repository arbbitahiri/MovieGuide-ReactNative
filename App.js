import React from 'react';
import {
    View,
    ActivityIndicator,
} from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {NavigationContainer} from "@react-navigation/native";

import NavigationStackHome from "./src/navigation/NavigationStackHome";
import NavigationStackFavorites from "./src/navigation/NavigationStackFavorites";
import NavigationStackSearch from "./src/navigation/NavigationStackSearch";
import SettingsScreen from './src/screens/Settings/SettingsScreen'

import Expo from 'expo';
import * as Font from 'expo-font';

export default class App extends React.Component {
    state = {
        isReady: false,
    }

    componentDidMount() {
        this.loadFonts();
    }

    async loadFonts() {
        await Font.loadAsync({
            'Raleway-Medium': require('./assets/fonts/Raleway-Medium.ttf'),
            'Montserrat-Medium': require('./assets/fonts/Montserrat-Medium.ttf'),
            'Montserrat-Light': require('./assets/fonts/Montserrat-Light.ttf')
        });
        this.setState({ isReady: true });
    }
  
    render() {
        if (!this.state.isReady) {
            return (
                <View style={{
                    flex:1,
                    flexDirection:'row',
                    alignItems:'center',
                    backgroundColor: '#15202B',
                    justifyContent:'center'
                }}>
                    <ActivityIndicator size="small" color="#B43343" />
                </View>
            );
        } else {
            return (
                <NavigationContainer>
                    <MyTabs />
                </NavigationContainer>
            );
        }
    }
}

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="#B43343"
        inactiveColor="#3b546e"
        barStyle={{ backgroundColor: "#253341",}}
      >
          <Tab.Screen
              name="Home"
              component={NavigationStackHome}
              options={{
                  tabBarLabel: 'Home',
                  tabBarIcon: ({color}) => (
                      <MaterialCommunityIcons name="home" color={color} size={26} />
                      ),
              }}
          />
          <Tab.Screen
              name="Search"
              component={NavigationStackSearch}
              options={{
                  tabBarLabel: 'Search',
                  tabBarIcon: ({color}) => (
                      <MaterialCommunityIcons name="search-web" color={color} size={26} />
                      ),
              }}/>
          <Tab.Screen
              name="Favorites"
              component={NavigationStackFavorites}
              options={{
                  tabBarLabel: 'Favorites',
                  tabBarIcon: ({color}) => (
                      <MaterialCommunityIcons name="heart" color={color} size={26} />
                  ),
              }}/>
          <Tab.Screen
              name="Settings"
              component={SettingsScreen}
              options={{
                  tabBarLabel: 'Settings',
                  tabBarIcon: ({color}) => (
                      <MaterialCommunityIcons name="settings" color={color} size={26} />
                  ),
              }}/>
      </Tab.Navigator>
  )
}