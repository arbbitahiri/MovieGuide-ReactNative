import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import {Alert, Button} from "react-native";

export default class FavoriteScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text >Favorite Screen</Text>
                <Button
                    title="It's a dummy;!"
                    onPress={()=>Alert.alert('Simple button')}
                    />
                <StatusBar style="auto" />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#B43343',
        alignItems: 'center',
        justifyContent: 'center',
    },
});