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
import styles from "../Favorite/styles"

function Item({ item }) {
    return (
            <View style={styles.listItemFav}>
                <TouchableWithoutFeedback style={styles.movieItemFav} onPress={() => alert('pressed')} >
                    <Image styles={{width: 20, height: 20}}
                       source={item.photo}/>
                </TouchableWithoutFeedback>
                <View style={{alignItems: "center"}}>
                    <Text style={styles.textDesign}>{item.name}</Text>
                    <Text style={styles.textDesign}>{item.date}</Text>
                    <Text style={styles.textDesign}>{item.rating}</Text>
                </View>
                <View style={{flex: 1,}}>
                    <FAB
                        style={styles.fab}
                        small
                        icon="check"
                        onPress={() => alert(item.id)}
                    />
                </View>
                <StatusBar style="auto" />
            </View>
    );
}

class FavoriteScreen extends React.Component {
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
            }
        ]
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    style={{flex: 1}}
                    data={this.state.data}
                    renderItem={({item}) => <Item item={item}/> }
                    keyExtractor={item => item.id}
                    />
            </View>
        );
    }
}

export default FavoriteScreen;