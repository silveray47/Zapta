import React from 'react';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import './loginSignupContainer.css';
import {useState} from 'react';
import LoginModal from '../LoginModal/LoginModal';
import SignupModal from '../SignupModal/SignupModal'


export default function LoginSignupContainer() {

  const[openLoginModal, setOpenLoginModal] = useState(false)
  const[openSignupModal, setOpenSignupModal] = useState(false)

  return (
    <div id='loginSignupContainer'>
        <button className='login-signup-custom-btn login-signup-btn-3' onClick={() => {setOpenLoginModal(true)}}><span>Login</span> </button>
        {openLoginModal && <LoginModal setOpenLoginModal={setOpenLoginModal} />}
  
        <button className='login-signup-custom-btn login-signup-btn-3'  onClick={() => {setOpenSignupModal(true)}}><span>Signup</span></button>
        {openSignupModal && <SignupModal setOpenSignupModal={setOpenSignupModal} />}

{/* 
        <Link to="/Payment"><ShoppingCartOutlinedIcon className='cartIcon'/></Link>
          */}
    </div>
  )
}
