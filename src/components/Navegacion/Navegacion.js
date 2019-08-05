import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpaceShuttle } from '@fortawesome/free-solid-svg-icons'
import { faMicroscope } from '@fortawesome/free-solid-svg-icons'
import { faPeopleCarry } from '@fortawesome/free-solid-svg-icons'

import './Navegacion.css';

const Navegacion = () => (
    <section class="menuNav">
        <section class="navMenu">
            <a href="./">Lorem</a>
            <a href="./">Ipsum</a>
            <a href="./">Dolor</a>
        </section>
        <section class="navTexto">
            <p>Neque porro quisquam est</p>
        </section>
        <section class="navIconos">
            <a href="./"><FontAwesomeIcon icon={faSpaceShuttle}/></a>
            <a href="./"><FontAwesomeIcon icon={faMicroscope}/></a>
            <a href="./"><FontAwesomeIcon icon={faPeopleCarry}/></a>
        </section>
    </section>
);

export default Navegacion;