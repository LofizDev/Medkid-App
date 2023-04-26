import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Svg, { Path } from 'react-native-svg';
import GlobalSyle from '../../constants/fonts';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { theme } from '../../constants';
interface Iprops {
    text: string,
    isRight: boolean
}
const ButtonNavigate = (props: Iprops) => {
    const { text, isRight } = props;
    return (
        <View>
            {isRight && (
                <TouchableOpacity>
                    <View style={styles.buttonGroup}>
                        <View style={styles.button}>
                            <Text style={[styles.buttonText, GlobalSyle.button]}>{text}</Text>
                        </View>
                        <View style={styles.icon}>
                            <View>
                                <Svg width="21" height="10" viewBox="0 0 21 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <Path d="M15.143 1L19.7436 5.17116L15.143 9.34232" stroke="white" stroke-width="1.2" />
                                    <Path d="M19.5042 4.97363H0.899689" stroke="white" stroke-width="1.2" />
                                </Svg>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            )}
            {!isRight && (
                <TouchableOpacity>
                    <View style={styles.buttonGroup}>
                        <View style={styles.iconLeft}>
                            <View>
                                <Svg xmlns="http://www.w3.org/2000/svg" width="23" height="12" viewBox="0 0 23 12" fill="none">
                                    <Path d="M6.77721 11L1.57055 5.78605L6.77721 0.572099" stroke="white" stroke-width="1.2" />
                                    <Path d="M1.84099 6.03418L22.8965 6.03418" stroke="white" stroke-width="1.2" />
                                </Svg>
                            </View>
                        </View>

                    </View>
                </TouchableOpacity>
            )}
        </View>
    )
}

export default ButtonNavigate

const styles = StyleSheet.create({
    buttonGroup: {
        flexDirection: 'row',
    },
    button: {
        height: 50,
        width: 105,
        borderWidth: 1,
        borderColor: theme.white,
        backgroundColor: theme.black,
        alignItems: 'center',
        borderTopLeftRadius: 4,
        borderBottomLeftRadius: 4,
        borderRightWidth: 0,
        justifyContent: 'center',
        flexDirection: 'row',
    },
    buttonText: {
        color: theme.white,
    },
    icon: {
        borderTopRightRadius: 4,
        borderBottomRightRadius: 4,
        borderWidth: 1,
        borderColor: theme.white,
        height: 50,
        width: 49,
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconLeft: {
        borderRadius: 4,
        borderWidth: 1,
        borderColor: theme.white,
        height: 50,
        width: 50,
        alignItems: 'center',
        justifyContent: 'center',
    }
})