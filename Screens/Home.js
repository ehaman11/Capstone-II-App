import React, { useRef, useEffect } from 'react';
import { Animated, Button, Image, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const FadeIn = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 5000,
        useNativeDriver: true
      }
    ).start();
  }, [fadeAnim])

  return (
    <Animated.View                
      style={{
        ...props.style,
        opacity: fadeAnim,       
      }}
    >
      {props.children}
    </Animated.View>
  );
}

const Home = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', bottom: 50 }}>
      <FadeIn>
        {/*<Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Fading in</Text>*/}
        <Image source={{ uri: 'https://toppng.com/uploads/preview/outline-of-missouri-missouri-11563161643ecat63yyqg.png', width: 200, height: 200 }} />
        <Text style={{ fontSize: 40, color: '#00bfff' }}>MissouriMe</Text>
          <Button
            title='Begin'
            mode='contained'
            onPress={() => navigation.navigate('Tabs')}
          />
      </FadeIn>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    inputStyle: {
        width: '80%',
        height: 44,
        padding: 10,
        marginVertical: 10,
    }
})