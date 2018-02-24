import gql from "graphql-tag"

export default {
  Mutation: {
    answerQuestion: (_, { answeredQuestion }, { cache }) => {
      const query = gql`
        query getAnsweredQuestions {
          answeredQuestions @client {
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
      console.log(data)
      return null
    },
    incrementQuestionNumber: (_, { value }, { cache }) => {
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
          value: previous.questionNumber.value + 1
        }
      }
      cache.writeQuery({ query, data })
      return null
    }
  }
}