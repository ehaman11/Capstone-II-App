import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from "@expo/vector-icons";
import { Text, View } from 'react-native';

import LogIn from './Screens/LogIn';
import Prof from './Screens/Prof';
import Search from './Screens/Search_copy';
import Add from './Screens/Add';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function App({route}) {
  return(
    <Stack.Navigator screenOptions={{ headerTintColor: 'white', headerStyle: { backgroundColor: '#45b1e8' }, }}>
      <Stack.Screen name="Log In" component={LogIn} options={{ title: '', }}/>
      <Stack.Screen name="Home" component={MyTabs} options={{ title: '', }}/>
    </Stack.Navigator>
  )
}

function SettingsScreen() {
  return(
    <View style= {{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings</Text>
    </View>
  )
}

function Favorites() {
  return(
    <View style= {{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Your favorites will appear here!</Text>
    </View>
  )
}

function MyTabs() {
  return(
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Profile') {
          iconName = focused
            ? 'ios-person-circle'
            : 'ios-person-circle-outline';
        } else if (route.name === 'Search') {
          iconName = focused ? 'ios-search-sharp' : 'ios-search';
        } else if (route.name === 'Add') {
          iconName = focused ? 'ios-star' : 'ios-star-outline';
        }
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'blue',
      tabBarInactiveTintColor: 'gray',
    })}
  >
      <Tab.Screen name="Profile" component={Prof} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Add" component={Add} />
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