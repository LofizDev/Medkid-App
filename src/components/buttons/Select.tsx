import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { theme } from '../../constants';
import Svg, { Path } from 'react-native-svg';
const Select = () => {
    const [accepted, setAccepted] = useState<boolean>(false);
    return (
        <TouchableOpacity onPress={() => setAccepted(!accepted)}>
            {!accepted && (
                <View style={styles.box}>
                    <Svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <Path d="M4.16 4.12L0 4.12L0 5.56L4.16 5.56L4.16 9.68L5.64 9.68L5.64 5.56L9.8 5.56L9.8 4.12L5.64 4.12L5.64 0L4.16 0L4.16 4.12Z" fill="white" />
                    </Svg>
                </View>
            )}
            {accepted && (
                <View style={styles.boxAccepted}>
                    <Svg xmlns="http://www.w3.org/2000/svg" width="14" height="11" viewBox="0 0 14 11" fill="none">
                        <Path d="M1 4.69231L5.2 9L13 1" stroke="black" stroke-width="1.5" />
                    </Svg>
                </View>
            )}
        </TouchableOpacity>
    );
};

export default Select;

const styles = StyleSheet.create({
    box: {
        width: 43,
        height: 32,
        borderRadius: 6,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: theme.white,
    },
    boxAccepted: {
        width: 43,
        height: 32,
        borderRadius: 6,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        backgroundColor: theme.white,
        borderColor: theme.white,
    },
})