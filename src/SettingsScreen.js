import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {StatusBar} from "expo-status-bar";

export default class SettingsScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text >Settings Screen</Text>
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