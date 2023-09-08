import React from 'react';

import {StyleSheet, View, TextInput, Text} from 'react-native';
import {spacing, theme, typography} from '../../theme/index';
import AppoinmentItem from '../../components/appointmentItem/AppoinmentItem';
import Stethoscope from '../../assets/icons/Stethoscope';
import Cardiologist from '../../assets/icons/Cardiologist';
import CardInfo from '../../components/cardInfo/CardInfo';
import Paracethamol from '../../assets/icons/Paracethamol';
import VitaminC from '../../assets/icons/VitaminC';
import VitaminD from '../../assets/icons/VitaminD';
import General from '../../assets/icons/General';
import Dentist from '../../assets/icons/Dentist';
import Geneticist from '../../assets/icons/Geneticist';
import Nurse from '../../assets/icons/Nurse';
import Virologist from '../../assets/icons/Virologist';
import CardiologistBlue from '../../assets/icons/CardiologistBlue';

const Home = (): JSX.Element => {
  const data = {
    appointment: [
      {text: 'General check-up', date: 'Aug 12', icon: Stethoscope},
      {text: 'Cardiologist check-up', date: 'Aug 28', icon: Cardiologist},
    ],
    medications: [
      {text: 'Paracetamol', icon: Paracethamol},
      {text: 'Paracetamol', icon: VitaminC},
      {text: 'Paracetamol', icon: VitaminD},
    ],
    doctors: [
      {text: 'General', icon: General},
      {text: 'Dentist', icon: Dentist},
      {text: 'Geneticist', icon: Geneticist},
      {text: 'Nurse', icon: Nurse},
      {text: 'Virologist', icon: Virologist},
      {text: 'Cardiologist', icon: CardiologistBlue},
    ],
  };

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
        <Text style={styles.viewAll}>View All</Text>
      </View>
      {data.appointment.map((item) => (
          <AppoinmentItem text={item.text} date={item.date} icon={<item.icon />} />
        ))}
      <View style={styles.flex}>
        <Text style={[styles.boldTitle, typography.smallTitle]}>
          Current medications
        </Text>
        <Text style={styles.viewAll}>View All</Text>
      </View>
      <View style={styles.flexCard}>
        {data.medications.map((item) => (
          <CardInfo text={item.text} icon={<item.icon />} />
        ))}
      </View>
      <View style={styles.flex}>
        <Text style={[styles.boldTitle, typography.smallTitle]}>
          Find your doctor
        </Text>
        <Text style={styles.viewAll}>View All</Text>
      </View>
      <View style={styles.flexCard}>
        {data.doctors.map(item => (
          <CardInfo text={item.text} icon={<item.icon />} />
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
