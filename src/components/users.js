import { createSlice } from "@reduxjs/toolkit";

export const userDetails = createSlice({
    name:'user',
    initialState:{
        users: [
                {userName:'rayray', fname:'raymond', lname:'agarunov', 
                email:'sheker@notreal.com', phone:'054321321', address:'jdjdjd asdiasdasda asdadsa 14', 
                password:'Pa$$word', birthday:'01.01.2001', terms:''}
                ]
            },

    reducers:{
        createUser: (state, inputValues) => {
            state.users.push(inputValues.payload)
        },
        
        getUser: (state, UID) => {
            // console.log(inputValues.payload)
            //need to change next line to pull user out of JSON file
            // state.obj = inputValues.payload
            const chosenUser = state.users.find(element => element.userName === UID)
            return chosenUser 
        }
    }
})

export const {
    createUser,
    getUser
} = userDetails.actions

export const obj = (state)=>state.user.users

export default userDetails.reducer