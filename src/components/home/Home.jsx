import React, { useState } from 'react'
import ShowsStrip from '../ShowsStrip/ShowsStrip'
import './home.css'
import 'react-multi-carousel/lib/styles.css';
import DesingBiv from '../DesingBiv/DesingBiv'


export default function Home() {
  const [newShows, setNewShows] = useState([1,2,3,4,5,6,7])
  const [godMusic, setGodMusic] = useState([1,2,3,4,5,6,7,8,9,10])
  return (
    <div className='home'>
      <DesingBiv title='New Shows'>
        <ShowsStrip />
      </DesingBiv>
      <DesingBiv title='God Music'>
        <ShowsStrip />
      </DesingBiv>
      <div className='filer'></div>

    </div>
  )
}