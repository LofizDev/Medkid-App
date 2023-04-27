import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { theme } from '../../constants';
import Svg, { Path } from 'react-native-svg';

interface Iprops {
    text: string
}
const SelectBox = (props: Iprops) => {
    const { text } = props;
    const [accepted, setAccepted] = useState<boolean>(false);
    return (
        <TouchableOpacity onPress={() => setAccepted(!accepted)}>
            <View style={styles.box}>
                <Text style={styles.title}>{text}</Text>
                <TouchableOpacity onPress={() => setAccepted(!accepted)}>
                    <View style={accepted ? styles.checkboxActive : styles.checkbox}>
                        {accepted && (
                            <Svg xmlns="http://www.w3.org/2000/svg" width="12" height="9" viewBox="0 0 12 9" fill="none">
                                <Path d="M1.17188 3.6423L4.82422 7.29465L11.6072 0.511719" stroke="#111111" />
                            </Svg>
                        )}
                    </View>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );
};

export default SelectBox;

const styles = StyleSheet.create({
    box: {
        width: '100%',
        paddingVertical: 16,
        borderTopColor: theme.gray,
        borderBottomColor: theme.gray,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderRadius: 4,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title: {
        color: theme.white,
        width: 285,
    },
    checkbox: {
        width: 30,
        height: 30,
        borderRadius: 4,
        borderColor: theme.white,
        borderWidth: 1,
    },
    checkboxActive: {
        width: 30,
        height: 30,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: theme.green,
        backgroundColor: theme.green,
        borderWidth: 1,
    },
})