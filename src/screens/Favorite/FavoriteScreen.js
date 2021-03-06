import React from "react"
import {
    Text,
    View,
    Image,
    FlatList,
    TouchableWithoutFeedback,
    ActivityIndicator,
} from "react-native";
import { FAB } from 'react-native-paper';
import styles from "./styles"
import { 
    getMovie,
    addMovie,
    deleteMovie,
} from '../../actions/actions';
import { connect } from 'react-redux';
import makePhotoUrl from '../../configurations/makePhotoUrl';
import { MAIN_COLOR } from '../../constants/Colors';
import { convertToDate } from '../../configurations/convertToDate';

class FavoriteScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            favorite: [],
            isFetched: true
        }
    }

    componentDidMount() {
        this.props.dispatch(getMovie(this.props));

        this.mapMovie();
    }

    mapMovie = () => {
        const movies = this.props.favorites;
        console.log(movies);
        try {
            this.setState({ favorite: movies }, () => {
                console.log(this.state.favorite, this.state.isFetched);
            });
        } catch (error) {
            console.log(error, this.state.isFetched);
        } finally {
            this.setState({ isFetched: false });
        }
    }
    
    renderItemFavorites({ item }) {
        return (
            <View style={styles.listItemFav}>
                <TouchableWithoutFeedback onPress={() =>
                    this.props.navigation.navigate('MovieDetails', { movie_id: item.id, genre_ids: item.genre_ids })} >
                    <Image
                        style={styles.imageViewFav}
                        source={{ uri: makePhotoUrl(item.poster_path) }}
                        resizeMode="cover"
                    />
                </TouchableWithoutFeedback>
                <View style={{alignItems: "center"}}>
                    <Text style={styles.textDesign}>{item.original_title}</Text>
                    <Text style={styles.textDesign}>{convertToDate(item.release_date)}</Text>
                    <Text style={styles.textDesign}>{item.vote_average}/10</Text>
                </View>
                <View style={{flex: 1}}>
                    <FAB
                        style={styles.fab}
                        small
                        icon="check"
                        onPress={() => alert('Removed from favorites!')}
                    />
                </View>
            </View>
        )
    }

    _keyExtractor = (item, index) => item.id;

    render(){
        if (this.state.isFetched) {
            return (
                <View style={styles.loader}>
                    <ActivityIndicator size="small" color={MAIN_COLOR} />
                </View>
            )
        } else {
            return (
                <View style={styles.containerFav}>
                    <FlatList
                        horizontal={false}
                        data={this.state.favorite}
                        renderItem={this.renderItemFavorites}
                        keyExtractor={this._keyExtractor}
                    />
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