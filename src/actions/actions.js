import {
  GET_MOVIE, 
  ADD_MOVIE,
  DELETE_MOVIE
} from '../actions/types';

function getMovie(favorites) {
  return {
    type: GET_MOVIE,
    favorites: favorites,
  };
}

function addMovie(movie) {
  return {
    type: ADD_MOVIE,
    favorites: movie
  };
}

function deleteMovie(id) {
  return {
    type: DELETE_MOVIE,
    id: id
  };
}

export { 
  getMovie,
  addMovie,
  deleteMovie
};