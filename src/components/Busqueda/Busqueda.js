import React from 'react'
import busqueda from '../../Images/search.svg'
import pr from '../../Images/pr.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faFileArchive } from '@fortawesome/free-solid-svg-icons'
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import cgreen from '../../Images/cgreen.svg'

import './Busqueda.css';

const Busqueda = () => (
    <section className="cabecera">
        <section className="cabLogos">
            <section className="imgLogo">
                <img src={pr} alt=""/>
            </section>
            <section className="textLogo">
                <section className="cabTxtLogo">
                    <p>Pickle Rick</p>
                </section>
                <section className="datTxtLogo">
                    <a href="./"><FontAwesomeIcon icon={faStar}/></a>
                    <img src={cgreen} alt=""/>
                    <p>Online</p>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/2/22/Home_font_awesome.svg'
                    alt=""/>
                    <p>Trabajando remoto</p>
                </section>
            </section>
        </section>
        <section className="cuadBusqueda">
            <input type='text' placeholder='Busca un mensaje'/>
        </section>
        <section className = "adjunLogos">
            <a href="./"><FontAwesomeIcon icon={faEnvelopeOpenText}/>Chat</a>
            <a href="./"><FontAwesomeIcon icon={faFileArchive}/>Archivos</a>
            <a href="./"><FontAwesomeIcon icon={faExternalLinkAlt}/>Links</a>
        </section>
    </section>
);

export default Busqueda;