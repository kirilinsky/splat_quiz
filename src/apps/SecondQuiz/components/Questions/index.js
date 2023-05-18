import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Answers from '../Answers'
import Bmi from '../Bmi'
import FluoridationLevel from '../FluoridationLevel'

import operator from '../../../../assets/images/operator.png'

const Questions = ({ question, onSelectAnswer, onCountingPoints }) => {
  const descriptionAnswer = useSelector(
    (state) => state.score.descriptionAnswer
  )
  const descriptionAnswerColor = useSelector(
    (state) => state.score.colorDescription
  )
  const neutralColor = useSelector(
    (state) => state.score.neutral
  )

  const [isMobile, setIsMobile] = useState(window.innerWidth)
  useEffect(() => {
    window.addEventListener('resize', () => {
      setIsMobile(window.innerWidth)
    })
  }, [isMobile])

  useEffect(() => {
    if (question && question.yaIndex) {
      window.ym && window.ym(92962183, 'reachGoal', question.yaIndex)
      window.gtag && window.gtag('event', question.yaIndex)
    }
  }, [])
  console.log(question.id);
  if (question.id === 17) {
    return <Bmi question={question} />
  } else if (question.id === 18) {
    return <FluoridationLevel question={question} />
  } else {
    return (
      <div>
        <div className="quiz-headline">{question.question}</div>
        {!question.isSingleAnswer && <div className="quiz-multiple">
          Можете выбрать несколько вариантов ответа
        </div>}
        <div className="quiz-inner">
          <div className="quiz-answers">
            <Answers
              answers={question.answers}
              onSelectAnswer={onSelectAnswer}
              onCountingPoints={onCountingPoints}
            />
          </div>
          {isMobile >= 1200 && (<div className="quiz-desc">
            <div
              className={`quiz-desktop ${descriptionAnswer ? 'active' : ''}  ${neutralColor ? 'neutral' : descriptionAnswerColor ? 'green' : 'red'
                }`}
            >
              <img src={operator} alt="operator" />
              {descriptionAnswer}
            </div>
          </div>)}
        </div>
      </div>
    )
  }
}

export default Questions
