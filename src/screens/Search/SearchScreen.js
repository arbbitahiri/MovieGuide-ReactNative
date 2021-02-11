import React from "react";
import {
    Text,
    View,
    FlatList,
    TouchableWithoutFeedback,
    Image
} from "react-native";
import {StatusBar} from "expo-status-bar";
import styles from './styles';

import { apiSearchMovies } from "../../services/apiLinks";
import { Searchbar } from "react-native-paper";
import makePhotoUrl from '../../configurations/makePhotoUrl'

class SearchScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            movie_results: [],
            search_movie: "",
        }
    }

    handleSearch = (text) => {
        this.setState({ search_movie: text });
    }

    onSubmitEditing = async() => {
        const { search_movie } = this.state;

        if (search_movie !== "") {
            this.setState({ loading: false });
            try {
                const response = await fetch(apiSearchMovies(search_movie));
                const json = await response.json();
                this.setState({ movie_results: json.results });
            } catch(error) {
                console.log(error);
            } finally {
                this.setState({ loading: false })
            }
        }
    }

    renderMovies = ({ item }) => {
        return (
            <View>
                <StatusBar style={'dark'} backgroundColor={'#B43343'} />
                <TouchableWithoutFeedback onPress={() =>
                    this.props.navigation.navigate('MovieDetails', { movie_id: item.id, genre_ids: item.genre_ids })} >
                    <Image
                        source={{ uri: makePhotoUrl(item.poster_path) }}
                        style={styles.moviesImageSearch}
                        resizeMode="cover"
                    />
                </TouchableWithoutFeedback>
                <View style={{alignItems: "center"}}>
                    <Text style={styles.textDesignSearch}>{item.original_title}</Text>
                </View>
            </View>
        );
    }

    render() {
        const { search_movie } = this.state;
        return (
            <View style={styles.containerSearch}>
                <View style={styles.searchDesign}>
                    <Searchbar
                        placeholder="Search for a movie..."
                        autoCapitalize="none"
                        autoCorrect={false}
                        clearButtonMode="always"
                        onChangeText={this.handleSearch}
                        onSubmitEditing={this.onSubmitEditing}
                        value={search_movie}
                        showLoading={true}
                        style={styles.text}
                        inputStyle={{color: '#B43343'}}
                        />
                </View>
                <FlatList
                    style={styles.searchFlatList}
                    data={this.state.movie_results}
                    renderItem={this.renderMovies}
                    keyExtractor={(item, index) => index.toString()}
                    horizontal={false}
                    numColumns={2}
                />
            </View>
        )
    }
}

export default SearchScreen;