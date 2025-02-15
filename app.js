// the subject class with methods to add, remove and dial a number...
class Telephonebook {
 constructor() {
  this.phoneNumbers = [];
  this.observers = [];
 }

 notify(event, number) {
  this.observers.forEach((observer) => {
   observer.update(event, number)
  })
 }

 addPhoneNumber(number) {
  this.phoneNumbers.push(number);
  this.notify("added", number)
 }

 removePhoneNumber(number) {
  const numberIndex = this.phoneNumbers.indexOf(number);
  if (numberIndex !== -1) {
   this.phoneNumbers.splice(numberIndex, 1);
   this.notify("removed", number);
  } else {
   console.log(`This ${number} does not exist`);

  }
 }

 dialPhoneNumber(number) {
  if (this.phoneNumbers.includes(number)) {
   this.notify("dialed", number);
  } else {
   console.log(`This ${number} does not exist`);
  }
 }


 addObserver(observer) {
  this.observers.push(observer);
 }
}


class Observer {
 update(event, number) {
  console.log(`${number}`);
 }
}

class Dailling {
 update(event, number) {
  if (event === "dialed") {
   console.log(`Now Dialling ${number}`);
  } else {
   console.log(`${number}`);
  }
 }
}

const telephonebook = new Telephonebook();
const iphoneObserver = new Observer();
const androidObserver = new Dailling();

// adding two observers to the Telephonebook class
telephonebook.addObserver(iphoneObserver);
telephonebook.addObserver(androidObserver);


telephonebook.addPhoneNumber(2347023232);
telephonebook.dialPhoneNumber(2347023232);
// telephonebook.removePhoneNumber(2347023232);



