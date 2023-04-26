import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { theme } from '../../constants';

const PrevIcon = () => {
    return (
        <TouchableOpacity>
            <View style={styles.icon}>
                <View>
                    <Svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" viewBox="0 0 14 12" fill="none">
                        <Path d="M6.61505 11.4272L1.00003 6.2133L6.61505 0.999346" stroke="#82FA00" />
                        <Path d="M1 6.00146L14 6.00146" stroke="#82FA00" />
                    </Svg>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default PrevIcon;

const styles = StyleSheet.create({

    icon: {
        borderRadius: 50,
        borderWidth: 1,
        borderColor: theme.green,
        height: 38,
        width: 38,
        alignItems: 'center',
        justifyContent: 'center',
    },

})