import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `menu-p`
 * Menu_de_navegacion
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class FormP extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
        form input {
          border-radius: 5px;
          border-bottom: 3px #2B4C7E;
          padding: 10px 10px;
          margin: 10px;
        }
        form select {
          border-radius: 5px;
          padding: 10px 10px;
          margin: 10px;
        }
        form input[type=submit]{
          color: #FFFFFF;
          background-color: #2B4C7E;
          border-radius: 2px;
          padding: 10px 10px;
        }
        form input[type=file]{
          width: 0.1px;
          height: 0.1px;
          opacity: 0;
          position: absolute;
          overflow: hidden;
          z-index: -1;
        }
        form label {
          font-family: sans-serif;
          font-size: 14pt;
        }
        .archivo {
          border-radius: 5px;
          cursor: pointer;
          padding: 10px 10px;
          font-size: 1.25em;
          font-weight: 700;
          color: white;
          background-color: #2B4C7E;
          display: inline-block;
        }
        .archivo:hover {
          background-color: #3333cc;
        }
      </style>

    <form id = "formDonador">
      <center>
      <input type = "text" name = "nombre" placeholder = "Nombre completo" required/>
        <br><br>
        <label>Seleccione su género:</label>
        <select>
          <option value = "masculino">Masculino</option>
          <option value = "femenino">Femenino</option>
        </select>
        <label>Seleccione el tipo de sangre:</label>
        <select>
          <option value = "A+">A+</option>
          <option value = "A-">A-</option>
          <option value = "B+">B+</option>
          <option value = "B-">B-</option>
          <option value = "O+">O+</option>
          <option value = "O-">O-</option>
          <option value = "AB+">AB+</option>
          <option value = "AB-">AB-</option>
        </select>
        <br><br>
        <input type = "number" name = "edad" placeholder = "Edad" required/>
        <input type = "text" name = "ciudad" placeholder = "Ciudad" required/>
        <input type = "email" name = "correo" placeholder = "Correo electrónico" required/>
        <br><br>
        <label>Indica los elementos que estás dispuesto a donar</label>
        <input type = "checkbox" name = "organo1" value = "Riñón">Riñón</input>
        <input type = "checkbox" name = "organo2" value = "Hígado">Hígado</input>
        <input type = "checkbox" name = "organo3" value = "Corazón">Corazón</input>
        <input type = "checkbox" name = "organo4" value = "Páncreas">Páncreas</input>
        <input type = "checkbox" name = "organo5" value = "Pulmón">Pulmón</input>
        <input type = "checkbox" name = "organo6" value = "Intestino">Intestino</input>
        <input type = "checkbox" name = "organo7" value = "Sangre">Sangre</input>
        <br><br>
        <br>
        <input type = "file" name = "certificado" id ="certificado" required/>
        <label for = "certificado" class="archivo">Sube tu certificado médico</label>
        <br><br>
        <input type="submit" name="registrar" value="Registrar" />
      </center>
    </form>
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
