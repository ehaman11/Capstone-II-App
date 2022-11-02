import React, { useState, useEffect } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
//import SelectList from '@react-native-dropdown-select-list';

export default function Search() {
  const [twoYearFilter, setTwoYearFilter] = useState(null);
  const [fourYearFilter, setFourYearFilter] = useState(null);
  const [privateFilter, setPrivateFilter] = useState(null);
  const [publicFilter, setPublicFilter] = useState(null);
  const [filteredSchools, setFilteredSchools] = useState(data);
  const data = [ 
  {name: 'A T Still University of Health Sciences', year: '4-year', type: 'Private', setting: 'Town'},
  {name: 'Academy of Hair Design-Springfield', year: '2-year', type: 'Private', setting: 'City'},
  {name: 'Academy of Salon Professionals', year: '2-year', type: 'Private', settting: 'Town'},
  {name: 'Aesthetics Institute', year: '2-year', type: 'Private', settting: 'Suburb'},
  ];

  const twoYearSchools = data.map((value) => {
    if (value.type === '2-year'){
      return value;
    }
  });

  const fourYearSchools = data.map((value) => {
    if (value.type === '4-year'){
      return value;
    }
  });
  
  const privateSchools = data.map((value) => {
    if (value.type === 'private'){
      return value;
    }
  });

  const publicSchools = data.map((value) => {
    if (value.type === 'public'){
      return value;
    }
  });

  const handlePress = (param) => {
    console.log(param);
    console.log(data.filter(obj => {
      return (obj.year === param);
    }))
  console.log(data.filter(obj => {
      return (obj.pop === param);
    }))
 
  }

  return (
    <View>
      <TouchableOpacity onChange={(event) => {
        setFourYearFilter(e.target.value);
        }} onPress={() => console.log('pressed')}/>
        <View>
          <Text>4-year</Text>
        </View>
      <TouchableOpacity/>
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