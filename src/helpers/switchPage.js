import React from 'react'
import { useSelector } from 'react-redux'

import StartPage from '../pages/StartPage'
import SecondQuiz from '../apps/SecondQuiz'
import RecommendationProducts from '../pages/RecommendationProducts'
import ResultSelection from '../pages/ResultSelections'
import ResultScore from '../pages/ResultScore'
import FinalForm from '../components/FinalForm'

const SwitchPage = () => {
  const routing = useSelector((state) => state.routing.page)

  switch (routing) {
    case 'StartPage':
      return <StartPage />
    /* начало теста */
    case 'SecondQuiz':
      return <SecondQuiz />
    //форма сбора данных
    case 'FinalForm':
      return <FinalForm />

    case 'ResultSelection':
      return <ResultSelection />
    case 'ResultScore':
      return <ResultScore />
    case 'RecommendationProducts':
      return <RecommendationProducts />
    default:
      return <StartPage />
  }
}

export default SwitchPage
