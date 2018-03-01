import React from 'react'
import {ActivityIndicator, View } from 'react-native'
import Container from '../components/common/Container'
import QuestionCard from '../components/QuestionCard'
import { H1, CenteredText } from '../components/common/Typography'
import Button from '../components/common/Button'
import { graphql, compose } from 'react-apollo'
import entities from 'entities'
import {
  questionsQuery,
  questionNumber,
  incrementQuestionNumber,
  answerQuestion,
  createAnsweredQuestion,
  quizButtonsQuery,
  toggleQuizButtons
} from '../graphql'

const Quiz = ({navigation, loading, questions, questionNumber, incrementQuestionNumber, answerQuestion, disabled, toggleDisabled}) => {

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
    answerQuestion({variables: {answeredQuestion}})
    if(questionNumber === 10){
      toggleDisabled({variables: {bool: !disabled}})
      navigation.navigate('Results')
    }else{
      incrementQuestionNumber({variables: {questionNumber}})
    }
  }

  return(
    <Container>
      <H1>{currentQuestion.category}</H1>
      <QuestionCard question={entities.decodeHTML(currentQuestion.questionText)} />
      <Button disabled={disabled} onPress={() => handlePress("True")} title={"TRUE"} />
      <Button disabled={disabled} onPress={() => handlePress("False")} title={"FALSE"} />
      <CenteredText>{questionNumber} of 10</CenteredText>
    </Container>
  )
}

const mapQuestionNumberToProps = ({data}) => ({
  questionNumber: data.questionNumber.value
})

const mapQuestionsQueryToProps = ({data}) => ({
  questions: data.questions,
  loading: data.loading
})

const mapQuizButtonsToProps = ({data}) => ({
  disabled: data.disabled
})

const options = {
  fetchPolicy: "network-only"
}

export default compose(
  graphql(questionsQuery, { props: mapQuestionsQueryToProps, options }),
  graphql(questionNumber, { props: mapQuestionNumberToProps }),
  graphql(incrementQuestionNumber, {name: 'incrementQuestionNumber'}),
  graphql(answerQuestion, {name: "answerQuestion"}),
  graphql(quizButtonsQuery, {props: mapQuizButtonsToProps}),
  graphql(toggleQuizButtons, {name: 'toggleDisabled'})
)(Quiz)