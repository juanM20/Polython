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

  var nombre = document.getElementById("nombre").value;
  var lista_genero = document.getElementById("genero");
  var valor_genero = lista_genero.options[lista_genero.selectedIndex].value;

  var lista_sangre = document.getElementById("tipoSangre");
  var valor_sangre = lista_sangre.options[lista_sangre.selectedIndex].value;

  var edad = document.getElementById("edad").value;
  var ciudad = document.getElementById("ciudad").value;
  var correo = document.getElementById("correo").value;


  console.log("Entrando a la recuperación de datos...");

  donante.nombre = nombre;
  console.log("Nombre: "+ donante.nombre);

  donante.genero = valor_genero;
  console.log("Genero: "+ donante.genero);

  donante.tipoSangre = valor_sangre;
  console.log("Tipo de Sangre: "+ donante.tipoSangre);

  donante.edad = edad;
  console.log("Edad: "+ donante.edad);

  donante.ciudad = ciudad;
  console.log("ciudad: " + donante.ciudad);

  donante.correo = correo;
  console.log("correo: " + donante.correo);

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
