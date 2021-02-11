import React from 'react';
import {Animated} from 'react-native';

class FadeIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            fadeInValue: new Animated.Value(0)
        };
    }

    componentDidMount() {
        Animated.timing (
            this.state.fadeInValue, {
                toValue: 1,
                duration: 3000,
                useNativeDriver: true 
            }
        ).start();
    }

    render() {
        const {fadeInValue} = this.state;
        return (
            <>
                <Animated.View style={{opacity: fadeInValue}}>
                    {this.props.children}
                </Animated.View>
            </>
        );
    }
}

export default FadeIn;