import {StyleSheet, Text, View} from "react-native";
import Constants from 'expo-constants';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        flexWrap: 'nowrap',
        backgroundColor: '#15202B',
        // alignItems: 'flex-start',
        marginTop: Constants.statusBarHeight,
    },
    imageCover: {
        width: 75,
        height: 150
    },
    imagePoster: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    }
});

export default styles;