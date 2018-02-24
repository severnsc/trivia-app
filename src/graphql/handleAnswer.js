import gql from 'graphql-tag'

export default gql `
  mutation handleAnswer($value: Int!, $answeredQuestion: AnsweredQuestion!) {
    
    incrementQuestionNumber(value: $value) @client {
      value
    }

    answerQuestion(answeredQuestion: $answeredQuestion) @client {
      questionText
    }

  }
`