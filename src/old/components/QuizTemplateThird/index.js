import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setInitial } from '../../../actions/thirdQuiz'
import { recommendationProductsThirdQuiz } from '../../../actions/routingApp'

import FormAppointmentDoctor from '../FormAppointmentDoctor'
import Attantion from '../Attantion'

import styles from './style.module.css'

const QuizTemplateThird = ({ questions }) => {
  const [index, setIndex] = useState(0)
  const dispatch = useDispatch()
  const stateIndex = useSelector((state) => state.data.index)

  const sendInitial = (value) => {
    if (value === 'fakeLanding') {
      return window.open(
        'https://splatglobal.com/ru-ru/whitening-app',
        '_blank'
      )
    }

    if (value === null) return dispatch(recommendationProductsThirdQuiz())

    setIndex(value)
  }

  if (index === 'goForm') {
    return (
      <div className="container">
        <div
          className="quiz-prev-page form-send-prev"
          onClick={() => {
            if (questions[stateIndex].answers.length > 1) {
              sendInitial(stateIndex)
            } else {
              sendInitial(questions[stateIndex].prevIndex)
            }
          }}
        >
          <svg
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.70711 0.292893C8.09763 0.683417 8.09763 1.31658 7.70711 1.70711L2.41421 7L7.70711 12.2929C8.09763 12.6834 8.09763 13.3166 7.70711 13.7071C7.31658 14.0976 6.68342 14.0976 6.29289 13.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289L6.29289 0.292893C6.68342 -0.0976311 7.31658 -0.0976311 7.70711 0.292893Z"
              fill="#CACFD1"
            />
          </svg>
          <p>Назад</p>
        </div>
        <FormAppointmentDoctor />
      </div>
    )
  }

  const QuizContent = () => {
    return (
      <>
        <div className="quiz-title">{questions[index].question}</div>
        <div className={styles.answers}>
          {questions[index].answers.map((answer) => (
            <div
              className={
                answer.nextQuestion === 'goForm' ||
                answer.nextQuestion === 'fakeLanding'
                  ? styles.answerGoForm
                  : styles.answer
              }
              onClick={() => {
                sendInitial(answer.nextQuestion)
                if (
                  typeof answer.nextQuestion !== 'string' &&
                  answer.nextQuestion !== null
                )
                  return dispatch(setInitial(answer.nextQuestion))
              }}
              key={answer.id}
            >
              {answer.answer}
            </div>
          ))}
        </div>
        {questions[index].answers.at().nextQuestion !== 'goForm' &&
          questions[index].answers.at().nextQuestion !== 'fakeLanding' && (
            <div className="quiz-navigation">
              <div
                className={`quiz-navigation-button ${
                  index === 0
                    ? 'quiz-navigation-button-back btn-disable'
                    : 'btn-back-active'
                }`}
                onClick={() => setIndex(questions[index].prevIndex)}
              >
                Назад
              </div>
              <div className="quiz-navigation-button">Далее</div>
            </div>
          )}
      </>
    )
  }

  return (
    <div className="quiz-wrapper">
      <div className="quiz">
        <div className="quiz-container">
          <QuizContent />
          <Attantion />
        </div>
      </div>
    </div>
  )
}

export default QuizTemplateThird
