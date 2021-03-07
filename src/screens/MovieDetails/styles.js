import {
    StyleSheet,
    Dimensions,
    Platform
} from "react-native";
import {
    BACKGROUND_COLOR,
    MAIN_COLOR,
    TEXT_COLOR
} from '../../constants/Colors';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        flexWrap: 'nowrap',
        backgroundColor: BACKGROUND_COLOR,
        // alignItems: 'flex-start',
    },
    background: {
        position: 'absolute',
        height: 300,
        left: 0,
        right: 0,
        bottom: 0,
        marginBottom: windowHeight > 886 ? 0 : 75,
    },
    imageCover: {
        marginTop: windowHeight > 886 ? 200 : 125,
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
        marginTop: windowHeight > 886 ? -45 : -100,
        width: windowWidth - 166,
        right: 0,
        color: TEXT_COLOR,
        fontSize: 20,
        textAlign: 'center',
        alignItems: 'center',
        ...Platform.select({
            android: {
                fontFamily: 'Raleway-Medium'
            },
            ios: {
                fontFamily: 'Montserrat-Medium'
            },
            default: {
                fontFamily: 'Raleway-Medium'
            }
        })
    },
    releaseDate: {
        position: 'absolute',
        marginTop: windowHeight > 886 ? 5 : -57,
        width: windowWidth - 250,
        right: 0,
        color: TEXT_COLOR,
        fontSize: 15,
        textAlign: 'center',
        alignItems: 'center',
        fontFamily: 'Montserrat-Light'
    },
    rating: {
        position: 'absolute',
        marginTop: windowHeight > 886 ? 5 : -57,
        width: windowWidth - 15,
        right: 0,
        color: TEXT_COLOR,
        fontSize: 15,
        textAlign: 'center',
        alignItems: 'center',
        fontFamily: 'Montserrat-Light'
    },
    genre: {
        position: 'absolute',
        fontStyle: 'italic',
        marginTop: windowHeight > 886 ? 40 : -25,
        padding: 2,
        width: windowWidth - 166,
        right: 0,
        color: TEXT_COLOR,
        fontSize: 12,
        textAlign: 'center',
        alignItems: 'center',
        fontFamily: 'Montserrat-Light'
    },
    fabMD: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: MAIN_COLOR,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        margin: 16,
        right: 0,
        marginTop: windowHeight > 886 ? -125 : -170,
    },
    desc: {
        marginTop: windowHeight > 886 ? 85 : 16,
        marginStart: 16,
        marginEnd: 16,
        marginBottom: 8,
        color: TEXT_COLOR,
        fontSize: 15,
        textAlign: 'justify',
        // fontFamily: 'Montserrat-Light',
        ...Platform.select({
            android: {
                fontFamily: 'Raleway-Medium'
            },
            ios: {
                fontFamily: 'Montserrat-Light'
            },
            default: {
                fontFamily: 'Raleway-Medium'
            }
        })
    },
    tagline: {
        marginTop: 0,
        marginStart: 16,
        marginEnd: 16,
        marginBottom: 8,
        color: TEXT_COLOR,
        textAlign: 'justify',
        fontSize: 15,
        ...Platform.select({
            android: {
                fontFamily: 'Raleway-Medium'
            },
            ios: {
                fontFamily: 'Montserrat-Light'
            },
            default: {
                fontFamily: 'Raleway-Medium'
            }
        })
    },
    runtime: {
        marginTop: 0,
        marginStart: 16,
        marginEnd: 16,
        marginBottom: 8,
        color: TEXT_COLOR,
        fontSize: 15,
        fontFamily: 'Montserrat-Light'
    },
    budget: {
        marginTop: 0,
        marginStart: 16,
        marginEnd: 16,
        marginBottom: 8,
        color: TEXT_COLOR,
        fontSize: 15,
        fontFamily: 'Montserrat-Light'
    },
    revenue: {
        marginTop: 0,
        marginStart: 16,
        marginEnd: 16,
        marginBottom: 16,
        color: TEXT_COLOR,
        fontSize: 15,
        fontFamily: 'Montserrat-Light'
    },
    castView: {
        backgroundColor: MAIN_COLOR,
        color: TEXT_COLOR,
        fontFamily: 'Raleway-Medium'
    },
    castNames: {
        color: TEXT_COLOR,
        marginLeft: 16,
        marginRight: 16,
        marginBottom: 2,
        fontSize: 15,
        fontWeight:"bold",
        textAlign: 'center',
        alignItems: 'center',
        fontFamily: 'Raleway-Medium'
    },
    castRoles: {
        color: TEXT_COLOR,
        marginLeft: 16,
        marginRight: 16,
        marginBottom: 8,
        fontSize: 12,
        fontWeight:"bold",
        textAlign: 'center',
        alignItems: 'center',
        fontFamily: 'Montserrat-Light'
    },
    trailerNames: {
        color: TEXT_COLOR,
        margin: 16,
        fontSize: 18,
        fontWeight:"bold",
        fontFamily: 'Raleway-Medium'
     
    },
    loader: {
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        backgroundColor: BACKGROUND_COLOR,
        justifyContent:'center'
    },
});

export default styles;