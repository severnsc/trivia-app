import gql from 'graphql-tag'

export default gql`
  mutation resetAnsweredQuestions($answeredQuestions: AnsweredQuestions!) {
    resetAnsweredQuestions(answeredQuestions: $answeredQuestions) @client {
      questionText
    }
  }
`