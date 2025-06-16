import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '../../utils/colors';
import { fontSizes } from '../../utils/font';
function CustomButton({
  title = 'Button',
  textColor = colors.primaryDark,
  contentStyle,
  onPress = () => {},
}) {
  return (
    <TouchableOpacity style={[styles.button, contentStyle]} onPress={onPress}>
      <Text style={[styles.text, { color: textColor }]}>{title}</Text>
    </TouchableOpacity>
  );
}

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: colors.primaryDark,
    padding: wp(4),
    height: 60,
    borderRadius: wp(3),
  },
  text: {
    fontSize: fontSizes.body,
  },
});
