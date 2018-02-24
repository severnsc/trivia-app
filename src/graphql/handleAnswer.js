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

export default gql `
  mutation handleAnswer($value: Int!, $answeredQuestion: AnsweredQuestion!) {
    
    incrementQuestionNumber(value: $value) @client {
      value
    }

    answerQuestion(answeredQuestion: $answeredQuestion) @client {
      id
    }

  }
`