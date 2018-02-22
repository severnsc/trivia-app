import React from 'react'
import { Text, Button, FlatList } from 'react-native'
import Container from '../components/Container'

const data = [
  {id: 1, text: "Unturned originally started as a Roblox game."},
  {id: 2, text: "You are a duck."}
]

export default Results = () => (
  <Container>
    <Text>Your Scored</Text>
    <Text>3/10</Text>
    <FlatList
      data={data}
      renderItem={({item}) => <Text>{item.text}</Text>}
      keyExtractor={(item, index) => item.id}
    />
    <Button onPress={() => {}} title="PLAY AGAIN?" />
  </Container>
)