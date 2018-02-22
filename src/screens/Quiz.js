import React from 'react'
import {View, Text, Button} from 'react-native'
import Container from '../components/Container'
import Card from '../components/Card'
import { H1, H2 } from '../components/Typography'

export default Quiz = () => (
  <Container>
    <H1>Entertainment: Video Games</H1>
    <Card>
      <Card.Body>
        <H2>Unturned originally started as a Roblox game.</H2>
      </Card.Body>
    </Card>
    <Button onPress={() => {}} title={"TRUE"} />
    <Button onPress={() => {}} title={"FALSE"} />
    <Text>1 of 10</Text>
  </Container>
)