import gql from 'graphql-tag'

export default gql`
  mutation answerQuestion($answeredQuestion: AnsweredQuestion!) {
    answerQuestion(answeredQuestion: $answeredQuestion) @client {
      questionText
    }
  }
`