import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import Svg, {Path} from 'react-native-svg';

const SvgComponent = () => (
  <View style={styles.circle}>
    <Svg width={2} height={9} fill="none">
      <Path
        fill="#FF6900"
        d="m0 0 .37 6.106h1.248L2 0H0Zm.051 7.281V9h1.86V7.281H.05Z"
      />
    </Svg>
  </View>
);

const styles = StyleSheet.create({
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FF6900',
  },
});
export default React.memo(SvgComponent);
