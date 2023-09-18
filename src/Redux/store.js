import { configureStore } from '@reduxjs/toolkit' 
import home from './HomeSlice'
import admin from './Adminslice'
const store = configureStore({
    reducer:{home , admin}
})
export default store