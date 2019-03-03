/*const database = firebase.database();

let refData = database.ref();

refData.once('value', snapshot => {
  console.log(snapshot.val());
});
*/

const database = firebase.database();
let data = {
  "Moscow": {
    country: "Russia"
  },
  "Berlin": {
    name: "Germany"
  }
}
//Referenciamos al nodo principal
let dataRef = database.ref('cities');
//Pusheamos los datos al nodo
let dataPush = dataRef.push(data);
//Visualizamos los datos al nodo
dataRef.once('value', snapshot => {
  console.log(snapshot.val());
});
