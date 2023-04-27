import {View} from 'react-native';
import React from 'react';
import CustomTextInput from '../../components/CTextInput';

const Login = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#292929'}}>
      <CustomTextInput label={'Email address'} isValid />
    </View>
  );
};

export default Login;
