import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {
  setDescription,
  setDescriptionColor, setNeutralColor
} from '../../../../actions/secondQuiz'


const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K']

const Answers = ({ answers, onSelectAnswer, onCountingPoints }) => {
  const yaClick = (yaIndex) => {
    if (!yaIndex) {
      return
    }

    window.ym(92962183, 'reachGoal', yaIndex)
    window.gtag('event', yaIndex)
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
      {answers.map((el, idx) => (
        <div
          className={`answer-wrapper ${el.neutral ? 'neutral' : ''}  ${el.status ? 'active' : ''}${el.correctAnswer ? ' yes' : ' not'
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
            dispatch(setNeutralColor(el.neutral))
            yaClick(el.yaIndex)
          }}
        >
          <div className="answer"><div className='answer-text'>
            <div className="answer-letter">{letters[idx]}</div>
            {el.answer}</div></div>
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
