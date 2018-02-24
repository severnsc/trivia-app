import React from 'react'
import { Text, Button, View } from 'react-native'
import Container from '../components/common/Container'
import { H1, H2 } from '../components/common/Typography'
import ResultsList from '../components/ResultsList'
import Card from '../components/common/Card'

const data = [
  {id: 1, text: "Unturned originally started as a Roblox game."},
  {id: 2, text: "You are a duck."}
]

export default Results = ({navigation}) => (
  <Container>
    <H1>You Scored</H1>
    <H2>3/10</H2>
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