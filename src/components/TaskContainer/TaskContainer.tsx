import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import colors from 'src/styles/colors';

const WIDTH = Dimensions.get('screen').width;

interface Props {
  tagColor: string;
  tagText: string;
  task: string;
}

export function TaskContainer({tagColor, tagText, task}: Props) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.8}>
      <View style={styles.tagContainer}>
        <Text style={[styles.tag, {backgroundColor: tagColor}]}>{tagText}</Text>
      </View>
      <View style={styles.taskContent}>
        <Text style={styles.task}>{task}</Text>
      </View>
      <Text style={styles.detailsContent}>28/03/2023</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    width: WIDTH * 0.42,
    height: WIDTH * 0.42,
    backgroundColor: '#fff',
    shadowColor: '#030303',
    shadowOpacity: 0.19,
    shadowRadius: 5.62,
    elevation: 6,
    borderRadius: 2,
    overflow: 'hidden',
  },
  tagContainer: {
    height: '20%',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  tag: {
    fontSize: 12,
    paddingVertical: '2%',
    paddingHorizontal: '5%',
    borderRadius: 2,
    color: '#fff',
  },
  taskContent: {
    flex: 1,
    justifyContent: 'center',
  },
  task: {
    color: colors.black,
  },
  detailsContent: {
    fontSize: 11,
    color: colors.grey,
  },
});
