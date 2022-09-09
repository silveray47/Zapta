import React from 'react'
import './card.css'
export default function Card({showId}) {
  return (
    <div id ='card'>
        <p>{showId}</p>
    </div>
  )
}
