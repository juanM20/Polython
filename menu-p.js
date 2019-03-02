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
          list-style-type: none;
          margin: 0;
          padding: 0;
          overflow: hidden;

        }

      </style>

      <nav>
        <ul>
            <li> Inicio </li>
            <ul>
              <li>NombreAplicacion</li>
              <li>Registro de donador</li>
              <li>Buscar Donadores</li>
            </ul>
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
