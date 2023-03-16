import React from 'react'
import { useSelector } from 'react-redux'

import StartPage from '../pages/StartPage'
import InitialPage from '../pages/InitialPage'
import FirstQuiz from '../apps/FirstQuiz'
import SecondQuiz from '../apps/SecondQuiz'
import RecommendationProducts from '../pages/RecommendationProducts'
import RecommendationAppointment from '../pages/RecommendationAppointment'
import Recommendation from '../pages/Recommendation'
import QuizOver from '../pages/QuizOver'
import ResultSelection from '../pages/ResultSelections'
import ResultScore from '../pages/ResultScore'
import ThirdQuiz from '../apps/ThirdQuiz'
import FoodPage from '../pages/FoodPage'
import RecommendationProductsThirdQuiz from '../pages/RecommendationProductsThirdQuiz'
import FinalFormPage from '../pages/v2/FinalFormPage'

const SwitchPage = () => {
  const routing = useSelector((state) => state.routing.page)

  switch (routing) {
    case 'StartPage':
      return <StartPage />
    case 'InitialPage':
      return <InitialPage />
    case 'FirstQuiz':
      return <FirstQuiz />
    case 'SecondQuiz':
      return <SecondQuiz />
    case 'ThirdQuiz':
      return <ThirdQuiz />
    case 'Recommendation':
      return <Recommendation />
    case 'RecommendationAppointment':
      return <RecommendationAppointment />
    case 'RecommendationProducts':
      return <RecommendationProducts />
    case 'QuizOver':
      return <QuizOver />
    case 'finalForm':
      return <FinalFormPage />
    case 'ResultSelection':
      return <ResultSelection />
    case 'ResultScore':
      return <ResultScore />
    case 'FoodPage':
      return <FoodPage />
    case 'RecommendationProductsThirdQuiz':
      return <RecommendationProductsThirdQuiz />
    default:
      return <StartPage />
  }
}

export default SwitchPage
