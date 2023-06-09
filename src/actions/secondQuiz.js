import { createSlice } from '@reduxjs/toolkit'

export const secondQuiz = createSlice({
  name: 'secondQuiz',
  initialState: {
    sensitivity: 0,
    caries: 0,
    inflammationAndBleeding: 0,
    hygieneLevel: 0,
    descriptionAnswer: [],
    colorDescription: false,
    neutral: false,
    bmiNumber: 0,
    ftor: 'not',
    ozonLink: '',
    targetEvent: '',
    resultString:'',
    percents: {
      sensitivity: '0',
      caries: '0',
      inflammationAndBleeding: '0',
      hygieneLevel: '0',
    },
    products: []
  },
  reducers: {
    actionSensitivity: (state, action) => {
      state.sensitivity = action.payload
    },
    actionCaries: (state, action) => {
      state.caries = action.payload
    },
    actionPercents:(state,action)=>{
      state.percents = action.payload
    },
    actionResultString:(state,action)=>{
      state.resultString = action.payload
    },
    actionProducts: (state, action) => {
      state.products = [...state.products, ...action.payload]
    },
    actionOzonLink: (state, action) => {
      state.ozonLink =  action.payload
    },
    actionClearProducts: (state, action) => {
      state.products =  []
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
    actionArrayDescription: (state, { payload: { text, multiple } }) => {
      let arr = [...state.descriptionAnswer]
      if (multiple) {
        if (arr.includes(text)) {
          arr = arr.filter(x => x !== text)
        } else {
          arr.push(text)
        }
      } else {
        arr = []
        arr.push(text)
      }


      state.descriptionAnswer = arr
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
    actionBleed: (state, action) => {
      state.bleed = action.payload
    },
  },
})

export const {
  actionSensitivity,
  actionCaries, actionProducts,
  actionInflammationAndBleeding,
  actionHygieneLevel,actionResultString,
  actionDescription, actionArrayDescription,
  actionDescriptionColor, actionNeutralColor,
  actionBmi,actionPercents,actionOzonLink,
  actionFtor, actionBleed,actionClearProducts
} = secondQuiz.actions

export const setSensitivity = (value) => (dispatch) => {
  dispatch(actionSensitivity(value))
}
export const setOzonLink = (value) => (dispatch) => {
  dispatch(actionOzonLink(value))
}
export const setProducts = (value) => (dispatch) => {
  dispatch(actionProducts(value))
}
export const setResultString = (value) => (dispatch) => {
  dispatch(actionResultString(value))
}
export const setPercents = (value) => (dispatch) => {
  dispatch(actionPercents(value))
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
export const setClearProducts = ( ) => (dispatch) => {
  dispatch(actionClearProducts())
}

export const setDescription = (value) => (dispatch) => {
  dispatch(actionDescription(value))
}
export const setArrayDescription = (value) => (dispatch) => {
  dispatch(actionArrayDescription(value))
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
