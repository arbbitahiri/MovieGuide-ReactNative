import {StyleSheet, Dimensions} from "react-native";
import Constants from "expo-constants";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

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
    flatListMain: {
        marginBottom: 8,
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
    listItemHomeMain:{
        backgroundColor:"#15202B",
        width: windowWidth,
        flex:1,
        alignSelf:"center",
        flexDirection:"row",
        // borderRadius:5
    },
    movieItemHome: {
        flex: 1,
        flexDirection: "column"
    },
    mainImageView: {
        width: windowWidth,
        height: 250,
    },
    mainTextView: {
        color: '#b43343',
        fontSize: 14,
        alignSelf:"center",
    },
    textViewMain: {
        color: '#B43343',
        marginTop: -100,
        marginLeft: 16,
        marginRight: 16,
        marginBottom: 8,
        fontSize: 16,
    },
    textView: {
        color: '#B43343',
        marginTop: 8,
        marginLeft: 16,
        marginRight: 16,
        marginBottom: 8,
        fontSize: 16,
    },
    imageView: {
        width: 150,
        height: 250
    },
    imageViewSlider: {
        marginLeft: -10,
        width: windowWidth,
        height: 300
    },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5,
    },
    itemText: {
        color: '#FFFFFF',
        marginTop: 260,
        fontSize: 20,
        textAlign: "center"
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