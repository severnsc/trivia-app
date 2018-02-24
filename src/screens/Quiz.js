import React from 'react'
import {View, Text, Button} from 'react-native'
import Container from '../components/common/Container'
import Card from '../components/common/Card'
import { H1, H2 } from '../components/common/Typography'
import { graphql, compose } from 'react-apollo'
import {
  questionsQuery,
  questionNumber,
  handleAnswer,
  completeQuiz
} from '../graphql'

const Quiz = ({navigation, questionsQuery, questionNumber, handleAnswer, completeQuiz}) => {

  if(questionsQuery.loading){
    return(
      <Container>
        <H1>Loading...</H1>
      </Container>
    )
  }

  const questions = questionsQuery.questions
  const question = questions[questionNumber - 1]

  const handlePress = string => {
    let correct = false
    if(string === question.correctAnswer){
      correct = true
    }
    if(questionNumber === 10){
      completeQuiz({variables: {answeredQuestion: {...question, userAnswer: string, correct}}})
      navigation.navigate('Results')
    }else{
      handleAnswer({variables: {value: questionNumber, answeredQuestion: {...question, userAnswer: string, correct}}})
    }
  }

  return(
    <Container>
      <H1>{question.category}</H1>
      <Card>
        <Card.Body>
          <H2>{question.questionText}</H2>
        </Card.Body>
      </Card>
      <Button onPress={() => handlePress("True")} title={"TRUE"} />
      <Button onPress={() => handlePress("False")} title={"FALSE"} />
      <Text>{questionNumber} of 10</Text>
    </Container>
  )
}

const mapResultsToProps = ({data}) => {
  return {
    questionNumber: data.questionNumber.value
  }
}

export default compose(
  graphql(questionsQuery, { name: 'questionsQuery', options: {fetchPolicy: "network-only"} }),
  graphql(questionNumber, { props: mapResultsToProps }),
  graphql(handleAnswer, {name: 'handleAnswer'}),
  graphql(completeQuiz, {name: 'completeQuiz'})
)(Quiz)