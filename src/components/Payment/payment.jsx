import React from 'react'
import './payment.css'
import concertsList from '../../concerts.json'
import {Formik} from "formik"
import * as Yup from "yup"
import { useSelector, useDispatch } from "react-redux";
import { currentPayment } from '../paymentDetails'
import { activUser } from '../usersSlice'

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
      <h1>payment</h1>
      <h2>give us your money</h2>

      <br /> <br />

      <div className="purchase-conclusion">
          <img src={currentConcert.image}/>
          <br />
          <p> {sumPayment.amountOfTickets} tickets to {currentConcert.artist}  | {sumPayment.date} </p>
          <p> Total: {sumPayment.totalPrice} $</p>
      </div>

      <div className="payment-details-section">
         <Formik initialValues={{ credit_card:'', exp_date:'', cvv:'', terms:''}}
                                 
            onSubmit={(values) => {alert ("your values: " + JSON.stringify(values))}}
            validationSchema={schema}
            >
                {({handleSubmit, handleChange, values, errors, touched, handleBlur}) => (
                <form onSubmit={handleSubmit} noValidate>
                    
                        
                        {/* credit_card:'', exp_date:'', cvv */}
                        <label htmlFor="credit_card">Credit Card  </label>
                        <input 
                            type="number" 
                            name="addcredit_cardress" 
                            id="credit_card" 
                            placeholder="0000 0000 0000 0000" 
                            onChange={handleChange}
                            values={values.credit_card}
                            onBlur={handleBlur}
                        />
                        <p>{errors.credit_card && touched.credit_card && errors.credit_card}</p>

                        
                        <br />
                          
                        <label htmlFor="exp_date">Expiry Date  </label>
                        <input 
                            type="text" 
                            name="exp_date" 
                            id="exp_date" 
                            placeholder="exp_date" 
                            onChange={handleChange}
                            values={values.exp_date}
                            onBlur={handleBlur}
                        />
                        <p>{errors.exp_date && touched.exp_date && errors.exp_date}</p>

                        
                        <br />

                        <label htmlFor="cvv">CVV </label>
                        <input 
                            type="text" 
                            name="cvv" 
                            id="cvv" 
                            placeholder="cvv" 
                            onChange={handleChange}
                            values={values.cvv}
                            onBlur={handleBlur}
                        />
                        <p>{errors.cvv && touched.cvv && errors.cvv}</p>
                        
                        <br />

                        <input 
                            type="checkbox" 
                            name="terms" 
                            id="terms" 
                            onChange={handleChange}
                            values={values.terms}
                            onBlur={handleBlur}
                        /> <label htmlFor="terms"> I agree to the <a href="http://www.thereisnothinghere.com/">terms and conditions</a>   </label>
                        <p>{errors.terms && touched.terms && errors.terms}</p>

                    <br /> <br />

                    <button type="submit" /* onClick={() => dispatch(commitPurchase(values))} */> Go! </button>
                    
                </form>
                )}
                
            </Formik>
      </div>
      
      

              
        
      
        
               

              
         


     
    </div>
  )
}
