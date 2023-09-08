export type Doctor = {
  doctorName: string;
  description: string;
  // Another type here...
};

export type DoctorCard = {
  doctorName: string;
  icon: () => JSX.Element;
};
