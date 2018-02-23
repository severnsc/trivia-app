import gql from 'graphql-tag'

export default questionsQuery = gql`
  query getQuestions {
    questions(amount: 10, type: "boolean", difficulty: "hard") {
      category
      questionText
      correctAnswer
    }
  }
`