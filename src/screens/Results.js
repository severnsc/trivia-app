import React from 'react'
import { Text, Button, View } from 'react-native'
import Container from '../components/common/Container'
import { H1, H2 } from '../components/common/Typography'
import ResultsList from '../components/ResultsList'
import Card from '../components/common/Card'
import { graphql, compose } from 'react-apollo'
import { getAnsweredQuestions } from '../graphql'

const Results = ({navigation, answeredQuestions}) => {

  const score = answeredQuestions.filter(q => q.correct).length

  const resultsListItem = ({item}) => (
    <View>
      <Text>
        {item.questionText}
      </Text>
      <Text>
        You answered: {item.userAnswer} | Correct answer: {item.correctAnswer}
      </Text>
    </View>
  )

  return(
    <Container>
      <H1>You Scored</H1>
      <H2>{score}/10</H2>
      <Card>
        <Card.Body>
          <ResultsList
            data={answeredQuestions}
            renderItem={resultsListItem}
            keyExtractor={(item, index) => item.questionText}
            ItemSeparatorComponent={() => <View style={{borderWidth:1, borderColor:"grey"}} />}
          />
        </Card.Body>
      </Card>
      <Button onPress={() => navigation.navigate('Home', {name: "Home"})}  title="PLAY AGAIN?" />
    </Container>
  )
}

const mapResutsToProps = ({data}) => {
  return {
    answeredQuestions: data.answeredQuestions
  }
}

export default compose(
  graphql(getAnsweredQuestions, {props: mapResutsToProps})
)(Results)