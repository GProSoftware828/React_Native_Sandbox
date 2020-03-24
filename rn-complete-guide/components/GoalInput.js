import React, { useState } from 'react';
import { TextInput, View, Button, StyleSheet, Modal } from 'react-native';

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText);
  };

  return (
    <Modal visible={props.visibleState} animationType="slide">
      <View style={styles.holder}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.btnContainer}>
          <Button
            title="ADD"
            onPress={props.addGoalHandler.bind(this, enteredGoal)}
          />
          <Button title="CANCEL" color="red" onPress={props.cancelAddGoal} />
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;
//see RN docs for styling properties
const styles = StyleSheet.create({
  holder: {
    marginTop: 200,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    width: 300,
    marginBottom: 10
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%'
  }
});
