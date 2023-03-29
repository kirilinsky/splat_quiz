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
        setPerosonal: (_, {payload}) => {
            return { ...payload } 
        },
        reset: (state) => {
            state = init
        }
    },
})

export const {
    setPerosonal, reset
} = personal.actions

export const setPerosonalAction = (value) => (dispatch) => {
    dispatch(setPerosonal(value))
}

export default personal.reducer
