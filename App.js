import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LogIn from './Screens/LogIn';
import Home from './Screens/Home';
import Prof from './Screens/Prof';
import Search from './Screens/Search';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function App({route}) {
  return(
    <Stack.Navigator screenOptions={{ headerTintColor: 'white', headerStyle: { backgroundColor: '#45b1e8' }, }}>
      <Stack.Screen name="Log In" component={LogIn} options={{ title: 'title', }}/>
      <Stack.Screen name="Home" component={Prof}/>
    </Stack.Navigator>
  )
}

function MyTabs() {
  return(
    <Tab.Navigator>
      <Tab.Screen name="Profile" component={Prof}/>
      <Tab.Screen name="Search" component={Search}/>
    </Tab.Navigator>
  )
}

export default () => {
  return(
    <NavigationContainer>
      <App/>
      <View>Text</View>
    </NavigationContainer>
  )
}