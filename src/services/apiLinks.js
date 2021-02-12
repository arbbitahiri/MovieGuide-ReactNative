const API_POPULAR = "https://api.themoviedb.org/3/movie/popular?api_key=81229d17288cd3c3a979724d4d5c9cae&language=en-US&page=1&region=US";
const API_UPCOMING= "https://api.themoviedb.org/3/movie/upcoming?api_key=81229d17288cd3c3a979724d4d5c9cae&language=en-US&page=1&region=US";
const API_TOP_RATED = "https://api.themoviedb.org/3/movie/top_rated?api_key=81229d17288cd3c3a979724d4d5c9cae&language=en-US&page=1&region=US";
const API_NOW_PLAYING = "https://api.themoviedb.org/3/movie/now_playing?api_key=81229d17288cd3c3a979724d4d5c9cae&language=en-US&page=1&region=US";
const API_TRENDING = "https://api.themoviedb.org/3/trending/movie/day?api_key=81229d17288cd3c3a979724d4d5c9cae&language=en-US&page=1&region=US";

const API_GET_MOVIE = (movie_id) => {
    return (
        `https://api.themoviedb.org/3/movie/${movie_id}?api_key=81229d17288cd3c3a979724d4d5c9cae&language=en-US`
    )
}

const API_GET_MOVIE_CAST = (movie_id) => {
    return (
        `https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=81229d17288cd3c3a979724d4d5c9cae&language=en-US`
    )
}

const API_GET_SIMILAR_MOVIES = (movie_id) => {
    return (
        `https://api.themoviedb.org/3/movie/${movie_id}/similar?api_key=81229d17288cd3c3a979724d4d5c9cae&language=en-US&page=1`
    )
}

const API_GET_MOVIE_TRAILERS = (movie_id) => {
    return (
        `https://api.themoviedb.org/3/movie/${movie_id}/videos?api_key=81229d17288cd3c3a979724d4d5c9cae&language=en-US`
    )
}

const API_SEARCH_MOVIES = (movie) => {
    return (
        `https://api.themoviedb.org/3/search/movie?api_key=81229d17288cd3c3a979724d4d5c9cae&language=en-US&query=${movie}&page=1`
    )
}

export {
    API_POPULAR,
    API_UPCOMING,
    API_TOP_RATED,
    API_NOW_PLAYING,
    API_TRENDING,
    API_GET_MOVIE,
    API_GET_MOVIE_CAST,
    API_GET_SIMILAR_MOVIES,
    API_GET_MOVIE_TRAILERS,
    API_SEARCH_MOVIES
}