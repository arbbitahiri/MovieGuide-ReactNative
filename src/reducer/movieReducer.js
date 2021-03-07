import { Alert } from 'react-native';
import {
    GET_MOVIE, 
    ADD_MOVIE,
    DELETE_MOVIE
} from '../actions/types';

const initialState = {
    favorites: []
}

const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_MOVIE: 
            return {
                favorites: action.favorites
            };
        case ADD_MOVIE:
            const exists = state.favorites.some(l => l.id == action.favorites.id);
            if (exists) {
                Alert.alert(
                    "Exists",
                    "This movie already exists in favorites!",
                    [
                        {
                            text: "Okay",
                            onPress: () => { console.log("OKAY pressed!") },
                        }
                    ],
                    {
                        cancelable: false
                    }
                );
                return state;
            }

            return {
                favorites: [...state.favorites, action.favorites]
            };
        case DELETE_MOVIE:
            return {
                favorites: state.favorites.filter(movie => movie.id !== action.id)
            };
    
        default:
            return state;
    }
}

export default movieReducer;