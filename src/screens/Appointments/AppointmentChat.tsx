import React from 'react';

import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

import { spacing } from '../../theme';

const AppointmentChat = (): JSX.Element => {

    return (
        <View style={styles.container}>
            <Text style={styles.headerBar}>
                <View>

                </View>
            </Text >
        </View>

    );
};

export default AppointmentChat;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerBar: {
        padding: spacing.s,
        marginLeft: spacing.xl,
    }
})