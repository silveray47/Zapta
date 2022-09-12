
import React from 'react'
import { Link, useParams } from 'react-router-dom'
import './concert.css'
import concertsList from '../../concerts.json'
import {useState} from 'react';
import Calendar from 'react-calendar';
import LocationOnTwoToneIcon from '@mui/icons-material/LocationOnTwoTone';
import MapTwoToneIcon from '@mui/icons-material/MapTwoTone';
import DoorSlidingTwoToneIcon from '@mui/icons-material/DoorSlidingTwoTone';
import LocalOfferTwoToneIcon from '@mui/icons-material/LocalOfferTwoTone';
import {Formik} from "formik"
import * as Yup from "yup"
import { useSelector, useDispatch } from "react-redux";
import { createPayment } from '../paymentDetails'
import DesingBiv from "../DesingBiv/DesingBiv";



export default function Concert() {
  
  const {id} = useParams() 
  const currentConcert = concertsList[id-1]
  const [date, setDate] = useState(new Date())
  const concertDetails = currentConcert.details
  const [showTime, setShowTime] = useState(false) 
 

  /* const paymentObject = useSelector(paymentForward) */
  const dispatch = useDispatch()
    const schema = Yup.object().shape({
        date: Yup.string()
        .required('Please choose a valid date'),
        
        amountOfTickets: Yup.string()
        .required('Please choose the amount of tickets')

        
    })

  const sendDate = (dataValues) =>{
    dataValues.date = date.toDateString();
    dispatch(createPayment(dataValues))
  }
  
  return (
   <DesingBiv title={currentConcert.artist}>
    <div className='concert' >

          
        <div className="image-of-concert">
          <img src={currentConcert.image} alt={currentConcert.artist} />
        </div>


      <section className='calendar-details-wrapper'>
       
          <div className="calendar-container">
            <h2 className='concert-heading'>Upcoming Performances</h2>
            <h5>Please choose the date of the concert</h5>
            <Calendar onChange={setDate} value={date} onClickDay={() => setShowTime(true)}/>
            <p>* Due to lack of time, at the moment you can freely choose any date. {currentConcert.artist} will perform every night!  :) </p>
          </div>

          
          <div className="concert-details">
            <h2 className='concert-heading' id='details-text'>{currentConcert.artist} - Concert details</h2>
            
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
                <tr>
                  <td><LocalOfferTwoToneIcon fontSize="large" /></td>
                  <td>Price: {currentConcert.price}</td>
                </tr>

                
              </tbody>
            </table>

            <br />

            <div>
            <Formik initialValues={{concertId: currentConcert.id, date: '', amountOfTickets:'0', pricePerUnit:currentConcert.price, totalPrice:''}} 
            onSubmit={(values) => {alert ("your values: " + JSON.stringify(values))}}
            validationSchema={schema}
            >

                {({handleSubmit, handleChange, values, errors, touched, handleBlur}) => (
                <form onSubmit={handleSubmit} noValidate>

                  <table id="user-choises">
                    <tbody>
                      <tr>
                        <td style={{textAlign:"center"}}>
                        <label htmlFor="amountOfTickets" >How many?  </label>
                        </td>

                        <td>
                        <select name="amountOfTickets" id="amountOfTickets"
                                onChange={handleChange}
                                values={values.amountOfTickets}
                                onBlur={handleBlur}
                                style={{width:"90px"}}>
                              <option value="0" defaultValue={0}>0</option>
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
                        <td>
                        

                        </td>
                        
                        <td colSpan="2"><p>{errors.amountOfTickets && touched.amountOfTickets && errors.amountOfTickets}</p></td>

                      </tr>
                      <tr >
                           
                        <td colSpan="2">
                      
                            <p className='sumUpOrder'><span>Show is on </span>{date.toDateString()}. </p>
                            <p className='sumUpOrder'>{values.amountOfTickets} tickets to {currentConcert.artist}.</p> 
                             
                            
                            
                               
                            
                           
                        </td> 

                      </tr>
                      <tr>
                        
                        <td colSpan="2">
                            
                            <Link to='/Payment'>
                         
                               <button type="submit" className='checkout-custom-btn checkout-btn-3'onClick={() =>sendDate(values)}><span>Checkout</span></button>
                            </Link>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                
                    <br /> <br />

                </form>
                )}
                
            </Formik>
        </div>

         
 
          </div>

      </section>




    </div>
    </DesingBiv>
  )
}