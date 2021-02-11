import React from 'react';
import {
    View,
    Image,
    TouchableWithoutFeedback,
    Text,
    ScrollView,
    FlatList,
    Linking,
    ActivityIndicator,
    Alert
} from 'react-native';
import {FAB} from "react-native-paper";

import styles from './styles';
import {
    apiGetMovie,
    apiGetMovieCast,
    apiGetMovieSimilarMovies,
    apiGetMovieTrailers
} from "../../services/apiLinks";
import makePhotoUrl from '../../configurations/makePhotoUrl';
import openYouTubeUrl from '../../configurations/openYouTubeUrl';
import genre from '../../utils/genre.json';
import ScreenWrapper from '../../components/ScreenWrapper';

function convertToDate(date) {
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const newDate = new Date(date);

    return (
        `${newDate.getDate() + 1}‧${monthNames[newDate.getMonth()]}‧${newDate.getFullYear()}`
    );
}

class MovieDetailsScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            movie: [],
            cast: [],
            similar_movies: [],
            trailers: [],
            icon_name: "heart-outline",
            alert_add: "NO"
        }
    }

    componentDidMount() {
        const { movie_id } = this.props.route.params;
        
        this.fetchMovie(movie_id);
        this.fetchCast(movie_id);
        this.fetchSimilarMovies(movie_id);
        this.fetchTrailers(movie_id);
    }

    fetchMovie = async(id) => {
        try {
            const response = await fetch(apiGetMovie(id));
            const json = await response.json();
            this.setState({ movie: json });
        } catch {
            alert("Failed to load movie's data!");
        } finally {
            this.setState({ loading: false });
        }
    }

    fetchCast = async(id) => {
        try {
            const response = await fetch(apiGetMovieCast(id));
            const json = await response.json();
            this.setState({ cast: json.cast });
        } catch {
            alert("Failed to load cast!");
        } finally {
            this.setState({ loading: false });
        }
    }

    fetchSimilarMovies = async(id) => {
        try {
            const response = await fetch(apiGetMovieSimilarMovies(id));
            const json = await response.json();
            this.setState({ similar_movies: json.results });
        } catch {
            alert("Failed to load similar movies!");
        } finally {
            this.setState({ loading: false });
        }
    }

    fetchTrailers = async(id) => {
        try {
            const response = await fetch(apiGetMovieTrailers(id));
            const json = await response.json();
            this.setState({ trailers: json.results });
        } catch {
            alert("Failed to load trailers!");
        } finally {
            this.setState({ loading: false });
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
                    this.props.navigation.push('MovieDetails', { movie_id: item.id, genre_ids: item.genre_ids })} >
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

    createAlertForFavorites = () => {
        Alert.alert(
            "Add to Favorites",
            "Do you want to add this movie to favorites?",
            [
                {
                    text: "No",
                    onPress: () => this.setState({ icon_name: "heart-outline" }),
                    style: "cancel"
                },
                {
                    text: "Yes",
                    onPress: () => this.setState({ icon_name: "heart" }),
                }
            ],
            {
                cancelable: false
            }
        );
    }

    render() {
        const { genre_ids } = this.props.route.params;

        if (this.state.loading) {
            return (
                <View style={styles.loader}>
                    <ActivityIndicator size="small" color="#B43343" />
                </View>
            )
        } else {
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
                            <Text style={styles.genre}>
                                {genre_ids.map((item, index) => 
                                    index == item.length - 1 ? genre[item].name : `${genre[item].name} `)}
                            </Text>
                            <Text style={styles.releaseDate}>{convertToDate(this.state.movie.release_date)}</Text>
                            <Text style={styles.rating}>{this.state.movie.vote_average}/10</Text>
                            <FAB
                                style={styles.fabMD}
                                small
                                icon={this.state.icon_name}
                                onPress={this.createAlertForFavorites}
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
                        <ScreenWrapper style={{flex: 3}}>
                            <FlatList
                                horizontal={true}
                                data={this.state.cast}
                                renderItem={this.renderItemCast}
                                keyExtractor={(item, index) => index.toString()}
                                showsHorizontalScrollIndicator={false}
                            />
                        </ScreenWrapper>
                        <View style={{flex: 1}}>
                            <View style={styles.castView}>
                                <Text style={{marginStart: 16, fontSize: 16}}>SIMILAR MOVIES</Text>
                            </View>
                        </View>
                        <ScreenWrapper style={{flex: 3}}>
                            <FlatList
                                horizontal={true}
                                data={this.state.similar_movies}
                                renderItem={this.renderItemSimilarMovies}
                                keyExtractor={(item, index) => index.toString()}
                                showsHorizontalScrollIndicator={false}
                            />
                        </ScreenWrapper>
                        <View style={{flex: 1}}>
                            <View style={styles.castView}>
                                <Text style={{marginStart: 16, fontSize: 16}}>TRAILERS</Text>
                            </View>
                        </View>
                        <ScreenWrapper style={{flex: 3}}>
                            <FlatList
                                horizontal={false}
                                data={this.state.trailers}
                                renderItem={this.renderItemTrailer}
                                keyExtractor={(item, index) => index.toString()}
                                showsHorizontalScrollIndicator={false}
                            />
                        </ScreenWrapper>
                    </ScrollView>
                </View>
            );
        }
    }
}

export default MovieDetailsScreen;