import { createSlice } from '@reduxjs/toolkit'
const initialState = {initialadmin:true}

export const Adminslice = createSlice({
    name: 'Admins',
    initialState,
    reducers: {},
    extraReuser:{}
})

export const { increment, decrement, incrementByAmount } = Adminslice.actions

export default Adminslice.reducer