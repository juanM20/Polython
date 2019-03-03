var nombre;
var genero;
var tipoSangre;
var edad;
var ciudad;
var correoElectronico;
var donacionesOfrecidas = [];
var certificado = {
  nombre : null;
  direccion : null;
};
var database = firebase.database();

function registrarDonante(userID){
  firebase.database().ref('donantes/' + userID).set({
    nombre : nombre,
    genero : genero,
    tipoSangre : tipoSangre,
    edad : edad,
    ciudad : ciudad,
    email : correoElectronico,
    donaciones : donacionesOfrecidas,
    certificado : certificado
  });
}

function recuperarDatos() {
  var select;
  nombre = document.getElementById("nombre").value;
  //Creamos un eventListener para el select
  select = document.getElementById("genero");
  select.addEventListener('change',
    function(){
      tipoSangre = this.options[select.selectedIndex];
      //Notificamos en consola la opción seleccionada
      //console.log(tipoSangre.value + ':' tipoSangre.text);
    });
  select = document.getElementById("tipoSangre");
  //Creamos un eventListener para el select
  select.addEventListener('change',
    function(){
      tipoSangre = this.options[select.selectedIndex];
      //Notificamos en consola la opción seleccionada
      console.log(tipoSangre.value + ':' tipoSangre.text);
    });
    edad = document.getElementById("edad").value;
    console.log("edad" + ':' edad);
    ciudad = document.getElementById("ciudad").value;
    console.log("ciudad" + ':' ciudad);
    correo = document.getElementById("correo").value;
    console.log("correo" + ':' correo);
    donacionesOfrecidas = revisarOrganosDonacion();
    //Almacenamos los datos correspondientes al objeto del certificado
    certificado.nombre = generarClaveUnica();
    registrarDonante(certificado.nombre);
}

function generarClaveUnica(nombre,ciudad,edad){
  var clave;
  clave = "" + nombre + ciudad + edad + (edad * Math.random());
  return clave;
}

function revisarOrganosDonacion (){
  var organos = [];
  var seleccion;
  for(var i = 1; i < 8; i++){
    seleccion = document.getElementById("organo" + i);
    if(seleccion.checked){
      organos.push(seleccion.value);
    }
  }
  return organos;
}