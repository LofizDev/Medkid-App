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

export const doctors: Doctor[] = [
  {
    doctorName: 'Eva',
    description:
      'Dr. Evas main specialty is microscopic endodontics. She has been working on it since 2009 and her meticulousness and precision are the guarantee of the highest expertise in this type of treatment.',
    specialty: 'Dentist, dental hygiene',
    rating: 3,
    totalPatients: 130,
  },
  {
    doctorName: 'Lucas',
    description: 'abc',
    specialty: 'Dentist, dental hygiene',
    rating: 3,
    totalPatients: 23,
  },
  {
    doctorName: 'Matthew',
    description: 'abc',
    specialty: 'Dental hygiene',
    rating: 3,
    totalPatients: 23,
  },
  {
    doctorName: 'Greg',
    description: 'abc',
    specialty: 'Ortodontist',
    rating: 3,
    totalPatients: 23,
  },
  {
    doctorName: 'Anna',
    description: 'abc',
    specialty: 'Dentist',
    rating: 3,
    totalPatients: 100,
  },
  // ....
];
