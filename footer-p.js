import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `menu-p`
 * Menu_de_navegacion
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class FooterP extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }

        footer {
          justify-self: end;
          padding: 10px;
          margin: 5px;
          border-top: 2px solid black;
          background-color:  #ffffff;
          width:100%;
        }

        footer p {
          font-family: sans-serif;
          font-size: 12pt;
          color: #CE7D35;
        }

      </style>

      <footer>
        <center>
          <p>Desarrollado por Qubits</p>
          <p>Polython 2019</p>
          <p>Ciudad de México</p>
        </center>
      </footer>
    `;
  }

  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'footer-p',
      },
    };
  }
}

window.customElements.define('footer-p', FooterP);
