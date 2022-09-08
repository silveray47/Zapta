import React from 'react'
import './header.css';
import LoginSignupContainer from '../LoginSignupContainer/LoginSignupContainer';
// import myLogo from '../../static/zapta-ink.svg'
import logo from '../../static/zapta.png'


export default function Header() {
  
  return (
    <div id='header'>
      
      <video src='/video/Concert Stock Footage .mp4' autoPlay loop muted />
      <img id='header-logo' src={logo} alt="gdfgdfgdfg"/>
      {/* <img src={myLogo} alt="gdfgdfgdfg" width={400} /> */}
      <LoginSignupContainer/>
      
    </div>
  )
}
