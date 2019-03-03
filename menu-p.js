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
          display: flex;
          list-style-type: none;
          margin: 0;
          padding: 0;
          overflow: hidden;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: space-between;
        }

        nav ul li {
          padding: 10px;
        }

        nav ul li ul > li {
          display: none;
        }

        nav ul > ul:hover {
          position: relative;
          display: inline-block;
        }


      </style>

      <nav>
        <ul>
            <li> Inicio </li>
            <li>
              <p>Secciones</p>
              <ul>
                <li>Nombre Aplicacion</li>
                <li>Registro de donador</li>
                <li>Buscar Donadores</li>
              </ul>
            </li>
          <li> Login </li>
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
