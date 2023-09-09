import React from 'react';

import {
  Image,
  StyleSheet,
} from 'react-native';

import avatar from '../../assets/images/mathew.jpg';
import { spacing } from '../../theme/index';

const PersonalProfile = (): JSX.Element => {
  return (
    <Image
      style={styles.avatar}
      resizeMethod="auto"
      source={avatar}
    />
  );
};

export default PersonalProfile;

const styles = StyleSheet.create({
  avatar: {
    height: 30,
    width: 30,
    borderRadius: 50,
    margin: spacing.s,
    resizeMode: 'cover',
  },
});
