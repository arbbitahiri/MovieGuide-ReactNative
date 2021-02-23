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
    Alert,
    ImageBackground,
    Dimensions
} from 'react-native';
import { FAB } from "react-native-paper";
import { LinearGradient } from 'expo-linear-gradient';

import styles from './styles';
import {
    API_GET_MOVIE,
    API_GET_MOVIE_CAST,
    API_GET_SIMILAR_MOVIES,
    API_GET_MOVIE_TRAILERS,
} from "../../services/apiLinks";
import { MAIN_COLOR } from '../../constants/Colors';
import makePhotoUrl from '../../configurations/makePhotoUrl';
import openYouTubeUrl from '../../configurations/openYouTubeUrl';
import openIMDbUrl from '../../configurations/openIMDbUrl';
import genre from '../../utils/genre.json';
import ScreenWrapper from '../../components/ScreenWrapper';
import { convertMoneyToCurrency } from '../../configurations/convertMoneyToCurrency'
import { convertRuntimeToTime } from '../../configurations/convertRuntimeToTime'
import { convertToDate } from '../../configurations/convertToDate'
import { convertImage } from '../../configurations/makePhotoUrl';

class MovieDetailsScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoaded: true,
            data_error: 0,
            movie: [],
            cast: [],
            similar_movies: [],
            trailers: [],
            icon_name: "heart-outline"
        }
    }

    componentDidMount() {
        const { movie_id } = this.props.route.params;
        console.log(movie_id);
        const windowHeight = Dimensions.get('window').height;
        console.log(windowHeight);
        
        this.fetchMovie(movie_id);
        this.fetchCast(movie_id);
        this.fetchSimilarMovies(movie_id);
        this.fetchTrailers(movie_id);
    }

    fetchMovie = async(id) => {
        try {
            const response = await fetch(API_GET_MOVIE(id));
            const json = await response.json();
            this.setState({ movie: json });
        } catch (error) {
            console.log(error);
            this.setState({ data_error: this.state.data_error + 1 });
        }
    }

    fetchCast = async(id) => {
        try {
            const response = await fetch(API_GET_MOVIE_CAST(id));
            const json = await response.json();
            this.setState({ cast: json.cast });
        } catch (error) {
            console.log(error);
            this.setState({ data_error: this.state.data_error + 1 });
        } finally {
            this.setState({ isLoaded: false });
        }
    }

    fetchSimilarMovies = async(id) => {
        try {
            const response = await fetch(API_GET_SIMILAR_MOVIES(id));
            const json = await response.json();
            this.setState({ similar_movies: json.results });
        } catch (error) {
            console.log(error);
            this.setState({ data_error: this.state.data_error + 1 });
        }
    }

    fetchTrailers = async(id) => {
        try {
            const response = await fetch(API_GET_MOVIE_TRAILERS(id));
            const json = await response.json();
            this.setState({ trailers: json.results });
        } catch (error) {
            console.log(error);
            this.setState({ data_error: this.state.data_error + 1 });
        }
    }

    /**
     * TODO: me bo ni metod per redux edhe me shti ne onPress te createAlertForFavorites
     */

    createAlertForFavorites = () => {
        if (this.state.icon_name.includes("heart-outline")) {
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
        } else {
            Alert.alert(
                "Remove from Favorites",
                "Do you want to remove this movie from favorites?",
                [
                    {
                        text: "No",
                        onPress: () => this.setState({ icon_name: "heart" }),
                        style: "cancel"
                    },
                    {
                        text: "Yes",
                        onPress: () => this.setState({ icon_name: "heart-outline" }),
                    }
                ],
                {
                    cancelable: false
                }
            );
        }
    }

    renderItemCast = ({ item }) => {
        return (
            <View style={styles.listItemHome}>
                <Image
                    style={styles.imageViewCast}
                    source={{ uri: convertImage(item.profile_path) }}
                    resizeMode="cover"
                />
                <View style={{alignItems: "center"}}>
                    <Text style={styles.castNames}>{item.name}</Text>
                </View>
                <View style={{alignItems: "center"}}>
                    <Text style={styles.castRoles}>{item.character}</Text>
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

    render() {
        const { genre_ids } = this.props.route.params;
        if (this.state.isLoaded) {
            return (
                <View style={styles.loader}>
                    <ActivityIndicator size="small" color={MAIN_COLOR} />
                </View>
            )
        } else {
            return (
                <View style={styles.container}>
                    <ScrollView>
                        <View style={{flex: 4}}>
                            <ImageBackground
                                source={{ uri: makePhotoUrl(this.state.movie.backdrop_path, "w1280") }}
                                style={styles.imagePoster}
                                resizeMode="cover">
                                <LinearGradient
                                    colors={['transparent', 'rgba(21,32,43,1)']}
                                    style={styles.background}
                                />
                                <TouchableWithoutFeedback onPress={() => Linking.openURL(openIMDbUrl(this.state.movie.imdb_id))}>
                                    <Image
                                        style={styles.imageCover}
                                        source={{ uri: makePhotoUrl(this.state.movie.poster_path) }}
                                        resizeMode="cover"
                                    />
                                </TouchableWithoutFeedback>
                            </ImageBackground>
                        </View>
                        <View style={{flex: 1}}>
                            <Text style={styles.movieTitle}>{this.state.movie.original_title}</Text>
                            <Text style={styles.genre}>
                                {genre_ids.map((item, index) => 
                                    index == item.length - 1 ? genre[item].name : `${genre[item].name}/`)}
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
                            <Text style={styles.tagline}>{this.state.movie.tagline}</Text>
                        </View>
                        <View style={{flex: 1}}>
                            <Text style={styles.runtime}>Runtime: {convertRuntimeToTime(this.state.movie.runtime)}</Text>
                        </View>
                        <View style={{flex: 1}}>
                            <Text style={styles.budget}>Budget: {convertMoneyToCurrency(this.state.movie.budget)}</Text>
                        </View>
                        <View style={{flex: 1}}>
                            <Text style={styles.revenue}>Box Office: {convertMoneyToCurrency(this.state.movie.revenue)}</Text>
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