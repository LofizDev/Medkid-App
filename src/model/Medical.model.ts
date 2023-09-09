import { StyleProp, ViewStyle } from "react-native";

export type MedicationCard = {
  id: string;
  medicationName: string;
  icon: ({ style }: { style?: StyleProp<ViewStyle> }) => JSX.Element;
};
