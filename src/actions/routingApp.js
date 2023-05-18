import { createSlice } from '@reduxjs/toolkit'

export const routingApps = createSlice({
  name: 'routingApps',
  initialState: {
    page: 'StartPage',
    quizPage: 0
  },
  reducers: {
    backFromForm: (state) => {
      state.quizPage = 19
      state.page = 'SecondQuiz'
    },
    changeQuizPage: (state, action) => {

      state.quizPage = action.payload
    },
    startPage: (state) => {
      state.page = 'StartPage'
    },
    secondQuiz: (state) => {
      //state.page = 'ResultScore'
      // debug delete
      state.page = 'SecondQuiz'
      state.quizPage = 1
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
  startPage, changeQuizPage, backFromForm,
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
