import React, {useState} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const FirstScreen = () => {
  const [selectedValue, setSelectedValue] = useState('ltr');
  const values = ['ltr', 'rtl'];
  return (
    <View style={{padding: 10, flex: 1}}>
      <View style={styles.row}>
        {values.map(value => (
          <TouchableOpacity
            key={value}
            onPress={() => setSelectedValue(value)}
            style={[styles.button, selectedValue === value && styles.selected]}>
            <Text
              style={[
                styles.buttonLabel,
                selectedValue === value && styles.selectedLabel,
              ]}>
              {value}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={[styles.container, {direction: selectedValue}]}>
        <View style={{width: 50, height: 50, backgroundColor: '#EE2C38'}} />
        <View style={{width: 50, height: 50, backgroundColor: '#FAA030'}} />
        <View style={{width: 50, height: 50, backgroundColor: '#32B76C'}} />
      </View>
    </View>
  );
}
export default FirstScreen;