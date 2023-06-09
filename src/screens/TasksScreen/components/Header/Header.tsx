import React from 'react';
import {View, Text, StyleSheet, ViewProps} from 'react-native';
import colors from 'src/styles/colors';

export function Header({style}: ViewProps) {
  return (
    <View style={style}>
      <Text style={styles.title}>Ola, Noel!</Text>
      <Text style={styles.message}>Essas são suas tarefas.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 19,
    fontWeight: 'bold',
    color: colors.black,
  },
  message: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.black,
  },
});
