import { View, Text, TextInput } from 'react-native'
import React from 'react'

const Home = ({ route }) => {    
  return (
    <View style={{ flex:1 }}>
      <Text style={{ fontSize:20 }}>Hello {route.params.paramKey}!</Text>
      <Text>Your password is: {route.params.paramPass}</Text>
    </View>
  )
}

export default Home