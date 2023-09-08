import React from 'react';

import {
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import AppoinmentItem from '../../components/appointmentItem/AppoinmentItem';
import CardInfo from '../../components/cardInfo/CardInfo';
import { appointments } from '../../constants/Appointment.constant';
import { doctors } from '../../constants/Doctor.constant';
import { medications } from '../../constants/Medication.constant';
import { AppointmentCardItem } from '../../model/Appointment.model';
import { DoctorCard } from '../../model/Doctor.model';
import { MedicationCard } from '../../model/Medical.model';
import { NavigationOptions } from '../../model/Navigation.model';
import {
  spacing,
  theme,
  typography,
} from '../../theme/index';

const Home = ({ navigation }: NavigationOptions): JSX.Element => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search doctors, appointments,..."
      />
      <View style={styles.flex}>
        <Text style={[styles.boldTitle, typography.smallTitle]}>
          Upcoming appointments
        </Text>
        <Text onPress={() => navigation.navigate('appointments')} style={styles.viewAll}>View All</Text>
      </View>
      {/* Appointments */}
      {appointments.map((appointment: AppointmentCardItem, idx: number) => (
        <AppoinmentItem
          key={idx}
          date={appointment.date}
          icon={appointment.icon}
          appointmentName={appointment.appointmentName} />
      ))}
      <View style={styles.flex}>
        <Text style={[styles.boldTitle, typography.smallTitle]}>
          Current medications
        </Text>
        <Text style={styles.viewAll}>View All</Text>
      </View>
      {/* Medications */}
      <View style={styles.flexCard}>
        {medications.map((medication: MedicationCard, idx: number) => (
          <CardInfo key={idx} text={medication.medicationName} icon={<medication.icon />} />
        ))}
      </View>
      <View style={styles.flex}>
        <Text style={[styles.boldTitle, typography.smallTitle]}>
          Find your doctor
        </Text>
        <Text style={styles.viewAll}>View All</Text>
      </View>
      <View style={styles.flexCard}>
        {/* Doctors */}
        {doctors.map((doctor: DoctorCard, idx: number) => (
          <CardInfo key={idx} text={doctor.doctorName} icon={<doctor.icon />} />
        ))}
      </View>
    </View>
  );
};

export default Home;

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
