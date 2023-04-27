import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

type Props = {
  width?: number;
  height?: number;
};

function SvgComponent(props: Props) {
  const {width = 20, height = 18} = props;
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 20 18"
      preserveAspectRatio="xMinYMin slice"
      fill="none"
      {...props}>
      <Path
        d="M19.25 6.15C16.94 2.52 13.56.43 10 .43c-1.78 0-3.51.52-5.09 1.49-1.58.98-3 2.41-4.16 4.23-1 1.57-1 4.12 0 5.69 2.31 3.64 5.69 5.72 9.25 5.72 1.78 0 3.51-.52 5.09-1.49 1.58-.98 3-2.41 4.16-4.23 1-1.56 1-4.12 0-5.69zM10 13.04c-2.24 0-4.04-1.81-4.04-4.04S7.76 4.96 10 4.96 14.04 6.77 14.04 9s-1.8 4.04-4.04 4.04z"
        fill="#82FA00"
      />
    </Svg>
  );
}

export default React.memo(SvgComponent);
