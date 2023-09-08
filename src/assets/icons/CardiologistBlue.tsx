import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const CardiologistBlue = () => {
  return (
    <TouchableOpacity>
      <View style={styles.iconContainer}>
        <Svg viewBox="0 0 576 512" fill="none" style={styles.svgIcon}>
          <Path
            d="M352.4 243.8l-49.83 99.5c-6.009 12-23.41 11.62-28.92-.625L216.7 216.3l-30.05 71.75L88.55 288l176.4 182.2c12.66 13.07 33.36 13.07 46.03 0l176.4-182.2l-112.1 .0052L352.4 243.8zM495.2 62.86c-54.36-46.98-137.5-38.5-187.5 13.06L288 96.25L268.3 75.92C218.3 24.36 135.2 15.88 80.81 62.86C23.37 112.5 16.84 197.6 60.18 256h105l35.93-86.25c5.508-12.88 23.66-13.12 29.54-.375l58.21 129.4l49.07-98c5.884-11.75 22.78-11.75 28.67 0l27.67 55.25h121.5C559.2 197.6 552.6 112.5 495.2 62.86z"
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

export default CardiologistBlue;
