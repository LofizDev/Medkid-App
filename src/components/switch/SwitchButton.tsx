import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Switch } from "react-native-gesture-handler";
import { spacing, theme } from "../../theme";

const SwitchButton = (): JSX.Element => {
  const [isEnabled, setIsEnabled] = useState<boolean>(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={styles.switch}>
      <Switch
        trackColor={{ false: '#f5f2f400', true: '#f5f2f400' }}
        thumbColor={isEnabled ? '#000000' : '#000000'}
        ios_backgroundColor="#f5f2f400"
        onValueChange={toggleSwitch}
        value={isEnabled} />
    </View>
  );
};

const styles = StyleSheet.create({
  switch: {
    width: 50,
    height: 25, borderWidth: 1,
    borderColor: theme.grey,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: spacing.s,
  }
})

export default SwitchButton;