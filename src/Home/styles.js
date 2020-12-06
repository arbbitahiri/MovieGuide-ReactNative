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
        marginTop: Constants.statusBarHeight,
    },
    textView: {
        color: '#B43343',
        marginTop: 8,
        marginLeft: 16,
        marginRight: 16,
        marginBottom: 8,
        textTransform: 'uppercase',
        fontSize: 14,
    },
    imageView: {
        width: '100%',
        height: 275
    },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5,
    },
});

export default styles;