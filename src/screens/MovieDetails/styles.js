import {StyleSheet, Dimensions} from "react-native";

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        flexWrap: 'nowrap',
        backgroundColor: '#15202B',
        // alignItems: 'flex-start',
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        marginBottom: 75,
        height: 300,
    },
    imageCover: {
        marginTop: 125,
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
        height: 200,
        alignSelf: 'center'
    },
    movieTitle: {
        position: 'absolute',
        marginTop: -80,
        width: windowWidth - 166,
        right: 0,
        color: '#B43343',
        fontSize: 20,
        textAlign: 'center',
        alignItems: 'center'
    },
    releaseDate: {
        position: 'absolute',
        marginTop: -50,
        width: windowWidth - 250,
        right: 0,
        color: '#B43343',
        fontSize: 15,
        textAlign: 'center',
        alignItems: 'center',
    },
    rating: {
        position: 'absolute',
        marginTop: -50,
        width: windowWidth - 15,
        right: 0,
        color: '#B43343',
        fontSize: 15,
        textAlign: 'center',
        alignItems: 'center'
    },
    genre: {
        position: 'absolute',
        fontStyle: 'italic',
        marginTop: -25,
        padding: 2,
        width: windowWidth - 166,
        right: 0,
        color: '#B43343',
        fontSize: 15,
        textAlign: 'center',
        alignItems: 'center'
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
        marginTop: -170,
    },
    desc: {
        marginTop: 16,
        marginStart: 16,
        marginEnd: 16,
        marginBottom: 8,
        color: '#B43343',
        fontSize: 15,
        textAlign: 'justify'
    },
    tagline: {
        marginTop: 0,
        marginStart: 16,
        marginEnd: 16,
        marginBottom: 8,
        color: '#B43343',
        fontSize: 15
    },
    runtime: {
        marginTop: 0,
        marginStart: 16,
        marginEnd: 16,
        marginBottom: 8,
        color: '#B43343',
        fontSize: 15
    },
    budget: {
        marginTop: 0,
        marginStart: 16,
        marginEnd: 16,
        marginBottom: 8,
        color: '#B43343',
        fontSize: 15
    },
    revenue: {
        marginTop: 0,
        marginStart: 16,
        marginEnd: 16,
        marginBottom: 16,
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
        marginBottom: 2,
        fontSize: 15,
        fontWeight:"bold",
        textAlign: 'center',
        alignItems: 'center'
    },
    castRoles: {
        color: '#B43343',
        marginLeft: 16,
        marginRight: 16,
        marginBottom: 8,
        fontSize: 12,
        fontWeight:"bold",
        textAlign: 'center',
        alignItems: 'center'
    },
    trailerNames: {
        color: '#B43343',
        margin: 16,
        fontSize: 18,
        fontWeight:"bold"
    },
    loader: {
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        backgroundColor: '#15202B',
        justifyContent:'center'
    }
});

export default styles;