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

        .menu {
          overflow: hidden;
          position: fixed;
          margin: 0;
          padding: 10px;
          width: 100%;
          top: 0;
        }

        nav ul {
          background: #2B4C7E;
          color: #FFFFFF;
          text-align: center;
          display: grid;
          list-style-type: none;
          margin: 0;
          padding: 0;
          grid-template-columns: 240px 250px 350px 350px;
          grid-template-rows: auto;
        }

        nav ul li {
          padding: 5px;
          transition-duration: 0.5s;
          transition-timing-function: linear;
        }

        nav ul li ul {
          display: none;
        }

        nav ul li:hover {
          background: #DCE0E6;
          color: #000000;
        }

        nav ul li:hover > ul {
          display: flex;
          flex-direction: column;
        }

      </style>

      <div class="menu">
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
            <li><div class="login"><p> Login </p></div></li>
          </ul>
        </nav>
      </div>
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
