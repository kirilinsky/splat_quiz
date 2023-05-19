import { useDispatch, useSelector } from 'react-redux'
import { finalForm, quizOver } from '../../../../actions/routingApp'

import {
  setSensitivity,
  setCaries,
  setInflammationAndBleeding,
  setHygieneLevel,
  setDescription,
} from '../../../../actions/secondQuiz'

const Navigation = ({
  questionLength,
  currentCard,
  onChangeCard,
  questions,
  currentQuestion,
}) => {
  let check
  const dispatch = useDispatch()
  const bmi = useSelector((state) => state.score.bmiNumber)
  const city = useSelector(state => state.personal.city)
  currentQuestion.map((item) => {
    if (bmi > 0) return (check = true)
    if (item.required === false) return (check = true)
    if (item.id === currentCard - 1) {
      item.answers.map((element) => {
        if (element.status) {
          return (check = true)
        }
      })
    }
  })


  const sendMetric = string => {
    window.ym && window.ym(92962183, 'reachGoal', string)
    window.gtag && window.gtag('event', string)

  }

  const result = () => {
    const sensitivity = questions.reduce((acc, point) => {
      return acc + point.pointSensitivity
    }, -1)

    const caries = questions.reduce((acc, point) => {
      return acc + point.pointCaries
    }, -1)

    const inflammationAndBleeding = questions.reduce((acc, point) => {
      return acc + point.pointInflammationAndBleeding
    }, -1)

    const hygieneLevel = questions.reduce((acc, point) => {
      return acc + point.pointHygieneLevel
    }, -1)

    return { sensitivity, caries, inflammationAndBleeding, hygieneLevel }
  }

  const handleDecrement = () => {
    window.scrollTo(0, 0)
    dispatch(setDescription(''))
    if (currentCard !== 1) return onChangeCard(currentCard - 1)
  }

  const handleIncrement = () => {
    window.scrollTo(0, 0)
    onChangeCard(currentCard + 1)
    dispatch(setDescription(''))
    // for test 18 page
    //onChangeCard(18)

    if (currentCard === questionLength) {
      dispatch(setSensitivity(result().sensitivity))
      dispatch(setCaries(result().caries))
      dispatch(setInflammationAndBleeding(result().inflammationAndBleeding))
      dispatch(setHygieneLevel(result().hygieneLevel))
    }
  }

  return (
    <div className="quiz-navigation">
      <div
        className={`quiz-navigation-button quiz-navigation-button-back ${currentCard === 1 ? '' : 'btn-back-active'
          }`}
        onClick={handleDecrement}
      >
        Назад
      </div>

      {/* debug */}
      <div
        onClick={() => {
          sendMetric('specialist_recommendations_open')

          dispatch(finalForm())
        }}
        className="quiz-navigation-button btn-active"
      >
        Debug final
      </div>

      {/* debug */}

      {currentCard === questionLength ? (
        <div
          onClick={() => {

            if (city) {
              dispatch(finalForm())
              handleIncrement()
              sendMetric('specialist_recommendations_open')
            }

          }}
          className={`quiz-navigation-button  ${!!city ? 'btn-active' : 'btn-disable'}`}
        >
          Дальше
        </div>
      ) : (
        <div
          className={`quiz-navigation-button ${check ? 'btn-active' : 'btn-disable'
            }`}
          onClick={handleIncrement}
        >
          Дальше
        </div>
      )}
    </div>
  )
}

export default Navigation
