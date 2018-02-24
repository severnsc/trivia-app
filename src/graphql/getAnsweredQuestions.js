import gql from 'graphql-tag'

export default gql`
  query getAnsweredQuestions {
    answeredQuestions @client {
      category
      questionText
      correctAnswer
      userAnswer
      correct
    }
  }
`