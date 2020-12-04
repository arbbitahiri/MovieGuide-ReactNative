import React from "react";
import {StyleSheet, Text, View, TextInput, SafeAreaView, FlatList} from "react-native";
import {StatusBar} from "expo-status-bar";
import styles from '../Search/styles'

const imagesCover = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        banner: require('../images/endgame_poster.jpg'),
        desc: 'Avengers: Endgame 2019',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        banner: require('../images/endgame_poster.jpg'),
        desc: 'Avengers: Endgame 2019'
    },
    {
        id: '58694a0f-4tyl-471f-bd96-145571e29d72',
        banner: require('../images/endgame_poster.jpg'),
        desc: 'Avengers: Endgame 2019'
    },
]

class SearchScreen extends React.Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={{flex: 1}}>
                    <TextInput
                        style={styles.textInputStyle}
                        underlineColorAndroid="transparent"
                        placeholder="Search for a movie..."
                    />
                </View>
                <View style={{flex:6}}>
                    <FlatList
                        data={imagesCover}
                        keyExtractor={item => item.id}
                        renderItem={this.renderItem()}
                        numColumns={2}
                        />
                </View>
                <StatusBar style="auto" />
            </SafeAreaView>
        )
    }
}

export default SearchScreen;