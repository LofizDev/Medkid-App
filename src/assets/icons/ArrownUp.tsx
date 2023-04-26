import { View } from 'react-native';
import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ArrowUp = () => {
    return (
        <TouchableOpacity>
            <View>
                <Svg xmlns="http://www.w3.org/2000/svg" width="17" height="10" viewBox="0 0 17 10" fill="none">
                    <Path d="M15.502 9.25098L8.25081 1.99984L0.999675 9.25098" stroke="#82FA00" stroke-width="1.5" />
                </Svg>
            </View>
        </TouchableOpacity>
    );
};

export default ArrowUp;
