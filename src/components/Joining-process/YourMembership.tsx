import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';
import { theme } from '../../constants';
import GlobalStyle from '../../constants/fonts';
const YourMembership = () => {
    const [scrollUp, setScrollUp] = useState<boolean>(false);
    return (
        <View style={[styles.wrapper, { height: scrollUp ? 'auto' : 75 }]} >
            <TouchableOpacity onPress={() => setScrollUp(!scrollUp)}>
                <View style={styles.container}>
                    <Text style={styles.line} />
                    <View style={styles.memberIntro}>
                        <Text style={[styles.textMembership, GlobalStyle.gotham]}>your membership</Text>
                        <Text style={[styles.textPrice, GlobalStyle.gotham]}>$24.90/w</Text>
                    </View>
                </View>
            </TouchableOpacity>
            {/* Membership Detail */}
            <View style={styles.detail}>
                <View style={styles.clubInfo}>
                    <View style={styles.changeClub}>
                        <Text style={{ color: theme.green }}>Home Club</Text>
                        <Text style={{ color: theme.gray, textDecorationLine: 'underline' }}>Edit</Text>
                    </View>
                    <Text style={styles.state}>Braddon</Text>
                </View>
                <View style={styles.plans}>
                    <View style={styles.changeClub}>
                        <Text style={{ color: theme.green, marginBottom: 17 }}>Membership Plan</Text>
                        <Text style={{ color: theme.gray, textDecorationLine: 'underline' }}>Edit</Text>
                    </View>
                    {[1, 2, 3].map((item, idx: number) => (
                        <View key={idx} style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 11, alignItems: 'center' }}>
                            <Text style={[{ color: theme.white, textTransform: 'uppercase' }, GlobalStyle.gotham]}>single club (braddon)</Text>
                            <Text style={[{ color: theme.white }, GlobalStyle.gotham]}>$13.90</Text>
                        </View>
                    ))}
                </View>
                <View style={styles.box}>
                    <Text style={styles.method}>Promo code</Text>
                    <View style={styles.input}>
                        <Text style={[GlobalStyle.gotham, { color: theme.green }]}>CL-</Text>
                        <TextInput />
                    </View>
                </View>
                <View style={styles.box}>
                    <Text style={styles.method}>Choose your start date</Text>
                    <View style={styles.input}>
                        <Text style={[GlobalStyle.gotham, { color: theme.green }]}>DD/MM/YYYY</Text>
                        <TextInput />
                    </View>
                </View>
                <View style={styles.box}>
                    <Text style={styles.method}>First direct debit</Text>
                    <View style={styles.input}>
                        <Text style={[GlobalStyle.gotham, { color: theme.green }]}>DD/MM/YYYY</Text>
                        <TextInput />
                    </View>
                </View>
                <View style={styles.plans}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={[{ color: theme.white }, GlobalStyle.gotham]}>Cost per fortnight</Text>
                        <Text style={[{ color: theme.green, fontSize: 17 }, GlobalStyle.gotham]}>$53.90</Text>
                    </View>
                </View>
                <View style={styles.plans}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={[{ color: theme.white }, GlobalStyle.gotham]}>Total due today*</Text>
                        <Text style={[{ color: theme.green, fontSize: 17 }, GlobalStyle.gotham]}>$44.90</Text>
                    </View>
                </View>
                <View>
                    <Text style={{ color: theme.gray, textDecorationLine: 'underline', textAlign: 'right', paddingRight: 14, paddingVertical: 17 }}>Membership contract</Text>
                </View>
            </View>
        </View>
    );
};

export default YourMembership;

const styles = StyleSheet.create({
    wrapper: {
        position: 'absolute',
        bottom: 0,
        backgroundColor: theme.black,
        left: 0,
        zIndex: 99,
        width: '100%',
    },
    container: {
        backgroundColor: '#292929',
        borderTopColor: theme.green,
        borderBottomColor: theme.green,
        borderTopWidth: 1,
        alignItems: 'center',
        flexDirection: 'column',
        width: '100%',
    },
    line: {
        width: 55,
        height: 3,
        backgroundColor: theme.green,
        marginTop: 16,
        marginBottom: 12,
        justifyContent: 'center',
    },
    memberIntro: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 24,
        borderBottomColor: theme.white,
        borderBottomWidth: 1,
        width: '100%',
        justifyContent: 'center',
    },
    textMembership: {
        color: theme.white,
        fontSize: 14,
        textTransform: 'uppercase',
        letterSpacing: 1.4,
    },
    textPrice: {
        color: theme.green,
        fontSize: 14,
        textTransform: 'uppercase',
        marginLeft: 4,
        letterSpacing: 1.7,
    },
    clubInfo: {
        height: 75,
        paddingHorizontal: 14,
        borderBottomColor: '#c4c4c4',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    changeClub: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    state: {
        color: theme.white,
        marginTop: 2,
        letterSpacing: 0.4,
        textTransform: 'uppercase',
    },
    plans: {
        paddingVertical: 17,
        borderBottomColor: '#c4c4c4',
        borderBottomWidth: 1,
        paddingHorizontal: 14,

    },
    box: {
        paddingVertical: 9,
        borderBottomColor: '#c4c4c4',
        borderBottomWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 14,
        justifyContent: 'space-between',
    },
    input: {
        width: 165,
        height: 39,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: theme.gray,
        padding: 8
    },
    method: {
        color: theme.white,
        letterSpacing: 0.4,
    },
})
