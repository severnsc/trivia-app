import React from 'react'
import {ActivityIndicator, View, Text, Button} from 'react-native'
import Container from '../components/common/Container'
import Card from '../components/common/Card'
import { H1, H2 } from '../components/common/Typography'
import { graphql, compose } from 'react-apollo'
import entities from 'entities'
import {
  questionsQuery,
  questionNumber,
  incrementQuestionNumber,
  answerQuestion,
  createAnsweredQuestion
} from '../graphql'

const Quiz = ({navigation, loading, questions, questionNumber, incrementQuestionNumber, answerQuestion}) => {

  if(loading){
    return(
      <Container>
        <ActivityIndicator size="large" />
      </Container>
    )
  }

  const currentQuestion = questions[questionNumber - 1]

  const handlePress = string => {
    const answeredQuestion = createAnsweredQuestion(string, currentQuestion)
    if(questionNumber === 10){
      answerQuestion({variables: {answeredQuestion}})
      navigation.navigate('Results')
    }else{
      answerQuestion({variables: {answeredQuestion}})
      incrementQuestionNumber({variables: {questionNumber}})
    }
  }

  return(
    <Container>
      <H1>{currentQuestion.category}</H1>
      <Card>
        <Card.Body>
          <H2>{entities.decodeHTML(currentQuestion.questionText)}</H2>
        </Card.Body>
      </Card>
      <Button onPress={() => handlePress("True")} title={"TRUE"} />
      <Button onPress={() => handlePress("False")} title={"FALSE"} />
      <Text>{questionNumber} of 10</Text>
    </Container>
  )
}

const mapResultsToProps = ({data}) => ({
  questionNumber: data.questionNumber.value
})

const mapQuestionsQueryToProps = ({data}) => ({
  questions: data.questions,
  loading: data.loading
})

const options = {
  fetchPolicy: "network-only"
}

export default compose(
  graphql(questionsQuery, { props: mapQuestionsQueryToProps, options }),
  graphql(questionNumber, { props: mapResultsToProps }),
  graphql(incrementQuestionNumber, {name: 'incrementQuestionNumber'}),
  graphql(answerQuestion, {name: "answerQuestion"})
)(Quiz)