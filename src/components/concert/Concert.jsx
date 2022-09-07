
import React from 'react'
import { useParams } from 'react-router-dom'
import './concert.css'
import concertsList from '../../concerts.json'
import {useState} from 'react';
import Calendar from 'react-calendar';
import LocationOnTwoToneIcon from '@mui/icons-material/LocationOnTwoTone';
import MapTwoToneIcon from '@mui/icons-material/MapTwoTone';
import DoorSlidingTwoToneIcon from '@mui/icons-material/DoorSlidingTwoTone';
import {Formik} from "formik"
import * as Yup from "yup"
import { useSelector, useDispatch } from "react-redux";
import { paymentForward, createPayment } from '../paymentDetails'


export default function Concert() {
  const {id} = useParams() 
  const currentConcert = concertsList[id-1]
  const [date, setDate] = useState(new Date())
  const concertDetails = currentConcert.details
  console.log(concertDetails)

 /*  const paymentObject = useSelector(paymentForward) */
  const dispatch = useDispatch()
    const schema = Yup.object().shape({
        date: Yup.string()
        .required('Please choose a valid date'),
        
        amount: Yup.string()
        .required('Please choose the amount of tickets')

        
    })
    
  
  return (
    <div className='concert' >

          
        <div className="image-of-concert">
          <img src={currentConcert.image} alt={currentConcert.artist} />
        </div>

          <h1> {currentConcert.artist} </h1>

          <br />
      <section className='calendar-details-wrapper'>
       
          <div className="calendar-container">
            <h3>Upcoming Performances</h3>
            <Calendar onChange={setDate} value={date}/>
          </div>

          <div className="concert-details">
            <h2 id='details-text'>Come Celebrate With {currentConcert.artist} !!!</h2>
            <br />
            <table>
              <tbody>
                <tr>
                  <td><LocationOnTwoToneIcon fontSize="large" /></td>
                  <td>{concertDetails.club}</td>
                </tr>
                <tr>
                  <td><MapTwoToneIcon fontSize="large" /></td>
                  <td>{concertDetails.address}</td>
                </tr>
                <tr>
                  <td><DoorSlidingTwoToneIcon fontSize="large" /></td>
                  <td>Doors open at {concertDetails.door_opens_at}</td>
                </tr>
              </tbody>
            </table>

            <br />

            <div>
            <Formik initialValues={{date:'...', amount:'0'}} 
            onSubmit={(values) => {alert ("your values: " + JSON.stringify(values))}}
            validationSchema={schema}
            >

                {({handleSubmit, handleChange, values, errors, touched, handleBlur}) => (
                <form onSubmit={handleSubmit} noValidate>

                  <table id="user-choises">
                    <tbody>
                      <tr>
                        <td>
                           <label htmlFor="date">When?  </label>
                        </td>

                        <td>
                            <input 
                            type="date" 
                            name="date" 
                            id="date" 
                            placeholder="date" 
                            onChange={handleChange}
                            values={values.date}
                            onBlur={handleBlur}
                            />
                        </td>

                        <td>
                        <label htmlFor="amount">How many?  </label>
                        </td>

                        <td>
                          <select name="amount" id="amount"
                                onChange={handleChange}
                                values={values.amount}
                                onBlur={handleBlur}>
                              <option value="0" selected>0</option>
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                              <option value="5">5</option>
                              <option value="6">6</option>
                              <option value="7">7</option>
                              <option value="8">8</option>
                              <option value="9">9</option>
                              <option value="10">10</option>
                          </select>   
                        </td>
                      </tr>
                      <tr>
                        <td></td>
                        <td> <p>{errors.date && touched.date && errors.date}</p></td>
                        <td></td>
                        <td><p>{errors.amount && touched.amount && errors.amount}</p></td>

                      </tr>
                      <tr >
                        <td colspan="4"> {values.amount} tickets to {currentConcert.artist} on {values.date} </td>
                    
                      </tr>
                    </tbody>
                  </table>
                   
                    
                   

                    <br /> <br />

                   
                    
                    

                    <br /> <br />

                    <button type="submit" onClick={() => dispatch(createPayment(values))}>Add To Cart </button>
                  
                </form>
                )}
                
            </Formik>
        </div>

         
 
          </div>

      </section>




    </div>
  )
}