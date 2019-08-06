import React, {Component} from 'react';
import './App.css';

import Navegacion from './components/Navegacion/Navegacion.js'
import Canales from './components/Canales/Canales.js'

class App extends Component {
  render() {
    return (
      <section className="App">
        <nav className="Navegacion">
          <Navegacion/>
        </nav>
        <aside className="Canales">
            <Canales/>
        </aside>
        <section className="Contenido">
          <header className="Busqueda">
            "Busqueda"
          </header>
          <section className="Chat">
            "Chat"
          </section>
          <footer className="Ingreso">
            "Ingreso"
          </footer>
        </section>
      </section>
    );
  }
}

export default App;
