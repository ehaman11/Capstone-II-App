import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from "@expo/vector-icons";
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

import Home from './Screens/Home';
import Search from './Screens/Search';
import Favorite from './Screens/Favorite';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function App({route}) {
  return(
    <Stack.Navigator screenOptions={{ headerTintColor: 'white', headerStyle: { backgroundColor: '#45b1e8' }, }}>
      <Stack.Screen name="Home" component={Home} options={{ title: '', }}/>
      <Stack.Screen name="Tabs" component={MyTabs} options={{ title: '', }}/>
    </Stack.Navigator>
  )
}

function MyTabs() {
  return(
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        if (route.name === 'Search') {
          iconName = focused ? 'ios-search-sharp' : 'ios-search';
        } else if (route.name === 'Favorite') {
          iconName = focused ? 'ios-star' : 'ios-star-outline';
        }
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'blue',
      tabBarInactiveTintColor: 'gray',
    })}
  >
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Favorite" component={Favorite} />
    </Tab.Navigator>
  )
}

export default () => {
  return(
    <NavigationContainer>
        <App/>
    </NavigationContainer>
  )
}