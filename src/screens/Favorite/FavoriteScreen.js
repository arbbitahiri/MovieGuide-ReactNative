import React from "react"
import {
    Text,
    View,
    Image,
    FlatList,
    TouchableWithoutFeedback,
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

class FavoriteScreen extends React.Component {

    componentDidMount() {
        this.props.dispatch(getMovie(this.props));
        const movies = this.props.favorites;
        console.log(movies)
        console.log(movies.id)
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
                    <Text style={styles.textDesign}>{item.release_date}</Text>
                    <Text style={styles.textDesign}>{item.vote_average}</Text>
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

    render(){
        const favorites = this.props.favorites;
        return (
            <View style={styles.containerFav}>
                {/* {
                    favorites.map(movie => 
                        <FlatList
                            horizontal={false}
                            data={movie}
                            renderItem={this.renderItemFavorites}
                            key={movie.id}
                        />  
                    )
                } */}
                <FlatList
                    horizontal={false}
                    data={favorites}
                    renderItem={this.renderItemFavorites}
                    key={favorites.id.toString()}
                />
            </View>
        );
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