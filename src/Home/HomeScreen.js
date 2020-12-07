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
import styles from '../Home/styles';
import {FlatListSlider} from 'react-native-flatlist-slider';
import { createNativeStackNavigator } from "react-native-screens/native-stack";

function Home({item}) {
    return (
        <View style={styles.listItemHome}>
            <TouchableWithoutFeedback onPress={() => alert(item.name)} >
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
        banner: require('../images/endgame.jpg'),
        desc: 'Avengers: Endgame 2019'
    },
    {
        banner: require('../images/endgame.jpg'),
        desc: 'Avengers: Endgame 2019'
    },
    {
        banner: require('../images/endgame.jpg'),
        desc: 'Avengers: Endgame 2019'
    },
    {
        banner: require('../images/endgame.jpg'),
        desc: 'Avengers: Endgame 2019'
    },
]

const imagesCover = [
    {
        Id: 1,
        banner: require('../images/endgame_poster.jpg'),
        desc: 'Avengers: Endgame 2019',
    },
    {
        Id: 6,
        banner: require('../images/endgame_poster.jpg'),
        desc: 'Avengers: Endgame 2019'
    },
    {
        Id: 2,
        banner: require('../images/endgame_poster.jpg'),
        desc: 'Avengers: Endgame 2019'
    },
    {
        Id: 3,
        banner: require('../images/endgame_poster.jpg'),
        desc: 'Avengers: Endgame 2019'
    },
    {
        Id: 4,
        banner: require('../images/endgame_poster.jpg'),
        desc: 'Avengers: Endgame 2019'
    },
    {
        Id: 5,
        banner: require('../images/endgame_poster.jpg'),
        desc: 'Avengers: Endgame 2019'
    },
]

class HomeScreen extends React.Component {
    state = {
        title: 'Popular',
        horizontal: true,
        data: [
            {
                "id": "1",
                photo: require('../images/endgamesize200.jpg'),
                "name": 'Avengers: Endgame',
            },
            {
                "id": "6",
                photo: require('../images/endgamesize200.jpg'),
                "name": 'Avengers: Endgame'
            },
            {
                "id": "2",
                photo: require('../images/endgamesize200.jpg'),
                "name": 'Avengers: Endgame'
            },
            {
                "id": "3",
                photo: require('../images/endgamesize200.jpg'),
                "name": 'Avengers: Endgame'
            },
            {
                "id": "4",
                photo: require('../images/endgamesize200.jpg'),
                "name": 'Avengers: Endgame'
            },
            {
                "id": "5",
                photo: require('../images/endgamesize200.jpg'),
                "name": 'Avengers: Endgame'
            },
        ]
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar style="light" />
                <ScrollView>
                    <View style={{flex: 4}}>
                        <FlatListSlider
                            data={images}
                            imageKey={'banner'}
                            local
                            timer={10000}
                            height={240}
                            onPress={item => alert(JSON.stringify(item))}
                            indicatorActiveWidth={30}
                            indicatorActiveColor={'#15202B'}
                            indicatorInActiveColor={'#ffffff'}
                            indicatorContainerStyle={{position:'absolute', bottom: 20}}
                            animation={true}
                        />
                    </View>
                    <View style={{flex: 3}}>
                        <View style={{flex:1}}>
                            <Text style={styles.textView}>{this.state.title}</Text>
                        </View>
                        <View>
                            <FlatList
                                horizontal={true}
                                data={this.state.data}
                                renderItem={({item}) => <Home item={item}/>}
                                keyExtractor={item => item.id}
                                showsHorizontalScrollIndicator={false}
                            />
                        </View>
                    </View>
                    <View style={{flex: 3}}>
                        <View style={{flex:1}}>
                            <Text style={styles.textView}>now playing</Text>
                        </View>
                        <View style={{flex: 3}}>
                            <FlatList
                                horizontal={true}
                                data={this.state.data}
                                renderItem={({item}) => <Home item={item}/>}
                                keyExtractor={item => item.id}
                                showsHorizontalScrollIndicator={false}
                            />
                        </View>
                    </View>
                    <View style={{flex: 3}}>
                        <View style={{flex:1}}>
                            <Text style={styles.textView}>top rated</Text>
                        </View>
                        <View style={{flex: 3}}>
                            <FlatList
                                horizontal={true}
                                data={this.state.data}
                                renderItem={({item}) => <Home item={item}/>}
                                keyExtractor={item => item.id}
                                showsHorizontalScrollIndicator={false}
                            />
                        </View>
                    </View>
                    <View style={{flex: 3}}>
                        <View style={{flex:1}}>
                            <Text style={styles.textView}>upcoming</Text>
                        </View>
                        <View style={{flex: 3}}>
                            <FlatList
                                horizontal={true}
                                data={this.state.data}
                                renderItem={({item}) => <Home item={item}/>}
                                keyExtractor={item => item.id}
                                showsHorizontalScrollIndicator={false}
                            />
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

export default HomeScreen;