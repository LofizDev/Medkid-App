import React from 'react';

import {
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import Svg, { Path } from 'react-native-svg';

const BlueTick = (): JSX.Element => {
  return (
    <TouchableOpacity>
      <View style={styles.iconContainer}>
        <Svg viewBox="0 0 24 24" fill="none" style={styles.svgIcon}>
          <Path
            d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"
            fill="white" // Specify the fill color here
          />
        </Svg>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    width: 34,
    height: 34,
    overflow: 'visible', // Use 'visible' as a string
    opacity: 1,
    zIndex: 1,
  },
  svgIcon: {
    width: '100%',
    height: '100%',
  },
});

export default BlueTick;
