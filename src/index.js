import React from 'react';
import ReactDOM from 'react-dom';
import './style/global.scss';
import Header from './componentes/Header';
import Home from './pages/Home/index'
import Curator from './componentes/Curator'
import Footer from './componentes/Footer'
import Places from './componentes/Places'



ReactDOM.render(
  <div className='main__wrapper'>
    <div className='main__container'>
    <Header/>
    <Home/>
    <Places/>
    <Curator/>
    </div>
    <Footer/>
    
  </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

