import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from '../home/Home';
import Concert from '../Concert/Concert'
import PageNotFound from '../PageNotFound/PageNotFound';
import Payment from '../Payment/payment';
import Gallery from '../Gallery/Gallery';
import Contact from '../Contact/Contact';
import About from '../About/About';


 const Main = () => {

  return (
    <div>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/Concert/:id' element = {<Concert/>}/>
        <Route path='/Payment' element ={<Payment/>}/>
        <Route path='/Gallery' element ={<Gallery/>}/>
        <Route path='/Contact' element ={<Contact/>}/>
        <Route path='/About' element ={<About/>}/>
        <Route path='/*' element ={<PageNotFound/>}/>
      </Routes>
    </div>
  )
}
export default Main