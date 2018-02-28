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

const getQuizButtons = gql`
  query getQuizButtons {
    quizButtons @client {
      disabled
    }
  }
`

export {
  getAnsweredQuestions,
  getQuestionNumber,
  getQuizButtons
}