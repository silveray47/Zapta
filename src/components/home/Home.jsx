import React, { useState } from 'react'
import ShowsStrip from '../ShowsStrip/ShowsStrip'
import './home.css'
import concertsList from '../../concerts.json'
import { Link } from 'react-router-dom'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


export default function Home() {
  const [newShows, setNewShows] = useState(['nina','omerAdam','idanHaviv','yvalDayan'])
  const [godMusic, setGodMusic] = useState(['tamir','machina','charchOfTheMind'])
  return (
    <div className='home'>

      <ShowsStrip />


      
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

      {/* <div id='cards'>
        <div className='ShowsStripContainer'>
          <ShowsStrip clasName='ShowsStrip' showList={newShows} />
        </div>
        <div className='ShowsStripContainer'>
          <ShowsStrip clasName='ShowsStrip' showList={godMusic} />
        </div>
      </div> */}
    </div>
  )
}
