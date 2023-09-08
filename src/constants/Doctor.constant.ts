import {
  CardiologistBlue,
  Dentist,
  General,
  Geneticist,
  Nurse,
  Virologist,
} from '../assets/icons';
import {DoctorCard} from '../model/Doctor.model';

export const doctors: DoctorCard[] = [
  {doctorName: 'General', icon: General},
  {doctorName: 'Dentist', icon: Dentist},
  {doctorName: 'Geneticist', icon: Geneticist},
  {doctorName: 'Nurse', icon: Nurse},
  {doctorName: 'Virologist', icon: Virologist},
  {doctorName: 'Cardiologist', icon: CardiologistBlue},
];
