import { createSlice } from '@reduxjs/toolkit'

export const routingApps = createSlice({
  name: 'routingApps',
  initialState: {
    page: 'StartPage',
  },
  reducers: {
    startPage: (state) => {
      state.page = 'StartPage'
    },
    initialPage: (state) => {
      state.page = 'InitialPage'
    },
    firstQuiz: (state) => {
      state.page = 'FirstQuiz'
    },
    secondQuiz: (state) => {
      state.page = 'SecondQuiz'
    },
    thirdQuiz: (state) => {
      state.page = 'ThirdQuiz'
    },
    recommendation: (state) => {
      state.page = 'Recommendation'
    },
    recommendationAppointment: (state) => {
      state.page = 'RecommendationAppointment'
    },
    recommendationProducts: (state) => {
      state.page = 'RecommendationProducts'
    },
    finalForm: (state) => {
      state.page = 'FInalForm'
    },
    quizOver: (state) => {
      //state.page = 'QuizOver'
      state.page = 'ResultSelection'
    },
    resultSelection: (state) => {
      state.page = 'ResultSelection'
    },
    resultScore: (state) => {
      state.page = 'ResultScore'
    },
    foodPage: (state) => {
      state.page = 'FoodPage'
    },
    recommendationProductsThirdQuiz: (state) => {
      state.page = 'RecommendationProductsThirdQuiz'
    },
  },
})

export const {
  startPage,
  initialPage,
  firstQuiz,
  secondQuiz,
  thirdQuiz,
  recommendation,
  recommendationAppointment,
  recommendationProducts,
  quizOver,
  resultSelection,
  resultScore,
  foodPage,
  recommendationProductsThirdQuiz, finalForm
} = routingApps.actions

export default routingApps.reducer
