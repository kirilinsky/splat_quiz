import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setBmi } from '../../../../actions/secondQuiz'
import './style.scss'

//assets
import mediumImg from './assets/medium.svg'
import lowImg from './assets/low.svg'
import highImg from './assets/high.svg'

const ages = [
  { id: 0, yaIndex: 'answer1_question17', age: 'До 18 лет' },
  { id: 1, yaIndex: 'answer2_question17', age: '18-24' },
  { id: 2, yaIndex: 'answer3_question17', age: '25-39' },
  { id: 3, yaIndex: 'answer4_question17', age: '40-54' },
  { id: 4, yaIndex: 'answer5_question17', age: '55-65' },
  { id: 5, yaIndex: 'answer6_question17', age: 'Старше 66' },
]


const bmiTypes = {
  low: <span><b>Недостаточный ИМС.</b> Судя по результатам теста — у вас недостаток массы тела.Быть стройным хорошо, но стоит обратить внимание на то, как вы питаетесь. Возможно, ваш организм по каким-либо причинам не получает нужное количество питательных веществ, а это может сказаться на здоровье зубов и десен.</span>,
  medium: <span><b>Идеальный ИМС.</b> Отлично, у вас все в порядке! Так держать!</span>,
  high: <span><b>Высокий ИМС.</b> Судя по результатам — в вашем рационе, скорее всего, содержится много углеводов, что повышает риск развития заболеваний полости рта. Избыточный вес способствует нарушению обменных процессов в организме, а это влияет на гормональный обмен, усвоение микроэлементов, которые необходимы для здоровья зубов, и микроциркуляцию в слизистой оболочке полости рта и десен.</span>
}

const bmiIcons = {
  low: lowImg,
  high: highImg,
  medium: mediumImg
}




const Bmi = ({ question }) => {
  const [isSelected, setIsSelected] = useState(6)
  const [input, setInput] = useState({ height: '', weight: '' })
  const [resultBmi, setResultBmi] = useState(0)
  const [bmiType, setBmiType] = useState(null)
  const dispatch = useDispatch()

  const handleChange = (e) => {
    //debug ytag
    /*  if (e.target.name === 'height') {
       window.ym && window.ym(92962183, 'reachGoal', 'introduced_growth')
       window.gtag && window.gtag('event', 'introduced_growth')
     } else if (e.target.name === 'weight') {
       window.ym && window.ym(92962183, 'reachGoal', 'introduced_weight')
       window.gtag && window.gtag('event', 'introduced_weight')
     } */
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    })
  }

  const handleAgeClick = (item) => {
    setIsSelected(item.id)
    //debug ytag
    // window.ym && window.ym(92962183, 'reachGoal', item.yaIndex)
    //window.gtag && window.gtag('event', item.yaIndex)
  }

  useEffect(() => {
    const { height, weight } = input
    let bmi = Math.round((Number(weight) / Math.pow(Number(height), 2)) * 10000)
   
    if (bmi >= 12 && bmi <= 18) {
      setBmiType('low')
    } else if (bmi >= 19 && bmi <= 24) {
      setBmiType('medium')
    } else {
      setBmiType('high')
    }
    setResultBmi(
      bmi
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
              onClick={() => handleAgeClick(item)}
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
            meta=""
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

      <div className={`quiz-answer-description ${input.height && input.weight && 'show'}`}>
        {<div className={`bmi-scale `}>
          <img src={bmiIcons[bmiType]} alt={bmiType} />
          {bmiTypes[bmiType]} </div>}

      </div>
    </div>
  )
}

export default Bmi
