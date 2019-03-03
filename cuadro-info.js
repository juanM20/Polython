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
          background-color: #DCE0E6;
          padding: 10px;
          margin:0;
          display: flex;
          flex-direction: row;
          width: 100%;
        }

        div h2,p {
          text-align:justify;
        }

        div .title_section {
          display: flex;
          justify-content: flex-start;
        }

        div .info_section {
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          fex-basis: 50px;
        }

        div .btn_section {
          display:flex;
          flex-direction: row;
          justify-content: flex-start;

          background-color: #DCE0E6;
          border: none;
          color: #000000;
          padding: 15px 32px;
          text-align: center;
          text-decoration: none;
          display: inline-block;
          font-size: 16px;
          margin: 4px 2px;
          cursor: pointer;
          width:10%;
        }

      </style>

      <div>
        <div class="title_section">
          <h2> [[titulo]]!</h2>
        </div>
        <div class="info_section">
          <div></div>
          <p> [[info]] </p>
        </div>
        <div class="btn_section">
          <a href="[[enlace]]">[[boton]]</button>
        </div>

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
      },
      enlace:{
        type:String,
        value: '',
      }
    };
  }
}

window.customElements.define('cuadro-info', CuadroInfo);
