import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    FlatList,
    ScrollView,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Button
} from "react-native";
import styles from "../MovieDetails/styles"

function Details({ item }) {
    return (
        <View style={styles.container}>
            <ScrollView>

            </ScrollView>
        </View>
    )
}

class MovieDetails extends React.Component {
    state = {
        data: [
            {
                "id": "1",
                "name": "Avengers: Endgame",
                photo: require('../images/endgamesize200.jpg'),
                cover: require('../images/endgame.jpg'),
                "date": "2019-03-06",
                "rating": "8.9/10",
                "overview": "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
                cast1: require('../images/endgamesize200.jpg'),
                cast2: require('../images/endgame.jpg'),
                cast3: require('../images/endgame.jpg'),
                crew1: require('../images/endgamesize200.jpg'),
                crew2: require('../images/endgame.jpg'),
                crew3: require('../images/endgame.jpg'),
                similar1: require('../images/endgamesize200.jpg'),
                similar2: require('../images/endgame.jpg'),
                similar3: require('../images/endgame.jpg'),
                trailer1: require('../images/endgame.jpg'),
                trailer2: require('../images/endgame.jpg'),
            },
        ]
    }
}
