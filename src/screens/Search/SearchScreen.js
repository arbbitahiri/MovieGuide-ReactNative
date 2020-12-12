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

function ItemSearch({ item }) {
    return (
        <View style={styles.listItemFav}>
            <TouchableWithoutFeedback onPress={() => alert(item.name)} >
                <Image source={item.photo}/>
            </TouchableWithoutFeedback>
            <View style={{alignItems: "center"}}>
                <Text style={styles.textDesignSearch}>{item.name}</Text>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}

class SearchScreen extends React.Component {
    state = {
        data:[
            {
                "id": "1",
                "name": "Avengers: Endgame",
                photo: require('../../images/endgamesize200.jpg'),
                "date": "2019-03-06",
                "rating": "8.9/10"
            },
            {
                "id": "2",
                "name": "Avengers: Endgame",
                photo: require('../../images/endgamesize200.jpg'),
                "date": "2019-03-06",
                "rating": "8.9/10"
            },
            {
                "id": "3",
                "name": "Avengers: Endgame",
                photo: require('../../images/endgamesize200.jpg'),
                "date": "2019-03-06",
                "rating": "8.9/10"
            },
            {
                "id": "4",
                "name": "Avengers: Endgame",
                photo: require('../../images/endgamesize200.jpg'),
                "date": "2019-03-06",
                "rating": "8.9/10"
            },
            {
                "id": "5",
                "name": "Avengers: Endgame",
                photo: require('../../images/endgamesize200.jpg'),
                "date": "2019-03-06",
                "rating": "8.9/10"
            },
            {
                "id": "7",
                "name": "Avengers: Endgame",
                photo: require('../../images/endgamesize200.jpg'),
                "date": "2019-03-06",
                "rating": "8.9/10"
            },
            {
                "id": "8",
                "name": "Avengers: Endgame",
                photo: require('../../images/endgamesize200.jpg'),
                "date": "2019-03-06",
                "rating": "8.9/10"
            },
            {
                "id": "9",
                "name": "Avengers: Endgame",
                photo: require('../../images/endgamesize200.jpg'),
                "date": "2019-03-06",
                "rating": "8.9/10"
            },
            {
                "id": "10",
                "name": "Avengers: Endgame",
                photo: require('../../images/endgamesize200.jpg'),
                "date": "2019-03-06",
                "rating": "8.9/10"
            },
            {
                "id": "11",
                "name": "Avengers: Endgame",
                photo: require('../../images/endgamesize200.jpg'),
                "date": "2019-03-06",
                "rating": "8.9/10"
            },
            {
                "id": "12",
                "name": "Avengers: Endgame",
                photo: require('../../images/endgamesize200.jpg'),
                "date": "2019-03-06",
                "rating": "8.9/10"
            },
            {
                "id": "13",
                "name": "Avengers: Endgame",
                photo: require('../../images/endgamesize200.jpg'),
                "date": "2019-03-06",
                "rating": "8.9/10"
            },
            {
                "id": "14",
                "name": "Avengers: Endgame",
                photo: require('../../images/endgamesize200.jpg'),
                "date": "2019-03-06",
                "rating": "8.9/10"
            },
            {
                "id": "15",
                "name": "Avengers: Endgame",
                photo: require('../../images/endgamesize200.jpg'),
                "date": "2019-03-06",
                "rating": "8.9/10"
            }
        ]
    }

    flatListItemSeparator = () => {
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

    render() {
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
                    data={this.state.data}
                    renderItem={({item}) => <ItemSearch item={item}/> }
                    keyExtractor={item => item.id}
                    horizontal={false}
                    numColumns={2}
                    ItemSeparatorComponent = { this.flatListItemSeparator}
                />
            </View>
        )
    }
}

export default SearchScreen;