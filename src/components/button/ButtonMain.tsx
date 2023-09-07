import React from 'react';

import {
    StyleSheet,
    Text,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import {
    spacing,
    theme,
    typography,
} from '../../theme/index';

interface ButtonMainProps {
    text: string,
}
const ButtonMain = (props: ButtonMainProps) => {
    const { text } = props;
    return (
        <TouchableOpacity style={styles.button}>
            <Text style={[styles.text, typography.label]}>{text}</Text>
        </TouchableOpacity>
    );
};

export default ButtonMain;

const styles = StyleSheet.create({
    button: {
        marginHorizontal: spacing.md,
        borderWidth: 1,
        backgroundColor: theme.blackSecondary,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: spacing.s,
        borderRadius: spacing.xs,
    },
    text: {
        color: theme.white,
    },
})