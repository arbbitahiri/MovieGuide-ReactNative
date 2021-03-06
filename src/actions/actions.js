import {
  GET_MOVIE, 
  ADD_MOVIE,
  DELETE_MOVIE
} from '../actions/types';

/*
const getMovie = () => (
  {
    type: GET_MOVIE,
    favorites: []
  }
);

const addMovie = (movie) => (
  {
    type: ADD_MOVIE,
    favorites: movie
  }
);

const deleteMovie = (id) => (
  {
    type: DELETE_MOVIE,
    key: id
  }
);

export {
  getMovie,
  addMovie,
  deleteMovie
}
*/

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

function clear() {
  return {
    type: 'CLEAR_MOVIES'
  };
}

export { 
  getMovie,
  addMovie,
  deleteMovie
};