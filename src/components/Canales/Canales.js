import React from 'react';
import logo from '../../Images/RickMorty.svg'
import busqueda from '../../Images/search.svg'
import pr from '../../Images/pr.png'
import bender from '../../Images/bender.png'
import cgreen from '../../Images/cgreen.svg'
import cempty from '../../Images/cempty.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList } from '@fortawesome/free-solid-svg-icons'
import { faChartArea } from '@fortawesome/free-solid-svg-icons'
import { faMoon } from '@fortawesome/free-solid-svg-icons'

import './Canales.css';

const Canales = () => (
    <section class="menNavegacion">
        <section class="partLog">
            <img src={logo} alt=""/>
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
            <img src={busqueda} alt=""/>
        </section>
        <section class="partFavoritos">
            <b class="titleFav">
                Favoritos
            </b>
            <section class="favBender">
                <img src={cgreen} alt=""/>
                <img src={bender} alt=""/>
                <b>Bender-(Tú)</b>
            </section>
            <section class="favPR">
                <img src={cempty} alt="" />
                <img src={pr} alt=""/>
                <b>Pickle Rick</b>
            </section>
            <section class="favChannel">
                <a href="./"><FontAwesomeIcon icon={faMoon}/></a>
                <a href="./"><FontAwesomeIcon icon={faChartArea}/></a>
                <b>Canal</b>
            </section>
        </section>
        <section class="partRecientes"></section>
        <section class="partCanales"></section>
        <section class="partPersonas"></section>
    </section>
);

export default Canales;