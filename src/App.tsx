import React from 'react';
import {StatusBar} from 'react-native';
import {HomeScreen} from 'src/screens/HomeScreen/HomeScreen';
import colors from './styles/colors';

export default function App() {
  return (
    <>
      <StatusBar backgroundColor={colors.background} barStyle="dark-content" />
      <HomeScreen />
    </>
  );
}
