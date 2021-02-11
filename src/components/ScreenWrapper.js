import React from 'react';
import {
    View
} from 'react-native';
import FadeIn from './FadeIn';

const ScreenWrapper = ({children}) => {
    return (
        <FadeIn>
            <View>
                {children}
            </View>
        </FadeIn>
    );
};

export default ScreenWrapper;