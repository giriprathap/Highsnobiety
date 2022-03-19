/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
} from 'react-native';

import Feed from './src/screens/Feed';




const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';


  return (
    <SafeAreaView style={{flex:1}}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Feed/>
    </SafeAreaView>
  );
};


export default App;
