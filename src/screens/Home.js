import React from 'react';
import Container from '../components/common/Container'
import { H1, CenteredText } from '../components/common/Typography'
import Button from '../components/common/Button'
import Card from '../components/common/Card'
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
      <Card>
        <Card.Body>
          <CenteredText>You will be presented with 10 True or False questions.</CenteredText>
          <CenteredText>Can you score 100%?</CenteredText>
        </Card.Body>
      </Card>
      <Button title="BEGIN!" onPress={() => handlePress()} />
    </Container>
  )
}

export default compose(
  graphql(resetQuestionNumber, {name: "resetQuestionNumber"}),
  graphql(resetAnsweredQuestions, {name: "resetAnsweredQuestions"})
)(Home)