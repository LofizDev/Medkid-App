import { StyleSheet, Text, View, ScrollView, TouchableHighlight } from 'react-native';
import React, { useState, memo, useContext } from 'react';
import { theme } from '../../constants';
import GlobalStyle from '../../constants/fonts';
import ButtonNavigate from '../buttons/ButtonNavigate';
import CustomTextInput from '../../components/CTextInput';
import { RegisterContext } from '../../context/RegisterContext';
const Contact = () => {
    const onIndexChange = useContext(RegisterContext).onIndexChange;
    const [contactInfo, setContactInfo] = useState({ firstName: '', lastName: '', email: '', phone: '', searchYourAddress: '' });

    const handleChange = (key: string, value: string) => {
        setContactInfo({ ...contactInfo, [key]: value });
    };

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.container}>
                <Text style={[styles.title, GlobalStyle.Heading2]}>contact details</Text>
                <Text style={{ width: '100%', height: 1, backgroundColor: theme.green }} />
                {/* Card info */}
                <View style={styles.input}>
                    <CustomTextInput
                        value={contactInfo.firstName}
                        onChangeText={(value) => handleChange('firstName', value)}
                        placeholder="First name*"
                        label={'First name*'}
                        type="NORMAL"
                    />
                </View>
                <View style={styles.input}>
                    <CustomTextInput
                        value={contactInfo.lastName}
                        onChangeText={(value) => handleChange('lastName', value)}
                        placeholder="Last name*"
                        label={'Last name*'}
                        type="NORMAL"
                    />
                </View>
                <View style={styles.input}>
                    <CustomTextInput
                        value={contactInfo.email}
                        onChangeText={(value) => handleChange('email', value)}
                        placeholder="Email address*"
                        label={'Email address*'}
                        type="NORMAL"
                    />
                </View>
                <View style={styles.input}>
                    <CustomTextInput
                        value={contactInfo.phone}
                        onChangeText={(value) => handleChange('phone', value)}
                        placeholder="Phone number*"
                        label={'Phone number*'}
                        type="NORMAL"
                    />
                </View>
                <View style={styles.input}>
                    <CustomTextInput
                        value={contactInfo.searchYourAddress}
                        onChangeText={(value) => handleChange('yourAddress', value)}
                        placeholder="Search your address*"
                        label={'Search your address*'}
                        type="NORMAL"
                    />
                </View>
                {/* Payment Detail */}
                <Text style={[styles.title, GlobalStyle.Heading2, { marginTop: 45 }]}>how did you hear about us?</Text>
                <Text style={{ width: '100%', height: 1, backgroundColor: theme.green }} />
                {/* Button to actions */}
                <View style={{ marginTop: 44, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <TouchableHighlight onPress={() => onIndexChange(0)}>
                        <ButtonNavigate text="" isRight={false} />
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => onIndexChange(2)}>
                        <ButtonNavigate isRight={true} text="PAY NOW" />
                    </TouchableHighlight>

                </View>
            </View >
        </ScrollView>

    );
}

export default memo(Contact);

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 14,
        marginTop: 32,
        paddingBottom: 120,
    },
    title: {
        color: theme.green,
        textTransform: 'uppercase',
        paddingBottom: 10,
    },
    confuseText: {
        color: theme.gray,
        width: 281,
        lineHeight: 20,
        paddingTop: 16,
    },
    button: {
        width: 163,
        height: 45,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: theme.white,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonActive: {
        width: 163,
        height: 45,
        backgroundColor: theme.green,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: theme.green,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: theme.white,
        textTransform: 'uppercase',
    },
    textActive: {
        color: theme.black,
        textTransform: 'uppercase',
    },
    selectBoxText: {
        marginTop: 28,
        marginBottom: 12,
        color: theme.white
    },
    selectBoxDesc: {
        width: 265,
        marginBottom: 10,
        color: '#808080',
    },
    input: {
        marginTop: 22,
    },
    checkbox: {
        width: 30,
        height: 30,
        borderRadius: 4,
        borderColor: theme.white,
        borderWidth: 1,
    },
    checkboxActive: {
        width: 30,
        height: 30,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: theme.green,
        backgroundColor: theme.green,
        borderWidth: 1,
    },
})