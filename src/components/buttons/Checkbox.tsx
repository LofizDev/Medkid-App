import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { theme } from '../../constants';
import Svg, { Path } from 'react-native-svg';
const Checkbox = () => {
    const [accepted, setAccepted] = useState<boolean>(false);
    return (
        <TouchableOpacity onPress={() => setAccepted(!accepted)}>
            <View style={styles.box}>
                {accepted && (
                    <Svg xmlns="http://www.w3.org/2000/svg" width="12" height="9" viewBox="0 0 12 9" fill="none">
                        <Path d="M1.17188 3.6423L4.82422 7.29465L11.6072 0.511719" stroke="#82FA00" />
                    </Svg>
                )}
            </View>
        </TouchableOpacity>
    );
};

export default Checkbox;

const styles = StyleSheet.create({
    box: {
        width: 27,
        height: 27,
        borderRadius: 4,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: theme.gray,
    },
})