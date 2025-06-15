import { FlatList, Image, Text, View, Dimensions } from 'react-native';
import React, { useRef, useState } from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const { width } = Dimensions.get('window');

import { OnboardingScreenData } from './data';
import { styles } from './PreloginScreenStyles';
import CustomButton from './../components/customButton/customButton';
import PaginationDots from './../components/onboardingScreen/paginationDots';
import colors from '../utils/colors';

const PreloginScreen = ({ navigation }) => {
  const flatListRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleNext = () => {
    if (currentIndex < OnboardingScreenData.length - 1) {
      const nextIndex = currentIndex + 1;
      flatListRef.current.scrollToIndex({ index: nextIndex, animated: true });
      setCurrentIndex(nextIndex);
    } else {
      navigation.replace('LoginScreen');
    }
  };
  const handleSkip = () => {
    if (currentIndex < OnboardingScreenData.length - 1) {
      const lastIndex = OnboardingScreenData.length - 1;
      flatListRef.current.scrollToIndex({ index: lastIndex, animated: true });
      setCurrentIndex(lastIndex);
    }
  };
  const renderData = ({ item }) => {
    return (
      <View
        style={{
          width: width,
          justifyContent: 'space-between',
          marginTop: hp(5),
        }}
      >
        <View style={styles.centerItem}>
          <Image
            source={item.image}
            resizeMode="contain"
            style={styles.image}
          ></Image>
        </View>
        <View>
          <View style={styles.lowerContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.text}>{item.description} </Text>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.content}>
      <FlatList
        data={OnboardingScreenData}
        ref={flatListRef}
        horizontal
        renderItem={renderData}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        onMomentumScrollEnd={event => {
          const index = Math.round(event.nativeEvent.contentOffset.x / width);
          setCurrentIndex(index);
        }}
      ></FlatList>
      <View>
        <View style={styles.bottomContainer}>
          {currentIndex === OnboardingScreenData.length - 1 ? (
            <View style={{ width: wp(20) }}></View>
          ) : (
            <CustomButton
              title={'Skip'}
              contentStyle={{
                backgroundColor: 'transparent',
                width: wp(20),
              }}
              onPress={handleSkip}
            />
          )}
          <PaginationDots
            total={OnboardingScreenData.length}
            currentIndex={currentIndex}
          />
          <CustomButton
            title={'Next'}
            contentStyle={{
              backgroundColor: 'transparent',
              width: wp(20),
            }}
            onPress={handleNext}
          />
        </View>
      </View>
    </View>
  );
};

export default PreloginScreen;
