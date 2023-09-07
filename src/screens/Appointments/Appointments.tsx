import React from 'react';

import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

const Appointments = (): JSX.Element => {

    return (
        <View>
            <Text style={styles.container}>
                Appointments
            </Text >
        </View>

    );
};

export default Appointments;

const styles = StyleSheet.create({
    container: {},
})