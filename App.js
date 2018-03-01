import React from 'react';
import Home from './src/screens/Home'
import Quiz from './src/screens/Quiz'
import Results from './src/screens/Results'
import { StackNavigator } from 'react-navigation'
import { ApolloProvider } from 'react-apollo'
import client from './src/Apollo'

const RootNavigator = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: () => ({
      header: null
    })
  },
  Quiz: {
    screen: Quiz
  },
  Results: {
    screen: Results,
    navigationOptions: () => ({
      header: null
    })
  },
},
  {
    initialRouteName: 'Home'
  }
)

export default App = () => (
  <ApolloProvider client={client}>
    <RootNavigator />
  </ApolloProvider>
)