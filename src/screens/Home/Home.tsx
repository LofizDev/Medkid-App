import React from 'react';

import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

const Home = (): JSX.Element => {

    return (
        <View>
            <Text style={styles.container}>
                Home
            </Text >
        </View>

    );
};

export default Home;

const styles = StyleSheet.create({
    container: {},
})