import React from 'react';

import {
    Image,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import ArrowRight from '../../assets/icons/ArrowRight';
import {
    spacing,
    theme,
    typography,
} from '../../theme/index';

export type DoctorInfoProps = {
    name: string;
    specialty: string,
    avatar: React.ReactElement;
}
const DoctorInfo = (props: DoctorInfoProps) => {
    const { name, specialty, avatar } = props;
    return (
        <View style={styles.doctorCard}>
            <View style={styles.info}>
                <Image source={avatar} style={styles.avatar} />
                <View>
                    <Text style={[typography.label]}>{name}</Text>
                    <Text style={[typography.text]}>{specialty}</Text>
                </View>
            </View>
            <ArrowRight />
        </View>
    );
};

export default DoctorInfo;

const styles = StyleSheet.create({
    doctorCard: {
        borderRadius: spacing.s,
        marginTop: spacing.xs,
        padding: spacing.s,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        backgroundColor: theme.white,
    },
    info: {
        flexDirection: 'row',
    },
    avatar: {
        width: 57,
        borderRadius: spacing.s,
        resizeMode: 'cover',
        marginRight: spacing.s,
        height: 57,
    },
});
