import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import LoginSingupContainer from '../LoginSignupContainer/LoginSignupContainer';
import './navbar.css'
import smalLogo from '../../static/zapta.png'

export default function Navbar({isChanged}) {
  console.log(isChanged);
  return (
    <div className={isChanged?'navbar activ':'navbar'}>
       {isChanged && <img id='smalLogo' src={smalLogo} alt="gdfgdfgdfg"/>}
      <nav >
        <ul>
          <li>
            <NavLink to='/'>Home  </NavLink>
          </li>
          <li>
            <NavLink to='/NewShows'> New-shows  </NavLink>
          </li>
          <li>
            <NavLink to='/GiftCards'> Gift cards   </NavLink>
          </li>
          <li>
            <NavLink to='/Gallery'> Gallery  </NavLink>
          </li>
          <li>
            <NavLink to='/About'> About  </NavLink>
          </li>
          <li>
            <NavLink to='/Contact'> Contact  </NavLink>
          </li>
        </ul>
      </nav>
      {isChanged && <LoginSingupContainer/>}
    </div>
  )
}
