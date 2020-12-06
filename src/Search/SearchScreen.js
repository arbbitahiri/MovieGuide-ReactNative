import React from "react";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    SafeAreaView,
    FlatList,
    TouchableWithoutFeedback,
    Image,
    ScrollView
} from "react-native";
import {StatusBar} from "expo-status-bar";
import styles from '../Search/styles'

function Item({ item }) {
    return (
        <View style={styles.listItem}>
            <TouchableWithoutFeedback style={styles.movieItem} onPress={() => alert(item.name)} >
                <Image styles={{width: 20, height: 20}}
                       source={item.photo}/>
            </TouchableWithoutFeedback>
            <View style={{alignItems: "center"}}>
                <Text style={styles.textDesign}>{item.name}</Text>
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
                photo: require('../images/endgamesize200.jpg'),
                "date": "2019-03-06",
                "rating": "8.9/10"
            },
            {
                "id": "2",
                "name": "Avengers: Endgame",
                photo: require('../images/endgamesize200.jpg'),
                "date": "2019-03-06",
                "rating": "8.9/10"
            },
            {
                "id": "3",
                "name": "Avengers: Endgame",
                photo: require('../images/endgamesize200.jpg'),
                "date": "2019-03-06",
                "rating": "8.9/10"
            },
            {
                "id": "4",
                "name": "Avengers: Endgame",
                photo: require('../images/endgamesize200.jpg'),
                "date": "2019-03-06",
                "rating": "8.9/10"
            },
            {
                "id": "5",
                "name": "Avengers: Endgame",
                photo: require('../images/endgamesize200.jpg'),
                "date": "2019-03-06",
                "rating": "8.9/10"
            },
            {
                "id": "7",
                "name": "Avengers: Endgame",
                photo: require('../images/endgamesize200.jpg'),
                "date": "2019-03-06",
                "rating": "8.9/10"
            },
            {
                "id": "8",
                "name": "Avengers: Endgame",
                photo: require('../images/endgamesize200.jpg'),
                "date": "2019-03-06",
                "rating": "8.9/10"
            },
            {
                "id": "9",
                "name": "Avengers: Endgame",
                photo: require('../images/endgamesize200.jpg'),
                "date": "2019-03-06",
                "rating": "8.9/10"
            },
            {
                "id": "10",
                "name": "Avengers: Endgame",
                photo: require('../images/endgamesize200.jpg'),
                "date": "2019-03-06",
                "rating": "8.9/10"
            },
            {
                "id": "11",
                "name": "Avengers: Endgame",
                photo: require('../images/endgamesize200.jpg'),
                "date": "2019-03-06",
                "rating": "8.9/10"
            },
            {
                "id": "12",
                "name": "Avengers: Endgame",
                photo: require('../images/endgamesize200.jpg'),
                "date": "2019-03-06",
                "rating": "8.9/10"
            },
            {
                "id": "13",
                "name": "Avengers: Endgame",
                photo: require('../images/endgamesize200.jpg'),
                "date": "2019-03-06",
                "rating": "8.9/10"
            },
            {
                "id": "14",
                "name": "Avengers: Endgame",
                photo: require('../images/endgamesize200.jpg'),
                "date": "2019-03-06",
                "rating": "8.9/10"
            },
            {
                "id": "15",
                "name": "Avengers: Endgame",
                photo: require('../images/endgamesize200.jpg'),
                "date": "2019-03-06",
                "rating": "8.9/10"
            }
        ]
    }

    flatListItemSeparator = () => {
        return (
            <View
                style={{
                    height: .5,
                    width: "100%",
                    backgroundColor: "#15202B",
                }}
            />
        )
    };

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    style={{flex: 1}}
                    data={this.state.data}
                    renderItem={({item}) => <Item item={item}/> }
                    keyExtractor={item => item.id}
                    horizontal={false}
                    numColumns={2}
                    ItemSeperatorComponent = { this.flatListItemSeparator}
                />
            </View>
        )
    }
}

export default SearchScreen;