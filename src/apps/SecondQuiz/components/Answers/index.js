import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {
  setArrayDescription,
  setDescription,
  setDescriptionColor, setNeutralColor
} from '../../../../actions/secondQuiz'


const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K']

const Answers = ({ multiple, answers, onSelectAnswer, onCountingPoints }) => {
  const yaClick = (yaIndex) => {
    if (!yaIndex) {
      return
    }

    window.ym && window.ym(92962183, 'reachGoal', yaIndex)
    window.gtag && window.gtag('event', yaIndex)
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
            console.log(el, 'fd', multiple);
            onSelectAnswer(el.id, el.questionId)
            onCountingPoints(
              el.sensitivity,
              el.caries,
              el.inflammationAndBleeding,
              el.hygieneLevel,
              el.id,
              el.questionId
            )
            dispatch(setArrayDescription({ multiple, text: el.description }))
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
