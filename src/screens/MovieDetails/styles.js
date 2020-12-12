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
        marginTop: -85,
        marginStart: 16,
        width: 150,
        height: 200
    },
    imagePoster: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        width: '100%',
        height: 250
    },
    imageViewSM: {
        margin: 8,
        width: 150,
        height: 200
    },
    imageViewCast: {
        margin: 8,
        width: 150,
        height: 200
    },
    movieTitle: {
        position: 'absolute',
        right: 0,
        marginTop: 260,
        marginEnd: 40,
        color: '#B43343',
        fontSize: 18,
        textAlign: 'center'
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
        marginTop: 8,
        marginStart: 16,
        marginEnd: 16,
        marginBottom: 8,
        color: '#B43343',
        fontSize: 15
    },
    castView: {
        backgroundColor: '#B43343',
        color: '#253341',
    },
    castNames: {
        color: '#B43343',
        marginLeft: 16,
        marginRight: 16,
        marginBottom: 8,
        fontSize: 15,
        fontWeight:"bold"
    },
    trailerNames: {
        color: '#B43343',
        margin: 16,
        fontSize: 18,
        fontWeight:"bold"
    },
});

export default styles;