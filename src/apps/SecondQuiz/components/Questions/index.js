import Answers from '../Answers'
import Bmi from '../Bmi'
import FluoridationLevel from '../FluoridationLevel'

const Questions = ({ question, onSelectAnswer, onCountingPoints }) => {
  if (question.id === 16) {
    return <Bmi question={question} />
  } else if (question.id === 17) {
    return <FluoridationLevel question={question} />
  } else {
    return (
      <div>
        <div className="quiz-headline">{question.question}</div>
        <div className="quiz-answers">
          <Answers
            answers={question.answers}
            onSelectAnswer={onSelectAnswer}
            onCountingPoints={onCountingPoints}
          />
        </div>
      </div>
    )
  }
}

export default Questions
