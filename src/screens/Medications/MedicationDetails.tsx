import { ParamListBase, RouteProp, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';

import {
    StyleSheet,
    Switch,
    Text,
    View,
} from 'react-native';
import { spacing, theme, typography } from '../../theme';
import { medications } from '../../constants/Medication.constant';
import { NavigationOptions } from '../../model/Navigation.model';
import ButtonMain from '../../components/button/ButtonMain';
import Notification from '../../assets/icons/Notification';
import CalendarIcon from '../../assets/icons/CalendarIcon';
import SwitchButton from '../../components/switch/SwitchButton';

type MedicalDetailParam = {
    params: {
        medicationId: string;
    }
}

const MedicationDetails = ({ navigation }: NavigationOptions): JSX.Element => {
    const route = useRoute<RouteProp<MedicalDetailParam>>();
    
    const medicationId = route.params?.medicationId;
    const medication = medications.find((item) => item.id === medicationId) ?? medications[0];

    

    if(!medication) return <Text>Not found medication!</Text>
    return (
        <View style={styles.container}>
            <View style={styles.medicationLogo}>
                {<medication.icon style={styles.medicationIcon}/>}
                <Text style={styles.text}>{medication.medicationName}</Text>
                <View style={styles.detailItem}>
                    <View style={styles.item}>
                        <View style={styles.flexItem}>
                        <Notification/>
                        <Text style={styles.textItem}>Everyday at 9:00</Text>
                        </View>
                        <SwitchButton/>
                    </View>
                    <View style={styles.item}>
                        <View style={styles.flexItem}>
                        <View style={styles.redDot}></View>
                        <Text style={styles.textItem}>Before meal</Text>
                        </View>
                        
                    </View>
                    <View style={{ ...styles.item, ...styles.thirdItem }}>
                        <View style={styles.flexItem}>
                            <CalendarIcon/>
                        <Text style={{ ...styles.textItem, ...styles.lastText }}>Finish course</Text>
                        </View>
                        <View style={styles.lastItem}>
                            <Text style={styles.lastTextItem}>Aug 23</Text>
                        </View>
                    </View>
                </View>
            </View >
                <ButtonMain text='Request refill' />
        </View>

    );
};

export default MedicationDetails;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingTop: 8,
        paddingBottom: 8,
        backgroundColor: theme.standardBackground,
        color: theme.black,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    medicationLogo: {
        width: '100%',
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 28,
    },
    medicationIcon: {
        width: 140,
        height: 140,
    },
    text: {
        fontSize: 30,
        fontWeight: '500',
    },
    detailItem: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: spacing.s,
    },
    item: {
        width: '100%',
        backgroundColor: theme.white,
        height: 50,
        borderRadius: spacing.s,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: spacing.s,
        paddingRight: spacing.s,
    },
    thirdItem: {
        paddingRight: spacing.xxs,
    },
    flexItem: {
        display: 'flex',
        width: '50%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: spacing.s
    },
    textItem: {
        fontWeight: '400',
        color: theme.blackSecondary
    },
    lastText: {
        fontWeight: '700',
    },
    lastItem: {
        backgroundColor: '#d9dbe0',
        height: '84%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: spacing.s,
        paddingRight: spacing.s,
        borderRadius: spacing.s,
    },
    lastTextItem: {
        fontWeight: '800',
        color: theme.blackSecondary,
    },
    redDot: {
        width: 16,
        height: 16,
        backgroundColor: theme.red,
        borderRadius: 99,
    }
})