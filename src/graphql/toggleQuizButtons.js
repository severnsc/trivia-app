import gql from 'graphql-tag'

export default gql`
  mutation toggleQuizButtons($bool: Boolean!) {
    toggleQuizButtons(bool: $bool) @client {
      disabled
    }
  }
`