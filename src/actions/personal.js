import { createSlice } from '@reduxjs/toolkit'

const init = {
    name: '',
    phone: '',
    email: ''
}

export const personal = createSlice({
    name: 'personal',
    initialState: init,
    reducers: {
        setPersonal: (_, { payload }) => {
            return { ...payload }
        },
        setCity: (state, { payload }) => {
            return { ...state, city:payload }
        },
        reset: (state) => {
            state = init
        }
    },
})

export const {
    setPersonal, reset, setCity
} = personal.actions

export const setPersonalAction = (value) => (dispatch) => {
    dispatch(setPersonal(value))
}

export const setCityAction = (value) => (dispatch) => {
    dispatch(setCity(value))
}

export default personal.reducer
