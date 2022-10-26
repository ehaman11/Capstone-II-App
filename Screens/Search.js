import React, { useState, useEffect } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

export default function Search() {
  return (
    <View style={styles.searchBar}>
      <TextInput
          placeholder='Search for a college'
          placeholderTextColor="black"
          style={{ backgroundColor: '#45b1e8', height: 50, fontSize: 20, padding: 10}}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchBar: {
    flex: 1,
    backgroundColor: '#fff',
  },
});