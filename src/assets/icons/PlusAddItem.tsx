import {
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import Svg, { Path } from 'react-native-svg';

const PlusAddItem = (): JSX.Element => {
  return (<TouchableOpacity>
<View style={styles.iconContainer}>
<Svg style={styles.svgIcon} viewBox="0 0 448 512"><Path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></Path></Svg>
</View>
  </TouchableOpacity>)
}

const styles = StyleSheet.create({
  iconContainer: {
    width: 16,
    height: 16,
    overflow: 'visible', // Use 'visible' as a string
    opacity: 1,
    zIndex: 1,
  },
  svgIcon: {
    width: '100%',
    height: '100%',
    overflow: 'visible',
    opacity: 1,
    zIndex: 1,
    fill: 'rgb(115, 120, 133)',
  },
});

export default PlusAddItem;