import {StyleSheet} from "react-native";
import Constants from "expo-constants";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#15202B',
        marginTop: Constants.statusBarHeight,
    },
    listItem:{
        margin:10,
        padding:10,
        backgroundColor:"#15202B",
        width:"95%",
        flex:1,
        alignSelf:"center",
        flexDirection:"row",
        borderRadius:5
    },
    movieItem: {
        flex: 1,
        flexDirection: "column"
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
    btnView: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#B43343',
        position: 'absolute',
        bottom: 10,
        right: 10,
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