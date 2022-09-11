import React, { useState } from 'react'
import ShowsStrip from '../ShowsStrip/ShowsStrip'
import './home.css'
import 'react-multi-carousel/lib/styles.css';
import DesingBiv from '../DesingBiv/DesingBiv'
import concertsList from '../../concerts.json'
import { Link } from 'react-router-dom'



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

      <div>
          <h1>Come to Zappta ! </h1> <br />
          <div className="inner">
            {
              concertsList && concertsList.map( (concert,index) => {
                return(
                  <div key={index} className="box">


                    
                    <Link to={"/Concert/"+concert.id}><img src={concert.image}/></Link>
                    <br />

                    {concert.artist}
                    
                  </div>
                )

              })
            }
           </div>
      </div>


    </div>
  )
}