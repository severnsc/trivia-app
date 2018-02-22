import React from 'react';
import Home from './src/screens/Home'
import Quiz from './src/screens/Quiz'
import Results from './src/screens/Results'
import { StackNavigator } from 'react-navigation'

const RootNavigator = StackNavigator({
  Home: {
    screen: Home
  },
  Quiz: {
    screen: Quiz
  },
  Results: {
    screen: Results
  },
},
  {
    initialRouteName: 'Home'
  }
)

export default App = () => (
  <RootNavigator />
)