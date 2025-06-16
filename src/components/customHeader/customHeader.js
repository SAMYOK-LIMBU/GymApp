import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '../../utils/colors';
import { fontSizes } from '../../utils/font';

const CustomHeader = ({ title = '', isBack = true, onPressBack = {} }) => {
  return (
    <View style={styles.container}>
      {isBack ? (
        <TouchableOpacity onPress={onPressBack}>
          <Icon
            name={'chevron-back'}
            size={40}
            color={colors.primaryDark}
            style={styles.icon}
          />
        </TouchableOpacity>
      ) : (
        <View style={styles.iconPlaceholder} />
      )}

      <Text style={styles.title}>{title}</Text>

      <View style={styles.iconPlaceholder} />
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    height: 60,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: hp(3),
    backgroundColor: colors.white,
  },
  icon: {
    width: 40,
  },
  iconPlaceholder: {
    width: 40,
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontSize: fontSizes.h1,
    fontWeight: 'bold',
    color: colors.primaryDark,
  },
});
