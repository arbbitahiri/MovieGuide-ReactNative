import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

const Stack = createStackNavigator();

import SearchScreen from "../screens/Search/SearchScreen";
import MovieDetailsScreen from "../screens/MovieDetails/MovieDetailsScreen";

function NavigationStackSearch() {
    return (
        <Stack.Navigator initialRouteName="Search">
            <Stack.Screen
                name="Search"
                component={SearchScreen}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="MovieDetailsSearch"
                component={MovieDetailsScreen}
                options={{
                    headerStyle: {
                        backgroundColor: '#B43343'
                    }
                }}
            />
        </Stack.Navigator>
    );
};

export default NavigationStackSearch;