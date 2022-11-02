import React from 'react';
import { Image, StyleSheet, TouchableOpacity, Text, View, Button, Alert } from 'react-native';

const default_prof_photo = { uri: "https://imgv3.fotor.com/images/blog-cover-image/10-profile-picture-ideas-to-make-you-stand-out.jpg", width: 200, height: 200};

const Prof = (props) => {
  return(
    <View style={styles.container}>
      <View style={styles.photo}>
        <Image source={ default_prof_photo }/>
      </View>
      <></>
      <Button title="Edit profile"  onPress={() => Alert.alert('This feature is not available at the moment. Check back later!')} />
{/* <TouchableOpacity activeOpacity={0.95} style={styles.button} onPress={onPress}>
      <Text style={styles.text}>Button</Text>
    </TouchableOpacity> */}
      <View>
        <Text>Settings</Text>
      </View>
    </View>
  )
}

export default Prof

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',  
    alignItems: 'center',
  },
  photo: {
    maxHeight: 400,
    maxWidth: 500,
    borderRadius: 60,
    borderWidth: 10,
    borderColor: '#fff'
  },
  button: {
    backgroundColor: '#fff',
  },
});