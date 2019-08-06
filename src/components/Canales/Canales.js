import React from 'react';
import logo from './Imagenes/RickMorty.svg'
import busqueda from './Imagenes/search.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList } from '@fortawesome/free-solid-svg-icons'

import './Canales.css';

const Canales = () => (
    <section class="menNavegacion">
        <section class="partLog">
            <img src={logo}/>
            <a href="./"><FontAwesomeIcon icon={faList}/></a>
        </section>
        <section class="partRemoto">
            <select class="activo">
                <option hidden></option>
            </select>
            <select class="encasa">
                <option hidden>trabajando remoto</option>
            </select>
        </section>
        <section class="partBusqueda">
            <input type='text' placeholder='Busca personas y canales'/>
            <img src={busqueda}/>
        </section>
        <section class="partFavoritos"></section>
        <section class="partRecientes"></section>
        <section class="partCanales"></section>
        <section class="partPersonas"></section>
    </section>
);

export default Canales;