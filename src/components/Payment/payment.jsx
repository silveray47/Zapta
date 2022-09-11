import React from 'react'
import './payment.css'
import concertsList from '../../concerts.json'
import {Formik} from "formik"
import * as Yup from "yup"
import { useSelector, useDispatch } from "react-redux";
import { currentPayment } from '../paymentDetails'
import { activUser } from '../usersSlice'
import CardForm from "../creditCard/Form";

export default function Payment() {

 const currentUser = useSelector(activUser)
 const sumPayment = useSelector(currentPayment)
 const currentConcert = concertsList[sumPayment.concertId-1]
 const dispatch = useDispatch()

 const schema = Yup.object().shape({
 
  credit_card: Yup.number()
  .required('Please enter your credit card number'),


  exp_date: Yup.string()
  .required('Please enter the expiry date of your card'),


  cvv: Yup.string()
  .required('Please enter the 3 digits in the back of your card'),


  terms: Yup.bool()
  .oneOf([false], "you must obey!")

})
  
  return (
    
    <div className='payment-container'>
      
      <div className="purchase-conclusion-text">
        <h1>Order summary:</h1>
        <dive className="line-wrapper">
          <p> <b> {sumPayment.amountOfTickets}</b> tickets to <b>{currentConcert.artist}</b> </p>
          <p> {sumPayment.date} <b>|</b> {currentConcert.details.door_opens_at}  <b>|</b>  {currentConcert.details.address} </p>
          <p> Total: <b>{sumPayment.totalPrice} $</b ></p>
          
        </dive>
        <br /><br />
        <svg class="arrows">
              <path class="a1" d="M0 0 L30 32 L60 0"></path>
              <path class="a2" d="M0 20 L30 52 L60 20"></path>
              <path class="a3" d="M0 40 L30 72 L60 40"></path>
          </svg>
          <p><b> If all good, please countinue for payment</b></p> 
          <br />
          <svg class="arrows">
              <path class="a1" d="M0 0 L30 32 L60 0"></path>
              <path class="a2" d="M0 20 L30 52 L60 20"></path>
              <path class="a3" d="M0 40 L30 72 L60 40"></path>
          </svg>
          <br /><br />
      </div>

      <div className="purchase-conclusion-image">
          <img src={currentConcert.image}/>
      </div>

      <div className="payment-format">
            <CardForm />
      </div>

      
      
    </div>
  )
}
