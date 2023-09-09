import React, { ReactElement } from 'react';

import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {
  spacing,
  theme,
  typography,
} from '../../theme/index';

export type CardInfoProps = {
  text: string;
  icon: ReactElement;
  onPress?: (e: GestureResponderEvent) => void;
}
const CardInfo = (props: CardInfoProps) => {
  const { text, icon } = props;
  return (
    <TouchableOpacity onPress={(e: GestureResponderEvent) => props.onPress && props.onPress(e)} style={styles.button}>
      <View style={styles.icon}>{icon}</View>
      <Text style={[styles.text, typography.smallText]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CardInfo;

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.white,
    padding: spacing.s,
    borderRadius: spacing.s,
    marginBottom: spacing.xs,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: `31%`,
  },
  icon: {
    paddingHorizontal: spacing.xs,
    paddingVertical: spacing.xs,
  },
  text: {
    color: theme.black,
  },
});
