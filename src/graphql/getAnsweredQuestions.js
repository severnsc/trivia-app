import gql from 'graphql-tag'

export default gql`
  query getAnsweredQuestions {
    answeredQuestions @client {
      id
      category
      questionText
      correctAnswer
      userAnswer
      correct
    }
  }
`