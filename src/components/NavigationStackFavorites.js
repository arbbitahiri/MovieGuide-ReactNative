import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

const Stack = createStackNavigator();

import FavoriteScreen from "../screens/Favorite/FavoriteScreen";
import MovieDetailsScreen from "../screens/MovieDetails/MovieDetailsScreen";

function NavigationStackFavorites() {
    return (
        <Stack.Navigator initialRouteName="Favorites">
            <Stack.Screen
                name="Favorites"
                component={FavoriteScreen}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="MovieDetailsFavorites"
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

export default NavigationStackFavorites;