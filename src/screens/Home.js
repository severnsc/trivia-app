import React from 'react';
import { Text, Button } from 'react-native';
import Container from '../components/common/Container'
import { H1 } from '../components/common/Typography'

export default Home = ({navigation}) => (
  <Container>
    <H1>Welcome to the Trivia Challenge!</H1>
    <Text>You will be presented with 10 True or False questions.</Text>
    <Text>Can you score 100%?</Text>
    <Button title="BEGIN" onPress={() => navigation.navigate('Quiz', {name: "Quiz"})} />
  </Container>
)