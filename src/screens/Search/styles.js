import {
    StyleSheet,
    Dimensions
} from "react-native";
import {
    BACKGROUND_COLOR,
    SECOND_COLOR,
    TEXT_COLOR
} from '../../constants/Colors';
import Constants from "expo-constants";

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    containerSearch: {
        flex: 1,
        backgroundColor: BACKGROUND_COLOR,
        marginTop: Constants.statusBarHeight,
        justifyContent: 'center',
        alignItems: 'center',
        width: windowWidth
        // flexDirection: 'column'
    },
    searchDesign: {
        alignItems: "flex-start",
        backgroundColor: BACKGROUND_COLOR,
        padding: 10,
        width: '100%',
        marginVertical: 10,
        borderRadius: 20
    },
    textDesignSearch: {
        color: TEXT_COLOR,
        marginTop: 8,
        marginBottom: 8,
        fontSize: 12,
        fontWeight:"bold",
        textAlign: 'center',
        alignItems: 'center',
        width: windowWidth/2
    },
    text: {
        fontSize: 15,
        color: TEXT_COLOR,
        backgroundColor: SECOND_COLOR,
        paddingHorizontal: 10,
        width: windowWidth - 20
    },
    moviesImageSearch: {
        width: 200,
        height: 270
    },
    searchFlatList: {
        flex: 1,
        width: windowWidth
    }
});

export default styles;