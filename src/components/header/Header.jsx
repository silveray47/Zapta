import React from 'react'
import './header.css';
import LoginSignupContainer from '../LoginSignupContainer/LoginSignupContainer';
import myLogo from '../../static/zapta-ink.svg'
import willSlap from '../../static/willSlap.svg'


export default function Header() {
  
  return (
    <div id='header'>
      
      <video src='/video/ConcertFootage.mp4' autoPlay loop muted />
      <div className='logoContainer'>
        <img id='willSlap' src={willSlap} alt="gdfgdfgdfg"/>
        <img id='myLogo' src={myLogo} alt="gdfgdfgdfg"/>
      </div>
      <LoginSignupContainer/>
      
    </div>
  )
}
