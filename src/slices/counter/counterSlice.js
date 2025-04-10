import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
      console.log(state);
      
    },
    decrement: (state) => {
      if( state.value <= 0 ){
        state.value = 0
        alert("Value can not be negative.")
      }else{
        state.value -= 1
      }
    },
    multiple: (state) => {
      state.value *= 2
    },
    divided: (state) => {
      state.value /= 2
    },
  },
})

export const { increment, decrement, multiple, divided } = counterSlice.actions

export default counterSlice.reducer