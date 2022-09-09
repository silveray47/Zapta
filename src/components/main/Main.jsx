import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from '../home/Home';
import Concert from '../Concert/Concert'
import Login from '../Login/Login';
import Signup from '../signup/Signup';
import PageNotFound from '../PageNotFound/PageNotFound';
import Payment from '../Payment/payment';


 const Main = () => {

  return (
    <div>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/Concert/:id' element = {<Concert/>}/>
        <Route path='/login' element ={<Login/>}/>
        <Route path='/Signup' element ={<Signup/>}/>
        <Route path='/Payment' element ={<Payment/>}/>
        <Route path='/*' element ={<PageNotFound/>}/>
      </Routes>
    </div>
  )
}
export default Main