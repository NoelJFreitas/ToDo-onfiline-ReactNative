import React from 'react';
import {StatusBar} from 'react-native';
import {TasksScreen} from './screens/TasksScreen/TasksScreen';
import colors from './styles/colors';

export default function App() {
  return (
    <>
      <StatusBar backgroundColor={colors.background} barStyle="dark-content" />
      <TasksScreen />
    </>
  );
}
