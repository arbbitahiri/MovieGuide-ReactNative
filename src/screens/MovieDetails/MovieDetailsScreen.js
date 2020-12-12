import React from 'react'
import {
    View,
    Image,
    TouchableWithoutFeedback,
    Text,
    ScrollView,
    FlatList,
    Linking
} from 'react-native';
import styles from './styles'
import {FAB} from "react-native-paper";

function CastMovie({ item }) {
    return (
        <View style={styles.listItemHome}>
            <Image
                style={styles.imageViewCast}
                source={item.photo}
                resizeMode="cover"
            />
            <View style={{alignItems: "center"}}>
                <Text style={styles.castNames}>{item.name}</Text>
            </View>
        </View>
    )
}

function SimilarMovies({ item, navigation }) {
    return (
        <View style={styles.listItemHome}>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('MovieDetails')} >
                <Image
                    style={styles.imageViewSM}
                    source={item.photo}
                    resizeMode="cover"
                />
            </TouchableWithoutFeedback>
        </View>
    )
}

function Trailers({ item }) {
    return (
        <View style={styles.listItemHome}>
            <TouchableWithoutFeedback onPress={() => Linking.openURL(item.ytUrl)} >
                <Text style={styles.trailerNames}>{item.trailerName}</Text>
            </TouchableWithoutFeedback>
        </View>
    )
}

function MovieDetailsScreen({navigation}) {
    let state = {
        movieTitle: 'Avengers: Endgame',
        releaseDate: 'April 26, 2019',
        rating: '8.4/10',
        genre: 'Action ‧ Sci-fi',
        description: 'After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos\' actions and restore order to the universe once and for all, no matter what consequences may be in store.',
        cast: [
            {
                "id": "1",
                photo: require('../../images/cast/IronMan.jpg'),
                "name": 'Robert Downey Jr.',
            },
            {
                "id": "2",
                photo: require('../../images/cast/CaptainAmerica.jpg'),
                "name": 'Chris Evans',
            },
            {
                "id": "3",
                photo: require('../../images/cast/Hulk.jpg'),
                "name": 'Mark Ruffalo',
            },
            {
                "id": "4",
                photo: require('../../images/cast/Thor.jpg'),
                "name": 'Chris Hemsworth',
            },
            {
                "id": "5",
                photo: require('../../images/cast/BlackWidow.jpg'),
                "name": 'Scarlett Johansson',
            },
            {
                "id": "6",
                photo: require('../../images/cast/Hawkeye.jpg'),
                "name": 'Jeremy Renner',
            },
            {
                "id": "7",
                photo: require('../../images/cast/AntMan.jpg'),
                "name": 'Paul Rudd',
            },
            {
                "id": "8",
                photo: require('../../images/cast/BlackPanther.jpg'),
                "name": 'Chadwick Boseman',
            }
        ],
        similarMovies: [
            {
                "id": "2",
                photo: require('../../images/similarMovies/WW84.jpg')
            },
            {
                "id": "3",
                photo: require('../../images/similarMovies/BatmanBegins.jpg')
            },
            {
                "id": "4",
                photo: require('../../images/similarMovies/CaptainMarvel.jpg')
            },
            {
                "id": "5",
                photo: require('../../images/similarMovies/DCJusticeLeague.jpg')
            },
            {
                "id": "6",
                photo: require('../../images/similarMovies/ManofSteel.jpg')
            },
            {
                "id": "7",
                photo: require('../../images/similarMovies/AntMan2.jpg')
            },
            {
                "id": "8",
                photo: require('../../images/similarMovies/ThorRagnarok.jpg')
            },
            {
                "id": "9",
                photo: require('../../images/similarMovies/SpiderMan.jpg')
            },
        ],
        trailers: [
            {
                'id': '1',
                ytUrl: "https://www.youtube.com/watch?v=TcMBFSGVi1c&ab_channel=MarvelEntertainment",
                'trailerName': 'Avengers: Endgame Trailer 1'
            },
            {
                'id': '',
                ytUrl: "https://www.youtube.com/watch?v=hA6hldpSTF8&ab_channel=MarvelEntertainment",
                'trailerName': 'Avengers: Endgame Trailer 2'
            },
            {
                'id': '3',
                ytUrl: "https://www.youtube.com/watch?v=0jNvJU52LvU&ab_channel=MarvelEntertainment",
                'trailerName': 'Avengers: Endgame Trailer 3'
            }
        ]
    }
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={{flex: 4}}>
                    <Image
                        source={require('../../images/endgame.jpg')}
                        style={styles.imagePoster}/>
                    <Image
                        style={styles.imageCover}
                        source={require('../../images/endgame_poster.jpg')}
                        resizeMode="cover"
                    />
                    <Text style={styles.movieTitle}>{state.movieTitle}</Text>
                    <Text style={styles.releaseDate}>{state.releaseDate}</Text>
                    <Text style={styles.rating}>{state.rating}</Text>
                    <Text style={styles.genre}>{state.genre}</Text>
                    <FAB
                        style={styles.fabMD}
                        small
                        icon="plus"
                        onPress={() => alert('Added to favorites!')}
                    />
                </View>
                <View style={{flex: 1}}>
                    <Text style={styles.desc}>{state.description}</Text>
                </View>
                <View style={{flex: 1}}>
                    <View style={styles.castView}>
                        <Text style={{marginStart: 16, fontSize: 16}}>CAST</Text>
                    </View>
                </View>
                <View style={{flex: 3}}>
                    <FlatList
                        horizontal={true}
                        data={state.cast}
                        renderItem={({item}) => <CastMovie item={item}/>}
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
                        data={state.similarMovies}
                        renderItem={({item}) => <SimilarMovies item={item}/>}
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
                        data={state.trailers}
                        renderItem={({item}) => <Trailers url={item.ytUrl} item={item}/>}
                        keyExtractor={item => item.id}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
            </ScrollView>
        </View>
    )
}

export default MovieDetailsScreen;