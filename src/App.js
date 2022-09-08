import './App.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import { useState } from 'react';


 

function App() {
  const [changedBad , setChangedBad] = useState(false)

  const changeNavBar = () => {
    window.scrollY >=500 ? setChangedBad(true) : setChangedBad(false); 
  }

  window.addEventListener('scroll',changeNavBar)

  return (
    <div className="App">

      <Header/>
      <Navbar isChanged={changedBad}/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
