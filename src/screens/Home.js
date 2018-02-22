import React from 'react';
import { Text, Button } from 'react-native';
import Container from '../components/common/Container'

export default Home = ({navigation}) => (
  <Container>
    <Text>Welcome to the Trivia Challenge!</Text>
    <Text>Your will be presented with 10 True or False questions.</Text>
    <Text>Can you score 100%</Text>
    <Button title="BEGIN" onPress={() => navigation.navigate('Quiz', {name: "Quiz"})} />
  </Container>
)