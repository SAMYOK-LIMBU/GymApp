import { StyleSheet } from 'react-native';
import colors from '../utils/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { fontSizes } from '../utils/font';

export const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: colors.white,
  },
  image: {
    borderRadius: wp(50),
    height: hp(50),
    width: wp(80),
  },
  text: {
    color: colors.black,
    fontSize: fontSizes.body,
    fontFamily: 'Lato-Regular',
  },
  centerItem: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: wp(50),
  },
  title: {
    fontSize: fontSizes.h3,
    fontWeight: 'bold',
  },
  lowerContainer: {
    padding: hp(4),
    alignItems: 'center',
    marginBottom: hp(8),
  },
  bottomContainer: {
    paddingHorizontal: hp(2),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
