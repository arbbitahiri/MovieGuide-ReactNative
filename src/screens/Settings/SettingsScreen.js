import React, {useState} from "react"
import {
    Text,
    View,
    Platform,
    Button,
    date
} 
from "react-native";
import styles from "./styles";
import DateTimePicker from '@react-native-community/datetimepicker'
import moment from "moment";
import {Overlay} from 'react-native-elements';

// const [date, setDate] = useState(new Date(1598051730000));
// const [mode, setMode] = useState('date');
// const [show, setShow] = useState(false);

class SettingsScreen extends React.Component {
    state = {
        dateString: moment(new Date()).format('YYYY-MM-DD'),
        date: this.props.date || new Date(),
        show: false
      };
    onChange = (event, selectedDate) => {
        console.log(selectedDate)
        this.setState({dateString: moment(selectedDate).format('YYYY-MM-DD'), date: selectedDate})
      }
    showOverlay = () => {
        this.setState({ show: true}) 
      }
    hideOverlay = () => {
        this.setState({ show: false}) 
      }
      render() {
        return (
          <View style={{ flex: 1, borderRadius: 100}}> 
            <TouchableOpacity onPress={this.showOverlay} style={styles.inputContainerStyle}>
              {this.state.dateString ? (
                <Text style={styles.textStyle}>{this.state.dateString}</Text>
              ) : (
                <Text style={styles.placeholderStyle}>{this.props.placeholder}</Text>
              )} 
            </TouchableOpacity>
            {Platform.OS === 'ios' ? (
              <Overlay isVisible={this.state.show} onBackdropPress={this.hideOverlay} overlayStyle={styles.overlayStyle}>
                <View style={styles.headerStyle}>
                  <TouchableOpacity onPress={this.hideOverlay}>
                    <Text style={{ paddingHorizontal: 15 }}>Cancel</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={this.hideOverlay}>
                    <Text style={{ paddingHorizontal: 15, color: 'green' }}>Done</Text>
                  </TouchableOpacity>
                </View>
                <DateTimePicker
                  value={this.state.date}
                  mode={'date'}
                  is24Hour={true}
                  display="default"
                  onChange={this.onChange}
                  style={{ backgroundColor: 'white' }}
                />
              </Overlay>
            ) : (
              <>
                {this.state.show && 
                <DateTimePicker
                  value={this.state.date}
                  mode={'date'}
                  is24Hour={true}
                  display="default"
                  onChange={this.onChange}
                  style={{ backgroundColor: 'white' }}
                />
                }
              </>
            )}
          </View>
        );
      } 
}

export default SettingsScreen;
