import React, {useState} from "react";
import {StatusBar} from "expo-status-bar";
import {
    View,
    TouchableWithoutFeedback,
    Text,
    ScrollView,
    FlatList,
    Image
} from 'react-native';
import {connect} from 'react-redux'

import styles from './styles';
import {FlatListSlider} from 'react-native-flatlist-slider';
import {
    apiPopular,
    apiUpcoming,
    apiTopRated,
    apiNowPlaying
} from "../../services/apiLinks";
import makePhotoUrl from '../Home/components/makePhotoUrl'

class HomeScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state= {
            loading: true,
            popular: [],
            upcoming: [],
            top_rated: [],
            now_playing: []
        }
    }

    renderItem = ({ item }) => {
        return (
            <View style={styles.listItemHome}>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('MovieDetails')} >
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
                    {/* <View style={{flex: 4}}>
                        <View>
                            <FlatListSlider
                                data={this.state.now_playing}
                                imageKey={'https://image.tmdb.org/t/p/w500' + 'backdrop_path'}
                                local
                                timer={10000}
                                height={240}
                                indicatorActiveWidth={30}
                                indicatorActiveColor={'#B43343'}
                                indicatorInActiveColor={'#3b546e'}
                                contentContainerStyle={styles.flatListMain}
                                indicatorContainerStyle={{position:'absolute', bottom: -20}}
                                animation={true}({movie}) => <Home item={movie} navigation={this.props.navigation} />
                            />
                        </View>
                    </View> */}
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
// }

// function Home({ item, navigation }) {
//     return (
//         <View style={styles.listItemHome}>
//             <TouchableWithoutFeedback onPress={() => navigation.navigate('MovieDetails')} >
//                 <Image
//                     style={styles.imageView}
//                     source={{ uri: makePhotoUrl(item.poster_path) }}
//                     resizeMode="cover"
//                 />
//             </TouchableWithoutFeedback>
//         </View>
//     )
// }

// function mapStateToProps(state) {
//     const {movies} = state;
//     return {
//         movies
//     };
// }

// const connectHome = connect(mapStateToProps)(HomeScreen)
export default HomeScreen;