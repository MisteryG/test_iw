import React from 'react'
import pr from '../../Images/pr.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import cgreen from '../../Images/cgreen.svg'

import './Busqueda.css';

const Busqueda = () => (
    <section class="cabecera">
        <section class="cabLogos">
            <section class="imgLogo">
                <img src={pr} alt=""/>
            </section>
            <section class="textLogo">
                <section class="cabTxtLogo">
                    <p>Pickle Rick</p>
                </section>
                <section class="datTxtLogo">
                    <a href="./"><FontAwesomeIcon icon={faStar}/></a>
                    <img src={cgreen} alt=""/>
                    <p>Online</p>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/2/22/Home_font_awesome.svg'
                    alt=""/>
                    <p>Trabajando remoto</p>
                </section>
            </section>
        </section>
        <section class="cuadBusqueda">

        </section>
        <section class = "adjunLogos">

        </section>
    </section>
);

export default Busqueda;