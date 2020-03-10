/**
 * Phan Thanh Hoàng
 * https://github.com/phanhoangdl/reactnative.git
 *
 * @format
 * @flow
 */

import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar,} from 'react-native';
import AvatarComponent from './src/components/AvatarComponent';
import SearchResultComponent from './src/components/SearchResultComponent';
import AppChatComponent from './src/components/AppChatComponent';

const App = () => {
  return (
    // <AvatarComponent img={require('./src/img/avenger/captain.jpg')}/>
    <AppChatComponent />
  );
};

export default App;
