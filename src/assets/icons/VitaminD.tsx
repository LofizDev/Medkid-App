import React from 'react';

import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import Svg, { Path } from 'react-native-svg';

type IconProps = {
  style: StyleProp<ViewStyle>
}

const VitaminD = ({ style }: IconProps): JSX.Element => {
  return (
    <View>
      <View style={{ ...styles.iconContainer, ...(style as object) }}>
        <Svg viewBox="0 0 24 24" fill="none" style={styles.svgIcon}>
          <Path
            d="M6 3h12v2H6zm11 3H7c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-1 9h-2.5v2.5h-3V15H8v-3h2.5V9.5h3V12H16v3z"
            fill="blue" 
          />
        </Svg>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    width: 48,
    height: 48,
    overflow: 'visible', 
    opacity: 1,
    zIndex: 1,
  },
  svgIcon: {
    width: '100%',
    height: '100%',
  },
});

export default VitaminD;
