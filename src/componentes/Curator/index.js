import React from "react";
import './style.scss'
import curatorPhoto from '../../images/eu.jpg'

const Curator = () => {

    return(
        <div className='curator__container'>
            <div className='curator__photo'> 
                <img src={curatorPhoto} alt='foto curador Fabio Jones'></img>
            </div>
            <div className='curator__details'>
                <div>
                <h3>Fábio Jones</h3>
                <h6>Curadoria</h6>
                </div>
                <p>Estudante de Front-end</p>
            </div>
        </div>
    )

    
}
export default Curator