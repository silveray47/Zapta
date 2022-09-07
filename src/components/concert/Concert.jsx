
import React from 'react'
import { useParams } from 'react-router-dom'
import './concert.css'

export default function Concert() {
  const {id} = useParams() 

  return (
    <div className='concert' >
      <h1> This is the page for {id} </h1>
        
    </div>
  )
}