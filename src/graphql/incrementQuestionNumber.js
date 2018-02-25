import gql from 'graphql-tag'

export default gql`
  mutation incrementQuestionNumber($value: Int!) {
    incrementQuestionNumber(value: $value) @client {
      value
    }
  }
`