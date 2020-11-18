import React from 'react';
import styled from 'styled-components';
import { useNavigation } from '@react-navigation/native';
function MessagesLink() {
  const navigation = useNavigation();
  return (
    <Container onPress={() => navigation.navigate("MessageNavigation")}>
      <Text>Message Button</Text>
    </Container>
  );
}
const Container = styled.TouchableOpacity`

`;

const Text = styled.Text`

`;

export default MessagesLink;
