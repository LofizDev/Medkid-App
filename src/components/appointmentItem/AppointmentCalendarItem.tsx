import React from 'react';

import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

import { AppointmentsCalendarCard } from '../../model/Appointment.model';
import {
    spacing,
    theme,
    typography,
} from '../../theme/index';

const AppointmentCalendarItem = (props: AppointmentsCalendarCard) => {
    const { appointmentName, doctorName, status, date, icon } = props;
    return (
        <View style={styles.button}>
            <View style={styles.flex}>
                <View style={styles.icon}>{React.createElement(icon)}</View>
                <View >
                    <Text style={[styles.text, typography.smallLabel]}>{appointmentName}</Text>
                    <Text>{doctorName}</Text>
                    <Text style={styles.status}>
                        {status}
                    </Text>
                </View>
            </View>
            <Text style={[styles.date, typography.smallLabel]}>{date}</Text>
        </View>
    );
};

export default AppointmentCalendarItem;

const styles = StyleSheet.create({
    button: {
        backgroundColor: theme.white,
        padding: spacing.md,
        borderRadius: spacing.s,
        marginBottom: spacing.xs,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
    },
    flex: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    icon: {
        paddingRight: spacing.s,
        marginTop: spacing.xxs,
    },
    text: {
        color: theme.black,
    },
    date: {
        color: theme.black,
        backgroundColor: theme.blueSecondary,
        paddingHorizontal: spacing.s,
        paddingVertical: spacing.xs,
        borderRadius: spacing.md,
    },
    logo: {
        width: '100%',
        marginTop: spacing.md,
        height: 20,
        resizeMode: 'contain',
    },
    status: {
        marginTop: spacing.s,
    },
});
