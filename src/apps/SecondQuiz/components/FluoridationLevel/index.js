import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setFtor } from '../../../../actions/secondQuiz'

import { listOfCities } from '../../../../data/citiesList'

const FluoridationLevel = ({ question }) => {
  const [cityName, setCityName] = useState('Выберете регион')

  ifItContainsFluoride(cityName)

  return (
    <div className="quiz-level">
      <div className="quiz-headline">{question.question}</div>
      <div className="quiz-subtitle">{question.subtitle}</div>
      <div className="quiz-region">
        <div className="quiz-region-title">Ваш регион проживания</div>
        <select
          defaultValue={cityName}
          name="city"
          id=""
          onChange={(e) => setCityName(e.target.value)}
        >
          {listOfCities.map((city) => (
            <option
              key={city.id}
              value={city.region}
              onClick={() => {
                console.log(city.region)
              }}
            >
              {city.region}
            </option>
          ))}
        </select>
        {/*<div className="quiz-region-description">*/}
        {/*  Вашем регионе оптимальное количество фтора, поэтому нет ограничений по*/}
        {/*  использованию продуктов Oral Care содержащих фтор*/}
        {/*</div>*/}
        <p>
          Проживаете ли вы в одном из следующих городов/поселков/сел: Тверь,
          Томск, Одинцово, Егорьевск, Красногорск, Сердобск, пос. Сява, с.
          Каракулино, пос. Игра, пос. Кез?
        </p>
        <DangerRegion />
      </div>
    </div>
  )
}

const ifItContainsFluoride = (regionName) => {
  console.log(regionName)
}

const DangerRegion = () => {
  const [dangerRegion, setDangerRegion] = useState(2)
  const dispatch = useDispatch()

  useEffect(() => {
    if (dangerRegion === 0) {
      dispatch(setFtor('yes'))
    } else {
      dispatch(setFtor('not'))
    }
  }, [dangerRegion])

  const buttonValue = [
    { id: 0, name: 'Да' },
    { id: 1, name: 'Нет' },
  ]

  return (
    <div className="quiz-region__question">
      {buttonValue.map((button, index) => (
        <div
          key={button.id}
          className={`quiz-region__button ${
            dangerRegion === index ? 'active' : ''
          }`}
          onClick={() => setDangerRegion(button.id)}
        >
          {button.name}
        </div>
      ))}
    </div>
  )
}

export default FluoridationLevel
