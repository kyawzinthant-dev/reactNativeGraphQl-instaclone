import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styled from 'styled-components';


const View = styled.View`
  justify-content: center;
  align-items: center;
  flex:1;
`;

const Text = styled.Text``;

export default ({ navigation }) => (
  <View>
    <Text>Auth Home</Text>
    <TouchableOpacity
      onPress={() => navigation.navigate('Login')}
    >
      <Text>Go to Login</Text>
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => navigation.navigate('Signup')}
    >
      <Text>Go to SignUp</Text>
    </TouchableOpacity>
  </View>
);
