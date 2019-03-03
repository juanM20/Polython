const database = firebase.database();

let refData = database.ref();

dataRef.once('value', snapshot => {
  console.log(snapshot.val());
});
