import { Alert } from 'react-native';

export const AlertMessage = ({ message, header }) => {
    Alert.alert(
        header,
        message,
        [
            {
                text: "OK",
                onPress: () => console.log("OK Pressed"),
            }
        ],
        {
            cancelable: false
        }
    );
}