import React, {useState} from "react";
import {StatusBar} from "expo-status-bar";
import {
    View,
    TouchableWithoutFeedback,
    Text,
    ScrollView,
    FlatList,
    Image,
    ImageBackground
} from 'react-native';

import styles from './styles';
import {
    apiPopular,
    apiUpcoming,
    apiTopRated,
    apiNowPlaying,
    apiTrending
} from "../../services/apiLinks";
import makePhotoUrl from '../../components/makePhotoUrl'
import MovieDetailsScreen from "../MovieDetails/MovieDetailsScreen";

class HomeScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state= {
            loading: true,
            popular: [],
            upcoming: [],
            top_rated: [],
            now_playing: [],
            trending: []
        }
    }

    renderItemSlider = ({ item }) => {
        return (
            <View style={styles.listItemHome}>
                <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('MovieDetails')} >
                    <ImageBackground 
                        style={styles.imageViewSlider}
                        source={{ uri: makePhotoUrl(item.backdrop_path, "w1280") }}
                        resizeMode="cover">
                            <Text style={styles.itemText}>
                                {item.original_title}
                            </Text>
                        </ImageBackground>
                </TouchableWithoutFeedback>
            </View>
        );
    }

    renderItem = ({ item }) => {
        return (
            <View style={styles.listItemHome}>
                <TouchableWithoutFeedback onPress={() =>
                    this.props.navigation.navigate('MovieDetails', { movie_id: item.id })} >
                    <Image
                        style={styles.imageView}
                        source={{ uri: makePhotoUrl(item.poster_path) }}
                        resizeMode="cover"
                    />
                </TouchableWithoutFeedback>
            </View>
        );
    }

    async componentDidMount() {
        this.fetchPopular();
        this.fetchUpcoming();
        this.fetchTopRated();
        this.fetchNowPlaying();
        this.fetchTrending();
    }

    fetchPopular = async() => {
        try {
            const response = await fetch(apiPopular);
            const json = await response.json();
            this.setState({ popular: json.results });
        } catch (error) {
            alert(error);
        } finally {
            this.setState({ loading: false });
        }
    }

    fetchUpcoming = async() => {
        try {
            const response = await fetch(apiUpcoming);
            const json = await response.json();
            this.setState({ upcoming: json.results });
        } catch (error) {
            alert(error);
        } finally {
            this.setState({ loading: false });
        }
    }

    fetchTopRated = async() => {
        try {
            const response = await fetch(apiTopRated);
            const json = await response.json();
            this.setState({ top_rated: json.results });
        } catch (error) {
            alert(error);
        } finally {
            this.setState({ loading: false });
        }
    }

    fetchNowPlaying = async() => {
        try {
            const response = await fetch(apiNowPlaying);
            const json = await response.json();
            this.setState({ now_playing: json.results });
        } catch (error) {
            alert(error);
        } finally {
            this.setState({ loading: false });
        }
    }

    fetchTrending = async() => {
        try {
            const response = await fetch(apiTrending);
            const json = await response.json();
            this.setState({ trending: json.results });
        } catch (error) {
            alert(error);
        } finally {
            this.setState({ loading: false });
        }
    }

    render() {
        // if (this.state.loading) {
        //     return (
        //         <>
        //             <Text>Loading.....</Text>
        //         </>
        //     )
        // } else {
        return (
            <View style={styles.container}>
                <StatusBar style={'dark'} backgroundColor={'#B43343'} />
                <ScrollView>
                    <View style={{flex: 4}}>
                        <FlatList
                            horizontal={true}
                            data={this.state.trending}
                            renderItem={this.renderItemSlider}
                            keyExtractor={(item, index) => index}
                            showsHorizontalScrollIndicator={false}
                            maintainVisibleContentPosition={{
                                minIndexForVisible: 0,
                             }}
                        />
                    </View>
                    <View style={{flex: 3}}>
                        <View style={{flex:1}}>
                            <Text style={styles.textView}>Popular Movies</Text>
                        </View>
                        <View>
                            <FlatList
                                horizontal={true}
                                data={this.state.popular}
                                renderItem={this.renderItem}
                                keyExtractor={(item, index) => index}
                                showsHorizontalScrollIndicator={false}
                            />
                        </View>
                    </View>
                    <View style={{flex: 3}}>
                        <View style={{flex:1}}>
                            <Text style={styles.textView}>Upcoming Movies</Text>
                        </View>
                        <View style={{flex: 3}}>
                            <FlatList
                                    horizontal={true}
                                    data={this.state.upcoming}
                                    renderItem={this.renderItem}
                                    keyExtractor={(item, index) => index}
                                    showsHorizontalScrollIndicator={false}
                            />
                        </View>
                    </View>
                    <View style={{flex: 3}}>
                        <View style={{flex:1}}>
                            <Text style={styles.textView}>Top Rated Movies</Text>
                        </View>
                        <View style={{flex: 3}}>
                            <FlatList
                                    horizontal={true}
                                    data={this.state.top_rated}
                                    renderItem={this.renderItem}
                                    keyExtractor={(item, index) => index}
                                    showsHorizontalScrollIndicator={false}
                            />
                        </View>
                    </View>
                    <View style={{flex: 3}}>
                        <View style={{flex:1}}>
                            <Text style={styles.textView}>Now Playing Movies</Text>
                        </View>
                        <View style={{flex: 3}}>
                            <FlatList
                                    horizontal={true}
                                    data={this.state.now_playing}
                                    renderItem={this.renderItem}
                                    keyExtractor={(item, index) => index}
                                    showsHorizontalScrollIndicator={false}
                            />
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

// function mapStateToProps(state) {
//     const {movies} = state;
//     return {
//         movies
//     };
// }

// const connectHome = connect(mapStateToProps)(HomeScreen)
export default HomeScreen;