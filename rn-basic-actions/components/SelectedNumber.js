import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const SelectedNumber = props => {
  return (
    <View style={styles.numberBox}>
      <Text>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  numberBox: {
    width: 200,
    height: 100,
    alignContent: 'center',
    alignItems: 'center',
    padding: 15,
    color: Colors.primary
  }
});

export default SelectedNumber;
