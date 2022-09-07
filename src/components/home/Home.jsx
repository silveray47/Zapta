import React, { useState } from 'react'
import ShowsStrip from '../ShowsStrip/ShowsStrip'
import './home.css'

export default function Home() {
  const [newShows, setNewShows] = useState(['nina','omerAdam','idanHaviv','yvalDayan'])
  const [godMusic, setGodMusic] = useState(['tamir','machina','charchOfTheMind'])
  return (
    <div className='home'>

      <div id='cards'>
        <div className='ShowsStripContainer'>
          <ShowsStrip clasName='ShowsStrip' showList={newShows} />
        </div>
        <div className='ShowsStripContainer'>
          <ShowsStrip clasName='ShowsStrip' showList={godMusic} />
        </div>
      </div>
    </div>
  )
}
