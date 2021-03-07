import {StyleSheet, Dimensions} from "react-native";
import Constants from "expo-constants";
import {
    BACKGROUND_COLOR,
    SECOND_COLOR,
    TEXT_COLOR,
    MAIN_COLOR
} from '../../constants/Colors';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    containerFav: {
        flex: 1,
        flexDirection: 'column',
        flexWrap: 'nowrap',
        backgroundColor: BACKGROUND_COLOR,
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginTop: Constants.statusBarHeight
    },
    listItemFav:{
        padding:5,
        marginTop: 7,
        backgroundColor: BACKGROUND_COLOR,
        width: windowWidth,
        height: 250,
        flex:1,
        alignSelf:"center",
        flexDirection:"row",
        // borderRadius:5
    },
    movieItemFav: {
        flex: 1,
        flexDirection: "column",
    },
    background: {
        position: 'absolute',
        height: 240,
        left: 0,
        right: 0,
        bottom: 0,
        marginBottom: windowHeight > 886 ? 0 : 75,
    },
    imagePoster: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        width: '100%',
        height: 240
    },
    imageViewFav: {
        margin: 4,
        width: 150,
        height: 225,
        alignSelf: 'center'
    },
    textDesignTitle: {
        color: MAIN_COLOR,
        marginLeft: 32,
        marginTop: 16,
        marginBottom: 16,
        fontSize: 18,
    },
    textDesignReleaseDate: {
        color: MAIN_COLOR,
        marginLeft: 32,
        marginTop: 16,
        marginBottom: 16,
        fontSize: 15,
    },
    textDesignRating: {
        color: MAIN_COLOR,
        marginLeft: 32,
        marginTop: 16,
        marginBottom: 16,
        fontSize: 13,
    },
    textDesignRuntime: {
        color: MAIN_COLOR,
        marginLeft: 32,
        marginTop: 16,
        marginBottom: 16,
        fontSize: 14,
    },
    texts: {
        alignItems: "center",
        justifyContent: 'center',
        fontFamily: 'Montserrat-Light',
        marginLeft: 24
    },
    fab: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: MAIN_COLOR,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        right: 0,
        bottom: 0,
        marginEnd: 16,
        marginBottom: 32
    },
    itemSeparator: {
        height: 1,
        width: "100%",
        backgroundColor: MAIN_COLOR,
    },
    searchBar: {
        fontSize: 15,
        color: TEXT_COLOR,
        backgroundColor: SECOND_COLOR,
        paddingHorizontal: 10,
        width: windowWidth - 20
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