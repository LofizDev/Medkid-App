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

type VideoIconProps = {
    color?: string,
    size?: number
}
const video = (props: VideoIconProps): JSX.Element => {
    const { color, size } = props;
    return (
        <TouchableOpacity>
            <View style={[styles.iconContainer,
            { width: size || spacing.s, height: size || spacing.s }]}>
                <Svg viewBox="0 0 352 512">
                    <Path
                        d="M336.2 64H47.8C21.4 64 0 85.4 0 111.8v288.4C0 426.6 21.4 448 47.8 448h288.4c26.4 0 47.8-21.4 47.8-47.8V111.8c0-26.4-21.4-47.8-47.8-47.8zm189.4 37.7L416 177.3v157.4l109.6 75.5c21.2 14.6 50.4-.3 50.4-25.8V127.5c0-25.4-29.1-40.4-50.4-25.8z"
                        fill={color || 'white'}
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

export default video;
