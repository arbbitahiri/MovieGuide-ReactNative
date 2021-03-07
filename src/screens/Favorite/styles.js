import {StyleSheet, Dimensions} from "react-native";
import Constants from "expo-constants";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    containerFav: {
        flex: 1,
        flexDirection: 'column',
        flexWrap: 'nowrap',
        backgroundColor: '#15202B',
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginTop: Constants.statusBarHeight
    },
    listItemFav:{
        padding:5,
        marginTop: 7,
        backgroundColor:"#15202B",
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
        color: '#B43343',
        marginLeft: 32,
        marginTop: 16,
        marginBottom: 16,
        fontSize: 18,
    },
    textDesignReleaseDate: {
        color: '#B43343',
        marginLeft: 32,
        marginTop: 16,
        marginBottom: 16,
        fontSize: 15,
    },
    textDesignRating: {
        color: '#B43343',
        marginLeft: 32,
        marginTop: 16,
        marginBottom: 16,
        fontSize: 13,
    },
    textDesignRuntime: {
        color: '#B43343',
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
        backgroundColor: '#B43343',
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
        backgroundColor: "#B43343",
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