import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../card/Card';


export default function ShowsStrip( {showList}) {
    const Shows = [...showList]

    return (
        Shows.map((show,index)=>
        <Link key={index} to={'/Concert/'+Object.values(show).join('')}> {/* ==> ? WTF*/ }
            <Card showId={show}></Card>
        </Link>

        )

  )
}
