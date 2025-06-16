import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import * as yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { styles } from './LoginScreenStyles';
import { defaultUser } from './../../assets/index';
import CustomInputField from '../../components/customInputField/customInputField'; // PascalCase
import CustomButton from '../../components/customButton/customButton';
import colors from '../../utils/colors';

// Define schema BEFORE useForm
const schema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup
    .string()
    .min(6, 'Min 6 characters')
    .required('Password is required'),
});

const LoginScreen = ({ navigation }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = data => {
    console.log('Form Data:', data);
  };

  return (
    <View style={styles.container}>
      {/* <View style={styles.imageContainer}>
        <Image resizeMode="contain" style={styles.image} source={defaultUser} />
      </View> */}
      <View>
        <Text style={styles.headingText}>Login</Text>
      </View>
      <View style={styles.bodyContainer}>
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, onBlur, value } }) => (
            <CustomInputField
              placeholder="Enter email"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              error={errors.email?.message}
              keyboardType="email-address"
              autoCapitalize="none"
              iconName="mail"
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, onBlur, value, onFocus } }) => (
            <CustomInputField
              placeholder="Enter password"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              error={errors.password?.message}
              secureTextEntry
              iconName="lock-closed"
              onFocus={onFocus}
            />
          )}
        />
        <View style={{ marginTop: hp(6), width: '100%' }}>
          <CustomButton
            title="Login"
            onPress={handleSubmit(onSubmit)}
            textColor={colors.white}
          />
        </View>
        <View style={styles.bottomTextContainer}>
          <TouchableOpacity>
            <Text>Forgot Password?</Text>
          </TouchableOpacity>
          <View style={styles.bottomContainer}>
            <Text>Create an account? </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('RegisterScreen');
              }}
            >
              <Text
                style={{ textDecorationLine: 'underline', fontWeight: 'bold' }}
              >
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
