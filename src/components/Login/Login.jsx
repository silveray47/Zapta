import {Formik} from "formik"
import * as Yup from "yup"
import './login.css';
import { obj, getUser } from '../user'
import { useSelector, useDispatch } from "react-redux";
import concertsList from '../../concerts.json'

const Login = () => {
    const userObject = useSelector(obj)
    const schema = Yup.object().shape({
        username: Yup.string()
        .required('Please enter username or email address')
        .email('Email address should be valid'),
        
        password: Yup.string()
        .required('Please enter password')
        .min(6, 'The Password should have at least 6 charecters')
        
    })
    const dispatch = useDispatch()

    return (
        <div>
             <h1>Come to Zappta ! </h1> <br />
            
           <div className="inner">
            {
                concertsList && concertsList.map( concert => {
                return(
                    <div className="box">
                        <img src={concert.image}  />
                        <br />

                        {concert.artist}

    
                    </div>
                )

                })
            }
           </div>


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

                    <button type="submit" onClick={() => dispatch(getUser(values))}> Go! </button>
                    </fieldset>
                </form>
                )}
                
            </Formik>
        </div>
        
    )

}




export default Login