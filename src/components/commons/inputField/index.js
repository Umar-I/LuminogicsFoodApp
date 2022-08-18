//import liraries
import {TextInput} from '@react-native-material/core';
import {position} from 'native-base/lib/typescript/theme/styled-system';
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// create a component
const MyComponent = ({
  placeholder,
  variant,
  color,
  icon,
  setText,
  iconSize = 25,
  Type,
  secure,
  rightIcon,
}) => {
  return (
    <View style={[styles.container, {position: 'relative'}]}>
      <TextInput
        placeholder={placeholder}
        variant={variant}
        color={color}
        leading={props => (
          <MaterialIcons name={icon} size={iconSize} solid color={color} />
        )}
        onChangeText={e => setText(e)}
        keyboardType={Type}
        secureTextEntry={secure}
      />

      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          width: 40,
          height: 50,
          position: 'absolute',
          right: 2,
          top: 2,
          backgroundColor: 'white',
        }}>
        <MaterialIcons name={rightIcon} size={iconSize} solid color={'grey'} />
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    width: 350,
  },
});

//make this component available to the app
export default MyComponent;
