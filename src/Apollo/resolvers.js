import gql from "graphql-tag"

export default {
  Mutation: {
    answerQuestion: (_, { answeredQuestion }, { cache }) => {
      const query = gql`
        query getAnsweredQuestions {
          answeredQuestions @client {
            id
            category
            questionText
            correctAnswer
            userAnswer
            correct
          }
        }
      `
      const previous = cache.readQuery({ query })
      const data = {
        answeredQuestions: [
          ...previous.answeredQuestions,
          answeredQuestion
        ]
      }
      cache.writeQuery({ query, data })
      return {answeredQuestion, __typename: 'AnsweredQuestion'}
    },
    updateQuestionNumber: (_, { value }, { cache }) => {
      const query = gql`
        query getQuestionNumber {
          questionNumber @client {
            value
          }
        }
      `
      const previous = cache.readQuery({ query })
      const data = {
        questionNumber: {
          ...previous.questionNumber,
          value: value
        }
      }
      cache.writeQuery({ query, cache })
      return null
    }
  }
}