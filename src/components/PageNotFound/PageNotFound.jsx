import React from 'react'
import slapEmoji from '../../static/slap-emoji.gif'
import './pageNotFound.css'

export default function PageNotFound() {
  
  return (
    <div className='wrapper'>
        <h1>404</h1>
        <div >
        <img src={slapEmoji} alt="wait until the page loads" />
        </div>
    </div>
  )
}
