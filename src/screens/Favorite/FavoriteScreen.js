import React from "react"
import {
    StyleSheet,
    Text,
    View,
    Image,
    FlatList,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Button
} from "react-native";
import {StatusBar} from "expo-status-bar";
import { FAB } from 'react-native-paper';
import styles from "./styles"

function ItemFavorites({ item, navigation }) {
    return (
        <View style={styles.listItemFav}>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('MovieDetails')} >
                <Image
                    style={styles.imageViewFav}
                    source={item.photo}
                    resizeMode="cover"
                />
            </TouchableWithoutFeedback>
            <View style={{alignItems: "center"}}>
                <Text style={styles.textDesign}>{item.name}</Text>
                <Text style={styles.textDesign}>{item.date}</Text>
                <Text style={styles.textDesign}>{item.rating}</Text>
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

function FavoriteScreen({navigation}) {
    let state = {
        data:[
            {
                "id": "1",
                "name": "Avengers: Endgame",
                photo: require('../../images/endgame_poster.jpg'),
                "date": "2019-04-06",
                "rating": "8.9/10"
            },
            {
                "id": "2",
                "name": "Wonder Woman 1984",
                photo: require('../../images/similarMovies/WW84.jpg'),
                "date": "2020-12-25",
                "rating": "8.9/10"
            },
            {
                "id": "3",
                "name": 'DC Justice League',
                photo: require('../../images/similarMovies/DCJusticeLeague.jpg'),
                "date": "2017-03-13",
                "rating": "6.3/10"
            },
            {
                "id": "4",
                "name": 'Captain Marvel',
                photo: require('../../images/similarMovies/CaptainMarvel.jpg'),
                "date": "2019-03-08",
                "rating": "6.9/10"
            },
            {
                "id": "5",
                "name": 'Man of Steel',
                photo: require('../../images/similarMovies/ManofSteel.jpg'),
                "date": "2013-06-14",
                "rating": "7/10"
            },
            {
                "id": "7",
                "name": 'Spider Man',
                photo: require('../../images/similarMovies/SpiderMan.jpg'),
                "date": "2002-05-02",
                "rating": "7.3/10"
            },
            {
                "id": "8",
                "name": 'Batman: Begins',
                photo: require('../../images/similarMovies/BatmanBegins.jpg'),
                "date": "2005-06-15",
                "rating": "8.2/10"
            },
            {
                "id": "9",
                "name": 'Ant-Man 2',
                photo: require('../../images/similarMovies/AntMan2.jpg'),
                "date": "2018-07-04",
                "rating": "7.1/10"
            },
            {
                "id": "10",
                "name": 'Thor: Ragnarok',
                photo: require('../../images/similarMovies/ThorRagnarok.jpg'),
                "date": "2017-11-03",
                "rating": "7.9/10"
            }
        ]
    }

    const flatListItemSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    width: "100%",
                    backgroundColor: "#B43343",
                }}
            />
        )
    };

    return (
        <View style={styles.containerFav}>
            <FlatList
                horizontal={false}
                data={state.data}
                renderItem={({item}) => <ItemFavorites item={item} navigation={navigation}/> }
                keyExtractor={item => item.id}
                ItemSeparatorComponent = { flatListItemSeparator }
            />
        </View>
    );
}

export default FavoriteScreen;