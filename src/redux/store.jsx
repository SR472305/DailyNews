import { configureStore } from "@reduxjs/toolkit";
import UserSlice from './features/NewsSilce'
import AuthSlice from './features/Authslices'
export const store = configureStore({
    reducer:{
        livenews : UserSlice,
        auth : AuthSlice
    }
})