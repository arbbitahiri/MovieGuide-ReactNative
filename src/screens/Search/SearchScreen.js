import React from "react";
import {
    Text,
    View,
    TextInput,
    FlatList,
    TouchableWithoutFeedback,
    Image
} from "react-native";
import {StatusBar} from "expo-status-bar";
import styles from './styles'

function ItemSearch({ item, navigation }) {
    return (
        <View style={styles.listItemFav}>
            <StatusBar style={'dark'} backgroundColor={'#B43343'} />
            <TouchableWithoutFeedback onPress={() => navigation.navigate('MovieDetails')} >
                <Image
                    source={item.photo}
                    style={styles.moviesImageSearch}
                    resizeMode="cover"
                />
            </TouchableWithoutFeedback>
            <View style={{alignItems: "center"}}>
                <Text style={styles.textDesignSearch}>{item.name}</Text>
            </View>
        </View>
    );
}

function SearchScreen({navigation}) {
    let state = {
        searchExamples: [
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

    const flatListItemSeparator = () => {
        return (
            <View
                style={{
                    height: 5,
                    width: "100%",
                    backgroundColor: "#15202B",
                }}
            />
        )
    };
        return (
            <View style={styles.containerSearch}>
                <View style={styles.searchDesign}>
                    <TextInput
                        autoCapitalize="none"
                        autoCorrect={false}
                        clearButtonMode="always"
                        // value={query}
                        // onChangeText={queryText => handleSearch(queryText)}
                        placeholder="Search for a movie..."
                        style={styles.text} />
                </View>
                <FlatList
                    style={{flex: 1}}
                    data={state.searchExamples}
                    renderItem={({item}) => <ItemSearch item={item} navigation={navigation}/> }
                    keyExtractor={item => item.id}
                    horizontal={false}
                    numColumns={2}
                    ItemSeparatorComponent = { flatListItemSeparator }
                />
            </View>
        )
}

export default SearchScreen;