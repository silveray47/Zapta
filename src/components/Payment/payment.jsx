import React from 'react'
import './payment.css'
import concertsList from '../../concerts.json'
import {Formik} from "formik"
import * as Yup from "yup"
import { useSelector, useDispatch } from "react-redux";
import { currentPayment } from '../paymentDetails'



export default function Payment() {

 const sumPayment = useSelector(currentPayment)
 const currentConcert = concertsList[sumPayment.concertId-1]
 const dispatch = useDispatch()

 const schema = Yup.object().shape({
 
  fname: Yup.string()
  .required('Please enter your first name'),

  lname: Yup.string()
  .required('Please enter your last name'),

  email: Yup.string()
  .required('Please enter your email address')
  .email('Email address should be valid'),

  phone: Yup.string()
  .required('Please enter your mobile number'),

  address: Yup.string()
  .required('Please enter your full address'),

  credit_card: Yup.string()
  .required('Please enter your credit card number'),


  exp_date: Yup.string()
  .required('Please enter the expiry date of your card'),


  cvv: Yup.string()
  .required('Please enter the 3 digits in the back of your card')


 // terms: 

})
  
  return (
    <div className='payment-container'>
      <h1>payment</h1>
      <h2>give us your money</h2>

      <br /> <br />

      <div className="purchase-conclusion">
          <img src={currentConcert.image}/>
          <br />
          <p> {sumPayment.amountOfTickets} tickets to {currentConcert.artist} </p>
          <p> Total: {sumPayment.totalPrice} $</p>
      </div>

      <div className="payment-details-section">
         <Formik initialValues={{fname:'', lname:'', email:'', phone:'', address:'', 
                                credit_card:'', exp_date:'', cvv:'', terms:''}} 
            onSubmit={(values) => {alert ("your values: " + JSON.stringify(values))}}
            validationSchema={schema}
            >
                {({handleSubmit, handleChange, values, errors, touched, handleBlur}) => (
                <form onSubmit={handleSubmit} noValidate>
                    
                        <label htmlFor="fname">First Name  </label>
                        <input 
                            type="text" 
                            name="fname" 
                            id="fname" 
                            placeholder="First name" 
                            onChange={handleChange}
                            values={values.fname}
                            onBlur={handleBlur}
                        />
                        <p>{errors.fname && touched.fname && errors.fname}</p>

                        <br /> 

                        <label htmlFor="lname">Last Name  </label>
                        <input 
                            type="text" 
                            name="lname" 
                            id="lname" 
                            placeholder="Last name" 
                            onChange={handleChange}
                            values={values.lname}
                            onBlur={handleBlur}
                        />
                        <p>{errors.lname && touched.lname && errors.lname}</p>

                        <br />

                        <label htmlFor="email">Email  </label>
                        <input 
                            type="email" 
                            name="email" 
                            id="email" 
                            placeholder="Email" 
                            onChange={handleChange}
                            values={values.email}
                            onBlur={handleBlur}
                        />
                        <p>{errors.email && touched.email && errors.email}</p>

                        <br /> 
                        
                        <label htmlFor="phone">Mobile Number  </label>
                        <input 
                            type="tel" 
                            name="phone" 
                            id="phone" 
                            placeholder="Phone" 
                            onChange={handleChange}
                            values={values.phone}
                            onBlur={handleBlur}
                        />
                        <p>{errors.phone && touched.phone && errors.phone}</p>

                        <br /> 

                        <label htmlFor="address">Address  </label>
                        <input 
                            type="text" 
                            name="address" 
                            id="address" 
                            placeholder="Full address" 
                            onChange={handleChange}
                            values={values.address}
                            onBlur={handleBlur}
                        />
                        <p>{errors.address && touched.address && errors.address}</p>

                        <br /> 
                        {/* credit_card:'', exp_date:'', cvv */}
                        <label htmlFor="credit_card">credit_card  </label>
                        <input 
                            type="text" 
                            name="addcredit_cardress" 
                            id="credit_card" 
                            placeholder="0000 0000 0000 0000" 
                            onChange={handleChange}
                            values={values.credit_card}
                            onBlur={handleBlur}
                        />
                        <p>{errors.credit_card && touched.credit_card && errors.credit_card}</p>

                        
                        <br />
                          
                        <label htmlFor="exp_date">exp_date  </label>
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

                        <label htmlFor="cvv">cvv  </label>
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