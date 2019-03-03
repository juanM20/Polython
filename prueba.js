const database = firebase.database();

let refData = database.ref();

refData.once('value', snapshot => {
  console.log(snapshot.val());
});
