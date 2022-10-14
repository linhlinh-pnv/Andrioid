import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Task = props => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <TouchableOpacity style={styles.square}></TouchableOpacity>
        <Text>{props.text}</Text>
      </View>
      <View style={styles.circle}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#FFF',
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 15,
    marginBottom: 20,
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: '#55BCF6',
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  itemLeft: {
    flexDirection: 'row',
  },
  itemText: {
    maxWidth: '80%',
  },
  circle: {
    height: 12,
    width: 14,
    backgroundColor: '#55BCF6',
    borderRadius: 5,
    borderWidth: 2,
  },
});

export default Task;
