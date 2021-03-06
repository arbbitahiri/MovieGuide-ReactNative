import {combineReducers} from 'redux';
import { reducer } from '../screens/MovieDetails/reducer';

const rootReducer = combineReducers({
  //...reducers,
  ...reducer
});

export default rootReducer;
