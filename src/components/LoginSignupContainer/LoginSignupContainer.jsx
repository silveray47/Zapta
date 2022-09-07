import React from 'react'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import './loginSignupContainer.css'

export default function LoginSignupContainer() {
  return (
    <div id='loginSignupContainer'>
        <Link to="/login"><button>Login</button></Link>
        <Link to="/Signup"><button>Signup</button></Link>
        <Link to="/Payment"><ShoppingCartOutlinedIcon/></Link>
      </div>
  )
}
