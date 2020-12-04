import React from "react";
import {StatusBar} from "expo-status-bar";
import {View, StyleSheet, TouchableOpacity, Text, Alert, ScrollView} from 'react-native';
import {Image} from "react-native";
import styles from '../Home/styles';
import {FlatListSlider} from 'react-native-flatlist-slider';

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
        banner: require('../images/endgame_poster.jpg'),
        desc: 'Avengers: Endgame 2019',
    },
    {
        banner: require('../images/endgame_poster.jpg'),
        desc: 'Avengers: Endgame 2019'
    },
    {
        banner: require('../images/endgame_poster.jpg'),
        desc: 'Avengers: Endgame 2019'
    },
    {
        banner: require('../images/endgame_poster.jpg'),
        desc: 'Avengers: Endgame 2019'
    },
    {
        banner: require('../images/endgame_poster.jpg'),
        desc: 'Avengers: Endgame 2019'
    },
    {
        banner: require('../images/endgame_poster.jpg'),
        desc: 'Avengers: Endgame 2019'
    },
]

class HomeScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={{flex: 4}}>
                        <FlatListSlider
                            data={images}
                            imageKey={'banner'}
                            local
                            timer={10000}
                            height={240}
                            onPress={()=>Alert.alert('Description')}
                            indicatorActiveWidth={30}
                            indicatorActiveColor={'#15202B'}
                            indicatorInActiveColor={'#ffffff'}
                            indicatorContainerStyle={{position:'absolute', bottom: 20}}
                            animation={true}
                        />
                    </View>
                    <View style={{flex: 3}}>
                        <View style={{flex:1}}>
                            <Text style={styles.textView}>popular</Text>
                        </View>
                        <View style={{flex: 3}}>
                            <FlatListSlider
                                data={imagesCover}
                                imageKey={'banner'}
                                local
                                autoscroll={false}
                                width={125}
                                height={175}
                                onPress={item => alert(JSON.stringify(item))}
                                indicator={false}
                                animation={true}
                                contentContainerStyle={{marginEnd: 16, marginLeft: 16}}
                                separatorWidth={20}
                            />
                        </View>
                    </View>
                    <View style={{flex: 3}}>
                        <View style={{flex:1}}>
                            <Text style={styles.textView}>now playing</Text>
                        </View>
                        <View style={{flex: 3}}>
                            <FlatListSlider
                                data={imagesCover}
                                imageKey={'banner'}
                                local
                                autoscroll={false}
                                width={125}
                                height={175}
                                onPress={item => alert(JSON.stringify(item))}
                                indicator={false}
                                animation={true}
                                contentContainerStyle={{marginEnd: 16, marginLeft: 16}}
                                separatorWidth={20}
                            />
                        </View>
                    </View>
                    <View style={{flex: 3}}>
                        <View style={{flex:1}}>
                            <Text style={styles.textView}>top rated</Text>
                        </View>
                        <View style={{flex: 3}}>
                            <FlatListSlider
                                data={imagesCover}
                                imageKey={'banner'}
                                local
                                autoscroll={false}
                                width={125}
                                height={175}
                                onPress={item => alert(JSON.stringify(item))}
                                indicator={false}
                                animation={true}
                                contentContainerStyle={{marginEnd: 16, marginLeft: 16}}
                                separatorWidth={20}
                            />
                        </View>
                    </View>

                    <View style={{flex: 3}}>
                        <View style={{flex:1}}>
                            <Text style={styles.textView}>upcoming</Text>
                        </View>
                        <View style={{flex: 3}}>
                            <FlatListSlider
                                data={imagesCover}
                                imageKey={'banner'}
                                local
                                autoscroll={false}
                                width={125}
                                height={175}
                                onPress={item => alert(JSON.stringify(item))}
                                indicator={false}
                                animation={true}
                                contentContainerStyle={{marginEnd: 16, marginLeft: 16}}
                                separatorWidth={20}
                            />
                        </View>
                    </View>
                </ScrollView>
                <StatusBar style="auto" />
            </View>
        )
    }
}

export default HomeScreen;