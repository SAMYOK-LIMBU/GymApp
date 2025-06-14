import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { OnboardingScreenData } from './data';

const PreloginScreen = () => {
  const renderData = ({ item }) => {
    <View>
      <Text>{item.title}</Text>
    </View>;
  };
  return (
    <View>
      <View>
        <FlatList
          data={OnboardingScreenData}
          horizontal
          renderItem={renderData}
        ></FlatList>
      </View>
      <Text>PreloginScreen</Text>
    </View>
  );
};

export default PreloginScreen;

const styles = StyleSheet.create({});
