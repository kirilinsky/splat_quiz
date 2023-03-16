import QuizTemplate from '../components/QuizTemplate'
import Title from '../components/Title'

import { quizQuestions } from '../data/firstQuestions'

const FirstQuiz = () => {
  return (
    <>
      <Title text="Оценка состояния полости рта" />
      <QuizTemplate questions={quizQuestions} type="first" />
    </>
  )
}

export default FirstQuiz
