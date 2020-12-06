import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {NavigationContainer} from "@react-navigation/native";
import HomeScreen from './src/Home/HomeScreen'
import SearchScreen from './src/Search/SearchScreen'
import FavoriteScreen from './src/Favorite/FavoriteScreen'
import SettingsScreen from './src/SettingsScreen'

export default function App() {
  return (
      <NavigationContainer>
          <MyTabs />
      </NavigationContainer>
  );
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
              component={HomeScreen}
              options={{
                  tabBarLabel: 'Home',
                  tabBarIcon: ({color}) => (
                      <MaterialCommunityIcons name="home" color={color} size={26} />
                      ),
              }}
          />
          <Tab.Screen
              name="Search"
              component={SearchScreen}
              options={{
                  tabBarLabel: 'Search',
                  tabBarIcon: ({color}) => (
                      <MaterialCommunityIcons name="search-web" color={color} size={26} />
                      ),
              }}/>
          <Tab.Screen
              name="Favorites"
              component={FavoriteScreen}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B43343',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
