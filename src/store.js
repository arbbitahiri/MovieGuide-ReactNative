import { createStore, combineReducers } from 'redux';
import movieReducer from './reducer/movieReducer';

const rootReducer = combineReducers({
    movieReducer
});

const configureStore = () => createStore(rootReducer);

export default configureStore;