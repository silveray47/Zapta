import { createSlice } from "@reduxjs/toolkit";

export const userDetails = createSlice({
    name:'user',
    initialState: {obj: {userName:'', fname:'', lname:'', 
                        email:'', phone:'', address:'', 
                        password:'', birthday:'', terms:''}},

    reducers:{
        createUser: (state, inputValues) => {
            console.log(inputValues.payload)
            state.obj = inputValues.payload
        },
        getUser: (state, inputValues) => {
            console.log(inputValues.payload)
            //need to change next line to pull user out of JSON file
            state.obj = inputValues.payload
        }
    }
})

export const {
    createUser,
    getUser
} = userDetails.actions

export const obj = (state)=>state.user.obj

export default userDetails.reducer