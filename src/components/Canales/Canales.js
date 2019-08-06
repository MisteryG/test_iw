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
        <section class="padre">
            <p class="title">
                Favoritos
            </p>
            <section class="Bender">
                <img src={cgreen} alt=""/>
                <img src={bender} alt=""/>
                <p>Bender-(Tú)</p>
            </section>
            <section class="PR">
                <img src={cempty} alt="" />
                <img src={pr} alt=""/>
                <p>Pickle Rick</p>
            </section>
            <section class="Channel">
                <a href="./"><FontAwesomeIcon icon={faMoon}/></a>
                <a href="./"><FontAwesomeIcon icon={faChartArea}/></a>
                <p>Canal</p>
            </section>
        </section>
        <section class="padre">
            <p class="title">
                Recientes
            </p>
            <section class="Bender">
                <img src={cgreen} alt=""/>
                <img src={bender} alt=""/>
                <p>Bender-(Tú)</p>
            </section>
            <section class="PR">
                <a href="./"><FontAwesomeIcon icon={faMoon}/></a>
                <img src={pr} alt=""/>
                <p>Pickle Rick</p>
            </section>
            <section class="Channel">
                <img src={cempty} alt=""/>
                <a href="./"><FontAwesomeIcon icon={faChartArea}/></a>
                <p>Canal</p>
            </section>
            <section class="PR">
                <img src={cgreen} alt=""/>
                <img src={pr} alt=""/>
                <p>Pickle Rick</p>
            </section>
            <section class="Channel">
                <img src={cempty} alt=""/>
                <a href="./"><FontAwesomeIcon icon={faChartArea}/></a>
                <p>Canal</p>
            </section>
        </section>
        <section class="padre">
            <section class="Channel">
                <a href="./"><FontAwesomeIcon icon={faChartArea}/></a>
                <p>Canal</p>
            </section>
            <section class="Channel">
                <a href="./"><FontAwesomeIcon icon={faChartArea}/></a>
                <p>Canal</p>
            </section>
            <section class="Channel">
                <a href="./"><FontAwesomeIcon icon={faChartArea}/></a>
                <p>Canal</p>
            </section>
            <section class="Channel">
                <a href="./"><FontAwesomeIcon icon={faChartArea}/></a>
                <p>Canal</p>
            </section>
            <section class="Channel">
                <a href="./"><FontAwesomeIcon icon={faChartArea}/></a>
                <p>Canal</p>
            </section>
        </section>
        <section class="padre">
            <section class="PR">
                <img src={cgreen} alt=""/>
                <img src={pr} alt=""/>
                <p>Pickle Rick</p>
            </section>
            <section class="PR">
                <a href="./"><FontAwesomeIcon icon={faMoon}/></a>
                <img src={pr} alt=""/>
                <p>Pickle Rick</p>
            </section>
            <section class="PR">
                <img src={cempty} alt=""/>
                <img src={pr} alt=""/>
                <p>Pickle Rick</p>
            </section>
            <section class="PR">
                <img src={cgreen} alt=""/>
                <img src={pr} alt=""/>
                <p>Pickle Rick</p>
            </section>
            <section class="PR">
                <img src={cempty} alt=""/>
                <img src={pr} alt=""/>
                <p>Pickle Rick</p>
            </section>
        </section>
    </section>
);

export default Canales;