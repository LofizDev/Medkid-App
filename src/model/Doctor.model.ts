export type Doctor = {
  specialty: string;
  doctorName: string;
  description: string;
  rating?: number;
  totalPatients?: number;
  // Another type here...
};

export type TopicCard = {
  topicName: string;
  icon: () => JSX.Element;
};
