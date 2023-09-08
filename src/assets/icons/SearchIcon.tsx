import React from 'react';

import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Svg, {
    Circle,
    Line,
} from 'react-native-svg';

const SearchIcon = (): JSX.Element => {
    return (
        <TouchableOpacity>
            <View>
                <Svg xmlns="http://www.w3.org/2000/svg" width="26" height="23" viewBox="0 0 26 23" fill="none">
                    <Line x1="16.3259" y1="14.4369" x2="24.5762" y2="21.8481" stroke="#82FA00" stroke-width="1.57426" />
                    <Circle cx="10.4378" cy="10.0012" r="7.15275" transform="rotate(-72.0294 10.4378 10.0012)" stroke="#82FA00" stroke-width="1.57426" />
                </Svg>
            </View>
        </TouchableOpacity>
    );
};

export default SearchIcon;
