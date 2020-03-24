import React, { useState } from 'react';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import { StyleSheet, Text, View, Modal, FlatList } from 'react-native';
import ListItem from './components/ListItem';
import { uuid } from 'uuidv4';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);
  const [items, setItems] = useState([
    { id: uuid(), text: 'Milk' },
    { id: uuid(), text: 'Eggs' },
    { id: uuid(), text: 'Bread' },
    { id: uuid(), text: 'Juice' }
  ]);

  const configureNewGameHandler = () => {
    setGuessRounds(0);
    setUserNumber(null);
  };

  const startGameHandler = selectedNumber => {
    setUserNumber(selectedNumber);
    setGuessRounds(0);
  };

  const gameOverHandler = numOfRounds => {
    setGuessRounds(numOfRounds);
  };

  let content = <View></View>;

  if (userNumber && guessRounds <= 0) {
    content = (
      <Modal animationType="slide">
        <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
      </Modal>
    );
  } else if (guessRounds > 0) {
    content = (
      <Modal animationType="slide">
        <GameOverScreen
          roundsNumber={guessRounds}
          userNumber={userNumber}
          onRestart={configureNewGameHandler}
        />
      </Modal>
    );
  }

  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />
      <StartGameScreen onStartGame={startGameHandler} />
      {content}
      <FlatList
        data={items}
        renderItem={({ item }) => {
          <ListItem item={item.text} />;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
