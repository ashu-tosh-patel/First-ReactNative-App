import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList
} from 'react-native';

import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);


  const addGoalHandler = goalTitle => {
    // console.log(enteredGoal);
    setCourseGoals(currentGoals => [...currentGoals, { key: Math.random().toString(), value: goalTitle }]);

  };

  return (
    <View style={styles.screen}>

      <GoalInput onAddGoal={addGoalHandler} />
      <FlatList data={courseGoals} renderItem={itemData => (
        <GoalItem title={itemData.item.value} />
      )}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});
