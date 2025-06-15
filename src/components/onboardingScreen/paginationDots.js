// components/PaginationDots.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import colors from '../../utils/colors';

export default function PaginationDots({ total, currentIndex }) {
  return (
    <View style={styles.container}>
      {Array.from({ length: total }).map((_, index) => (
        <View
          key={index}
          style={[styles.dot, currentIndex === index && styles.activeDot]}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 16,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 6,
    backgroundColor: '#ccc',
  },
  activeDot: {
    backgroundColor: colors.tertiaryColor,
    width: 12,
    height: 12,
    borderRadius: 6,
  },
});
