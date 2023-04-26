import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import theme from '../../constants/theme';
import GlobalSyle from '../../constants/fonts';
import ButtonNavigate from '../buttons/ButtonNavigate';
import { useNavigation } from '@react-navigation/native';
export default function SelectClub() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text style={[styles.header, GlobalSyle.Heading3]}>We’re ​excited to have you join us and we’ll see you at the gym!​</Text>
            <Text style={[styles.subHeader, GlobalSyle.Heading]}>Your home club is set to​</Text>
            <Text style={[styles.state, GlobalSyle.Heading]}>Braddon</Text>
            <Image source={require('../../assets/images/braddon.png')} style={styles.image} />
            <Text style={[styles.textConfirmed, GlobalSyle.Heading3]}>Is this correct?</Text>
            <View style={styles.buttonToAction}>
                <TouchableOpacity onPress={() => navigation.navigate('ChangeLocation')} style={styles.button}>
                    <Text style={[styles.buttonText, GlobalSyle.button]}>NO</Text>
                </TouchableOpacity>
                <ButtonNavigate isRight text="YES" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        color: theme.green,
        paddingHorizontal: 14,
        marginTop: 30,
    },
    header: {
        color: theme.gray,
        width: 222,
    },
    subHeader: {
        color: theme.white,
        fontSize: 45,
        marginTop: 27,
        width: 213,
        textTransform: 'uppercase',
    },
    state: {
        color: theme.green,
        fontSize: 45,
        textTransform: 'uppercase',
    },
    image: {
        width: 258,
        height: 163,
        marginTop: 15,
    },
    textConfirmed: {
        marginTop: 33,
        fontSize: 24,
        color: theme.green,
        textTransform: 'uppercase',
    },
    buttonToAction: {
        marginTop: 8,
        flexDirection: 'row',
    },
    button: {
        width: 155,
        height: 50,
        marginRight: 17,
        borderWidth: 1,
        borderColor: theme.white,
        backgroundColor: theme.black,
        alignItems: 'center',
        borderRadius: 4,
        justifyContent: 'center',
    },
    buttonText: {
        color: theme.white,
    },
})