import gql from 'graphql-tag'

export default gql`
  query quizButtons {
    quizButtons @client {
      disabled
    }
  }
`