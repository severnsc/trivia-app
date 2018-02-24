import gql from 'graphql-tag'

const getAnsweredQuestions = gql`
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

const getQuestionNumber = gql`
  query getQuestionNumber {
    questionNumber @client {
      value
    }
  }
`

export { getAnsweredQuestions, getQuestionNumber }