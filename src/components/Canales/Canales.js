import React from 'react';
import logo from '../../Images/RickMorty.svg'
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
    <section className="menNavegacion">
        <section className="partLog">
            <img src={logo} alt=""/>
            <a href="./"><FontAwesomeIcon icon={faList}/></a>
        </section>
        <section className="partRemoto">
            <select className="activo">
                <option hidden></option>
            </select>
            <select className="encasa">
                <option hidden>trabajando remoto</option>
            </select>
        </section>
        <section className="partBusqueda">
            <input type='text' placeholder='Busca personas y canales'/>
        </section>
        <section className="padre">
            <p className="title">
                Favoritos
            </p>
            <section className="Bender">
                <img src={cgreen} alt=""/>
                <img src={bender} alt=""/>
                <p>Bender-(Tú)</p>
            </section>
            <section className="PR">
                <img src={cempty} alt="" />
                <img src={pr} alt=""/>
                <p>Pickle Rick</p>
            </section>
            <section className="Channel">
                <a href="./"><FontAwesomeIcon icon={faMoon}/></a>
                <a href="./"><FontAwesomeIcon icon={faChartArea}/></a>
                <p>Canal</p>
            </section>
        </section>
        <section className="padre">
            <p className="title">
                Recientes
            </p>
            <section className="Bender">
                <img src={cgreen} alt=""/>
                <img src={bender} alt=""/>
                <p>Bender-(Tú)</p>
            </section>
            <section className="PR">
                <a href="./"><FontAwesomeIcon icon={faMoon}/></a>
                <img src={pr} alt=""/>
                <p>Pickle Rick</p>
            </section>
            <section className="Channel">
                <img src={cempty} alt=""/>
                <a href="./"><FontAwesomeIcon icon={faChartArea}/></a>
                <p>Canal</p>
            </section>
            <section className="PR">
                <img src={cgreen} alt=""/>
                <img src={pr} alt=""/>
                <p>Pickle Rick</p>
            </section>
            <section className="Channel">
                <img src={cempty} alt=""/>
                <a href="./"><FontAwesomeIcon icon={faChartArea}/></a>
                <p>Canal</p>
            </section>
        </section>
        <section className="padre">
            <section className="Channel">
                <a href="./"><FontAwesomeIcon icon={faChartArea}/></a>
                <p>Canal</p>
            </section>
            <section className="Channel">
                <a href="./"><FontAwesomeIcon icon={faChartArea}/></a>
                <p>Canal</p>
            </section>
            <section className="Channel">
                <a href="./"><FontAwesomeIcon icon={faChartArea}/></a>
                <p>Canal</p>
            </section>
            <section className="Channel">
                <a href="./"><FontAwesomeIcon icon={faChartArea}/></a>
                <p>Canal</p>
            </section>
            <section className="Channel">
                <a href="./"><FontAwesomeIcon icon={faChartArea}/></a>
                <p>Canal</p>
            </section>
        </section>
        <section className="padre">
            <section className="PR">
                <img src={cgreen} alt=""/>
                <img src={pr} alt=""/>
                <p>Pickle Rick</p>
            </section>
            <section className="PR">
                <a href="./"><FontAwesomeIcon icon={faMoon}/></a>
                <img src={pr} alt=""/>
                <p>Pickle Rick</p>
            </section>
            <section className="PR">
                <img src={cempty} alt=""/>
                <img src={pr} alt=""/>
                <p>Pickle Rick</p>
            </section>
            <section className="PR">
                <img src={cgreen} alt=""/>
                <img src={pr} alt=""/>
                <p>Pickle Rick</p>
            </section>
            <section className="PR">
                <img src={cempty} alt=""/>
                <img src={pr} alt=""/>
                <p>Pickle Rick</p>
            </section>
        </section>
    </section>
);

export default Canales;