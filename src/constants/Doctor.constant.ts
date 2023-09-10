import {
  CardiologistBlue,
  Dentist,
  General,
  Geneticist,
  Nurse,
  Virologist,
} from '../assets/icons';
import anna from '../assets/images/anna.jpg';
import eva from '../assets/images/eva.jpg';
import greg from '../assets/images/greg.jpg';
import lucas from '../assets/images/lucas.jpg';
import matthew from '../assets/images/matthew.jpg';
import {Doctor, TopicCard} from '../model/Doctor.model';

export const topics: TopicCard[] = [
  {topicName: 'General', icon: General},
  {topicName: 'Dentist', icon: Dentist},
  {topicName: 'Geneticist', icon: Geneticist},
  {topicName: 'Nurse', icon: Nurse},
  {topicName: 'Virologist', icon: Virologist},
  {topicName: 'Cardiologist', icon: CardiologistBlue},
];

export const doctors: Doctor[] = [
  {
    avatar: eva,
    doctorName: 'Eva',
    description:
      'Dr. Evas main specialty is microscopic endodontics. She has been working on it since 2009 and her meticulousness and precision are the guarantee of the highest expertise in this type of treatment.',
    specialty: 'Dentist, dental hygiene',
    rating: 4,
    totalPatients: 130,
  },
  {
    avatar: lucas,
    doctorName: 'Lucas',
    description:
      'Ernakulam is one of the most renowned Ophthalmologists in the area.',
    specialty: 'Dentist, dental hygiene',
    rating: 3.5,
    totalPatients: 23,
  },
  {
    avatar: matthew,
    doctorName: 'Matthew',
    description:
      'Ernakulam is one of the most renowned Ophthalmologists in the area.',
    specialty: 'Dental hygiene',
    rating: 3,
    totalPatients: 223,
  },
  {
    avatar: greg,
    doctorName: 'Greg',
    description:
      'Ernakulam is one of the most renowned Ophthalmologists in the area.',
    specialty: 'Ortodontist',
    rating: 5,
    totalPatients: 123,
  },
  {
    avatar: anna,
    doctorName: 'Anna',
    description:
      'Ernakulam is one of the most renowned Ophthalmologists in the area.',
    specialty: 'Dentist',
    rating: 3,
    totalPatients: 1300,
  },
];
