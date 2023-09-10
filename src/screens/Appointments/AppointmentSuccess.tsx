import React from 'react';

import {StyleSheet, View, Image, Text} from 'react-native';

import ButtonMain from '../../components/button/ButtonMain';
import {NavigationOptions} from '../../model/Navigation.model';
import {spacing, theme} from '../../theme';

import calendar from '../../assets/images/calendar.png';
import blueTick from '../../assets/icons/BlueTick';

const AppointmentSuccess = ({navigation}: NavigationOptions): JSX.Element => {
  return (
    <View style={{flex: 1}}>
      <View style={styles.container}>
        <Image source={calendar} style={styles.calendar} />
        <View style={styles.icon}>{React.createElement(blueTick)}</View>
        <Text style={styles.description}>
          {`Your booking 
is now confirmed.
          `}
        </Text>
      </View>
      <View
        onTouchStart={() => navigation.navigate('home')}
        style={styles.button}>
        <ButtonMain text="Back Home" />
      </View>
    </View>
  );
};

export default AppointmentSuccess;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 64,
    paddingBottom: 8,
    backgroundColor: theme.standardBackground,
    color: theme.black,
    display: 'flex',
    alignItems: 'center',
  },
  button: {
    position: 'absolute',
    bottom: spacing.md,
    width: '100%',
  },
  calendar: {
    width: 200,
    height: 200,
    top: 100,
  },
  icon: {
    top: 270,
    right: 70,
    width: 64,
    height: 64,
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 1,
    color: 'rgb(178, 201, 251)',
    backgroundColor: 'rgb(32, 79, 245)',
    borderRadius: spacing.xxl,
  },
  description: {
    top: spacing.xxxl,
    paddingTop: spacing.md,
    fontSize: spacing.md,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
