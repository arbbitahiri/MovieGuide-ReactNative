import apiGetMovieGenres from '../services/apiLinks'

const convertGenres = async(genres_id) => {
    let movie_genre = [];
    let genre_name = [

    ];

    try {
        const response = await fetch(apiGetMovieGenres);
        const json = await response.json();
        movie_genre = json.genres;
    } catch (error) {
        alert(error);
    }

    for (let item_no of genres_id) {
        for (let item_name of movie_genre) {
            if (item_no == item_name) {
                genre_name.push(item_name.name);
            }
        }
    }

    return genre_name;
}

export default convertGenres;