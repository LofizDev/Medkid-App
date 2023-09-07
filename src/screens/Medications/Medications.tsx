import React from 'react';

import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

const Medications = (): JSX.Element => {

    return (
        <View>
            <Text style={styles.container}>
                Medications
            </Text >
        </View>

    );
};

export default Medications;

const styles = StyleSheet.create({
    container: {},
})