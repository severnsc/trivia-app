import gql from 'graphql-tag'

export default gql`
  query getQuestionNumber {
    questionNumber @client {
      value
    }
  }
`