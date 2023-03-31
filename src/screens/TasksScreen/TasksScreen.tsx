import React from 'react';
import {StyleSheet, Dimensions, ScrollView} from 'react-native';

import {ScreenTemplate} from 'src/components/ScreenTemplate/ScreenTemplate';
import {TaskContainer} from 'src/components/TaskContainer/TaskContainer';
import {Header} from './components/Header/Header';

const WIDTH = Dimensions.get('screen').width;

export function TasksScreen() {
  return (
    <ScreenTemplate>
      <Header style={styles.header} />
      <ScrollView contentContainerStyle={styles.tasksWrapper}>
        <TaskContainer
          tagColor="#4B56D2"
          tagText="Exercicio"
          task="Malhar as superior as 7hrs "
        />
        <TaskContainer
          tagColor="#FF6464"
          tagText="Faculdade"
          task="Prova as 14hrs da tarde"
        />
        <TaskContainer
          tagColor="#77D970"
          tagText="Viagem"
          task="Viajar as 18hrs"
        />
      </ScrollView>
    </ScreenTemplate>
  );
}

const styles = StyleSheet.create({
  header: {
    marginBottom: 25,
    paddingHorizontal: WIDTH * 0.05,
    paddingVertical: 10,
  },
  tasksWrapper: {
    paddingHorizontal: WIDTH * 0.05,
    paddingVertical: 10,
    flexWrap: 'wrap',
    flexDirection: 'row',
    gap: WIDTH * 0.06,
  },
});
