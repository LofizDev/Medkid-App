import React from 'react';

import {
    StyleSheet,
    TouchableOpacity,
    View,
} from 'react-native';
import {
    Path,
    Svg,
} from 'react-native-svg';

import { spacing } from '../../theme';

type PhoneProps = {
    color?: string,
    size?: number
}
const Phone = (props: PhoneProps): JSX.Element => {
    const { color, size } = props;
    return (
        <TouchableOpacity>
            <View style={[styles.iconContainer,
            { width: size || spacing.lg, height: size || spacing.lg }]}>
                <Svg viewBox="0 0 352 512">
                    <Path
                        d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"
                        fill={color}
                    />
                </Svg>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    iconContainer: {
        opacity: 1,
        zIndex: 1,
    },
    svgIcon: {
        width: '100%',
        height: '100%',
    },
});

export default Phone;
