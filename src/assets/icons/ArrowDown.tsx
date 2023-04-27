import { View } from 'react-native';
import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ArrowDown = () => {
    return (
        <TouchableOpacity>
            <View>
                <Svg xmlns="http://www.w3.org/2000/svg" width="17" height="10" viewBox="0 0 17 10" fill="none">
                    <Path d="M1 1.25L8.25114 8.50114L15.5023 1.25" stroke="#82FA00" stroke-width="1.5" />
                </Svg>
            </View>
        </TouchableOpacity>
    );
};

export default ArrowDown;
