import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

const SvgComponent = () => (
  <Svg width={22} height={22} fill="none">
    <Circle cx={11} cy={11} r={10} stroke="#82FA00" />
    <Path stroke="#82FA00" strokeWidth={1.5} d="M6 10.23 9.5 14 16 7" />
  </Svg>
);
export default React.memo(SvgComponent);
