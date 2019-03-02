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

        .footer {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          padding: 0;
          background-color: #000080;
        }

        .footer p {
          font-family: sans-serif;
          font-size: 2em;
          color: #FFFFFF;
        }

      </style>

      <footer class="footer">
        <p>Desarrollado por Qubits</p>
        <p>Polython 2019</p>
        <p>Ciudad de México</p>
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
