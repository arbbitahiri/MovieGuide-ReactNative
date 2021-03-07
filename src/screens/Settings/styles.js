import {StyleSheet, Text, View} from "react-native";
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
    textView: {
        color: '#B43343',
        marginTop: 55,
        marginLeft: 5,
        marginRight: 5,
        marginBottom: 8,
        fontSize: 42,
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
    ktobashk: {
        color: '#B43343',
        fontSize: 23,
        marginTop: 30,
        marginLeft: -30,
        marginRight: 0,
        marginBottom: 19,
    },
    overlayStyle: {
        flex: 1, 
        width: '100%', 
        justifyContent: 'flex-end',  
        backgroundColor: '#00000066',
      },
      headerStyle: {
        backgroundColor: 'white', 
        borderTopLeftRadius: 10, 
        borderTopRightRadius: 10,  
        borderColor: '#CDCDCD', 
        borderBottomWidth: 1, 
        height: 50, 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        flexDirection: 'row', 
      },
     inputContainerStyle: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#CAD3DF',
        borderRadius: 5,
        marginVertical: 10,
        marginHorizontal: 10,
        paddingRight: 10,
        height: 50,
      },
      placeholderStyle: {
        fontFamily: 'Gill Sans',
        fontSize: 16,
        color: '#CDCDCD',
        marginHorizontal: 10,
      },
      textStyle: {
        fontFamily: 'Gill Sans',
        fontSize: 16,
        marginHorizontal: 10,
      }
});

export default styles;