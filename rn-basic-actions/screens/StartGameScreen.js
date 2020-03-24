import React, { useState } from 'react';
import Card from '../components/Card';
//import Input from '../components/Input'; not rendering
import SelectedNumber from '../components/SelectedNumber';
import Colors from '../constants/colors';
import CalendarPicker from '../components/CalendarPicker';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert
} from 'react-native';
import { TouchableOpacity } from 'react-native';

const StartGameScreen = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();

  const numberInputHandler = inputText => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ''));
  };

  const resetInputHandler = () => {
    setEnteredValue('');
  };

  const confirmInputHandler = () => {
    // batched for next render:
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        'Invalid number!',
        'Number has to be a number between 1-99.',
        [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }]
      );
      return;
    }
    setConfirmed(true);
    setEnteredValue('');
    setSelectedNumber(parseInt(enteredValue));
    Keyboard.dismiss();
  };

  let confirmedOutput;

  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.summaryContainer}>
        <Text>You entered: </Text>
        <SelectedNumber>{selectedNumber}</SelectedNumber>
        <Button
          style={styles.numberBtn}
          title="START GAME"
          onPress={() => props.onStartGame(selectedNumber)}
        />
      </Card>
    );
  }

  const updateValue = (text, field) => {
    if (field == 'name') {
      setName(text);
    } else if (field == 'email') {
      setEmail(text);
    }
  };

  const submit = () => {
    let collection = {};
    collection.name = name;
    collection.email = email;
    console.warn(collection);

    var url = 'https://appdb2781.firebaseio.com/native.json';

    fetch(url, {
      method: 'POST',
      body: JSON.stringify(collection),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
      .then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response));
  };

  return (
    // <View>
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <CalendarPicker />
        <Text style={styles.title}>Start a new game!</Text>
        <Card style={styles.inputContainer}>
          <Text>Select a Number</Text>
          {/* <Input style={styles.input} /> */}
          <TextInput
            style={styles.textInput}
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={2}
            onChangeText={numberInputHandler}
            value={enteredValue}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title="Reset"
                onPress={resetInputHandler}
                color={Colors.accent}
              />
            </View>
            <View style={styles.button}>
              <Button
                title="Confirm"
                onPress={confirmInputHandler}
                color={Colors.primary}
              />
            </View>
          </View>
        </Card>
        {confirmedOutput}
        <Card>
          <Text>Please enter your information:</Text>
          <TextInput
            placeholder="Name"
            onChangeText={text => updateValue(text, 'name')}
          />
          <TextInput
            placeholder="Email"
            onChangeText={text => updateValue(text, 'email')}
          />
          <TouchableOpacity onPress={() => submit()}>
            <Text>Submit</Text>
          </TouchableOpacity>
        </Card>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    marginVertical: 10
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15
  },
  button: {
    width: 100
  },
  input: {
    width: 50,
    textAlign: 'center'
  },
  textInput: {
    height: 30,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    marginVertical: 10,
    width: 50,
    textAlign: 'center'
  },
  summaryContainer: {
    marginTop: 20,
    alignItems: 'center'
  },
  numberBtn: {
    width: '60%',
    backgroundColor: Colors.primary,
    color: '#fff'
  },
  picker: {
    marginTop: 500
  }
});

export default StartGameScreen;
