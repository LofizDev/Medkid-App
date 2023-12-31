import React from 'react';

import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import logo from '../assets/images/logo.png';
import ButtonMain from '../components/button/ButtonMain';
import {NavigationOptions} from '../model/Navigation.model';
import {
  spacing,
  theme,
} from '../theme';

const Welcome = ({ navigation }: NavigationOptions): JSX.Element => {

    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={logo} />
            <View style={styles.intro}>
                <Text style={styles.title}>Med</Text >
                <Text style={styles.subTitle}>Kit</Text>
            </View>
            <View onTouchStart={() => navigation.navigate('home')} style={styles.button}>
                <ButtonMain text="Start" />
            </View>
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