import {
    StyleSheet,
    Dimensions,
    Platform
} from "react-native";
import {
    BACKGROUND_COLOR,
    TEXT_COLOR
} from '../../constants/Colors';
import Constants from "expo-constants";

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        flexWrap: 'nowrap',
        backgroundColor: BACKGROUND_COLOR,
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginTop: Constants.statusBarHeight
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 300,
    },
    listItemHome:{
        margin:5,
        padding:5,
        backgroundColor: BACKGROUND_COLOR,
        width:"100%",
        flex:1,
        alignSelf:"center",
        flexDirection:"row",
        // borderRadius:5
    },
    textView: {
        color: TEXT_COLOR,
        marginTop: 8,
        marginLeft: 16,
        marginRight: 16,
        marginBottom: 8,
        fontSize: 16,
        ...Platform.select({
            android: {
                fontFamily: 'Raleway-Medium'
            },
            ios: {
                fontFamily: 'Raleway-Medium'
            },
            default: {
                fontFamily: 'Raleway-Medium'
            }
        })
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
    itemText: {
        color: TEXT_COLOR,
        marginTop: -40,
        fontSize: 20,
        textAlign: "center",
        ...Platform.select({
            android: {
                fontFamily: 'Raleway-Medium'
            },
            ios: {
                fontFamily: 'Raleway-Medium'
            },
            default: {
                fontFamily: 'Raleway-Medium'
            }
        })
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