import React, {useState} from 'react';

import {StyleSheet, Text, View} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {spacing, theme} from '../../theme';
import {topics, doctors} from '../../constants/Doctor.constant';
import {NavigationOptions} from '../../model/Navigation.model';
import {
  appointmentOptionsDate,
  appointmentOptionsTime,
} from '../../constants/Appointment.constant';
import ButtonMain from '../../components/button/ButtonMain';
import AppointmentOption from '../../components/appointmentItem/AppointmentOption';
import { AppointmentOptionsDate, AppointmentOptionsTime } from '../../model/Appointment.model';
import { Doctor, TopicCard } from '../../model/Doctor.model';

const AppointmentBooking = ({navigation}: NavigationOptions): JSX.Element => {
  const [isShowListTopic, setIsShowListTopic] = useState<boolean>(false);
  const [isShowListDoctor, setIsShowListDoctor] = useState<boolean>(false);
  const [selectedDoctor, setSelectedDoctor] = useState<string>(doctors[0].doctorName);
  const [selectedTopic, setSelectedTopic] = useState<string>(topics[0].topicName);

  const listTopics = topics.map((topic: TopicCard) => ({
    label: topic.topicName,
    value: topic.topicName,
  }));

  const listDoctors = doctors.map((item: Doctor) => ({
    label: 'Dr. ' + item.doctorName,
    value: item.doctorName,
  }));

  return (
    <View style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.fieldTitle}>Field</Text>
        <View style={styles.dropdownTop}>
          <DropDownPicker
            open={isShowListTopic}
            value={selectedTopic}
            items={listTopics}
            setOpen={setIsShowListTopic}
            setValue={setSelectedTopic}
          />
        </View>
        <Text style={styles.fieldTitle}>Doctor</Text>
        <View style={styles.dropdownBot}>
          <DropDownPicker
            open={isShowListDoctor}
            value={selectedDoctor}
            items={listDoctors}
            setOpen={setIsShowListDoctor}
            setValue={setSelectedDoctor}
          />
        </View>
        <Text style={styles.fieldTitle}>Appointment type</Text>
        <View style={styles.optionAppointment}>
          <AppointmentOption text="Chat" />
          <AppointmentOption text="Video" />
        </View>
        <Text style={styles.fieldTitle}>Select Date</Text>
        <View style={styles.optionAppointment}>
          {appointmentOptionsDate.map((appointment: AppointmentOptionsDate, key: number) => (
            <AppointmentOption text={appointment.text} day={appointment.day} key={key}/>
          ))}
        </View>
        <Text style={styles.fieldTitle}>Select Time</Text>
        <View style={styles.optionAppointment}>
          {appointmentOptionsTime.map((appointment: AppointmentOptionsTime, key: number) => (
            <AppointmentOption day={appointment.text} key={key}/>
          ))}
        </View>
      </View>
      <View
        onTouchStart={() => navigation.navigate('appointmentSuccess')}
        style={styles.button}>
        <ButtonMain text="Book Now" />
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
