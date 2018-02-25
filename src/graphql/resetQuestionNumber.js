import gql from 'graphql-tag'

export default gql`
  mutation resetQuestionNumber($value: Int!) {
    resetQuestionNumber(value: $value) @client {
      value
    }
  }
`