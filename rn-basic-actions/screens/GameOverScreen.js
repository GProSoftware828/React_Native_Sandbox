import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import CalendarPicker from '../components/CalendarPicker';
// Same code from expo docs, not responsive:
// import UseCamera from '../components/UseCamera';

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>The Game is Over!</Text>
      <Text>Number of rounds: {props.roundsNumber}</Text>
      <Text>Number was: {props.userNumber}</Text>
      <Button title="Begin Again" onPress={props.onRestart} />
      {/* <UseCamera /> */}
      <Text>
        Please choose the dates that you plan on playing this application:{' '}
      </Text>
      <CalendarPicker />
    </View>
  );
};

GameOverScreen.defaultProps = {
  roundsNumber: "Looks like we didn't notice the rounds.",
  userNumber: "Looks like we didn't get a number from you."
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginTop: 100,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default GameOverScreen;
