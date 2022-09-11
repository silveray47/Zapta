import React from "react";
import "./loginModal.css";
import {Formik} from "formik"
import * as Yup from "yup"
import {usersArray , setActivUser , logInUser } from '../usersSlice'
import { useSelector, useDispatch } from "react-redux";


function LoginModal({ setOpenLoginModal }) {
  const dispatch = useDispatch()
  const allUsers = useSelector (usersArray)
  const listOfUserNames =  allUsers.map((element) => element.userName)
  let passCheck = false

  function submition(input){
    const tempUser =allUsers.find(el => el.userName === input.userName)
    if (tempUser) {
        if(input.password === tempUser.password){
            passCheck = true
            dispatch(setActivUser(tempUser))
            dispatch(logInUser())
        }
        else{
            passCheck = false
        }
    }    
  }

  const schema = Yup.object().shape({ 
    userName: Yup.string()
                 .required('plese enther a user name ')
                 .oneOf(listOfUserNames, 'the user name does not exist'),

    password: Yup.string()
                 .required()
                 .test("password", "wrong password", () =>(passCheck) ),
        }) 

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        
        {/* close button */}
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenLoginModal(false);
            }}
          >
            X
          </button>
        </div>

            {/* title */}
        <div className="title">
          <h1>Login</h1>
        </div>

        {/* body */}
        <div className="body">
        <Formik initialValues={{userName:'',  password:' '}} 
                onSubmit={(values) =>{submition(values)}}
                validationSchema={schema} >

                {({handleSubmit, handleChange, values, errors, touched, handleBlur}) => (
                <form onSubmit={handleSubmit} noValidate>
                    <fieldset>
                    <legend>Register</legend>
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
                        <p>{errors.password && touched.password && errors.password}</p>
                        <br /> 

                        <button type="submit" onClick={submition(values)}> Login </button>
                    </fieldset>
                </form>
                )}
            </Formik>
        </div>
      </div>
    </div>
  );
}

export default LoginModal;
