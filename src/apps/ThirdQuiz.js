import QuizTemplateThird from '../components/QuizTemplateThird'
import Title from '../components/Title'

import { quizQuestions } from '../data/thirdQuestions'

const ThirdQuiz = () => {
  return (
    <>
      <Title text="Оценка состояния полости рта" />
      <QuizTemplateThird questions={quizQuestions} />
    </>
  )
}

export default ThirdQuiz
