import React from "react";
import {Formik} from "formik"
import * as Yup from "yup"
import { useSelector, useDispatch } from "react-redux";
import {usersArray , activUser,isLogedIn,addUser, setActivUser , logInUser } from '../usersSlice'
import DesingBiv from '../DesingBiv/DesingBiv'

function SignupModal({ setOpenSignupModal }) {

  const dispatch = useDispatch()
  const allUsers = useSelector (usersArray)
  const listOfUserNames =  allUsers.map((element) => element.userName)

  const ActivUser = useSelector(activUser)
  const logedin = useSelector(isLogedIn)

  
  const submition = (input)=> {
      dispatch(addUser(input))
      dispatch(setActivUser(input))
      dispatch(logInUser())
      setOpenSignupModal(false)

    }

  const userNameExsiet = (user) => {
      return ! listOfUserNames.some((element) => element === user);
    }

  const schema = Yup.object().shape({

    userName: Yup.string()
              .required('Please enter a user name')
              .test("username", "This username has already been taken", function (username){ return  userNameExsiet(username)}),

    fname: Yup.string()
              .required('Please enter your first name'),

    lname: Yup.string()
              .required('Please enter your last name'),

    email: Yup.string()
              .required('Please enter your email address')
              .email('Email address should be valid'),

    phone: Yup.string()
              .required('Please enter your mobile number'),

    address: Yup.string()
              .required('Please enter your full address'),

    password: Yup.string()
                .required('Please enter password')
                .min(6, 'The Password should have at least 6 charecters')
                .max(16, 'The Password should have at maximum of 16 charecters'),

    repeat_password: Yup.string()
                .required('Please repeat the password')
                .oneOf([Yup.ref('password'), null], 'Passwords must match'),

    birthday: Yup.date()
                .required('Please choose your birthday'),
            
    agreeToTerms: Yup
                .bool()
                .oneOf([true],"you must obey")
  })


  return (
    <div className="modalBackground">
      <DesingBiv title="Signup" size={['60%','auto']} >
        <div className="modalContainer">
          {/* body */}
          <div className="body">
            
          <Formik initialValues={{userName:'', fname:'', lname:'', email:'', phone:'', 
                                      address:'', password:'', birthday:'',agreeToTerms:false}} 
              onSubmit={(values) =>{submition(values)}}
              validationSchema={schema}
              >

                  {({handleSubmit, handleChange, values, errors, touched, handleBlur}) => (
                  <form className="modal-form" onSubmit={handleSubmit} noValidate>
                    <div className="item1">
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
                          <label htmlFor="fname">First Name  </label>
                          <input 
                              type="text" 
                              name="fname" 
                              id="fname" 
                              placeholder="First name" 
                              onChange={handleChange}
                              values={values.fname}
                              onBlur={handleBlur}
                          />
                          <p>{errors.fname && touched.fname && errors.fname}</p>

                          <br /> 

                          <label htmlFor="lname">Last Name  </label>
                          <input 
                              type="text" 
                              name="lname" 
                              id="lname" 
                              placeholder="Last name" 
                              onChange={handleChange}
                              values={values.lname}
                              onBlur={handleBlur}
                          />
                          <p>{errors.lname && touched.lname && errors.lname}</p>

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

                          <label htmlFor="repeat_password"> Repeat Password  </label>
                          <input 
                              type="password" 
                              name="repeat_password" 
                              id="repeat_password" 
                              placeholder="Repeat your password" 
                              onChange={handleChange}
                              values={values.repeat_password}
                              onBlur={handleBlur}
                          />
                          <p>{errors.repeat_password && touched.repeat_password && errors.repeat_password}</p>

                          <br /> 

                    </div>  
                    <div className="item2">
                          <label htmlFor="email">Email  </label>
                          <input 
                              type="email" 
                              name="email" 
                              id="email" 
                              placeholder="Email" 
                              onChange={handleChange}
                              values={values.email}
                              onBlur={handleBlur}
                          />
                          <p>{errors.email && touched.email && errors.email}</p>

                          <br /> 

                          
                          
                          <label htmlFor="phone">Mobile Number  </label>
                          <input 
                              type="tel" 
                              name="phone" 
                              id="phone" 
                              placeholder="Phone" 
                              onChange={handleChange}
                              values={values.phone}
                              onBlur={handleBlur}
                          />
                          <p>{errors.phone && touched.phone && errors.phone}</p>

                          <br /> 

                          <label htmlFor="address">Address  </label>
                          <input 
                              type="text" 
                              name="address" 
                              id="address" 
                              placeholder="Full address" 
                              onChange={handleChange}
                              values={values.address}
                              onBlur={handleBlur}
                          />
                          <p>{errors.address && touched.address && errors.address}</p>

                          <br /> 


                          
                          <label htmlFor="birthday"> Birthday  </label>
                          <input 
                              type="date" 
                              name="birthday" 
                              id="birthday" 
                              onChange={handleChange}
                              values={values.birthday}
                              onBlur={handleBlur}
                          />
                          <p>{errors.birthday && touched.birthday && errors.birthday}</p>

                          <br />
                    </div>
                    <div className="item3">
                          <input 
                                  type = "checkbox"
                                  name = "agreeToTerms"
                                  onChange ={handleChange}
                                  value = {values.agreeToTerms}
                                  onBlur = {handleBlur}/>
                          <span> I agree to the <a href="http://www.thereisnothinghere.com/">terms and conditions</a>   </span>
                          <p>{errors.agreeToTerms && errors.agreeToTerms} </p>

                          <br />

                          {/* footer buttons */}
                        <div className="footer">
                        <button onClick={() => {setOpenSignupModal(false)}}id="cancelBtn">Cancel</button>

                          <button type="submit"> Signup </button>
                          </div>
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

export default SignupModal;
