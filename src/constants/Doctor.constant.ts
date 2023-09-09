import {
  CardiologistBlue,
  Dentist,
  General,
  Geneticist,
  Nurse,
  Virologist,
} from '../assets/icons';
import {Doctor, TopicCard} from '../model/Doctor.model';

export const topics: TopicCard[] = [
  {topicName: 'General', icon: General},
  {topicName: 'Dentist', icon: Dentist},
  {topicName: 'Geneticist', icon: Geneticist},
  {topicName: 'Nurse', icon: Nurse},
  {topicName: 'Virologist', icon: Virologist},
  {topicName: 'Cardiologist', icon: CardiologistBlue},
];

export const doctor: Doctor[] = [
  {
    doctorName: 'Minh',
    description: 'abc',
    specialty: 'b',
    rating: 3,
    totalPatients: 23,
  },
  // ....
];
