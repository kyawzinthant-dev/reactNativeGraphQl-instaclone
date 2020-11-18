import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigation from './TabNavigation';
import PhotoNavigation from './PhotoNavigation';
import MessageNavigation from './MessageNavigation';
const Stack = createStackNavigator();

function MainNavigation() {
  return (
    <NavigationContainer >
      <Stack.Navigator
        mode="modal"
        headerMode="none"
      >
        <Stack.Screen name="TabNavigation" component={TabNavigation} />
        <Stack.Screen name="PhotoNavigation" component={PhotoNavigation} />
        <Stack.Screen name="MessageNavigation" component={MessageNavigation} />

      </Stack.Navigator>
    </NavigationContainer >
  );
}

export default MainNavigation;