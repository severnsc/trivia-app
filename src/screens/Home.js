import React from 'react';
import { Text, Button } from 'react-native';
import Container from '../components/common/Container'
import { H1 } from '../components/common/Typography'
import { graphql, compose } from 'react-apollo'
import { resetGame } from '../graphql'

const Home = ({navigation, resetGame}) => {
  
  const handlePress = () => {
    resetGame({variables: {answeredQuestions: [], value: 1}})
    navigation.navigate('Quiz')
  }

  return (
    <Container>
      <H1>Welcome to the Trivia Challenge!</H1>
      <Text>You will be presented with 10 True or False questions.</Text>
      <Text>Can you score 100%?</Text>
      <Button title="BEGIN" onPress={() => handlePress()} />
    </Container>
  )
}

export default compose(
  graphql(resetGame, {name: "resetGame"})
)(Home)