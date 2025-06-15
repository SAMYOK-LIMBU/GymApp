import React, { useState } from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import EyeIcon from 'react-native-vector-icons/Ionicons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '../../utils/colors';

const CustomInputField = ({
  value,
  onChangeText,
  onBlur,
  onFocus,
  placeholder,
  secureTextEntry,
  error,
  placeholderTextColor = colors.primaryDark,
  iconName = 'user',
}) => {
  const [focused, setFocused] = useState(false);

  const handleFocus = e => {
    setFocused(true);
    if (onFocus) onFocus(e);
  };

  const handleBlur = e => {
    setFocused(false);
    if (onBlur) onBlur(e);
  };

  return (
    <View style={[styles.container, { borderWidth: focused ? 3 : 1 }]}>
      {iconName ? (
        <Icon
          name={iconName}
          size={26}
          color={colors.primaryDark}
          style={styles.icon}
        />
      ) : null}
      <TextInput
        style={[styles.input, error && { borderColor: 'red' }, { flex: 1 }]}
        value={value}
        onChangeText={onChangeText}
        onBlur={handleBlur}
        onFocus={handleFocus}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        placeholderTextColor={placeholderTextColor}
      />
      {secureTextEntry ? (
        <EyeIcon
          name={'eye'}
          size={26}
          color={colors.primaryDark}
          style={styles.icon}
        />
      ) : (
        <View style={{ width: 26, height: 26 }} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    flexDirection: 'row',
    borderColor: colors.primaryDark,
    alignItems: 'center',
    borderRadius: wp(3),
    paddingHorizontal: 10,
    width: '100%',
    padding: wp(2),
    height: 60,
  },
  input: {
    // paddingHorizontal: 10,
    height: hp(4),
    color: colors.black,
  },
  icon: {
    marginHorizontal: 5,
  },
  errorText: {
    color: 'red',
  },
});

export default CustomInputField;
