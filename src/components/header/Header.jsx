import React from 'react'
import './header.css';
import { Link } from 'react-router-dom'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LoginSignupContainer from '../LoginSignupContainer/LoginSignupContainer';

export default function Header() {
  return (
    <div id='header'>
      {/* <video src=''autoPlay loop muted/> */}
      <LoginSignupContainer/>
      
    </div>
  )
}
