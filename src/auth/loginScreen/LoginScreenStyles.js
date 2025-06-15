import { StyleSheet } from 'react-native';
import colors from '../../utils/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    justifyContent: 'center',
    paddingTop: hp(6),
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: wp(50),
    backgroundColor: 'grey',
    marginBottom: hp(3),
  },
  headingText: {
    paddingHorizontal: hp(3),
    fontFamily: 'Lato-Regular',
    fontSize: 50,
    fontWeight: 'bold',
  },
  bodyContainer: {
    marginTop: hp(1),
    alignItems: 'center',
    paddingHorizontal: hp(3),
  },
  image: {
    height: hp(20),
    width: hp(20),
    borderRadius: hp(20),
  },
  bottomTextContainer: {
    marginTop: hp(3),
    // height: hp(20),
    // flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bottomContainer: {
    flexDirection: 'row',
  },
});
