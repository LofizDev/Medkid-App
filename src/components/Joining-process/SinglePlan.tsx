import React, { useState } from 'react';
import { theme } from '../../constants';
import GlobalStyle from '../../constants/fonts';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import ArrowDown from '../../assets/icons/ArrowDown';
import Svg, { Path } from 'react-native-svg';
import ArrowUp from '../../assets/icons/ArrownUp';
const SinglePlan = (props) => {
    const { item } = props;
    const [open, setOpen] = useState<boolean>(false);
    return (
        <View style={styles.plan}>
            <View style={styles.planHeaderAction}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={[styles.planTitle, GlobalStyle.gotham]}>{item.title}</Text>
                    {item.popular && <Text style={styles.popular}>popular</Text>}
                </View>
                <TouchableOpacity onPress={() => setOpen(!open)}>
                    {!open ? <ArrowDown /> : <ArrowUp />}
                </TouchableOpacity>
            </View>
            <View style={styles.planPrice}>
                <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                    <Text style={[styles.price]}>${item.price}</Text>
                    <Text style={[styles.perWeek, GlobalStyle.Heading3]}>.90 /week</Text>
                </View>
                <TouchableOpacity>
                    <View style={styles.button}>
                        <Text style={[styles.buttonText, GlobalStyle.gotham]}>select</Text>
                    </View>
                </TouchableOpacity>
            </View>
            {/* Content */}
            {open && (
                <View style={styles.content}>
                    <View style={styles.features}>
                        {item.access.map((i, idx) => (
                            <View key={idx} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 14 }}>
                                <View style={styles.tickIcon}>
                                    <Svg xmlns="http://www.w3.org/2000/svg" width="12" height="9" viewBox="0 0 12 9" fill="none">
                                        <Path d="M1.17188 3.6423L4.82422 7.29465L11.6072 0.511719" stroke="#82FA00" />
                                    </Svg>
                                </View>
                                <Text style={[styles.access, GlobalStyle.gotham]}>{i}</Text>
                            </View>
                        ))}
                    </View>
                    <Text style={styles.subject}>*Subject to terms and conditions</Text>
                </View>
            )}
        </View>
    )
}

export default SinglePlan

const styles = StyleSheet.create({
    plans: {
        marginTop: 21,
    },
    plan: {
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        borderWidth: 1,
        paddingVertical: 16,
        borderColor: '#808080',
        paddingHorizontal: 17,
    },
    planHeaderAction: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    planTitle: {
        color: theme.white,
        textTransform: 'uppercase',
        letterSpacing: 2,
        fontSize: 11,
    },
    planPrice: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 22,
    },
    button: {
        width: 100,
        height: 40,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: theme.white,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: theme.white,
        textTransform: 'uppercase',
        fontSize: 13,
    },
    price: {
        color: theme.white,
        fontFamily: 'BebasNeue-Regular',
        fontSize: 43,
    },
    perWeek: {
        color: theme.white,
    },
    content: {
        marginTop: 27,
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
    subject: {
        marginTop: 9,
        color: theme.white,
        opacity: 0.5,
    },
    popular: {
        width: 54,
        backgroundColor: theme.green,
        height: 16,
        marginLeft: 11,
        fontSize: 7,
        fontWeight: 800,
        justifyContent: 'center',
        textAlign: 'center',
        borderRadius: 71,
        textTransform: 'uppercase',
        letterSpacing: 1.4,
        paddingTop: 3,
    }
})