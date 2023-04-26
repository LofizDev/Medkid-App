import React, {useState} from 'react';
import {
  KeyboardTypeOptions,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  TextInputProps,
} from 'react-native';
import {
  IcCheckCircle,
  IcEyeClose,
  IcEyeOpen,
  IcWarningCircle,
} from '../../assets/icons';

type Props =
  | {
      label?: string;
      placeholder?: string;
      type?: 'NORMAL' | 'PASSWORD';
      onChangeText?: (item: string) => void;
      onSubmitEditing?: (item: any) => void;
      value?: string;
      secureTextEntry?: boolean;
      onEndEditing?: (item: any) => void;
      onPress?: (item: any) => void;
      icon?: string;
      editable?: boolean;
      autoFocus?: boolean;
      autoCapitalize?:
        | 'none'
        | 'sentences'
        | 'words'
        | 'characters'
        | undefined;
      style?: any;
      styleInput?: any;
      styleLable?: any;
      keyboardType?: KeyboardTypeOptions | undefined;
      isHasError?: boolean;
      errorTitle?: string;
      onFocus?: () => void;
      onBlur?: () => void;
      maxLength?: number;
      ref?: any;
      isValid?: boolean;
      isInlineError?: boolean;
    } & TextInputProps;

const CTextInput = ({
  label,
  placeholder,
  onChangeText,
  onSubmitEditing,
  value,
  secureTextEntry = false,
  onEndEditing,
  type,
  editable,
  autoFocus,
  autoCapitalize,
  styleInput,
  keyboardType,
  styleLable,
  onFocus,
  onBlur,
  maxLength,
  isHasError,
  errorTitle,
  ref,
  isValid,
  isInlineError,
  ...rest
}: Props) => {
  const [isPasswordMode, setPasswordMode] = useState(secureTextEntry);

  const togglePw = () => {
    setPasswordMode(!isPasswordMode);
  };
  return (
    <React.Fragment>
      <Text style={[styles.labelTxt, styleLable]}>{label}</Text>
      <View style={styles.inputWrap}>
        <TextInput
          style={[styles.input, styleInput]}
          value={value}
          ref={ref}
          placeholder={placeholder}
          onChangeText={onChangeText}
          onEndEditing={onEndEditing}
          secureTextEntry={isPasswordMode}
          onSubmitEditing={onSubmitEditing}
          returnKeyType="next"
          blurOnSubmit={false}
          keyboardType={keyboardType}
          placeholderTextColor={'grey'}
          editable={editable}
          autoFocus={autoFocus}
          autoCapitalize={autoCapitalize}
          onFocus={onFocus}
          onBlur={onBlur}
          maxLength={maxLength}
          {...rest}
        />
        {type === 'PASSWORD' && (
          <TouchableOpacity onPress={togglePw} style={styles.icShowPW}>
            {isPasswordMode ? (
              <IcEyeClose width={16} height={18} />
            ) : (
              <IcEyeOpen width={16} height={14} />
            )}
          </TouchableOpacity>
        )}
        {!!isInlineError && (
          <View style={styles.row}>
            <Text style={[styles.errTxt, styles.pr_12]}>{errorTitle}</Text>
            <IcWarningCircle />
          </View>
        )}
        {!!isValid && <IcCheckCircle />}
      </View>
      {!!isHasError && (
        <Text style={[styles.errTxt, styles.mt_8]}>{errorTitle}</Text>
      )}
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  labelTxt: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'GothamBook',
  },
  inputWrap: {
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.4)',
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    color: '#82FA00',
    fontSize: 14,
    fontWeight: '400',
    flex: 1,
    fontFamily: 'GothamBook',
  },
  errTxt: {
    color: '#FF6900',
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'GothamBook',
  },
  icShowPW: {
    height: 24,
    width: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pr_12: {
    paddingRight: 12,
  },
  mt_8: {
    marginTop: 8,
  },
});
export default React.memo(CTextInput);
