import questionsQuery from './questionsQuery'
import questionNumber from './questionNumber'
import incrementQuestionNumber from './incrementQuestionNumber'
import answerQuestion from './answerQuestion'
import getAnsweredQuestions from './getAnsweredQuestions'
import resetQuestionNumber from './resetQuestionNumber'
import resetAnsweredQuestions from './resetAnsweredQuestions'
import quizButtonsQuery from './quizButtonsQuery'
import toggleQuizButtons from './toggleQuizButtons'

const createAnsweredQuestion = (string, question) => {
  let correct = false
  if(string === question.correctAnswer){
    correct = true
  }
  return {...question, userAnswer: string, correct}
}

export {
  questionsQuery,
  questionNumber,
  incrementQuestionNumber,
  answerQuestion,
  getAnsweredQuestions,
  resetQuestionNumber,
  resetAnsweredQuestions,
  createAnsweredQuestion,
  quizButtonsQuery,
  toggleQuizButtons
}