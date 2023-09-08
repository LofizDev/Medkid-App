import React from 'react';

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { AppointmentCardItem } from '../../model/HomeScreen.model';
import {
  spacing,
  theme,
  typography,
} from '../../theme/index';

const AppoinmentItem = (props: AppointmentCardItem) => {
  const { appointmentName, date, icon } = props;
  return (
    <View style={styles.button}>
      <View style={styles.flex}>
        <View style={styles.icon}>{React.createElement(icon)}</View>
        <Text style={[styles.text, typography.smallLabel]}>{appointmentName}</Text>
      </View>
      <Text style={[styles.date, typography.smallLabel]}>{date}</Text>
    </View>
  );
};

export default AppoinmentItem;

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.white,
    padding: spacing.s,
    borderRadius: spacing.s,
    marginBottom: spacing.xs,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  flex: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    paddingRight: spacing.md,
  },
  text: {
    color: theme.black,
  },
  date: {
    color: theme.black,
    backgroundColor: theme.blueSecondary,
    paddingHorizontal: spacing.s,
    paddingVertical: spacing.xs,
    borderRadius: spacing.md,
  },
  logo: {
    width: '100%',
    marginTop: spacing.md,
    height: 20,
    resizeMode: 'contain',
  },
});
