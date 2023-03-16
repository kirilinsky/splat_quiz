import { createSlice } from '@reduxjs/toolkit'

export const firstQuiz = createSlice({
  name: 'firstQuiz',
  initialState: {
    value: 0,
    recommendationValue: '',
  },
  reducers: {
    setInitialState: (state, action) => {
      state.value = action.payload
    },
    setInitialStateRecommendation: (state, action) => {
      state.recommendationValue = action.payload
    },
  },
})

export const { setInitialState, setInitialStateRecommendation } =
  firstQuiz.actions

export const setInitial = (value) => (dispatch) => {
  dispatch(setInitialState(value))
}

export const setRecommendationValue = (recommendValue) => (dispatch) => {
  dispatch(setInitialStateRecommendation(recommendValue))
}

export default firstQuiz.reducer
