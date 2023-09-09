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

type MedicalDetailParam = {
    params: {
        medicationId: string;
    }
}

const MedicationDetails = ({ navigation }: NavigationOptions): JSX.Element => {
    const route = useRoute<RouteProp<MedicalDetailParam>>();
    const [isEnabled, setIsEnabled] = useState<boolean>(false);
    const medicationId = route.params?.medicationId;
    const medication = medications.find((item) => item.id === medicationId) ?? medications[0];

    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    if(!medication) return <Text>Not found medication!</Text>
    return (
        <View style={styles.container}>
            <View style={styles.medicationLogo}>
                {<medication.icon style={styles.medicationIcon}/>}
                <Text style={styles.text}>{medication.medicationName}</Text>
                <View style={styles.detailItem}>
                    <View style={styles.item}>
                        <View>
                        <Text>fd</Text>
                        </View>

                    </View>
                    <View style={styles.item}>
                        <View>
                        <Text>fd</Text>
                        </View>
                        <Switch trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}/>
                    </View>
                    <View style={styles.item}>
                        <View>
                        <Text>fd</Text>
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
        padding: spacing.s,
        borderRadius: spacing.s,
    }
})