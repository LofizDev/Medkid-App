import {Cardiologist, Stethoscope} from '../assets/icons';
import {AppointmentsCalendarCard} from '../model/Appointment.model';

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
