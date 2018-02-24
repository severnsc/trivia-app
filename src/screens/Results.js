import React from 'react'
import { Text, Button, View } from 'react-native'
import Container from '../components/common/Container'
import { H1, H2 } from '../components/common/Typography'
import ResultsList from '../components/ResultsList'
import Card from '../components/common/Card'
import { graphql, compose } from 'react-apollo'
import { getAnsweredQuestions } from '../graphql'

const data = [
  {id: 1, text: "Unturned originally started as a Roblox game."},
  {id: 2, text: "You are a duck."}
]

const Results = ({navigation, answeredQuestions}) => {

  const score = answeredQuestions.filter(q => q.correct).length

  return(
    <Container>
      <H1>You Scored</H1>
      <H2>{score}/10</H2>
      <Card>
        <Card.Body>
          <ResultsList
            data={data}
            renderItem={({item}) => <Text>{item.text}</Text>}
            keyExtractor={(item, index) => item.id}
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