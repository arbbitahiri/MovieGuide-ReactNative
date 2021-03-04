import {combineReducers} from 'redux';
import {movies} from '../screens/MovieDetails/reducer';

const rootReducer = combineReducers({
  //...reducers,
  movies
});

export default rootReducer;
