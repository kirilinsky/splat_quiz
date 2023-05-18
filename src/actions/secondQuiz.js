import { createSlice } from '@reduxjs/toolkit'

export const secondQuiz = createSlice({
  name: 'secondQuiz',
  initialState: {
    sensitivity: 0,
    caries: 0,
    inflammationAndBleeding: 0,
    hygieneLevel: 0,
    descriptionAnswer: '',
    colorDescription: false,
    neutral: false,
    bmiNumber: 0,
    ftor: 'not',
  },
  reducers: {
    actionSensitivity: (state, action) => {
      state.sensitivity = action.payload
    },
    actionCaries: (state, action) => {
      state.caries = action.payload
    },
    actionInflammationAndBleeding: (state, action) => {
      state.inflammationAndBleeding = action.payload
    },
    actionHygieneLevel: (state, action) => {
      state.hygieneLevel = action.payload
    },
    actionDescription: (state, action) => {
      state.descriptionAnswer = action.payload
    },
    actionDescriptionColor: (state, action) => {
      state.colorDescription = action.payload
    },
    actionNeutralColor: (state, action) => {
      state.neutral = action.payload
    },
    actionBmi: (state, action) => {
      state.bmiNumber = action.payload
    },
    actionFtor: (state, action) => {
      state.ftor = action.payload
    },
    actionBleed: (state,action) => {
      state.bleed = action.payload
    },
  },
})

export const {
  actionSensitivity,
  actionCaries,
  actionInflammationAndBleeding,
  actionHygieneLevel,
  actionDescription,
  actionDescriptionColor, actionNeutralColor,
  actionBmi,
  actionFtor, actionBleed
} = secondQuiz.actions

export const setSensitivity = (value) => (dispatch) => {
  dispatch(actionSensitivity(value))
}
export const setCaries = (value) => (dispatch) => {
  dispatch(actionCaries(value))
}
export const setInflammationAndBleeding = (value) => (dispatch) => {
  dispatch(actionInflammationAndBleeding(value))
}
export const setHygieneLevel = (value) => (dispatch) => {
  dispatch(actionHygieneLevel(value))
}

export const setDescription = (value) => (dispatch) => {
  dispatch(actionDescription(value))
}

export const setDescriptionColor = (value) => (dispatch) => {
  dispatch(actionDescriptionColor(value))
}

export const setNeutralColor = (value) => (dispatch) => {
  dispatch(actionNeutralColor(value))
}

export const setBmi = (value) => (dispatch) => {
  dispatch(actionBmi(value))
}

export const setFtor = (value) => (dispatch) => {
  dispatch(actionFtor(value))
}

export const setBleed = (value) => (dispatch) => {
  dispatch(actionBleed(value))
}

export default secondQuiz.reducer
