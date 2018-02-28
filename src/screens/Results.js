import React from 'react'
import { Text, Button, View } from 'react-native'
import Container from '../components/common/Container'
import { H1, H2 } from '../components/common/Typography'
import ResultsCard from '../components/ResultsCard'
import Card from '../components/common/Card'
import { graphql, compose } from 'react-apollo'
import { getAnsweredQuestions } from '../graphql'

const Results = ({navigation, answeredQuestions, score}) => {

  const handlePress = () => {
    navigation.navigate('Home')
  }

  return(
    <Container>
      <H1>You Scored</H1>
      <H2>{score}/10</H2>
      <ResultsCard data={answeredQuestions} />
      <Button onPress={() => handlePress()}  title="PLAY AGAIN?" />
    </Container>
  )
}

const mapResutsToProps = ({data}) => {
  return {
    answeredQuestions: data.answeredQuestions,
    score: data.answeredQuestions.filter(q => q.correct).length
  }
}

export default compose(
  graphql(getAnsweredQuestions, {props: mapResutsToProps})
)(Results)