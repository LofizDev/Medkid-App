import React from 'react';

import {
    Image,
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
} from 'react-native';

import type {
    NavigationProp,
    ParamListBase,
} from '@react-navigation/native';

import logo from '../assets/images/logo.png';
import ButtonMain from '../components/button/ButtonMain';
import {
    spacing,
    theme,
} from '../theme';

type IProps = { navigation: NavigationProp<ParamListBase>; }

const Welcome = ({ navigation }: IProps): JSX.Element => {

    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={logo} />
            <View  style={styles.intro}>
                <Text style={styles.title}>Med</Text >
                <Text style={styles.subTitle}>Kit</Text>
            </View>
            <TouchableHighlight onPress={() => navigation.navigate('home')} style={styles.button}>
                <ButtonMain text="Start" />
            </TouchableHighlight>
        </View>
    );
}

export default Welcome;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    intro: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 1,
        marginTop: spacing.xl,
    },
    title: {
        fontSize: spacing.xl,
        fontWeight: '700',
        color: theme.blackSecondary,
    },
    subTitle: {
        fontSize: spacing.xl,
        fontWeight: '300',
        color: theme.blackSecondary,
    },
    button: {
        position: 'absolute',
        bottom: spacing.md,
        width: '100%',
    },
    logo: {
        width: '100%',
        marginTop: spacing.xxl,
        height: 200,
        resizeMode: 'contain',
    },
})