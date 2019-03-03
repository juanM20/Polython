import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `cuadro-info`
 * inserte titulo imagen y texto
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class Donator extends PolymerElement {
  static get template() {
    return html`
      <style>
        div{
          background-color: #EBF9FA;
          padding: 10px;
          margin: 10px;
          display: flex;
          flex-direction: column;
        }

        div .donator_info {
          display: flex;
          flex-direction: row;
          justify-content: flex-end;
        }

        div .btn_match {
          display:flex;
          flex-direction: row;
          justify-content: flex-start;

          background-color: #EBF9FA;
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
        <div class = "image">
          <img src = "[[dir_img]]"/>
        </div>
        <div class="donator_info">
          <p> [[nombre]] </p>
          <p>[[info]]</p>
        </div>
        <div class="btn_match">
          <input type = "button" value = "match" name = "match">
        </div>

      </div>
    `;
  }
  static get properties() {
    return {
      dir_img: {
        type: String,
        value: '',
      },
      nombre: {
        type: String,
        value: '',
      },
      info:{
        type: String,
        value: '',
      }
    };
  }
}

window.customElements.define('donator', Donator);
