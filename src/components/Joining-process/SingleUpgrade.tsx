import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { theme } from '../../constants';
import ArrowDown from '../../assets/icons/ArrowDown';
import GlobalStyle from '../../constants/fonts';
import Svg, { Path } from 'react-native-svg';
const SingleUpgrade = () => {
    return (
        <View style={styles.box}>
            <Image source={require('../../assets/images/anu.png')} style={styles.image} />
            <View style={styles.heading}>
                <View style={styles.trainingText}>
                    <Text style={[styles.textIntro, GlobalStyle.Heading2]}>2 personal training</Text>
                    <Text style={[styles.subTextIntro, GlobalStyle.Heading2]}>session<Text style={{ color: theme.green }}> for $49</Text></Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 14 }}>
                        <View style={styles.tickIcon}>
                            <Svg xmlns="http://www.w3.org/2000/svg" width="12" height="9" viewBox="0 0 12 9" fill="none">
                                <Path d="M1.17188 3.6423L4.82422 7.29465L11.6072 0.511719" stroke="#82FA00" />
                            </Svg>
                        </View>
                        <Text style={[styles.access, GlobalStyle.gotham]}>24/7 access*</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 14 }}>
                        <View style={styles.tickIcon}>
                            <Svg xmlns="http://www.w3.org/2000/svg" width="12" height="9" viewBox="0 0 12 9" fill="none">
                                <Path d="M1.17188 3.6423L4.82422 7.29465L11.6072 0.511719" stroke="#82FA00" />
                            </Svg>
                        </View>
                        <Text style={[styles.access, GlobalStyle.gotham]}>24/7 access*</Text>
                    </View>
                </View>

                <ArrowDown />
            </View>
            <View style={{ marginTop: 9, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'column' }}>
                    <Text style={[GlobalStyle.gotham, { color: theme.white, textTransform: 'uppercase', letterSpacing: 1.5, fontSize: 13 }]}>$10.00/wk</Text>
                    <Text style={[GlobalStyle.gotham, { color: theme.gray, fontSize: 13 }]}>$20.00 per fortnight</Text>
                </View>
            </View>
        </View>
    );
};

export default SingleUpgrade;

const styles = StyleSheet.create({
    box: {
        paddingHorizontal: 16,
        paddingVertical: 25,
        borderWidth: 1,
        borderColor: theme.gray,
    },
    image: {
        width: '100%',
        height: 129,
        marginBottom: 20,
    },
    heading: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
    },
    trainingText: {
        color: theme.white,
    },
    textIntro: {
        color: theme.white,
    },
    subTextIntro: {
        color: theme.white,
        marginBottom: 20,
    },
    tickIcon: {
        width: 22,
        height: 22,
        borderRadius: 50,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: theme.green,
    },
    access: {
        color: theme.white,
        marginLeft: 15,
    },
})