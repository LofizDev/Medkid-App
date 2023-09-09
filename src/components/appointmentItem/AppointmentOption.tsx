import React from 'react';

import {StyleSheet, View, Text} from 'react-native';

import {spacing, theme} from '../../theme/index';

type AppointmentOptionProps = {
  text?: string;
  day?: string;
};

const AppointmentOption = (props: AppointmentOptionProps) => {
  const {text, day} = props;
  return (
    <View style={!day ? styles.button : styles.buttonDay}>
      {day && <Text>{day}</Text>}
      {text && <Text>{text}</Text>}
    </View>
  );
};

export default AppointmentOption;

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.white,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: spacing.s,
    marginRight: spacing.xs,
    marginBottom: spacing.xs,
    borderRadius: spacing.s,
    width: '30%',
  },
  buttonDay: {
    backgroundColor: theme.white,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: spacing.sm,
    marginRight: spacing.xs,
    marginBottom: spacing.xs,
    borderRadius: spacing.s,
    width: '22.5%',
  },
  text: {
    color: theme.white,
  },
});
