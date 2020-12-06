import {StyleSheet} from "react-native";
import Constants from "expo-constants";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#15202B',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: Constants.statusBarHeight,
    },
    textInputStyle: {
        height: 40,
        borderWidth: 1,
        paddingLeft: 20,
        margin: 5,
        borderColor: '#B43343',
        backgroundColor: '#B43343',
    },
    imageView: {
        width: '50%',
        height: 100 ,
        margin: 7,
        borderRadius : 7

    },
});

export default styles;