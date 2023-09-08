import {Doctor} from './Doctor.model';

export type AppointmentsCalendarCard = {
  date: string;
  status: string;
  appointmentName: string;
  icon: () => JSX.Element;
} & Pick<Doctor, 'doctorName'>;
