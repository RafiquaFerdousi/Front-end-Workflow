console.log('Hello everybody');

// Task 1: Build a function-based console log message generator
function consoleStyler(color, background, fontSize, txt) {
    const message = ("%c" + txt);
    let style = `color: ${color};`
    style += `background: ${background};`
    style += `font-size: ${fontSize};`

    console.log(message, style)
}

// Task 2: Build another console log message generator
function celebrateStyler(reason) {
    let fontStyle = "color: tomato; font-size: 50px";
    if (reason == "birthday")
       {console.log(`%cHappy birthday`, fontStyle);
}

    else if (reason == "champions")
    { console.log(`%cCongrats on the title!`, fontStyle); }

    else
            console.log(message, style);
        }


// Task 3: Run both the consoleStyler and the celebrateStyler functions

consoleStyler('#1d5c63', '#ede6db', '40px', 'Congrats!');

celebrateStyler('birthday');

// Task 4: Insert a congratulatory and custom message
function styleAndCelebrate(color, background, fontSize, txt, reason) {
    
    consoleStyler(color, background, fontSize, txt);

    celebrateStyler(reason);
}
// Call styleAndCelebrate
styleAndCelebrate('ef7c8e', 'fae8e0', '30px', 'You made it!', 'champions');

//OOP

// Task 1: Code a Person class
class Person {
  constructor(name = "Tom", age = 20, energy = 100) {
    this.name = name;
    this.age = age;
    this.energy = energy;
  }

  sleep() {
    this.energy += 10;
  }

  doSomethingFun() {
    this.energy -= 10;
  }
}

const person = new Person();
person.sleep();
person.doSomethingFun();

// Task 2: Code a Worker class
class Worker extends Person {
  constructor(name = "Tom", age = 20, energy = 100, xp = 0, hourlyWage = 10) {
    super(name, age, energy);
    this.xp = xp;
    this.hourlyWage = hourlyWage;
  }

  goToWork() {
    this.xp += 10;
  }
}
const worker = new Worker();
worker.goToWork();

// Task 3: Code an intern object, run methods
function intern() {
  const internObject = new Worker("Bob", 21, 110, 0, 10);
  internObject.goToWork();
  return internObject;
}

const internObj = intern();
console.log(internObj.name);
console.log(internObj.age);
console.log(internObj.energy);
console.log(internObj.xp);
console.log(internObj.hourlyWage);

// Task 4: Code a manager object, methods
function manager() {
  const managerObject = new Worker("Alice", 30, 120, 100, 30);
  managerObject.doSomethingFun();
  return managerObject;
}

const managerObj = manager();
console.log(managerObj.name);
console.log(managerObj.age);
console.log(managerObj.energy);
console.log(managerObj.xp);
console.log(managerObj.hourlyWage);


//Deconstructing Arrays
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake'];

function logDairy() {
    for (var i of dairy) {
        console.log(i);
    }
}
logDairy();

// Task 2
const animal = {
canJump: true
}
const bird = Object.create(animal);

bird.canFly = true;
bird.hasFeathers = true;

function birdCan() {
    for (prop of Object.keys(bird)) {
        console.log(prop + ": " + bird[prop]);
    }
}
birdCan();

// Task 3
function animalCan() {
    for (prop in bird) {
        console.log(prop + ": " + bird[prop]);
    }
}
animalCan();


//Testing

// Task 1: Code the timesTwo function declaration
function timesTwo(n) {
    return n*2;
};
// Task 2: Export the timesTwo function as a module
module.exports = timesTwo;


// Task 1: Code the timesTwo function declaration
function timesTwo(n) {
    return n*2;
};
// Task 2: Export the timesTwo function as a module
module.exports = timesTwo;

// Given variables
const dishData = [
    {
        name: "Italian pasta",
        price: 9.55
    },
    {
        name: "Rice with veggies",
        price: 8.65
    },
    {
        name: "Chicken with potatoes",
        price: 15.55
    },
    {
        name: "Vegetarian Pizza",
        price: 6.45
    },
]
const tax = 1.20;

// Implement getPrices()
function getPrices(taxBoolean) {
    for (food of dishData){
        var finalPrice;
        if (taxBoolean === true) {
            finalPrice = food.price * tax;
        }
        else if (taxBoolean === false) {
            finalPrice = food.price;
        }
        else {
            console.log("You need to pass a boolean to the getPrices call!");
            return;
        }
        console.log('Dish: ' + food.name + " Price: $" + finalPrice);
    }
    
}

// Implement getDiscount()
function getDiscount(taxBoolean, guests) {
    getPrices(taxBoolean);
    if (typeof guests === "number" && 0 < guests < 30) {
        var discount = 0;
        if (guests < 5) {
            discount = 5;
        }
        else if (guests >= 5) {
            discount = 10;
        }
        console.log('Discount is: $' + discount);
    }
    
    else {
        console.log('The second argument must be a number between 0 and 30')    
    }
}

// Call getDiscount()
getDiscount(true, 2);
getDiscount(false, 10);

// components and modular programming
function Heading() {
    return (
        <h1>This is an h1 heading</h1>
    )
}
export default Heading;

import Heading from "./Heading";

function App() {
  return (
    <div className="App">
      <Heading />
    </div>
  );
}

export default App;

