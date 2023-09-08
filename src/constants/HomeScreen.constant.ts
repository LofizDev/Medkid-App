import {
  Cardiologist,
  CardiologistBlue,
  Dentist,
  General,
  Geneticist,
  Nurse,
  Paracethamol,
  Stethoscope,
  Virologist,
  VitaminC,
  VitaminD,
} from '../assets/icons';
import {
  AppointmentCardItem,
  DoctorCard,
  MedicationCard,
} from '../model/HomeScreen.model';

export const appointments: AppointmentCardItem[] = [
  {appointmentName: 'General check-up', date: 'Aug 12', icon: Stethoscope},
  {
    appointmentName: 'Cardiologist check-up',
    date: 'Aug 28',
    icon: Cardiologist,
  },
];

export const medications: MedicationCard[] = [
  {medicationName: 'Paracetamol', icon: Paracethamol},
  {medicationName: 'Paracetamol', icon: VitaminC},
  {medicationName: 'Paracetamol', icon: VitaminD},
];

export const doctors: DoctorCard[] = [
  {doctorName: 'General', icon: General},
  {doctorName: 'Dentist', icon: Dentist},
  {doctorName: 'Geneticist', icon: Geneticist},
  {doctorName: 'Nurse', icon: Nurse},
  {doctorName: 'Virologist', icon: Virologist},
  {doctorName: 'Cardiologist', icon: CardiologistBlue},
];
