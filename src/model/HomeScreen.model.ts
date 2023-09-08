export type AppointmentCardItem = {
  appointmentName: string;
  date: string;
  icon: () => JSX.Element;
};

export type MedicationCard = {
  medicationName: string;
  icon: () => JSX.Element;
};

export type DoctorCard = {
  doctorName: string;
  icon: () => JSX.Element;
};
