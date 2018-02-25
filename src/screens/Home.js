import React from 'react';
import { Text, Button } from 'react-native';
import Container from '../components/common/Container'
import { H1 } from '../components/common/Typography'
import { graphql, compose } from 'react-apollo'
import {
  resetQuestionNumber,
  resetAnsweredQuestions
} from '../graphql'

const Home = ({navigation, resetQuestionNumber, resetAnsweredQuestions}) => {
  
  const handlePress = () => {
    resetQuestionNumber({variables: {value: 1}})
    resetAnsweredQuestions({variables: {answeredQuestions: []}})
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
  graphql(resetQuestionNumber, {name: "resetQuestionNumber"}),
  graphql(resetAnsweredQuestions, {name: "resetAnsweredQuestions"})
)(Home)