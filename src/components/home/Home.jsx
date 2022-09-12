import React, { useState } from 'react'
import ShowsStrip from '../ShowsStrip/ShowsStrip'
import './home.css'
import 'react-multi-carousel/lib/styles.css';
import DesingBiv from '../DesingBiv/DesingBiv'
import concertsList from '../../concerts.json'
import { Link } from 'react-router-dom'



export default function Home() {
  const [newShows, setNewShows] = useState([1,2,3,4,5,6,7])
  const [goodMusic, setGodMusic] = useState([11,12,13,14,18,19,10])
  const [HaveMetal, setHaveMetal] = useState([15,2,6,8,19,20,16])
  const [PopAndRock, setPopAndRock] = useState([1,9,10,15,13])
  const [RandB, setRandB] = useState([20,18,16,13])
  const [Dance, setDance] = useState([6,4,9,17,2,5,14])
  return (
    <div className='home'>
      <DesingBiv size={['90%','auto']} title='New Shows' >
        <ShowsStrip showsList={newShows}/>
      </DesingBiv>
      <DesingBiv size={['90%','auto']} title='Good Music'>
        <ShowsStrip showsList={goodMusic}/>
      </DesingBiv>
      <DesingBiv size={['90%','auto']} title='Have Metal'>
        <ShowsStrip showsList={HaveMetal}/>
      </DesingBiv>
      <DesingBiv size={['90%','auto']} title='Pop and Rock'>
        <ShowsStrip showsList={PopAndRock}/>
      </DesingBiv>
      <DesingBiv size={['90%','auto']} title='R&B'>
        <ShowsStrip showsList={RandB}/>
      </DesingBiv>

    </div>
  )
}