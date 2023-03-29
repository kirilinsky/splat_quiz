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
    secondQuiz: (state) => {
      //state.page = 'ResultScore'
      // debug delete
      state.page = 'SecondQuiz'
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
      state.page = 'FinalForm'
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
