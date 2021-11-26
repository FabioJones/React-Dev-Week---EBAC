import React from "react";
import Slider from '../Slider'
import './style.scss'


const Places =() =>{
    return(

        <section className='places'>
           <div className='places__header'>
            <h2 className='places__title'>Locais <span>Acessíveis</span> </h2>
            <div className='places__select'>
                <h5>Ordenar por:</h5>
                <select>
                    <option>distancia</option>
                    <option>alfabeto</option>
                </select>
            </div>
            </div>
            <div className='places__content'>
                 <Slider></Slider>   
            </div>
        </section>

    )
}

export default Places