import { useState, useEffect } from 'react'
import styles from './style.module.css'

import { useDispatch } from 'react-redux'
import { setRecommendationValue } from '../../actions/firstQuiz'

import { recommendation } from '../../actions/routingApp'
import Attantion from '../Attantion'

const QuizTemplate = ({ questions }) => {
  const [index, setIndex] = useState(0)
  const dispatch = useDispatch()

  const sendInitial = (value) => {
    if (typeof value === 'string') {
      dispatch(setRecommendationValue(value))
      setIndex(value)
    } else {
      setIndex(value)
    }
  }

  const First = () => {
    console.log(questions[index])
    if (typeof index === 'string') return dispatch(recommendation())
    return (
      <>
        <div className="quiz-title">{questions[index].question}</div>
        <div className={styles.answers}>
          {questions[index].answers.map((answer) => (
            <div
              className={styles.answer}
              onClick={() => {
                sendInitial(answer.nextQuestion)
              }}
              key={answer.id}
            >
              {answer.img !== undefined && (
                <img src={answer.img} alt={answer.answer} />
              )}
              {answer.answer}
            </div>
          ))}
        </div>
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
      </>
    )
  }

  return (
    <div className="quiz-wrapper">
      <div className="quiz">
        <div className="quiz-container">
          <First />
          <Attantion />
        </div>
      </div>
    </div>
  )
}

export default QuizTemplate
