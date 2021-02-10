const apiPopular = "https://api.themoviedb.org/3/movie/popular?api_key=81229d17288cd3c3a979724d4d5c9cae&language=en-US&page=1&region=US";
const apiUpcoming= "https://api.themoviedb.org/3/movie/upcoming?api_key=81229d17288cd3c3a979724d4d5c9cae&language=en-US&page=1&region=US";
const apiTopRated = "https://api.themoviedb.org/3/movie/top_rated?api_key=81229d17288cd3c3a979724d4d5c9cae&language=en-US&page=1&region=US";
const apiNowPlaying = "https://api.themoviedb.org/3/movie/now_playing?api_key=81229d17288cd3c3a979724d4d5c9cae&language=en-US&page=1&region=US";
const apiTrending = "https://api.themoviedb.org/3/trending/movie/week?api_key=81229d17288cd3c3a979724d4d5c9cae&language=en-US&page=1&region=US";

const apiGetMovie = (movie_id) => {
    return (
        `https://api.themoviedb.org/3/movie/${movie_id}?api_key=81229d17288cd3c3a979724d4d5c9cae&language=en-US`
    )
}

const apiGetMovieCast = (movie_id) => {
    return (
        `https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=81229d17288cd3c3a979724d4d5c9cae&language=en-US`
    )
}

const apiGetMovieSimilarMovies = (movie_id) => {
    return (
        `https://api.themoviedb.org/3/movie/${movie_id}/similar?api_key=81229d17288cd3c3a979724d4d5c9cae&language=en-US&page=1`
    )
}

const apiGetMovieTrailers = (movie_id) => {
    return (
        `https://api.themoviedb.org/3/movie/${movie_id}/videos?api_key=81229d17288cd3c3a979724d4d5c9cae&language=en-US`
    )
}

const apiSearchMovies = (movie) => {
    return (
        `https://api.themoviedb.org/3/search/movie?api_key=81229d17288cd3c3a979724d4d5c9cae&language=en-US&query=${movie}&page=1`
    )
}

export {
    apiPopular,
    apiUpcoming,
    apiTopRated,
    apiNowPlaying,
    apiTrending,
    apiGetMovie,
    apiGetMovieCast,
    apiGetMovieSimilarMovies,
    apiGetMovieTrailers,
    apiSearchMovies
}