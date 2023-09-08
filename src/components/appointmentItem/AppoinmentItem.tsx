import React, {ReactElement} from 'react';

import {View, StyleSheet, Text} from 'react-native';

import {spacing, theme, typography} from '../../theme/index';

interface AppoinmentItemProps {
  text?: string;
  date?: string;
  icon?: ReactElement;
}
const AppoinmentItem = (props: AppoinmentItemProps) => {
  const {text, date, icon} = props;
  return (
    <View style={styles.button}>
      <View style={styles.flex}>
        <View style={styles.icon}>{icon}</View>
        <Text style={[styles.text, typography.smallLabel]}>{text}</Text>
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
