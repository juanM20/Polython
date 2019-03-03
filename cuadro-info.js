import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `cuadro-info`
 * inserte titulo imagen y texto
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class CuadroInfo extends PolymerElement {
  static get template() {
    return html`
      <style>
        div{
          backgroung-color: #EBF9FA;
          padding: 10px;
          margin: 10px;
          position: absolute;
        }
        h2,p{
          text-align:justify;
        }
      </style>

      <div>
        <h2> [[titulo]]!</h2> <br>
        <p> [[info]] </p> <br>
        <button type="button" >[[boton]]</button>
      </div>
    `;
  }
  static get properties() {
    return {
      titulo: {
        type: String,
        value: '',
      },
      info: {
        type: String,
        value: '',
      },
      boton:{
        type: String,
        value: '',
      }
    };
  }
}

window.customElements.define('cuadro-info', CuadroInfo);
