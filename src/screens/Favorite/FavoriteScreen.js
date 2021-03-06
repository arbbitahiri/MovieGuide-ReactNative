import React from "react"
import {
    Text,
    View,
    Image,
    FlatList,
    TouchableWithoutFeedback,
    ActivityIndicator,
    Alert,
    Input
} from "react-native";
import styles from "./styles"
import { connect } from 'react-redux';
import makePhotoUrl from '../../configurations/makePhotoUrl';
import { 
    TEXT_COLOR,
    MAIN_COLOR 
} from '../../constants/Colors';
import { convertToDate } from '../../configurations/convertToDate';
import { convertRuntimeToTime } from '../../configurations/convertRuntimeToTime';
import { Searchbar } from "react-native-paper";

class FavoriteScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            favorite: [],
            isFetched: true,
            icon_name: "heart",
            isRefreshing: false,
            query: ''
        }
    }

    componentDidMount() {
        this.mapMovie();
    };

    mapMovie = () => {
        const movies = this.props.favorites;
        try {
            this.setState({ favorite: movies }, () => {
                console.log(this.state.favorite, this.state.isFetched);
            });
        } catch (error) {
            console.log(error, this.state.isFetched);
        } finally {
            this.setState({ isFetched: false, isRefreshing: false });
        }
    };

    deleteMovie = (id) => {
        this.props.dispatch(deleteMovie(id));
    };

    handleOnPress = (id) => {
        Alert.alert(
            "Remove from Favorites",
            "Do you want to remove this movie from favorites?",
            [
                {
                    text: "No",
                    style: "cancel"
                },
                {
                    text: "Yes",
                    onPress: () => {
                        this.deleteMovie(id);
                    },
                }
            ],
            {
                cancelable: false
            }
        );
    };
    
    renderItemFavorites = ({ item }) => {
        return (
            <View style={styles.listItemFav}>
                <TouchableWithoutFeedback onPress={() => 
                    this.props.navigation.navigate('MovieDetails', { movie_id: item.id, genres: item.genres, favBtn: "heart" })} > 
                    <Image
                        style={styles.imageViewFav}
                        source={{ uri: makePhotoUrl(item.poster_path) }}
                        resizeMode="cover"
                    />
                </TouchableWithoutFeedback>
                <View style={styles.texts}>
                    <Text style={styles.textDesignTitle}>{item.original_title}</Text>
                    <Text style={styles.textDesignReleaseDate}>{convertToDate(item.release_date)}</Text>
                    <Text style={styles.textDesignRating}>{item.vote_average}/10</Text>
                    <Text style={styles.textDesignRuntime}>{convertRuntimeToTime(item.runtime)}</Text>
                </View>
            </View>
        )
    };
    
    renderSeparator = () => {
        return (
            <View style={styles.itemSeparator}/>
        );
    };

    _keyExtractor = (item, index) => item.id.toString();

    handleRefresh = () => {
        this.setState({ isRefreshing: true }, () => {
            this.mapMovie();
        })
    }

    handleSearch = ( text ) => {
        const movieSearched = this.state.favorite.filter((movie) => {
            const movieData = `${movie.original_title.toLowerCase()}`;
            const textData = text.toLowerCase();

            return movieData.indexOf(textData) > -1
        });

        this.setState({ favorite: movieSearched })
    }

    renderHeader = () => {
        return(
            <Searchbar
                placeholder="Search for a movie..."
                autoCapitalize="none"
                autoCorrect={false}
                clearButtonMode="always"
                onChangeText={(text) => this.handleSearch(text)}
                // onSubmitEditing={this.onSubmitEditing}
                // value={search_movie}
                showLoading={true}
                style={styles.searchBar}
                inputStyle={{color: TEXT_COLOR}}
            />
        )
    }

    render(){
        if (this.state.isFetched) {
            return (
                <View style={styles.loader}>
                    <ActivityIndicator size="small" color={MAIN_COLOR} />
                </View>
            )
        } else {
            return (
                <View style={styles.listItemFav}>
                    <View style={styles.containerFav}>
                        <FlatList
                            horizontal={false}
                            data={this.state.favorite}
                            renderItem={this.renderItemFavorites}
                            keyExtractor={this._keyExtractor}
                            ItemSeparatorComponent={this.renderSeparator}
                            extraData={this.state.favorite}
                            refreshing={this.state.isRefreshing}
                            onRefresh={this.handleRefresh}
                            ListHeaderComponent={this.renderHeader}
                        />
                    </View>
                </View>
            );
        }
    }
}

function mapStateToProps(state) {
    console.log(state.movieReducer.favorites);
    const favorites = state.movieReducer.favorites;
    return {
        favorites
    };
}

export default connect(
    mapStateToProps
)(FavoriteScreen);