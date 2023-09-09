import React from 'react';

import {
    StyleSheet,
    TextInput,
    View,
} from 'react-native';

import {
    spacing,
    theme,
} from '../../theme';

type InputBaseProps = {
    holder: string,
    icon: () => React.ReactElement
}
export const InputBase = (props: InputBaseProps): JSX.Element => {
    const { holder, icon } = props;
    return (
        <View style={styles.input}>
            <TextInput placeholder={holder} />
            {React.createElement(icon)}
        </View>
    )
};

const styles = StyleSheet.create({
    input: {
        backgroundColor: theme.white,
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'space-between',
        borderRadius: spacing.s,
        paddingHorizontal: spacing.s,
    },
})