import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import LoginSingupContainer from '../LoginSignupContainer/LoginSignupContainer';
import './navbar.css'
import smalLogo from '../../static/zapta.png'
import myLogo from '../../static/zapta-ink.svg'


export default function Navbar({isChanged}) {
  return (
    <div className={isChanged?'navbar activ':'navbar'}>
      <img id='smalLogo' src={myLogo} alt="myLogo"/>
      <nav >
        <ul>
          <li>
            <NavLink style={({isActive}) => { return isActive?{color:'#E94560'}:{}}} to='/'>Home  </NavLink>
          </li>
          {/* <li>
            <NavLink style={({isActive}) => { return isActive?{color:'#E94560'}:{}}} to='/NewShows'> New-shows  </NavLink>
          </li> */}
          <li>
            <NavLink style={({isActive}) => { return isActive?{color:'#E94560'}:{}}} to='/GiftCards'> Gift cards   </NavLink>
          </li>
          <li>
            <NavLink style={({isActive}) => { return isActive?{color:'#E94560'}:{}}} to='/Gallery'> Gallery  </NavLink>
          </li>
          <li>
            <NavLink  style={({isActive}) => { return isActive?{color:'#E94560'}:{}}} to='/About'> About  </NavLink>
          </li>
          <li>
            <NavLink style={({isActive}) => { return isActive?{color:'#E94560'}:{}}} to='/Contact'> Contact  </NavLink>
          </li>
        </ul>
      </nav>
      {isChanged && <LoginSingupContainer/>}
    </div>
  )
}
