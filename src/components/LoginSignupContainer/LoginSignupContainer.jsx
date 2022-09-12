import React from 'react';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import './loginSignupContainer.css';
import {useState} from 'react';
import LoginModal from '../LoginModal/LoginModal';
import SignupModal from '../SignupModal/SignupModal'
import { isLogedIn, activUser } from '../usersSlice'
import { useSelector } from "react-redux";
import { currentPayment } from '../paymentDetails'

export default function LoginSignupContainer() {
  const sumPayment = useSelector(currentPayment)

  const[openLoginModal, setOpenLoginModal] = useState(false)
  const[openSignupModal, setOpenSignupModal] = useState(false)
  const IslogedIn = useSelector(isLogedIn)
  const user = useSelector(activUser)
  const userName = user.userName
  return (
    <div >
      {IslogedIn? 
        <div id="wellcom">
          <div >wellcom {userName}</div>

        </div>:
        <div id='loginSignupContainer'>
          <button className='login-button' onClick={() => {setOpenLoginModal(true)}}>Login</button>
          {openLoginModal && <LoginModal 
                              setOpenSignupModal={setOpenSignupModal} 
                              setOpenLoginModal={setOpenLoginModal} />}
    
          <button className='signup-button'  onClick={() => {setOpenSignupModal(true)}}>Signup</button>
          {openSignupModal && <SignupModal setOpenSignupModal={setOpenSignupModal} />}

          {/* <Link to="/Payment"><ShoppingCartOutlinedIcon color="secondary" 
                sx={{ fontSize: 40 }} className='cartIcon'/></Link> */}
        </div> 
      }
    </div>
  )
}
