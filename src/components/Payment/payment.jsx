import React from 'react'
import './payment.css'
import { Link, useParams } from 'react-router-dom'
import concertsList from '../../concerts.json'
import {useState} from 'react';
import {Formik} from "formik"
import * as Yup from "yup"
import { useSelector, useDispatch } from "react-redux";

import { currentPayment } from '../paymentDetails'



export default function Payment() {

 const sumPayment = useSelector(currentPayment)
 const currentConcert = concertsList[sumPayment.concertId-1]
 
  
  return (
    <div className='payment-container'>
      <h1>payment</h1>

      
     
    </div>
  )
}
