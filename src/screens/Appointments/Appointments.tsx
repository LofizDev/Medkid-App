import React from 'react';

import {
    StyleSheet,
    View,
} from 'react-native';

import AppointmentCalendarItem
    from '../../components/appointmentItem/AppointmentCalendarItem';
import { appointmentsCalendar } from '../../constants/Appointment.constant';
import { AppointmentsCalendarCard } from '../../model/Appointment.model';
import {
    spacing,
    theme,
} from '../../theme';

const Appointments = (): JSX.Element => {

    return (
        <View>
            <View style={styles.container}>
                {appointmentsCalendar.map((appointment: AppointmentsCalendarCard, idx: number) => (
                    <AppointmentCalendarItem
                        key={idx}
                        appointmentName={appointment.appointmentName}
                        doctorName={appointment.doctorName}
                        status={appointment.status}
                        date={appointment.date}
                        icon={appointment.icon}
                    />
                ))}
            </View >
        </View>

    );
};

export default Appointments;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingTop: 8,
        paddingBottom: 8,
        backgroundColor: theme.standardBackground,
        color: theme.black,
    },
    input: {
        height: 40,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: theme.white,
        marginVertical: 10,
    },
    flex: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        paddingBottom: spacing.s,
    },
    flexCard: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    boldTitle: {
        color: theme.black,
    },
    viewAll: {
        fontSize: 14,
    },
});
