import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {NavigationContainer} from "@react-navigation/native";

import NavigationStackHome from "./src/components/NavigationStackHome";
import NavigationStackFavorites from "./src/components/NavigationStackFavorites";
import NavigationStackSearch from "./src/components/NavigationStackSearch";
import SearchScreen from './src/screens/Search/SearchScreen'
import FavoriteScreen from './src/screens/Favorite/FavoriteScreen'
import SettingsScreen from './src/screens/Settings/SettingsScreen'

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