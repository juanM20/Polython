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

        header{
	         width: 100%;
        }

      .navegacion{
      	width: 1000px;
      	margin: 30px auto;
      	background: #fff;
      }

      .navegacion ul{
      	list-style: none;
      }

      .menu > li{
      	position: relative;
      	display: inline-block;
      }

      .menu > li > a{
      	display: block;
      	padding: 15px 20px;
      	color: #353535;
      	font-family: 'Open sans';
      	text-decoration: none;
      }

      .menu li a:hover{
      	color: #CE7D35;
      	transition: all .3s;
      }

      /* Submenu*/

      .submenu{
      	position: absolute;
      	background: #333333;
      	width: 120%;
      	visibility: hidden;
      	opacity: 0;
      	transition: opacity 1.5s;
      }

      .submenu li a{
      	display: block;
      	padding: 15px;
      	color: #fff;
      	font-family: 'Open sans';
      	text-decoration: none;
      }

      .menu li:hover .submenu{
      	visibility: visible;
      	opacity: 1;
      }

      </style>

      <header>
  		<nav class="navegacion">
  			<ul class="menu">
  				<li><a href="index.html">Inicio</a></li>
  				<li><a href="#">Nosotros</a></li>
  				<li><a href="#">Servicios</a>
  					<ul class="submenu">
  						<li><a href="formulario.html">Registrate como donador</a></li>
  						<li><a href="#">Buscar Donadores</a></li>
  					</ul>
  				</li>
  				<li><a href="#">Contacto</a></li>
  			</ul>
  		</nav>
  	</header>
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
