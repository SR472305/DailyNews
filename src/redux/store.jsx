import { configureStore } from "@reduxjs/toolkit";
import UserSlice from './features/NewsSilce'
export const store = configureStore({
    reducer:{
        livenews : UserSlice
    }
})