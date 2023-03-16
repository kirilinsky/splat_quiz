import QuizTemplate from '../../../components/QuizTemplate'
import Title from '../../../components/Title'
import Attantion from '../../../components/Attantion'
import styles from './style.module.css'

import { useDispatch } from 'react-redux'
import { firstQuiz, secondQuiz, thirdQuiz } from '../../../actions/routingApp'

const InitialPage = () => {
  const dispatch = useDispatch()

  const InitialQuizText = [
    {
      text: 'Проблемы с зубами и деснами, чувствую боль',
      link: () => {
        dispatch(firstQuiz())
      },
    },
    {
      text: 'Хочу поговорить о гигиене',
      link: () => {
        dispatch(secondQuiz())
      },
    },
    {
      text: 'Не нравится внешний вид зубов',
      link: () => {
        dispatch(thirdQuiz())
      },
    },
  ]

  return (
    <>
      <Title text="Оценка состояния полости рта" />
      <div className="quiz-wrapper">
        <div className="quiz">
          <div className="quiz-container">
            <div className="quiz-title">Что вас беспокоит?</div>
            <div className={styles.answers}>
              {InitialQuizText.map((answer, index) => (
                <div
                  className={styles.answer}
                  onClick={answer.link}
                  key={index}
                >
                  {answer.text}
                </div>
              ))}
            </div>
            <div className="quiz-navigation">
              <div className="quiz-navigation-button">Назад</div>
              <div className="quiz-navigation-button">Далее</div>
            </div>
            <Attantion />
          </div>
        </div>
      </div>
    </>
  )
}

export default InitialPage
