import {Cardiologist, Stethoscope} from '../assets/icons';
import {
  AppointmentsCalendarCard,
  AppointmentOptionsDate,
  AppointmentOptionsTime,
} from '../model/Appointment.model';

export const appointments: AppointmentsCalendarCard[] = [
  {
    appointmentName: 'General check-up',
    date: 'Aug 12',
    icon: Stethoscope,
    doctorName: 'Dr.Phil',
    status: 'Video',
  },
  {
    appointmentName: 'Cardiologist check-up',
    date: 'Aug 28',
    doctorName: 'Dr.Marla',
    status: 'Chat',
    icon: Cardiologist,
  },
];

export const appointmentOptionsDate: AppointmentOptionsDate[] = [
  {
    text: 'Aug 12',
    day: 'Fri',
  },
  {
    text: 'Aug 13',
    day: 'Sat',
  },
  {
    text: 'Aug 14',
    day: 'Sun',
  },
  {
    text: 'Aug 15',
    day: 'Mon',
  },
];

export const appointmentOptionsTime: AppointmentOptionsTime[] = [
  { text: '09:00' },
  { text: '10:00' },
  { text: '11:00' },
  { text: '12:00' },
  { text: '13:00' },
  { text: '14:00' },
  { text: '15:00' },
  { text: '15:30' },
];
