import React from 'react';
import {StyleSheet, View, ViewProps} from 'react-native';
import colors from 'src/styles/colors';

export function ScreenTemplate({children, style}: ViewProps) {
  return <View style={[styles.screen, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
