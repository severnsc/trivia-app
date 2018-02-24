import gql from 'graphql-tag'

const AnsweredQuestion = gql`
  input AnsweredQuestion {
    category: String!
    questionText: String!
    correctAnswer: String!
    userAnswer: String!
    correct: Boolean!
  }
`

export default gql`
  mutation answerQuestion($answeredQuestion: AnsweredQuestion!) {

    answerQuestion(answeredQuestion: $answeredQuestion) @client {
      questionText
    }

  }
`