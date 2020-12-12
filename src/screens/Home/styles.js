import {StyleSheet, Text, View} from "react-native";
import Constants from 'expo-constants';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        flexWrap: 'nowrap',
        backgroundColor: '#15202B',
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginTop: Constants.statusBarHeight
    },
    listItemHome:{
        margin:5,
        padding:5,
        backgroundColor:"#15202B",
        width:"100%",
        flex:1,
        alignSelf:"center",
        flexDirection:"row",
        // borderRadius:5
    },
    movieItemHome: {
        flex: 1,
        flexDirection: "column"
    },
    textView: {
        color: '#B43343',
        marginTop: 8,
        marginLeft: 16,
        marginRight: 16,
        marginBottom: 8,
        fontSize: 14,
    },
    imageView: {
        width: 150,
        height: 250
    },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5,
    },
    itemText: {
        color: '#B43343',
        marginTop: 5,
    },
    sectionHeader: {
        fontWeight: '800',
        fontSize: 18,
        color: '#B43343',
        marginTop: 20,
        marginBottom: 5,
    },
});

export default styles;