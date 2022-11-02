import React, { useState, useEffect } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
//import SelectList from '@react-native-dropdown-select-list';

export default function Search() {
  const [param, setParam] = useState();
  const data = [ 
  {name: 'A T Still University of Health Sciences', year: '4-year', type: 'Private', setting: 'Town', housing: 'Campus Housing'},
  {name: 'Academy of Hair Design-Springfield', year: '2-year', type: 'Private', setting: 'City', housing: 'Not Campus'},
  {name: 'Academy of Salon Professionals', year: '2-year', type: 'Private', settting: 'Town', housing: 'Not Campus'},
  {name: 'Aesthetics Institute', year: '2-year', type: 'Private', settting: 'Suburb', housing: 'Not Campus'},
  ];
  const handlePress = (param) => {
    if (param === '4-year') {
      console.log(data.filter(obj => {
      return (obj.year === param);
    }))
    }
    if (param === '2-year') {
      console.log(data.filter(obj => {
      return (obj.year === param);
    }))
    }
    if (param === 'Private') {
      console.log(data.filter(obj => {
      return (obj.type === param);
    }))
    }
    if (param === 'Public') {
      console.log(data.filter(obj => {
      return (obj.type === param);
    }))
    }
    if (param === 'Town') {
      console.log(data.filter(obj => {
      return (obj.setting === param);
    }))
    }
    if (param === 'City') {
      console.log(data.filter(obj => {
      return (obj.setting === param);
    }))
    }
    if (param === 'Suburb') {
      console.log(data.filter(obj => {
      return (obj.setting === param);
    }))
    }
    if (param === 'Campus Housing') {
      console.log(data.filter(obj => {
      return (obj.housing === param);
    }))
    }
  }

  return (
    <View style={styles.container}>
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TextInput 
        style={styles.searchBar}
        placeholder={'Select filters'}
        placeholderTextColor={'#fff'}
      />
      <View style={styles.buttons}>
        <TouchableOpacity onPress={() => handlePress('4-year')}>
          <View style={styles.button} >
            <Text>4-year</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress('2-year')}>
          <View style={styles.button} >
            <Text>2-year</Text>
          </View>
          </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress('Public')}>
          <View style={styles.button} >
            <Text>Public</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress('Private')}>
          <View style={styles.button} >
            <Text>Private</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress('Town')}>
          <View style={styles.button} >
            <Text>Town</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress('City')}>
          <View style={styles.button} >
            <Text>City</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress('Suburb')}>
          <View style={styles.button} >
            <Text>Suburb</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress('Campus Housing')}>
          <View style={styles.button} >
            <Text>Campus Housing</Text>
          </View>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  searchBar: {
    backgroundColor: '#45b1e8',
    height: 50, 
    fontSize: 20, 
    padding: 10
  },
  buttons: {
    alignItems: 'center',
  },
  button: {
    alignSelf: 'flex-start',
    //flex: 1,
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#E5E4E2',
    borderRadius: 15,
    borderWidth: 5,
    borderColor: '#fff'
    //justifyContent: 'space-between',
    //alignItems: 'baseline',
    //marginBottom: 10,
    //textAlign: 'center',
  }
});