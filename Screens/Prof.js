import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

const Prof = ({ route }) => {
  return(
    <View style={styles.container}>
    <Text style={{ fontSize:20 }}>Hello!</Text>
    <Text>Edit your profile by clicking here</Text>
    </View>
  )
}

export default Prof

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});