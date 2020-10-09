import React, { Component, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
// import {Logo} from '../../assets/icons';

const SplashScreen = ({ navigation }: any) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('OnBoarding');
    }, 300);
  }, [navigation]);
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>Wellcome to Akad</Text>
        {/* <Logo width={120} height={120} /> */}
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F6FC',
  },
  title: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  titleText: {
    fontFamily: 'Roboto',
    fontSize: 26,
    fontWeight: 'bold',
  },
});
