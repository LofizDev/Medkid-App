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
  {specialty: 'General', icon: General},
  {specialty: 'Dentist', icon: Dentist},
  {specialty: 'Geneticist', icon: Geneticist},
  {specialty: 'Nurse', icon: Nurse},
  {specialty: 'Virologist', icon: Virologist},
  {specialty: 'Cardiologist', icon: CardiologistBlue},
];
