import React from 'react'
import { Link } from 'react-router-dom'
import LoginSingupContainer from '../LoginSignupContainer/LoginSignupContainer';
import './navbar.css'

export default function Navbar({isChanged}) {
  console.log(isChanged);
  return (
    <div className={isChanged?'Navbar activ':'Navbar'}>
      <nav >
        <ul>
          <li>
            <Link to='/'>Home  </Link>
          </li>
          <li>
            <Link to='/NewShows'> New-shows  </Link>
          </li>
          <li>
            <Link to='/GiftCards'> Gift cards   </Link>
          </li>
          <li>
            <Link to='/Gallery'> Gallery  </Link>
          </li>
          <li>
            <Link to='/About'> About  </Link>
          </li>
          <li>
            <Link to='/Contact'> Contact  </Link>
          </li>
        </ul>
      </nav>
      {isChanged && <LoginSingupContainer/>}
    </div>
  )
}
