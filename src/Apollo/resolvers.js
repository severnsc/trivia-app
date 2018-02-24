import gql from "graphql-tag"
import { getAnsweredQuestions, getQuestionNumber } from './queries'

export default {
  Mutation: {
    answerQuestion: (_, { answeredQuestion }, { cache }) => {
      const query = getAnsweredQuestions
      const previous = cache.readQuery({ query })
      const data = {
        answeredQuestions: [
          ...previous.answeredQuestions,
          answeredQuestion
        ]
      }
      cache.writeQuery({ query, data })
      return null
    },
    incrementQuestionNumber: (_, { value }, { cache }) => {
      const query = getQuestionNumber
      const previous = cache.readQuery({ query })
      const data = {
        questionNumber: {
          ...previous.questionNumber,
          value: previous.questionNumber.value + 1
        }
      }
      cache.writeQuery({ query, data })
      return null
    },
    resetAnsweredQuestions: (_, { answeredQuestions }, { cache }) => {
      const query = getAnsweredQuestions
      const previous = cache.readQuery({ query })
      const data = {
        answeredQuestions: answeredQuestions
      }
      cache.writeQuery({ query, data })
      return null
    },
    resetQuestionNumber: (_, { value }, { cache }) => {
      const query = getQuestionNumber
      const previous = cache.readQuery({ query })
      const data = {
        questionNumber: {
          ...previous.questionNumber,
          value: value
        }
      }
      cache.writeQuery({ query, data })
      return null
    }
  }
}