import {StyleSheet, Text, View} from "react-native";
import Constants from 'expo-constants';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        flexWrap: 'nowrap',
        backgroundColor: '#15202B',
        // alignItems: 'flex-start',
    },
    imageCover: {
        width: 75,
        height: 150
    },
    imagePoster: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        width: '100%',
        height: 250
    },
    imageViewSM: {
        marginTop: -125,
        marginStart: 25,
        width: 150,
        height: 250
    },
    movieTitle: {
        position: 'absolute',
        right: 0,
        marginTop: 260,
        marginEnd: 40,
        color: '#B43343',
        fontSize: 18
    },
    releaseDate: {
        position: 'absolute',
        right: 0,
        marginTop: 295,
        marginEnd: 115,
        color: '#B43343',
        fontSize: 15
    },
    rating: {
        position: 'absolute',
        right: 0,
        marginTop: 330,
        marginEnd: 160,
        color: '#B43343',
        fontSize: 15
    },
    genre: {
        position: 'absolute',
        right: 0,
        marginTop: 330,
        marginEnd: 25,
        color: '#B43343',
        fontSize: 15
    },
    fabMD: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#B43343',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        margin: 16,
        right: 0,
        marginTop: 185,
    },
    desc: {
        margin: 16,
        color: '#B43343',
        fontSize: 15
    },
});

export default styles;