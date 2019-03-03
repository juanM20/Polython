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
        div {
          background-color: #ffffff;
          padding: 10px;
          margin:0;
          display: flex;
          flex-direction: row;
          width: 100%;
        }

        .section {
          border-bottom: 1px solid black;
        }

        div h2,p {
          text-align:justify;
        }

        div .title_section {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
        }

        div .info_section {
          display: flex;
          flex-direction: column;
          justify-content: center;

        }

        div .info_section p {
          max-width: 300px;
        }

        div .btn_section {

          color: #ffffff;
          font-size: 16px;
          margin: 4px 2px;
          cursor: pointer;
          width:10%;
        }

        div .btn_section .button {
          text-decoration: none;
          color: #000000;
          border-radius: 10px;
          padding: 20px;
          text-align:center;
          text-decoration: none;
          background-color: #69D300;
          box-shadow: -8px 4px 69px -16px rgba(0,0,0,0.75);

        }

      </style>

      <div class="section">
        <div class="title_section">
          <h2> [[titulo]]</h2>
          <img src="[[imagen]]" style="width: [[tamanio]];"></img>
        </div>
        <div class="info_section">
          <p> [[info]] </p>
          <div class="btn_section">
            <a href="[[enlace]]" class="button">[[boton]]</a>
          </div>
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
      imagen:{
        type: String,
        value: '',
      },
      tamanio: {
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
