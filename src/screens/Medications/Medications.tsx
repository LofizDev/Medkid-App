import React from 'react';

import {
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { spacing, theme } from '../../theme';
import { medications } from '../../constants/Medication.constant';
import { MedicationCard } from '../../model/Medical.model';
import CardInfo from '../../components/cardInfo/CardInfo';
import { PlusAddItem } from '../../assets/icons';
import { NavigationOptions } from '../../model/Navigation.model';

const Medications = ({ navigation }: NavigationOptions): JSX.Element => {

    return (
        <ScrollView style={styles.container}>
            <View style={styles.flexCard}>
                {medications.map((medication: MedicationCard, idx: number) => (
                    <CardInfo onPress={() => { navigation.navigate('medicationDetails', { medicationId: medication.id }) }} key={idx} text={medication.medicationName} icon={<medication.icon />} />
                ))}
                <View style={styles.addItem}>
                    <View style={styles.itemIcon}><PlusAddItem /></View>
                </View>
            </View>
        </ScrollView>

    );
};

export default Medications;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingTop: 8,
        paddingBottom: 8,
        backgroundColor: theme.standardBackground,
        color: theme.black,
    },
    flexCard: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: spacing.xs,
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    addItem: {
        padding: spacing.s,
        paddingTop: spacing.xl,
        paddingBottom: spacing.xl,
        borderRadius: spacing.s,
        marginBottom: spacing.xs,
        display: 'flex',
        flexDirection: 'column',
        borderWidth: 1,
        borderColor: '#d9dbe0',
        alignItems: 'center',
        width: '31%',
    },
    itemIcon: {
        paddingHorizontal: spacing.xs,
        paddingVertical: spacing.xs,
    }
})