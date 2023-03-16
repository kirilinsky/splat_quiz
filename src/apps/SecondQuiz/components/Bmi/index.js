import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setBmi } from '../../../../actions/secondQuiz'

const ages = [
  { id: 0, age: 'До 18 лет' },
  { id: 1, age: '18-24' },
  { id: 2, age: '25-39' },
  { id: 3, age: '40-54' },
  { id: 4, age: '55-65' },
  { id: 5, age: 'Старше 66' },
]

const Bmi = ({ question }) => {
  const [isSelected, setIsSelected] = useState(6)
  const [input, setInput] = useState({ height: '', weight: '' })
  const [resultBmi, setResultBmi] = useState(0)
  const dispatch = useDispatch()

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    })
  }

  useEffect(() => {
    const { height, weight } = input

    setResultBmi(
      Math.round((Number(weight) / Math.pow(Number(height), 2)) * 10000)
    )
  }, [input])

  useEffect(() => {
    dispatch(setBmi(resultBmi))
  }, [resultBmi])

  if (input.height !== '' && input.weight !== '') {
    question.pointCaries = 1
    question.pointHygieneLevel = 1
    question.pointInflammationAndBleeding = 1
    question.pointSensitivity = 1
  }

  return (
    <div className="quiz-bmi">
      <div className="quiz-headline">{question.question}</div>
      <div className="quiz-subtitle">{question.subtitle}</div>
      <div className="quiz-answer-age">
        <div className="title">Ваш возраст</div>
        <div className="wrap">
          {ages.map((item, index) => (
            <div
              key={item.id}
              className={`quiz-age ${isSelected === index ? 'active' : ''}`}
              onClick={() => setIsSelected(item.id)}
            >
              {item.age}
            </div>
          ))}
        </div>
      </div>
      <div className="quiz-answer-line">
        <div className="quiz-input">
          <div className="title">
            Ваш рост <span>(в см)</span>
          </div>
          <input
            type="number"
            min="152"
            max="200"
            name="height"
            onChange={handleChange}
          />
        </div>
        <div className="quiz-input">
          <div className="title">
            Ваш вес <span>(в кг)</span>
          </div>
          <input
            type="number"
            min="50"
            max="130"
            name="weight"
            onChange={handleChange}
          />
        </div>
      </div>
      {/* <div className="quiz-answer-description">
        <OutputDescription />
      </div> */}
    </div>
  )
}

export default Bmi
