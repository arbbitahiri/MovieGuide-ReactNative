import React from 'react'
import {
    View,
    Image,
    TouchableWithoutFeedback,
    Text,
    ScrollView,
    FlatList,
    Linking,
} from 'react-native';

import styles from './styles'
import {FAB} from "react-native-paper";
import {
    apiGetMovie,
    apiGetMovieCast,
    apiGetMovieSimilarMovies,
    apiGetMovieTrailers,
    apiGetMovieGenres
} from "../../services/apiLinks";
import makePhotoUrl from '../../components/makePhotoUrl'
import openYouTubeUrl from '../../components/openYouTubeUrl'
import genre from '../../utils/genre.json'

class MovieDetailsScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            movie: [],
            cast: [],
            similar_movies: [],
            trailers: [],
            movie_genre: [],
            genre_name: []
        }
    }

    componentDidMount() {
        const { movie_id, genre_ids } = this.props.route.params;
        
        this.fetchMovie(movie_id);
        this.fetchCast(movie_id);
        this.fetchSimilarMovies(movie_id);
        this.fetchTrailers(movie_id);
        this.convertGenres(genre_ids)
        alert(genre[0])
    }

    fetchMovie = async(id) => {
        try {
            const response = await fetch(apiGetMovie(id));
            const json = await response.json();
            this.setState({ movie: json });
        } catch (error) {
            alert(error);
        } finally {
            this.setState({ loading: false });
        }
    }

    fetchCast = async(id) => {
        try {
            const response = await fetch(apiGetMovieCast(id));
            const json = await response.json();
            this.setState({ cast: json.cast });
        } catch (error) {
            alert(error);
        } finally {
            this.setState({ loading: false });
        }
    }

    fetchSimilarMovies = async(id) => {
        try {
            const response = await fetch(apiGetMovieSimilarMovies(id));
            const json = await response.json();
            this.setState({ similar_movies: json.results });
        } catch (error) {
            alert(error);
        } finally {
            this.setState({ loading: false });
        }
    }

    fetchTrailers = async(id) => {
        try {
            const response = await fetch(apiGetMovieTrailers(id));
            const json = await response.json();
            this.setState({ trailers: json.results });
        } catch (error) {
            alert(error);
        } finally {
            this.setState({ loading: false });
        }
    }

    convertGenres = (genre_ids) => {
        for (let index = 0; index < genre_ids.length; index++) {
            const element = genre_ids[index];
            
        }
    }

    renderItemCast = ({ item }) => {
            return (
                <View style={styles.listItemHome}>
                    <Image
                        style={styles.imageViewCast}
                        source={{ uri: makePhotoUrl(item.profile_path) }}
                        resizeMode="cover"
                    />
                    <View style={{alignItems: "center"}}>
                        <Text style={styles.castNames}>{item.name}</Text>
                    </View>
                    <View style={{alignItems: "center"}}>
                        <Text style={styles.castNames}>AS</Text>
                    </View>
                    <View style={{alignItems: "center"}}>
                        <Text style={styles.castNames}>{item.character}</Text>
                    </View>
                </View>
            );
    }

    renderItemSimilarMovies = ({ item }) => {
        return (
            <View style={styles.listItemHome}>
                <TouchableWithoutFeedback onPress={() =>
                    this.props.navigation.push('MovieDetails', { movie_id: item.id })} >
                    <Image
                        style={styles.imageViewSM}
                        source={{ uri: makePhotoUrl(item.poster_path) }}
                        resizeMode="cover"
                    />
                </TouchableWithoutFeedback>
            </View>
        );
    }

    renderItemTrailer = ({ item }) => {
        return (
            <View style={styles.listItemHome}>
                <TouchableWithoutFeedback onPress={() => Linking.openURL(openYouTubeUrl(item.key))} >
                    <Text style={styles.trailerNames}>{item.name}</Text>
                </TouchableWithoutFeedback>
            </View>
        );
    }

    render() {
        const { genres } = this.state.movie_genre;
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={{flex: 4}}>
                        <Image
                            source={{ uri: makePhotoUrl(this.state.movie.backdrop_path, "w1280") }}
                            style={styles.imagePoster}/>
                        <Image
                            style={styles.imageCover}
                            source={{ uri: makePhotoUrl(this.state.movie.poster_path) }}
                            resizeMode="cover"
                        />
                        <Text style={styles.movieTitle}>{this.state.movie.original_title}</Text>
                        <Text style={styles.releaseDate}>{this.state.movie.release_date}</Text>
                        <Text style={styles.rating}>{this.state.movie.vote_average}/10</Text>
                        {genres ? (
                            <Text style={styles.genre}>
                                {genres.map((genre, index) => 
                                    index == genres.length - 1 ? genre.name : `${genre.name} ‧`)}
                            </Text>
                        ) : null}
                        <FAB
                            style={styles.fabMD}
                            small
                            icon="plus"
                            onPress={() => alert('Added to favorites!')}
                        />
                    </View>
                    <View style={{flex: 1}}>
                        <Text style={styles.desc}>{this.state.movie.overview}</Text>
                    </View>
                    <View style={{flex: 1}}>
                        <View style={styles.castView}>
                            <Text style={{marginStart: 16, fontSize: 16}}>CAST</Text>
                        </View>
                    </View>
                    <View style={{flex: 3}}>
                        <FlatList
                            horizontal={true}
                            data={this.state.cast}
                            renderItem={this.renderItemCast}
                            keyExtractor={item => item.id}
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                    <View style={{flex: 1}}>
                        <View style={styles.castView}>
                            <Text style={{marginStart: 16, fontSize: 16}}>SIMILAR MOVIES</Text>
                        </View>
                    </View>
                    <View style={{flex: 3}}>
                        <FlatList
                            horizontal={true}
                            data={this.state.similar_movies}
                            renderItem={this.renderItemSimilarMovies}
                            keyExtractor={item => item.id}
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                    <View style={{flex: 1}}>
                        <View style={styles.castView}>
                            <Text style={{marginStart: 16, fontSize: 16}}>TRAILERS</Text>
                        </View>
                    </View>
                    <View style={{flex: 3}}>
                        <FlatList
                            horizontal={false}
                            data={this.state.trailers}
                            renderItem={this.renderItemTrailer}
                            keyExtractor={item => item.id}
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                </ScrollView>
            </View>
        );
    }
}

export default MovieDetailsScreen;