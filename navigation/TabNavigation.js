import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Search from '../screens/Search';
import Notifications from '../screens/Notifications';
import Profile from '../screens/Profile';
import { createStackNavigator } from '@react-navigation/stack';
import MessagesLink from '../components/MessagesLink';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const StackFactory = (initialRoute, name) => {
  let options = {};
  switch (name) {
    case 'Home':
      options = {
        headerRight: () => (
          <MessagesLink />
        ),
      };
      break;
    default:
      break;
  }
  return (

    <Stack.Navigator>
      <Stack.Screen
        name={name}
        component={initialRoute}
        options={options}
      />
    </Stack.Navigator>

  );
};
function TabNavigation() {
  return (
    <Tab.Navigator

    >
      <Tab.Screen
        name="Home"
        children={() => {
          return StackFactory(Home, "Home");
        }}
      />
      <Tab.Screen name="Search" children={() => {
        return StackFactory(Search, "Search");
      }} />
      <Tab.Screen
        name="Add"
        component={View}
        listeners={({ navigation, route }) => ({
          tabPress: e => {
            // Prevent default action
            e.preventDefault();

            // Do something with the `navigation` object
            navigation.navigate('PhotoNavigation');
          },
        })}
      />
      <Tab.Screen name="Notifications" children={() => {
        return StackFactory(Notifications, "Notifications");
      }} />
      <Tab.Screen name="Profile" children={() => {
        return StackFactory(Profile, "Profile");
      }} />
    </Tab.Navigator>
  );
}

export default TabNavigation;