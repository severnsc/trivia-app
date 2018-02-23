import React from 'react'
import {View, Text, Button} from 'react-native'
import Container from '../components/common/Container'
import Card from '../components/common/Card'
import { H1, H2 } from '../components/common/Typography'
import { graphql, compose } from 'react-apollo'
import { questionsQuery, questionNumber } from '../graphql'

const Quiz = ({questionsQuery, questionNumber}) => {
  
  if(questionsQuery.loading){
    return(
      <Container>
        <H1>Loading...</H1>
      </Container>
    )
  }

  const questions = questionsQuery.questions
  const question = questions[questionNumber - 1]
  console.log(questionNumber)

  return(
    <Container>
      <H1>{question.category}</H1>
      <Card>
        <Card.Body>
          <H2>{question.questionText}</H2>
        </Card.Body>
      </Card>
      <Button onPress={() => {}} title={"TRUE"} />
      <Button onPress={() => {}} title={"FALSE"} />
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
  graphql(questionsQuery, { name: 'questionsQuery' }),
  graphql(questionNumber, { props: mapResultsToProps })
)(Quiz)