
import React from 'react'
import { useParams } from 'react-router-dom'
import './concert.css'
import concertsList from '../../concerts.json'

export default function Concert() {
  const {id} = useParams() 
  const currentConcert = concertsList[id-1]
  return (
    <div className='concert' >
      <h1> This is the page for {currentConcert.artist} </h1>
      <div className="image-of-concert">
        <img src={currentConcert.image} alt={currentConcert.artist} />
      </div>
        
    </div>
  )
}