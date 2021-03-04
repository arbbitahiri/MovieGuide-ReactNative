export default {
    get,
    add,
    delete: _delete,
    clear
};

function get() {
  return {
    type: 'GET_MOVIES',
    movies: MOVIES,
  };
}

function add(movie) {
  return {
    type: 'ADD_MOVIE',
    movie: movie
  }
}

function _delete(id) {
  return {
    type: 'DELETE_MOVIE',
    id: id
  }
}

function clear() {
  return {
    type: 'CLEAR_MOVIES'
  }
}


