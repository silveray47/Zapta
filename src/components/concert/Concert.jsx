
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
    <div className='concert' >

          
        <div className="image-of-concert">
          <img src={currentConcert.image} alt={currentConcert.artist} />
        </div>

          <h1> {currentConcert.artist} </h1>

          <br />
      <section className='calendar-details-wrapper'>
       
          <div className="calendar-container">
            <h3>Upcoming Performances</h3>
            <Calendar onChange={setDate} value={date} onClickDay={() => setShowTime(true)}/>
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
                        <td>
                        <label htmlFor="amountOfTickets">How many?  </label>
                        </td>

                        <td>
                        <select name="amountOfTickets" id="amountOfTickets"
                                onChange={handleChange}
                                values={values.amountOfTickets}
                                onBlur={handleBlur}>
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
                        {/* date.length > 0 ? (
                            <p>
                              <span>Start:</span>
                              {date[0].toDateString()}
                              &nbsp;
                              &nbsp;
                              <span>End:</span>{date[1].toDateString()}
                            </p>
                                    ) : ( */
                            <p>
                                <span>Show is on </span>{date.toDateString()}. {values.amountOfTickets} tickets to {currentConcert.artist}.
                            </p> 
                            /* ) */
                                    
                            }
                        {/*     <Time showTime={showTime} date={date}/>  */}
        
                        </td> 

                      </tr>
                      <tr>
                        
                        <td colSpan="2">
                            
                            <Link to='/Payment'>
                               <button type="submit" onClick={() =>sendDate(values)}>Checkout </button>
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
  )
}