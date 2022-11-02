import { Image, View, Text, TextInput, Button, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

const LogIn = () => {
    const navigation = useNavigation();
    const [name, setName] = useState('');
    const [passw, setPassw] = useState('');
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image source={{ uri: 'https://toppng.com/uploads/preview/outline-of-missouri-missouri-11563161643ecat63yyqg.png', width: 75, height: 75 }} />
      <Text style={{ fontSize:40, color: '#00bfff' }}>MissouriMe</Text>
      <TextInput
        value={name}
        onChangeText={ (username) => setName(username) }
        placeholder={'Username'}
        style={StyleSheet.inputStyle}
        />
        <TextInput
        value={passw}
        onChangeText={ (password) => setPassw(password) }
        placeholder={'Password'}
        style={StyleSheet.inputStyle}
        />
        <Button
            title='Log In'
            mode='contained'
            onPress={() => navigation.navigate('Home', {
                paramKey: name,
                paramPass: passw
            })}
        />
        {/*<View>
        <Button
            title='Sign In'
            mode='contained'
            onPress={() => navigation.navigate('Home')}
        />
        </View>*/}
    </View>
  )
}

export default LogIn

const styles = StyleSheet.create({
    inputStyle: {
        width: '80%',
        height: 44,
        padding: 10,
        marginVertical: 10,
        backgroundColor: 'black',
    }
})