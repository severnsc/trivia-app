import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Container from '../components/Container'
import Card from '../components/Card'

export default Quiz = () => (
  <Container>
    <Text>Entertainment: Video Games</Text>
    <Card>
      <Card.Body>
        <Text>Unturned originally started as a Roblox game.</Text>
      </Card.Body>
    </Card>
    <Text>1 of 10</Text>
  </Container>
)