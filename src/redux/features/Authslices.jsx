import { createSlice } from "@reduxjs/toolkit";
import { Home } from "lucide-react";

export const DummyUser = [
    { id: 1, username: 'raj0125', password: 'raj1234' },
    { id: 2, username: 'jay4848', password: 'jay5412' },
    { id: 3, username: 'admin01', password: 'admin47' },
    { id: 4, username: 'buuddy', password: 'buddy02' }
]

const AuthSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        error: null,
        isloggedin: false
    },

    reducers: {
        login: (state, action) => {

            const { username, password } = action.payload || {}
            const user = DummyUser.find((p)=>
                p.username === username && p.password === password            
            )
            if (user) {
                state.user = user
                state.error = null
                state.isloggedin = true
            }else{
                state.user = null
                state.error = 'Invalid user'
                state.isloggedin = false
            }
        },

        logout :(state)=>{
            state.user = null
            state.error = null
        }
    }
      
})

export const {login,logout} =  AuthSlice.actions
export default AuthSlice.reducer