import React from "react";
import {StatusBar} from "expo-status-bar";
import {
    View,
    TouchableWithoutFeedback,
    Text,
    ScrollView,
    FlatList,
    Image,
    ImageBackground,
    ActivityIndicator, 
    Alert
} from 'react-native';
import { MAIN_COLOR } from '../../constants/Colors';
import { LinearGradient } from 'expo-linear-gradient';

import styles from './styles';
import {
    API_POPULAR,
    API_UPCOMING,
    API_TOP_RATED,
    API_NOW_PLAYING,
    API_TRENDING,
} from "../../services/apiLinks";
import makePhotoUrl from '../../configurations/makePhotoUrl';
import { convertImage } from '../../configurations/makePhotoUrl';
import ScreenWrapper from '../../components/ScreenWrapper';
import { AlertMessage } from '../../components/AlertMessage'

class HomeScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            data_error: 0,
            popular: [],
            upcoming: [],
            top_rated: [],
            now_playing: [],
            trending: []
        }
    }

    async componentDidMount() {
        this.fetchPopular();
        this.fetchUpcoming();
        this.fetchTopRated();
        this.fetchNowPlaying();
        this.fetchTrending();

        if (this.state.data_error > 0) {
            AlertMessage({
                message: "An error occured while retrieving movie data's!",
                header: "Error"
            });
        }

        console.log(this.state.trending);
    }

    fetchPopular = async() => {
        try {
            const response = await fetch(API_POPULAR);
            const json = await response.json();
            this.setState({ popular: json.results });
        } catch (error) {
            console.log(error);
            this.setState({ data_error: this.state.data_error + 1 })
        }
    }

    fetchUpcoming = async() => {
        try {
            const response = await fetch(API_UPCOMING);
            const json = await response.json();
            this.setState({ upcoming: json.results });
        } catch (error) {
            console.log(error);
            this.setState({ data_error: this.state.data_error + 1 })
        } finally {
            this.setState({ isLoading: false });
        }
    }

    fetchTopRated = async() => {
        try {
            const response = await fetch(API_TOP_RATED);
            const json = await response.json();
            this.setState({ top_rated: json.results });
        } catch (error) {
            console.log(error);
            this.setState({ data_error: this.state.data_error + 1 })
        }
    }

    fetchNowPlaying = async() => {
        try {
            const response = await fetch(API_NOW_PLAYING);
            const json = await response.json();
            this.setState({ now_playing: json.results });
        } catch (error) {
            console.log(error);
            this.setState({ data_error: this.state.data_error + 1 })
        }
    }

    fetchTrending = async() => {
        try {
            const response = await fetch(API_TRENDING);
            const json = await response.json();
            this.setState({ trending: json.results });
        } catch (error) {
            console.log(error);
            this.setState({ data_error: this.state.data_error + 1 })
        }
    }

    renderItemSlider = ({ item }) => {
        return (
            <View>
                <View style={styles.listItemHome}>
                    <TouchableWithoutFeedback onPress={() =>
                        this.props.navigation.navigate('MovieDetails', { movie_id: item.id, genre_ids: item.genre_ids })} >
                            <ImageBackground 
                                style={styles.imageViewSlider}
                                source={{ uri: makePhotoUrl(item.backdrop_path, "w1280") }}
                                resizeMode="cover">
                                    <LinearGradient
                                        colors={['transparent', 'rgba(21,32,43,1)']}
                                        style={styles.background}
                                    />
                            </ImageBackground>
                    </TouchableWithoutFeedback>
                </View>
                <View>
                    <Text style={styles.itemText}>
                        {item.original_title}
                    </Text>
                </View>
            </View>
        );
    }

    renderItem = ({ item }) => {
        return (
            <View style={styles.listItemHome}>
                <TouchableWithoutFeedback onPress={() =>
                    this.props.navigation.navigate('MovieDetails', { movie_id: item.id, genre_ids: item.genre_ids })} >
                    <Image
                        style={styles.imageView}
                        source={{ uri: convertImage(item.poster_path) }}
                        resizeMode="cover"
                    />
                </TouchableWithoutFeedback>
            </View>
        );
    }

    render() {
        if (this.state.isLoading) {
            return (
                <View style={styles.loader}>
                    <ActivityIndicator size="small" color={MAIN_COLOR} />
                </View>
            );
        } else {
            return (
                <View style={styles.container}>
                    <StatusBar style={'dark'} backgroundColor={MAIN_COLOR} />
                    <ScrollView>
                        <ScreenWrapper style={{flex: 4}}>
                            <FlatList
                                horizontal={true}
                                data={this.state.trending}
                                renderItem={this.renderItemSlider}
                                keyExtractor={(item, index) => index.toString()}
                                showsHorizontalScrollIndicator={false}
                                maintainVisibleContentPosition={{
                                    minIndexForVisible: 0,
                                }}
                                maxToRenderPerBatch={1}
                            />
                        </ScreenWrapper>
                        <View style={{flex: 3}}>
                            <View style={{flex:1}}>
                                <Text style={styles.textView}>Popular Movies</Text>
                            </View>
                            <ScreenWrapper>
                                <FlatList
                                    horizontal={true}
                                    data={this.state.popular}
                                    renderItem={this.renderItem}
                                    keyExtractor={(item, index) => index.toString()}
                                    showsHorizontalScrollIndicator={false}
                                />
                            </ScreenWrapper>
                        </View>
                        <View style={{flex: 3}}>
                            <View style={{flex:1}}>
                                <Text style={styles.textView}>Upcoming Movies</Text>
                            </View>
                            <ScreenWrapper style={{flex: 3}}>
                                <FlatList
                                        horizontal={true}
                                        data={this.state.upcoming}
                                        renderItem={this.renderItem}
                                        keyExtractor={(item, index) => index.toString()}
                                        showsHorizontalScrollIndicator={false}
                                />
                            </ScreenWrapper>
                        </View>
                        <View style={{flex: 3}}>
                            <View style={{flex:1}}>
                                <Text style={styles.textView}>Top Rated Movies</Text>
                            </View>
                            <ScreenWrapper style={{flex: 3}}>
                                <FlatList
                                        horizontal={true}
                                        data={this.state.top_rated}
                                        renderItem={this.renderItem}
                                        keyExtractor={(item, index) => index.toString()}
                                        showsHorizontalScrollIndicator={false}
                                />
                            </ScreenWrapper>
                        </View>
                        <View style={{flex: 3}}>
                            <View style={{flex:1}}>
                                <Text style={styles.textView}>Now Playing Movies</Text>
                            </View>
                            <ScreenWrapper style={{flex: 3}}>
                                <FlatList
                                        horizontal={true}
                                        data={this.state.now_playing}
                                        renderItem={this.renderItem}
                                        keyExtractor={(item, index) => index.toString()}
                                        showsHorizontalScrollIndicator={false}
                                />
                            </ScreenWrapper>
                        </View>
                    </ScrollView>
                </View>
            );
        }
    }
}

export default HomeScreen;