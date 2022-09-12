import React, { useRef, useEffect } from 'react'
import { useSpring, animated, to } from '@react-spring/web'
import { useGesture } from 'react-use-gesture'
import concertsList from '../../concerts.json'

import styles from './ccard.css'

const calcX = (y, ly) => -(y - ly - window.innerHeight / 2) / 20
const calcY = (x, lx) => (x - lx - window.innerWidth / 2) / 20


export default function Ccard({id}) {
  const currentConcert = concertsList[id-1]
  const domTarget = useRef(null)
  const [{ x, y, rotateX, rotateY, rotateZ, zoom, scale }, api] = useSpring(
    () => ({
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
      scale: 1,
      zoom: 0,
      x: 0,
      y: 0,
      config: { mass: 1, tension: 170, friction: 26 , clamp: false, precision: 0.01, velocity: 0},
    })
  )

  useGesture(
    {
     
      onMove: ({ xy: [px, py] }) =>
      api({
        rotateX: calcX(py, y.get()),
        rotateY: calcY(px, x.get()),
        scale: 1.1,
      }),
        
      onHover: ({ hovering }) =>
        !hovering && api({ rotateX: 0, rotateY: 0, scale: 1 }),
    
    },
    { domTarget, eventOptions: { passive: false } }
  )



  return (
    <div className="poster-card-container" >

        <animated.div
        ref={domTarget}
        className="poster-card"
        style={{
          transform: 'perspective(600px)',
          x,
          y,
          scale: to([scale, zoom], (s, z) => s + z),
          rotateX,
          rotateY,
          rotateZ,
        }}>
        <img className='poster' src={currentConcert.poster} alt={currentConcert.artist} />
      </animated.div>
    </div>
  );
}
