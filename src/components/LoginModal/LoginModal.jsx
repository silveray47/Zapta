import React, { useState } from "react";
import "./loginModal.css";
import {Formik} from "formik"
import * as Yup from "yup"
import {usersArray , setActivUser , logInUser } from '../usersSlice'
import { useSelector, useDispatch } from "react-redux";
import DesingBiv from '../DesingBiv/DesingBiv'


function LoginModal({ setOpenLoginModal , setOpenSignupModal}) {
  const dispatch = useDispatch()
  const allUsers = useSelector (usersArray)
  
  const listOfUserNames =  allUsers.map((element) => element.userName)
  let passCheck = true

  function submition(values){
    const tempUser =allUsers.find(el => el.userName === values.userName)
    if (tempUser) {
        if(values.password === tempUser.password){
            passCheck = true
            dispatch(setActivUser(tempUser))
            dispatch(logInUser())
            setOpenLoginModal(false)
        }
        else{
            passCheck = false
        }
    }    
  }

  const SwitchToSignup = () =>{
    setOpenLoginModal(false)
    setOpenSignupModal(true)
  }


  const schema = Yup.object().shape({ 
    userName: Yup.string()
                 .required('plese enther a user name ')
                 .oneOf(listOfUserNames, 'the user name does not exist'),

    password: Yup.string()
                 .required()
        }) 

  return (
    <div className="modalBackground">
      <DesingBiv title="Login" >
        <div className="modalContainer">
          {/* body */}
          <div className="body">
          <Formik initialValues={{userName:'',  password:' '}} 
                  onSubmit={(values) =>{submition(values)}}
                  validationSchema={schema} >

                  {({handleSubmit, handleChange, values, errors, touched, handleBlur}) => (
                  <form onSubmit={handleSubmit} noValidate>
                      <label htmlFor="userName">Username  </label>
                          <input 
                              type="text" 
                              name="userName" 
                              id="userName" 
                              placeholder="username" 
                              onChange={handleChange}
                              values={values.userName}
                              onBlur={handleBlur}
                          />
                          <p>{errors.userName && touched.userName && errors.userName}</p>

                          <br /> 

                          <label htmlFor="password">Password  </label>
                          <input 
                              type="password" 
                              name="password" 
                              id="password" 
                              placeholder="Password" 
                              onChange={handleChange}
                              values={values.password}
                              onBlur={handleBlur}
                          />
                          <p>{!passCheck && touched.password && "wrong password"}</p>
                          <br /> 
                          <span> Forgat your password? <a href="http://www.thereisnothinghere.com/">click hear</a></span>
                          <br/> <br/>
                              {/* footer buttons */}
                          <div className="modal-footer">
                            <button id="cancelBtn" onClick={() => {setOpenLoginModal(false)}}>Cancel</button>
                            <button type="submit" > Login </button>
                            <br/> <br/>
                            <span>Not registert? join us </span>
                            <a onClick={() =>  {SwitchToSignup()}}>Signup</a> 
                          </div>
                  </form>
                  )}
              </Formik>
          </div>
        </div>
      </DesingBiv>
    </div>
  );
}

export default LoginModal;
