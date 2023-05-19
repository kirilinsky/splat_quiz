import React, { useState, useEffect } from 'react'


import { listOfCities } from '../../../../data/citiesList'
import CitiesInput from './CitiesInput'
import { setCityAction } from '../../../../actions/personal'
import { useDispatch } from 'react-redux'

const federalCitites = ['Москва', 'Санкт-Петербург', 'Севастополь']

const FluoridationLevel = ({ question }) => {
  const [cityName, setCityName] = useState('Выберете регион')
  const dispatch = useDispatch()
   
  useEffect(() => {
    if(federalCitites.includes(cityName)){
      dispatch(setCityAction( cityName))
    }
    if (cityName !== 'Выберете регион'
      && cityName !== 'Москва') {
      window.ym && window.ym(92962183, 'reachGoal', 'region_not_Moscow_question18')
      window.gtag && window.gtag('event', 'region_not_Moscow_question18')
    }
  }, [cityName])



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

            >
              {city.region}
            </option>
          ))}
        </select>

        <div style={{ marginTop: '1.5rem' }} className="quiz-region-title">Ваш город</div>
        <CitiesInput />

      </div>
    </div>
  )
}


export default FluoridationLevel
