import React from 'react';

import {
    Image,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import { RouteProp } from '@react-navigation/native';

import Star from '../../assets/icons/Star';
import { Doctor } from '../../model/Doctor.model';
import {
    spacing,
    theme,
    typography,
} from '../../theme';

type DoctorDetailRouteParams = {
    DoctorDetail: {
        doctor: Doctor
    };
};
const DoctorDetail = ({ route }: { route: RouteProp<DoctorDetailRouteParams, 'DoctorDetail'> }): JSX.Element => {
    const { doctor } = route.params;

    return (
        <View style={styles.container}>
            <Image source={doctor.avatar} style={styles.avatar} />
            <Text style={styles.nameDoctor}>Dr. {doctor.doctorName}</Text>
            <Text style={[typography.text, styles.specialty]}>{doctor.specialty}</Text>
            <View style={styles.ratingGroup}>
                <View style={styles.rating}>
                    <Text style={typography.smallLabel}>
                        <Star /> {doctor.rating}/5
                    </Text>
                </View>
                <View style={styles.rating}>
                    <Text style={typography.smallLabel}>
                        {doctor.totalPatients} + patients
                    </Text>
                </View>
            </View>
            <View>
                <Text style={[typography.title, styles.about]}>About</Text>
                <Text style={[typography.text, styles.descriptionBox]}>{doctor.description}</Text>
            </View>
        </View>
    );
};

export default DoctorDetail;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: spacing.xxl,
    },
    name: {
        alignSelf: 'center',
    },
    avatar: {
        height: 120,
        width: 120,
        borderRadius: spacing.md,
        alignSelf: 'center',
        marginBottom: spacing.md,
        resizeMode: 'cover',
    },
    description: {
        textAlign: 'center',
        marginTop: spacing.xxs,
    },
    rating: {
        paddingHorizontal: spacing.md,
        borderRadius: spacing.md,
        backgroundColor: theme.white,
        paddingVertical: 14,
    },
    ratingGroup: {
        flexDirection: 'row',
        gap: spacing.xs,
        marginTop: spacing.s,
        alignSelf: 'center',
    },
    about: {
        alignSelf: 'flex-start',
        marginLeft: spacing.md,
        marginTop: spacing.xl,
    },
    nameDoctor: {
        alignSelf: 'center',
        fontSize: 28,
        fontWeight: '800',
    },
    specialty: {
        alignSelf: 'center',
        marginTop: spacing.xxs,
    },
    descriptionBox: {
        paddingHorizontal: spacing.md,
        marginTop: spacing.xxs,
    },
});
