import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList
} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = addedGoal => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { id: Math.random().toString(), value: addedGoal }
    ]);
    setIsAddMode(false);
  };

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => {
        goal.id !== goalId;
      });
    });
  };

  const cancelAddGoal = () => {
    setIsAddMode(false);
  };
  return (
    // <View style={styles.screen}>
    //   <View style={styles.inputContainterOne}>
    //     <Text>1</Text>
    //   </View>
    //   <View
    //     style={{
    //       backgroundColor: 'blue',
    //       width: 100,
    //       height: 100,
    //       justifyContent: 'center',
    //       alignItems: 'center'
    //     }}
    //   >
    //     <Text>2</Text>
    //   </View>
    //   <View
    //     style={{
    //       backgroundColor: 'green',
    //       width: 100,
    //       height: 100,
    //       justifyContent: 'center',
    //       alignItems: 'center'
    //     }}
    //   >
    //     <Text>3</Text>
    //   </View>
    // </View>
    <View style={{ padding: 50 }}>
      <Button title="Add new goal" onPress={() => setIsAddMode(true)} />
      <GoalInput
        visibleState={isAddMode}
        cancelAddGoal={cancelAddGoal}
        addGoalHandler={addGoalHandler}
      />
      <FlatList
        data={courseGoals}
        renderItem={itemData => (
          <GoalItem
            id={itemData.item.id}
            onDelete={removeGoalHandler}
            value={itemData.item.value}
          />
        )}
      />
      {/* <ScrollView>
        {courseGoals.map(goal => (
          <View key={goal} style={styles.listItem}>
            <Text>{goal}</Text>
          </View>
        ))}
      </ScrollView> */}
    </View>
  );
}

// const styles = StyleSheet.create({
// screen: {
//   padding: 50,
//   flexDirection: 'row',
//   width: '80%',
//   height: 300
// },
// inputContainterOne: {
//   backgroundColor: 'red',
//   width: 100,
//   height: 100,
//   justifyContent: 'center',
//   alignItems: 'center'
// },
// holder: {
//   flexDirection: 'row',
//   justifyContent: 'space-between',
//   alignItems: 'center'
// },
// input: {
//   borderColor: 'black',
//   borderWidth: 1,
//   padding: 10,
//   width: 200
// },
// listItem: {
//   marginVertical: 10,
//   padding: 10,
//   backgroundColor: '#ccc',
//   borderColor: 'black',
//   borderWidth: 1
// }
// });
