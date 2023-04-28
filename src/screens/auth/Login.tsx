import { View } from 'react-native';
import React from 'react';
import CustomTextInput from '../../components/CTextInput';

const Login = () => {
  const [inputValue, setInputValue] = React.useState('');

  const onChangeText = (txt: string) => {
    setInputValue(txt);
  };
  return (
    <View style={{ flex: 1, backgroundColor: '#292929' }}>
      <CustomTextInput
        value={inputValue}
        onChangeText={onChangeText}
        placeholder="Email*"
        label={'Email*'}
        secureTextEntry={true}
        type="PASSWORD"
      />
    </View>
  );
};

export default Login;
