import React from "react"
import {
    StyleSheet,
    Text,
    View,
    Image
} 
from "react-native";
import styles from "./styles";

class SettingsScreen extends React.Component {
    render(){
    return (
        <View style={styles.container}>
        <View style={{flex:3}}>
        <View style={{flex:1}}>
            <Text style={styles.textView}>App Settings</Text>
            </View>   
            <View>
            <Text style={styles.ktobashk}>Push Notification</Text>
            </View>  
            <View>
            <Text style={styles.ktobashk}>Change Password</Text>
            </View>  
            <View style={{flex:2}}>
            <Text style={styles.ktobashk}>Sign Out</Text>
            </View>  
        </View>
        </View>
        
    )
}
}
export default SettingsScreen;
