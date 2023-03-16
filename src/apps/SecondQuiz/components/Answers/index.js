import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {
  setDescription,
  setDescriptionColor,
} from '../../../../actions/secondQuiz'

const Answers = ({ answers, onSelectAnswer, onCountingPoints }) => {
  const yaClick = (yaIndex) => {
    return yaIndex !== undefined && window.ym(89872572, 'reachGoal', yaIndex)
  }
  const dispatch = useDispatch()

  const [isMobile, setIsMobile] = useState(window.innerWidth)
  useEffect(() => {
    window.addEventListener('resize', () => {
      setIsMobile(window.innerWidth)
    })
  }, [isMobile])

  return (
    <>
      {answers.map((el) => (
        <div
          className={`answer-wrapper ${el.status ? 'active' : ''}${
            el.correctAnswer ? ' yes' : ' not'
          }`}
          key={el.id}
          onClick={() => {
            onSelectAnswer(el.id, el.questionId)
            onCountingPoints(
              el.sensitivity,
              el.caries,
              el.inflammationAndBleeding,
              el.hygieneLevel,
              el.id,
              el.questionId
            )
            dispatch(setDescription(el.description))
            dispatch(setDescriptionColor(el.correctAnswer))
            // yaClick(el.yaIndex)
          }}
        >
          <div className="answer">{el.answer}</div>
          {isMobile <= 1200 && (
            <div className="answer-description">
              <p>{el.description}</p>
            </div>
          )}
        </div>
      ))}
    </>
  )
}

export default Answers
