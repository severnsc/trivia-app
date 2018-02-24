import gql from 'graphql-tag'

export default gql`
  mutation resetGame($answeredQuestions: AnsweredQuestions!, $value: Int!) {
    
    resetAnsweredQuestions(answeredQuestions: $answeredQuestions) @client {
      questionText
    }

    resetQuestionNumber(value: $value) @client {
      value
    }

  }
`