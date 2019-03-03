import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `menu-p`
 * Menu_de_navegacion
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class MenuP extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }

        nav ul {
          background: #2B4C7E;
          color: #FFFFFF;
          display: flex;
          list-style-type: none;
          margin: 0;
          padding: 0;
          flex-direction: row;
          flex-wrap: wrap;
        }

        nav ul li {
          padding: 10px;
          transition-duration: 0.5s;
          transition-timing-function: linear;
        }

        nav ul li ul > li {
          display: none;
        }

        nav ul li:hover {
            background: #FFFFFF;
            color: #000000;
        }

        nav ul li ul:nth-child(1){
          flex-basis: auto;
        }

        nav ul li ul:nth-child(2){
          flex-basis: auto;
        }

        nav ul li ul:nth-child(3){
          flex-basis: auto;
        }




      </style>

      <nav>
        <ul>
            <li><p> Inicio </p></li>
            <li>
              <p>Secciones</p>
              <ul>
                <li class="cont1">Nombre Aplicacion</li>
                <li class="cont2">Registro de donador</li>
                <li class="cont3">Buscar Donadores</li>
              </ul>
            </li>
          <li><p> Login </p></li>
        </ul>
      </nav>
    `;
  }

  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'menu-p',
      },
    };
  }
}

window.customElements.define('menu-p', MenuP);
