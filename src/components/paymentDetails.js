import { createSlice } from "@reduxjs/toolkit";
import { date } from "yup/lib/locale";


export const paymentDetails = createSlice({
    name:'payment',
    initialState: {paymentObject: {concertId:'0', date:'', amountOfTickets:'', pricePerUnit:'', totalPrice:''}},

    reducers:{
        createPayment: (state, inputValues) => {
            console.log(inputValues.payload)
            state.paymentObject = inputValues.payload
            state.paymentObject.totalPrice = state.paymentObject.pricePerUnit * state.paymentObject.amountOfTickets
             
        },
        getPayment: (state, inputValues) => {
       
            state.paymentObject = inputValues.payload
        }
    }
})

export const {
    createPayment,
    getPayment
} = paymentDetails.actions

export const currentPayment = (state)=>state.payment.paymentObject

export default paymentDetails.reducer