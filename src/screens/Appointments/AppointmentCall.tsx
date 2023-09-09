import React from 'react';

import {
    Image,
    StyleSheet,
    View,
} from 'react-native';

import background from '../../assets/images/video-call-image.png';

const AppointmentCall = (): JSX.Element => {

    return (
        <View>
            <Image source={background} style={styles.background} />
        </View>

    );
};

export default AppointmentCall;

const styles = StyleSheet.create({
    container: {
    },
    background: {
        alignSelf: 'center',
        // resizeMode: 'cover',
        // height: 40,a
    },
})