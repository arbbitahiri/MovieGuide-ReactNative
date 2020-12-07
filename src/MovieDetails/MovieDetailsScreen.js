import React from 'react'
import {StatusBar} from "expo-status-bar";
import {
    View,
    ImageBackground,
    TouchableWithoutFeedback,
    Text,
    ScrollView,
    FlatList,
    SafeAreaView,
    SectionList
} from 'react-native';
import styles from '../MovieDetails/styles'
import {Image} from "react-native-web";

const backdrop = {
    image: require('../images/endgame.jpg')
};

class MovieDetailsScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar style="dark" />
                <View>
                    <Image
                        style={styles.imagePoster}
                        source={backdrop}>
                        {/*<Image*/}
                        {/*    style={styles.imageCover}*/}
                        {/*    source={require('../images/endgame_poster.jpg')}/>*/}
                    </Image>
                </View>
            </View>
        )
    }
}

export default MovieDetailsScreen;