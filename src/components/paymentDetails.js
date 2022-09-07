import { createSlice } from "@reduxjs/toolkit";

export const paymentDetails = createSlice({
    name:'payment',
    initialState: {paymentObject: {date:'', amount:''}},

    reducers:{
        createPayment: (state, inputValues) => {
            console.log(inputValues.payload)
            state.paymentObject = inputValues.payload
        },
        getPayment: (state, inputValues) => {
            console.log(inputValues.payload)
            state.paymentObject = inputValues.payload
        }
    }
})

export const {
    createPayment,
    getPayment
} = paymentDetails.actions

export const paymentForward = (state)=>state.payment.paymentObject

export default paymentDetails.reducer