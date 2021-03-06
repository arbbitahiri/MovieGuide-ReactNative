import React from "react"
import {
    Text,
    View,
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
                        <Text style={styles.ktobashk}>Select Date</Text>
                    </View>  
                    <View>
                        <Text style={styles.ktobashk}>Select Time</Text>
                    </View> 
                    <View style={{flex:1}}>
                        <Text style={styles.textView}>Date and Time: </Text>
                    </View>  
                </View>
            </View>
            
        )
    }
}

export default SettingsScreen;
