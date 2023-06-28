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

// Task 4: Code a manager object, methods
function manager() {
    const managerObject = new Worker("Alice", 30, 120, 100, 30);
  internObject.doSomethingFun();
  return managerObject;
}
