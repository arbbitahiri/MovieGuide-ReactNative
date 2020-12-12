import React from "react";
import {StatusBar} from "expo-status-bar";
import {
    View,
    TouchableWithoutFeedback,
    Text,
    ScrollView,
    FlatList,
    SafeAreaView,
    SectionList
} from 'react-native';
import {Image} from "react-native";
import styles from './styles';
import {FlatListSlider} from 'react-native-flatlist-slider';

function Home({ item, navigation }) {
    return (
        <View style={styles.listItemHome}>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('MovieDetails')} >
                <Image
                    style={styles.imageView}
                    source={item.photo}
                    resizeMode="cover"
                />
            </TouchableWithoutFeedback>
        </View>
    )
}

const images = [
    {
        banner: require('../../images/backdrop/ThorBD.jpg'),
        desc: 'Avengers: Endgame 2019'
    },
    {
        banner: require('../../images/backdrop/CaptainMarvelBD.jpg'),
        desc: 'Avengers: Endgame 2019'
    },
    {
        banner: require('../../images/backdrop/WW84BD.jpg'),
        desc: 'Avengers: Endgame 2019'
    },
    {
        banner: require('../../images/backdrop/CaptainAmericaBD.jpg'),
        desc: 'Avengers: Endgame 2019'
    },
    {
        banner: require('../../images/backdrop/InfinityWarBD.jpg'),
        desc: 'Avengers: Endgame 2019'
    },
]

function HomeScreen({navigation}) {
    let state = {
        title: 'Popular',
        horizontal: true,
        data: [
            {
                "id": "9",
                photo: require('../../images/endgame_poster.jpg'),
                "name": 'Thor: Ragnarok'
            },
            {
                "id": "1",
                photo: require('../../images/similarMovies/WW84.jpg'),
                "name": 'Wonder Woman 1984',
            },
            {
                "id": "2",
                photo: require('../../images/similarMovies/CaptainMarvel.jpg'),
                "name": 'Captain Marvel'
            },
            {
                "id": "3",
                photo: require('../../images/similarMovies/DCJusticeLeague.jpg'),
                "name": 'DC Justice League',
            },
            {
                "id": "4",
                photo: require('../../images/similarMovies/ManofSteel.jpg'),
                "name": 'Man of Steel'
            },
            {
                "id": "5",
                photo: require('../../images/similarMovies/SpiderMan.jpg'),
                "name": 'Spider Man'
            },
            {
                "id": "6",
                photo: require('../../images/similarMovies/BatmanBegins.jpg'),
                "name": 'Batman: Begins'
            },
            {
                "id": "7",
                photo: require('../../images/similarMovies/AntMan2.jpg'),
                "name": 'Ant-Man 2'
            },
            {
                "id": "8",
                photo: require('../../images/similarMovies/ThorRagnarok.jpg'),
                "name": 'Thor: Ragnarok'
            },
        ]
    }
    return (
        <View style={styles.container}>
            <StatusBar style={'dark'} backgroundColor={'#B43343'} />
            <ScrollView>
                <View style={{flex: 4}}>
                    <FlatListSlider
                        data={images}
                        imageKey={'banner'}
                        local
                        timer={10000}
                        height={240}
                        onPress={({item}) => <Home item={item} navigation={navigation}/>}
                        indicatorActiveWidth={30}
                        indicatorActiveColor={'#15202B'}
                        indicatorInActiveColor={'#ffffff'}
                        indicatorContainerStyle={{position:'absolute', bottom: 20}}
                        animation={true}
                    />
                </View>
                <View style={{flex: 3}}>
                    <View style={{flex:1}}>
                        <Text style={styles.textView}>{state.title}</Text>
                    </View>
                    <View>
                        <FlatList
                            horizontal={true}
                            data={state.data}
                            renderItem={({item}) => <Home item={item} navigation={navigation}/>}
                            keyExtractor={item => item.id}
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                </View>
                <View style={{flex: 3}}>
                    <View style={{flex:1}}>
                        <Text style={styles.textView}>Now Playing</Text>
                    </View>
                    <View style={{flex: 3}}>
                        <FlatList
                            horizontal={true}
                            data={state.data}
                            renderItem={({item}) => <Home item={item} navigation={navigation}/>}
                            keyExtractor={item => item.id}
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                </View>
                <View style={{flex: 3}}>
                    <View style={{flex:1}}>
                        <Text style={styles.textView}>Top Rated</Text>
                    </View>
                    <View style={{flex: 3}}>
                        <FlatList
                            horizontal={true}
                            data={state.data}
                            renderItem={({item}) => <Home item={item} navigation={navigation}/>}
                            keyExtractor={item => item.id}
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                </View>
                <View style={{flex: 3}}>
                    <View style={{flex:1}}>
                        <Text style={styles.textView}>Upcoming</Text>
                    </View>
                    <View style={{flex: 3}}>
                        <FlatList
                            horizontal={true}
                            data={state.data}
                            renderItem={({item}) => <Home item={item} navigation={navigation}/>}
                            keyExtractor={item => item.id}
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default HomeScreen;