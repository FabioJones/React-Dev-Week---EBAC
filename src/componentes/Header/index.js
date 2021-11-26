import React from "react";
import './style.scss';
import logoAcessaBr from '../../images/logoAcessaBr.svg';
import logoEbac from '../../images/logoEbac.svg'


const Header = () =>{
    return(
        <header className='header__container'>
           <div className='header__logo header__logo--state'>
                <img src={logoAcessaBr} alt='Logo AcessaBr'></img>
                <span className='header-city'>
                   / Salvador-BA
                </span>
            </div>
            <div className='header__logo--ebac'>
               <span className='header__span'>
                   Apoio:
               </span>
                <img src={logoEbac} alt='Logo EBAC'></img>
               
            </div>
        </header>
    )
}

export default Header;