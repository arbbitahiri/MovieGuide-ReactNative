import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import HomeScreen from "../screens/Home/HomeScreen";
import MovieDetailsScreen from "../screens/MovieDetails/MovieDetailsScreen";

function NavigationStackHome() {
    return (
        <Stack.Navigator
            initialRouteName="Home" >
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="MovieDetails"
                component={MovieDetailsScreen}
                options={{
                    headerStyle: {
                        backgroundColor: '#B43343'
                    },
                    headerTitle: "Details"
                }}
            />
        </Stack.Navigator>
    );
};

export default NavigationStackHome;