// class Telephone {
//  observers = []
//  addPhoneNumber(observer) {
//   this.observers.add(observer)
//  }

//  removePhoneNumber(observer) {
//   this.observers.remove(observer)

//  }

//  dialPhoneNumber(observer) {
//   console.log(`${observer} Now Dailing 2347023232`);

//  }

//  notify(context) {
//   this.observers.forEach(observer) => observer.update(context);
//   // for (let observer of this.observers) {
//   //  observer.update(context)
//   // }
//  }
// }

// class observer {
//  constructor() {
//   update()
//  }
// }

// Telephone.addPhoneNumber(123456778);

class Telephonebook {
 constructor() {
  this.phoneNumbers = [];
  this.observers = [];
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

 notify(event, number) {
  this.observers.forEach((observer) => {
   observer.update(event, number)
  })
 }

 addObserver(observer) {
  this.observers.push(observer);
 }
}


class Observer {
 update(event, number) {
  console.log(`${number} was ${event}`);
 }
}

class Dailling {
 update(event, number) {
  console.log(`Now Dialling ${number}`);
 }

}

const telephonebook = new Telephonebook();
const iphoneObserver = new Observer();
const androidObserver = new Dailling();

// adding two observers to the Telephonebook class
telephonebook.addObserver(iphoneObserver);
telephonebook.addObserver(androidObserver);

telephonebook.addPhoneNumber(2340001234);
telephonebook.addPhoneNumber(2340002222);
telephonebook.removePhoneNumber(2340002222);
telephonebook.dialPhoneNumber(2324232323);


