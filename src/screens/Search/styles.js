import {StyleSheet} from "react-native";
import Constants from "expo-constants";

const styles = StyleSheet.create({
    containerSearch: {
        flex: 1,
        backgroundColor: '#15202B',
        marginTop: Constants.statusBarHeight,
        justifyContent: 'center',
        alignItems: 'center',
        // flexDirection: 'column'
    },
    listItemSearch:{
        margin:5,
        padding:5,
        backgroundColor:"#15202B",
        width:"100%",
        flex:1,
        alignSelf:"center",
        flexDirection:"row",
        // borderRadius:5
    },
    movieItemSearch: {
        flex: 1,
        flexDirection: "column"
    },
    searchDesign: {
        alignItems: "flex-start",
        backgroundColor: '#15202B',
        padding: 10,
        width: '100%',
        marginVertical: 10,
        borderRadius: 20
    },
    textDesignSearch: {
        color: '#B43343',
        marginTop: 8,
        marginLeft: 16,
        marginRight: 16,
        marginBottom: 8,
        fontSize: 12,
        fontWeight:"bold"
    },
    text: {
        fontSize: 15,
        color: '#fff',
        backgroundColor: '#15202B',
        paddingHorizontal: 10
    },
    moviesImageSearch: {
        width: 200,
        height: 270
    }
});

export default styles;