import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Message from './Messages/Message';
import Messages from './Messages/Messages';

const Stack = createStackNavigator();

function MessageNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="messages" component={Messages} />
      <Stack.Screen name="message" component={Message} />
    </Stack.Navigator>
  );
}

export default MessageNavigation;
