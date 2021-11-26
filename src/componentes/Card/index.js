import React from "react";
import './style.scss'
import Button from "../Button";
import iconAudio from '../../images/icon-audio-descricao1.png'
import iconBanheiro from '../../images/icon-banheiro-acessivel.png'
import iconBraile from '../../images/icon-braile.png'
import iconCaoGuia from '../../images/icon-caoguia.png'
import iconElevador from '../../images/icon-elevador.png'
import iconEsstacionamento from '../../images/icon-estacionamento.png'
import iconLibras from '../../images/icon-libras.png'
import iconPisoTatil from '../../images/icon-piso-tatil.png'
import iconPortaLarga from '../../images/icon-porta-larga.png'
import iconRampa from '../../images/icon-rampa.png'


const Card =() =>{
    return (
        <div className='card__container'>
            <div className='card__image'></div>
            <div className='card__content'>
                <h3>Nome do local</h3>
                <ul className='card__facilities'>
                    <li className='card__facilities__item'><img src={iconBraile} alt='Sinalização em Braile' title='Sinalização em Braile'>
                    </img></li>
                    <li className='card__facilities__item card__facilities__item--unchecked '> <img src={iconAudio} alt='Audio escrição' title='Audio escrição'></img></li>
                    <li className='card__facilities__item'> <img src={iconBanheiro} alt='Banheiro acessivel' title='Banheiro acessivel'></img></li>
                    <li className='card__facilities__item'> <img src={iconElevador} alt='Elevador para cadeirante' title='Elevador para cadeirante'></img></li>
                    <li className='card__facilities__item'> <img src={iconEsstacionamento} alt='Estacionamento para idoso/deficiente' title='Estacionamento para idoso/deficiente'></img></li>
                    <li className='card__facilities__item'> <img src={iconCaoGuia} alt='Permite acesso a cão guia' title='Permite acesso a cão guia'></img></li>
                    <li className='card__facilities__item'> <img src={iconPisoTatil} alt='Piso tatil de alerta' title='Piso tatil de alerta'></img></li>
                    <li className='card__facilities__item'> <img src={iconPortaLarga} alt='Portas largas' title='Portas largas'></img></li>
                    <li className='card__facilities__item'> <img src={iconRampa} alt='Acesso com rampas para cadeirantes' title='Acesso com rampas para cadeirantes'></img></li>
                    <li className='card__facilities__item'> <img src={iconLibras} alt='Atendimento em Libras' title='Atendimento em Libras'></img></li>
                </ul>
                <p> .....</p>
                <Button>Como chegar</Button>
            </div>
        </div>
    )
}
export default Card