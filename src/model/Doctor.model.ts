export type Doctor = {
  specialty: string;
  doctorName: string;
  description: string;
  rating?: number;
  totalPatients?: number;
  avatar?: React.ReactElement | string;
};

export type TopicCard = {
  topicName: string;
  icon: () => JSX.Element;
};
