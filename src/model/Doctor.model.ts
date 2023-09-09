export type Doctor = {
  specialty: string;
  doctorName: string;
  description: string;
  // Another type here...
};

export type DoctorCard = {
  specialty: string;
  icon: () => JSX.Element;
};
