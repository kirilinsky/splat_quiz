import { createSlice } from '@reduxjs/toolkit'

export const thirdQuiz = createSlice({
  name: 'thirdQuiz',
  initialState: {
    index: 0,
    recommendationValue: '',
  },
  reducers: {
    setIndex: (state, action) => {
      state.index = action.payload
    },
    setInitialStateRecommendation: (state, action) => {
      state.recommendationValue = action.payload
    },
  },
})

export const { setIndex, setInitialStateRecommendation } = thirdQuiz.actions

export const setInitial = (value) => (dispatch) => {
  dispatch(setIndex(value))
}

export const setRecommendationValue = (recommendValue) => (dispatch) => {
  dispatch(setInitialStateRecommendation(recommendValue))
}

export default thirdQuiz.reducer
