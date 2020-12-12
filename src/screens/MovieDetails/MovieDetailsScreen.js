import React from 'react'
import {StatusBar} from "expo-status-bar";
import {
    View,
    Image,
    TouchableWithoutFeedback,
    Text,
    ScrollView,
    FlatList,
    ImageBackground
} from 'react-native';
import styles from './styles'
import {FAB} from "react-native-paper";

const backdrop = {
    image: require('../../images/endgame.jpg')
};

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

function MovieDetailsScreen({navigation}) {
    let state = {
        movieTitle: 'Avengers: Endgame',
        releaseDate: 'April 26, 2019',
        rating: '8.4/10',
        genre: 'Action ‧ Sci-fi',
        description: 'After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos\' actions and restore order to the universe once and for all, no matter what consequences may be in store.',
    }
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={{flex: 4}}>
                    <Image
                        source={require('../../images/endgame.jpg')}
                        style={styles.imagePoster}/>
                    <Image
                        style={styles.imageViewSM}
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
                {/*<View style={{flex: 3}}>*/}
                {/*    <View style={{flex:1}}>*/}
                {/*        <Text style={styles.textView}>Similar Movies</Text>*/}
                {/*    </View>*/}
                {/*    <FlatList*/}
                {/*        horizontal={true}*/}
                {/*        data={state.data}*/}
                {/*        renderItem={({item}) => <SimilarMovies item={item} navigation={navigation}/>}*/}
                {/*        keyExtractor={item => item.id}*/}
                {/*        showsHorizontalScrollIndicator={false}*/}
                {/*    />*/}
                {/*</View>*/}
            </ScrollView>
        </View>
    )
}

export default MovieDetailsScreen;