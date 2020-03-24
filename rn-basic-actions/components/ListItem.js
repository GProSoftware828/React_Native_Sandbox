import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const ListItem = props => {
  return (
    <TouchableOpacity style={styles.listItem}>
      <Text style={styles.listText}>{props.item}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    margin: 20,
    background: 'grey',
    borderWidth: 2,
    borderColor: 'black',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
    //cursor: pointer
  },
  listText: {
    fontSize: 'large'
  }
});

export default ListItem;
