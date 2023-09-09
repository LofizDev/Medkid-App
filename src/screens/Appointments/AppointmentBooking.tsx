import React, {useState} from 'react';

import {StyleSheet, Text, View} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {spacing, theme} from '../../theme';
import {topics, doctor} from '../../constants/Doctor.constant';
import {NavigationOptions} from '../../model/Navigation.model';
import {
  appointmentOptionsDate,
  appointmentOptionsTime,
} from '../../constants/Appointment.constant';
import ButtonMain from '../../components/button/ButtonMain';
import AppointmentOption from '../../components/appointmentItem/AppointmentOption';

const AppointmentBooking = ({navigation}: NavigationOptions): JSX.Element => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(topics[1].topicName);
  const items = topics.map(topic => ({
    label: topic.topicName,
    value: topic.topicName,
  }));
  const [openDoctor, setOpenDoctor] = useState(false);
  const [valueDoctor, setValueDoctor] = useState(doctor[1].doctorName);
  const itemsDoctor = doctor.map(item => ({
    label: 'Dr. ' + item.doctorName,
    value: item.doctorName,
  }));

  return (
    <View style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.fieldTitle}>Field</Text>
        <View style={styles.dropdownTop}>
          <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
          />
        </View>
        <Text style={styles.fieldTitle}>Doctor</Text>
        <View style={styles.dropdownBot}>
          <DropDownPicker
            open={openDoctor}
            value={valueDoctor}
            items={itemsDoctor}
            setOpen={setOpenDoctor}
            setValue={setValueDoctor}
          />
        </View>
        <Text style={styles.fieldTitle}>Appointment type</Text>
        <View style={styles.optionAppointment}>
          <AppointmentOption text="Chat" />
          <AppointmentOption text="Video" />
        </View>
        <Text style={styles.fieldTitle}>Select Date</Text>
        <View style={styles.optionAppointment}>
          {appointmentOptionsDate.map((item, index) => (
            <AppointmentOption text={item.text} day={item.day} />
          ))}
        </View>
        <Text style={styles.fieldTitle}>Select Time</Text>
        <View style={styles.optionAppointment}>
          {appointmentOptionsTime.map((item, index) => (
            <AppointmentOption day={item.text} />
          ))}
        </View>
      </View>
      <View
        onTouchStart={() => navigation.navigate('appointmentBooking')}
        style={styles.button}>
        <ButtonMain text="Book new appointment" />
      </View>
    </View>
  );
};

export default AppointmentBooking;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 8,
    backgroundColor: theme.standardBackground,
    color: theme.black,
  },
  fieldTitle: {
    paddingBottom: spacing.xs,
    paddingTop: spacing.md,
  },
  optionAppointment: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    flexWrap: 'wrap',
  },
  dropdownTop: {
    zIndex: 999,
  },
  dropdownBot: {
    zIndex: 900,
  },
  button: {
    position: 'absolute',
    bottom: spacing.md,
    width: '100%',
  },
});
