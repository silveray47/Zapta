import React from "react";
import "./loginModal.css";
import {Formik} from "formik"
import * as Yup from "yup"
import { obj, getUser } from '../user'
import { useSelector, useDispatch } from "react-redux";


function LoginModal({ setOpenLoginModal }) {
  const userObject = useSelector(obj)
    const dispatch = useDispatch()
    const schema = Yup.object().shape({
        username: Yup.string()
        .required('Please enter username or email address')
        .email('Email address should be valid'),
        
        password: Yup.string()
        .required('Please enter password')
        .min(6, 'The Password should have at least 6 charecters')
        
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
        <Formik initialValues={{email:'', password:''}} 
            onSubmit={(values) => {alert ("your values: " + JSON.stringify(values))}}
            validationSchema={schema}
            >

                {({handleSubmit, handleChange, values, errors, touched, handleBlur}) => (
                <form onSubmit={handleSubmit} noValidate>
                    <fieldset>
                    <legend>Login</legend>
                    <label htmlFor="email">Email  </label>
                    <input 
                        type="text" 
                        name="email" 
                        id="email" 
                        placeholder="email" 
                        onChange={handleChange}
                        values={values.email}
                        onBlur={handleBlur}
                    />
                    <p>{errors.email && touched.email && errors.email}</p>

                    <br /> <br />

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

                    <br /> <br />

                    {/* footer buttons */}
                    <div className="footer">
                      <button onClick={() => {setOpenLoginModal(false)}}id="cancelBtn">Cancel</button>
                     
                    

                    <button type="submit" onClick={() => dispatch(getUser(values))}> Go! </button>
                    </div>
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
