import { createSlice } from '@reduxjs/toolkit'
import initialState from '../initialState'

const myState = initialState()

export const PersonalSlice = createSlice({
  name: 'personal',
  initialState: myState.personalData,
  reducers: {
    setName: (state, action) => {
      state.fName = action.payload
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setName, decrement, incrementByAmount } = PersonalSlice.actions

export default PersonalSlice.reducer