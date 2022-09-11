import React, { useState } from 'react'
import ShowsStrip from '../ShowsStrip/ShowsStrip'
import './home.css'
import 'react-multi-carousel/lib/styles.css';
import DesingBiv from '../DesingBiv/DesingBiv'
import concertsList from '../../concerts.json'
import { Link } from 'react-router-dom'



export default function Home() {
  const [newShows, setNewShows] = useState([1,2,3,4,5,6,7])
  const [goodMusic, setGodMusic] = useState([11,12,13,14,15,16,17,18,19,10])
  return (
    <div className='home'>
      <DesingBiv title='New Shows'>
        <ShowsStrip showsList={newShows}/>
      </DesingBiv>
      <DesingBiv title='Good Music'>
        <ShowsStrip showsList={goodMusic}/>
      </DesingBiv>

      
      <div className='filer'></div>
    </div>
  )
}