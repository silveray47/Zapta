import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
    name:'users',
    initialState: {
                    aaray: [ {userName:'rayray', fname:'raymond', lname:'agarunov', 
                            email:'sheker@notreal.com', phone:'054321321', address:'jdjdjd asdiasdasda asdadsa 14', 
                            password:'Pa$$word', birthday:'01.01.2001'}], 

                    activUser:{},
                    isLogedIn:false
                } ,
    reducers:{
       
        addUser : (state , action) => {
            state.aaray.push(action.payload)
        },
        setActivUser : (state , action) =>{ 
            state.activUser = action.payload
        },
        logInUser : (state) => {
            state.isLogedIn = true
        }, 
        logOutUser : (state) => {
            state.isLogedIn = false
        } 
    }
})

export const {addUser, setActivUser , logInUser, logOutUser} = usersSlice.actions
 
export const usersArray = (state) => state.users.aaray
export const activUser = (state) => state.users.activUser
export const isLogedIn = (state) => state.users.isLogedIn

export default usersSlice.reducer