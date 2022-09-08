import { createSlice } from "@reduxjs/toolkit";

export const activUser = createSlice({
    name:'activUser',
    initialState: { isLogedIn:false,
                    activUserDetails: {userName:'', fname:'', lname:'', 
                                        email:'', phone:'', address:'', 
                                        password:'', birthday:'', terms:''}},

    reducers:{
        setActivUser: (state, inputValues) => {
            state.activUserDetails = inputValues.payload
        },
        loginUser: (state ) => {
            state.isLogedIn = true
        },
        logoutUser: (state ) => {
            state.isLogedIn = false
        }
    }
})

export const {
    setActivUser,
    loginUser,
    logoutUser
} = activUser.actions

export const activUserDetails = (state)=>state.activUser.activUserDetails
export const isLogedIn = (state)=>state.activUser.isLogedIn

export default activUser.reducer