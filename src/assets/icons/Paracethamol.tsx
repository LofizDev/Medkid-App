import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const Paracethamol = () => {
  return (
    <TouchableOpacity>
      <View style={styles.iconContainer}>
        <Svg viewBox="0 0 640 512" fill="none" style={styles.svgIcon}>
          <Path
            d="M159.1 191.1c-81.1 0-147.5 58.51-159.9 134.8C-.7578 331.5 3.367 336 8.365 336h303.3c4.998 0 8.996-4.5 8.248-9.25C307.4 250.5 241.1 191.1 159.1 191.1zM311.5 368H8.365c-4.998 0-9.123 4.5-8.248 9.25C12.49 453.5 78.88 512 159.1 512s147.4-58.5 159.8-134.8C320.7 372.5 316.5 368 311.5 368zM362.9 65.74c-3.502-3.502-9.504-3.252-12.25 .75c-45.52 62.76-40.52 150.4 15.88 206.9c56.52 56.51 144.2 61.39 206.1 15.88c4.002-2.875 4.252-8.877 .75-12.25L362.9 65.74zM593.4 46.61c-56.52-56.51-144.2-61.39-206.1-16c-4.002 2.877-4.252 8.877-.75 12.25l211.3 211.4c3.5 3.502 9.504 3.252 12.25-.75C654.8 190.8 649.9 103.1 593.4 46.61z"
            fill="blue" // Specify the fill color here
          />
        </Svg>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    width: 48,
    height: 48,
    overflow: 'visible', // Use 'visible' as a string
    opacity: 1,
    zIndex: 1,
  },
  svgIcon: {
    width: '100%',
    height: '100%',
  },
});

export default Paracethamol;
