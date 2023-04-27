import { StyleSheet, Text, View, TouchableHighlight, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { theme } from '../../constants';
import GlobalStyle from '../../constants/fonts';
import SelectBox from '../buttons/SelectBox';
import ButtonNavigate from '../buttons/ButtonNavigate';
const Health = () => {
    const [accepted, setAccepted] = useState({ list: ['yes', 'no'], active: 'yes' });
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.container}>
                <Text style={[styles.title, GlobalStyle.Heading2]}>Health check</Text>
                <Text style={{ width: '100%', height: 1, backgroundColor: theme.green }} />
                <Text style={styles.confuseText}>Do you have any injuries, disabilities or current condition?*</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 18 }}>
                    {accepted.list.map(item => (
                        <TouchableHighlight key={item} onPress={() => setAccepted({ ...accepted, active: item })}>
                            <View style={[accepted.active === item ? styles.buttonActive : styles.button, item == 'no' && { marginLeft: 20 }]}>
                                <Text style={accepted.active === item ? styles.textActive : styles.text}>{item}</Text>
                            </View>
                        </TouchableHighlight>
                    ))}
                </View>
                {accepted.active === 'yes' && (
                    <View>
                        <Text style={[styles.selectBoxText, GlobalStyle.gotham]}>Please select the relevant box below*</Text>
                        <Text style={[styles.selectBoxDesc, GlobalStyle.gotham]}>Not you must select one option, in order to prceed with this gym membership:</Text>
                        <SelectBox text={'I will seek guidance from an appropriate health or medical practitioner prior to undertaking exercise'} />
                        <SelectBox text={'I am under the supervision of a medical practitioner.'} />
                        <Text style={{ color: theme.white, marginTop: 37, marginBottom: 10 }}>Terms and conditions*</Text>
                        <SelectBox text={'I confirm I have read and accept the terms and conditions'} />
                        <SelectBox text={'I confirm I meet the requirements from the pre-exercise checklist'} />
                    </View>
                )}
                <View style={{ marginTop: 34, paddingBottom: 4, borderBottomWidth: 1, borderBottomColor: theme.green }}>
                    <Text style={[styles.title, GlobalStyle.Heading2]}>Emergency contact</Text>
                </View>
                {/* Button to actions */}
                <View style={{ marginTop: 44, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <ButtonNavigate isRight={false} />
                    <ButtonNavigate isRight={true} text="NEXT" />

                </View>
            </View >
        </ScrollView>

    )
}

export default Health

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
        color: theme.white,
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
    }
})