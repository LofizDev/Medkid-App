import React, { useState, useContext } from 'react';
import { theme } from '../../constants';
import GlobalStyle from '../../constants/fonts';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, TouchableHighlight } from 'react-native';
import ArrowDown from '../../assets/icons/ArrowDown';
import SinglePlan from './SinglePlan';
import Checkbox from '../buttons/Checkbox';
import ButtonNavigate from '../buttons/ButtonNavigate';
import ArrowUp from '../../assets/icons/ArrownUp';
import SingleUpgrade from './SingleUpgrade';
import { memberships, upgrades } from '../../../mock/membership';
import { RegisterContext } from '../../context/RegisterContext';
const Membership: React.FC = () => {
    const onIndexChange = useContext(RegisterContext).onIndexChange;

    const [isShowUpgrades, setIsShowUpgrades] = useState<boolean>(false);
    const [tabs, setTabs] = useState({ list: ['weekly', 'annual', 'fixed term'], active: 'weekly' });

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.container}>
                <Text style={[styles.membershipText, GlobalStyle.Heading2]}>membership prices</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={[styles.studioName, GlobalStyle.Heading2]}>
                        <Text style={{ color: theme.white }}>For</Text> braddon
                    </Text>
                    <Text style={[GlobalStyle.gotham, styles.changeText]}>Change</Text>
                </View>
                {/* Tabs */}
                <View style={styles.tabs}>
                    {tabs.list.map((item: string, idx: number) => (
                        <TouchableOpacity onPress={() => setTabs({ ...tabs, active: item })} key={idx}>
                            <View
                                style={[styles.tab, idx === 0 && styles.tabFirst, idx === 1 &&
                                    styles.tabSecond, idx === 2 && styles.tabThird, item == tabs.active ? styles.active : null]}>
                                <Text style={[styles.tabTitle, GlobalStyle.gotham, item === tabs.active ? styles.textActive : null]}>{item}</Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
                {/* Membership Plans */}
                <View style={styles.plans}>
                    {memberships.filter(item => item.type === tabs.active).map((mem: object, idx: number) => (
                        <SinglePlan key={idx} item={mem} />
                    ))}
                </View>
                {/* Student rate */}
                <View style={styles.studenBox}>
                    <Checkbox />
                    <Text style={[styles.studentText, GlobalStyle.gotham]}>See student rates (For persons under 17 only).</Text>
                </View>
                {/* Select your Upgrades */}
                <TouchableHighlight onPress={() => setIsShowUpgrades(!isShowUpgrades)}>
                    <View style={styles.upgrades}>
                        <Text style={styles.upgradesText}>select your upgrades</Text>
                        {!isShowUpgrades ? <ArrowDown /> : <ArrowUp />}
                    </View>
                </TouchableHighlight>
                {/* Upgrated */}
                {isShowUpgrades && upgrades.map((i: object, idx: number) => (
                    <SingleUpgrade key={idx} item={i} />
                ))}
                {/* Button To Action */}
                <View style={styles.buttonToAction}>
                    <TouchableHighlight onPress={() => onIndexChange(1)}>
                        <ButtonNavigate isRight={false} text="" />
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => onIndexChange(3)}>
                        <ButtonNavigate isRight={true} text="NEXT" />
                    </TouchableHighlight>
                </View>
            </View>
        </ScrollView>
    );
};

export default Membership;

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.black,
        paddingHorizontal: 14,
        flex: 1,
        marginTop: 26,
    },
    membershipText: {
        color: theme.white,
        width: 212,
    },
    studioName: {
        color: theme.green,
    },
    changeText: {
        color: theme.white,
        opacity: 0.6,
        textTransform: 'capitalize',
        fontSize: 16,
        marginLeft: 8,
        marginTop: 8,
        textDecorationLine: 'underline',
    },
    tabs: {
        marginTop: 27,
        flexDirection: 'row',
        width: '100%',
    },
    tab: {
        minWidth: '33.33%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
    },
    active: {
        backgroundColor: theme.green,
        borderColor: theme.green,
    },
    textActive: {
        color: theme.black,
    },
    tabTitle: {
        color: theme.white,
        width: '100%',
        textTransform: 'uppercase',
        textAlign: 'center',
        fontSize: 12,
    },
    tabFirst: {
        borderTopLeftRadius: 4,
        borderBottomLeftRadius: 4,
    },
    tabSecond: {
        borderLeftWidth: 0,
        borderRightWidth: 0,
    },
    tabThird: {
        borderTopRightRadius: 4,
        borderBottomRightRadius: 4,
    },
    plans: {
        marginTop: 21,
    },
    studentText: {
        color: theme.white,
        opacity: 0.9,
        marginLeft: 12,
    },
    studenBox: {
        marginTop: 24,
        alignItems: 'center',
        flexDirection: 'row',
    },
    upgrades: {
        marginTop: 35,
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderRadius: 4,
        backgroundColor: '#1B1B1B',
        borderWidth: 1,
        borderColor: theme.white,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    upgradesText: {
        color: theme.white,
        textTransform: 'uppercase',
    },
    buttonToAction: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 34,
        paddingBottom: 120,
    },
})