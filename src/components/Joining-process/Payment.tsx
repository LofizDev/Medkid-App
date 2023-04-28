import { StyleSheet, Text, View, TouchableHighlight, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { theme } from '../../constants';
import GlobalStyle from '../../constants/fonts';
import Svg, { Path } from 'react-native-svg';
import ButtonNavigate from '../buttons/ButtonNavigate';
import CustomTextInput from '../../components/CTextInput';
const Payment = () => {
    const [isSameCardAbove, setIsSaveCardAbove] = useState<boolean>(false);
    const [accepted, setAccepted] = useState({ list: ['card', 'bank account'], active: 'card' });

    const [card, setCard] = useState({ cardNumber: '', nameOnCard: '', expiryDate: '', cvv: '' });
    const [bank, setBank] = useState({ nameOfAccount: '', bankName: '', bsb: '' });


    const handleChange = (key, value) => { setContact(prevState => ({ ...prevState, [key]: value })); }
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.container}>
                <Text style={[styles.title, GlobalStyle.Heading2]}>today's payment</Text>
                <Text style={{ width: '100%', height: 1, backgroundColor: theme.green }} />
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 18 }}>
                    <Text style={[{ color: theme.green }, GlobalStyle.gotham]}>Total due today</Text>
                    <Text style={[{ color: theme.green }, GlobalStyle.gotham]}>$44.00</Text>
                </View>
                {/* Card info */}
                <View style={styles.input}>
                    <CustomTextInput
                        value={card.cardNumber}
                        onChangeText={(value) => handleChange('cardNumber', value)}
                        placeholder="Card number*"
                        label={'Card number*'}
                        type="NORMAL"
                    />
                </View>
                <View style={styles.input}>
                    <CustomTextInput
                        value={card.nameOnCard}
                        onChangeText={(value) => handleChange('nameOnCard', value)}
                        placeholder="Name on Card*"
                        label={'Name on Card*'}
                        type="NORMAL"
                    />
                </View>
                <View style={styles.input}>
                    <CustomTextInput
                        value={card.expiryDate}
                        onChangeText={(value) => handleChange('expiryDate', value)}
                        placeholder="Expiry Date*"
                        label={'Expiry Date*'}
                        type="NORMAL"
                    />
                </View>
                <View style={styles.input}>
                    <CustomTextInput
                        value={card.cvv}
                        onChangeText={(value) => handleChange('cvv', value)}
                        placeholder="CVV*"
                        label={'CVV*'}
                        type="NORMAL"
                    />
                </View>
                {/* Payment Detail */}
                <Text style={[styles.title, GlobalStyle.Heading2, { marginTop: 45 }]}>ongoing payment details</Text>
                <Text style={{ width: '100%', height: 1, backgroundColor: theme.green }} />
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 18 }}>
                    <Text style={[{ color: theme.green }, GlobalStyle.gotham]}>Direct debit (fortnightly)</Text>
                    <Text style={[{ color: theme.green }, GlobalStyle.gotham]}>$53.00</Text>
                </View>
                <Text style={styles.confuseText}>Select your payment method:</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 18 }}>
                    {accepted.list.map(item => (
                        <TouchableHighlight key={item} onPress={() => setAccepted({ ...accepted, active: item })}>
                            <View style={[accepted.active === item ? styles.buttonActive : styles.button, item === 'bank account' && { marginLeft: 20 }]}>
                                <Text style={accepted.active === item ? styles.textActive : styles.text}>{item}</Text>
                            </View>
                        </TouchableHighlight>
                    ))}
                </View>
                {/* Acceptd with the prev Card */}
                {accepted.active == 'card' && (
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 25 }}>
                        <TouchableOpacity onPress={() => setIsSaveCardAbove(!isSameCardAbove)}>
                            <View style={isSameCardAbove ? styles.checkboxActive : styles.checkbox}>
                                {isSameCardAbove && (
                                    <Svg xmlns="http://www.w3.org/2000/svg" width="12" height="9" viewBox="0 0 12 9" fill="none">
                                        <Path d="M1.17188 3.6423L4.82422 7.29465L11.6072 0.511719" stroke="#111111" />
                                    </Svg>
                                )}
                            </View>
                        </TouchableOpacity>
                        <Text style={{ color: theme.white, opacity: 0.8, marginLeft: 15 }}>Same card as above</Text>
                    </View>
                )}
                {/* Card */}
                {accepted.active === 'card' && !isSameCardAbove && (
                    <View>
                        <View style={styles.input}>
                            <CustomTextInput
                                value={card.cardNumber}
                                onChangeText={(value) => handleChange('cardNumber', value)}
                                placeholder="Card number*"
                                label={'Card number*'}
                                type="NORMAL"
                            />
                        </View>
                        <View style={styles.input}>
                            <CustomTextInput
                                value={card.nameOnCard}
                                onChangeText={(value) => handleChange('nameOnCard', value)}
                                placeholder="Name on Card*"
                                label={'Name on Card*'}
                                type="NORMAL"
                            />
                        </View>
                        <View style={styles.input}>
                            <CustomTextInput
                                value={card.expiryDate}
                                onChangeText={(value) => handleChange('expiryDate', value)}
                                placeholder="Expiry Date*"
                                label={'Expiry Date*'}
                                type="NORMAL"
                            />
                        </View>
                        <View style={styles.input}>
                            <CustomTextInput
                                value={card.cvv}
                                onChangeText={(value) => handleChange('cvv', value)}
                                placeholder="CVV*"
                                label={'CVV*'}
                                type="NORMAL"
                            />
                        </View>
                    </View>
                )}
                {/* Bank Account */}
                {accepted.active !== 'card' && (
                    <View>
                        <View style={styles.input}>
                            <CustomTextInput
                                value={bank.nameOfAccount}
                                onChangeText={(value) => handleChange('nameOfAccount', value)}
                                placeholder="Name of account holder*"
                                label={'Name of account holder*'}
                                type="NORMAL"
                            />
                        </View>
                        <View style={styles.input}>
                            <CustomTextInput
                                value={bank.bankName}
                                onChangeText={(value) => handleChange('bankName', value)}
                                placeholder="Bank*"
                                label={'Bank*'}
                                type="NORMAL"
                            />
                        </View>
                        <View style={styles.input}>
                            <CustomTextInput
                                value={bank.bsb}
                                onChangeText={(value) => handleChange('bsb', value)}
                                placeholder="BSB*"
                                label={'BSB*'}
                                type="NORMAL"
                            />
                        </View>
                    </View>
                )}

                {/* Button to actions */}
                <View style={{ marginTop: 44, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <ButtonNavigate isRight={false} />
                    <ButtonNavigate isRight={true} text="PAY NOW" />

                </View>
            </View >
        </ScrollView>

    )
}

export default Payment;

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