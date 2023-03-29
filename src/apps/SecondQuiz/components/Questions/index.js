import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Answers from '../Answers'
import Bmi from '../Bmi'
import FluoridationLevel from '../FluoridationLevel'

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

  if (question.id === 16) {
    return <Bmi question={question} />
  } else if (question.id === 17) {
    return <FluoridationLevel question={question} />
  } else {
    return (
      <div>
        <div className="quiz-headline">{question.question}</div>
        <div className="quiz-inner">
          <div className="quiz-answers">
            <Answers
              answers={question.answers}
              onSelectAnswer={onSelectAnswer}
              onCountingPoints={onCountingPoints}
            />
          </div>
          {isMobile >= 1200&& (<div className="quiz-desc">
            <div
              className={`quiz-desktop  ${neutralColor ? 'neutral' : descriptionAnswerColor ? 'green' : 'red'
                }`}
            >
              {descriptionAnswer}
            </div>
          </div>)}
        </div>
      </div>
    )
  }
}

export default Questions
