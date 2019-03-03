function recuperarDatos() {

  const database = firebase.database();

  var donante = {
    nombre: "",
    genero: "",
    tipoSangre: "",
    edad: 0,
    ciudad: "",
    correoElectronico: "",
    donacionesOfrecidas: [],
    certificadoNombre: ""
  };

  var select;
  console.log("Entrando a la recuperación de datos...");
  donante.nombre = document.getElementById("nombre").value;
  //Creamos un eventListener para el select
  select = document.getElementById("genero");
  select.addEventListener('change',
    function(){
      donante.tipoSangre = this.options[select.selectedIndex];
      //Notificamos en consola la opción seleccionada
      //console.log(tipoSangre.value + ':' tipoSangre.text);
    });
  select = document.getElementById("tipoSangre");
  //Creamos un eventListener para el select
  select.addEventListener('change',
    function(){
      donante.tipoSangre = this.options[select.selectedIndex];
      //Notificamos en consola la opción seleccionada
      console.log(tipoSangre.value + ':' + tipoSangre.text);
    });
    donante.edad = document.getElementById("edad").value;
    console.log("edad" + ':' + donante.edad);
    donante.ciudad = document.getElementById("ciudad").value;
    console.log("ciudad" + ':' + donante.ciudad);
    donante.correo = document.getElementById("correo").value;
    console.log("correo" + ':'  + donante.correo);
    donante.donacionesOfrecidas = revisarOrganosDonacion();
    //Almacenamos los datos correspondientes al objeto del certificado
    donante.certificadoNombre = generarClaveUnica(donante.nombre,donante.ciudad,donante.edad);
    //registrarDonante(donante.certificado.nombre);
    var json = JSON.stringify(donante);
    enviarJSON(json,database,donante);
}


/*function registrarDonante(userID){
  database.ref('Donante/' + userID).set({
    nombre : nombre,
    genero : genero,
    tipoSangre : tipoSangre,
    edad : edad,
    ciudad : ciudad,
    email : correoElectronico,
    donaciones : donacionesOfrecidas,
    certificado : certificado
  });
}*/

function enviarJSON(json,database,donante){
  let dataRef = database.ref(''+donante.nombre);
  //Pusheamos los datos al nodo
  let dataPush = dataRef.push(json);
  //Visualizamos los datos al nodo
  dataRef.once('value', snapshot => {
    console.log(snapshot.val());
  });
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
