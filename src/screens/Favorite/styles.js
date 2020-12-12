import {StyleSheet, Dimensions} from "react-native";
import Constants from "expo-constants";

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
        margin:5,
        padding:5,
        backgroundColor:"#15202B",
        width: "100%",
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
    imageViewFav: {
        margin: 8,
        width: 150,
        height: 200,
    },
    text: {
        fontSize: 20,
        color: '#101010',
        marginTop: 60,
        fontWeight: '700'
    },
    textDesign: {
        color: '#B43343',
        marginTop: 8,
        marginLeft: 16,
        marginRight: 16,
        marginBottom: 16,
        fontSize: 16,
        fontWeight:"bold"
    },
    fab: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#B43343',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    },
});

export default styles;