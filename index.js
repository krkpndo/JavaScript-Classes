/*

    // JavaScript Classes
    JavaScript Classes are templates for JavaScript Objects.



*/

class Person {
    constructor(name, year, address) {
        this.name = name;
        this.year = year;
        this.address = address;
    }
    age() {
        let date = new Date();
        return date.getFullYear() - this.year
    }
    intro() {
        return `Hi I am ${this.name}, born on year ${this.year}. I live in ${this.address}`;
    }
}


/*

    // Hectic to
    const person1 = {
        name: 'Chris',
        year: 1978,
        address: 'Batangas',
        age: function () {
            let date = new Date();
            return date.getFullYear() - this.year
        },
        intro: function () {
            return `Hi I am ${this.name}, born on year ${this.year}. I live in ${this.address}`;
        }
    }

    const person2 = {
        name: 'Jovette',
        year: 1980,
        address: 'Lipa',
        age: function () {
            let date = new Date();
            return date.getFullYear() - this.year
        },
        intro: function () {
            return `Hi I am ${this.name}, born on year ${this.year}. I live in ${this.address}`;
        }
    }

    console.log(person1.age());
    console.log(person2.age());


    // Creating an object
    const person1 = new Person('Chris', 1978, 'Batangas'); // Creating an instance of Person Object

    console.log(person1.age());
    console.log(person1.intro());

    const person2 = new Person('Jovette', 1980, 'Lipa');

    console.log(person2.age());
    console.log(person2.intro());
*/

/*

const person3 = new Object(); // not advisable
const person3 = {};

*/

// class Bird {
//     constructor (name, type, age) {
//         this.name = name;
//         this.type = type;
//         this.age = age;
//     }
//     speak (sound) {
//         return `${sound}!`;
//     }
// }

// const tweety = new Bird('Tweety', 'Maya', 10);

// console.log(tweety);
// console.log(tweety.speak('tweet'));


// class Veggies {
//     constructor (name, color, type) {
//         this.name = name;
//         this.color = color;
//         this.type = type;
//     }
//     describe (nutrient) {
//         return `Hi, I'm ${this.name}. I'm rich in ${nutrient}.`
//     }
// }

// const vegNew = new Veggies('Squash','Yellow-orange','Vining');

// console.log(vegNew);
// console.log(vegNew.describe('Vitamin A'));



class Animal {
    constructor (name, type, diet) {
        this.name = name;
        this.type = type;
        this.diet = diet;
    }
    speak(sound) {
        return `${sound}!`
    }
    get getName() {
        return this.name;
    }
    set setName(nameParam) {
        this.name = nameParam
    }
}

const dog = new Animal('Shih Tzu', 'Mammal', 'Carnivore');
console.log(dog);
console.log(dog.speak('Arf'));

console.log('----------------');
console.log(dog.getName);
dog.setName = 'Bulldog';
console.log(dog.getName);
console.log('----------------');

class Bird extends Animal {
    constructor (name, type, diet, color) {
        super(name, type, diet);
        this.color = color;
    }
    show () {
        return `I am color ${this.color}`;
    }
}

const bird = new Bird('Bald Eagle', 'Aerial', 'Carnivore', 'Golden');
console.log(bird);
console.log(bird.speak('Klee-Klee'));

class Duck extends Bird {
    constructor (name, type, diet, color, habitat) {
        super(name, type, diet, color);
        this.habitat = habitat;
    }
    intro () {
        return `Hi, I am ${this.name}, I live in a ${this.habitat}`;
    }
}

const donald = new Duck('Donald', 'Mallard', 'Fish', 'Blue-Green', 'Pond');
console.log(donald);
console.log(donald.intro());
console.log(donald.show());
console.log(donald.speak('Quack'));

introduction('KIRK');

// Dine-fine si function
function introduction (name) {
    console.log(`Hi am ${name}`);
}



class Car {
    constructor(name) {
      this.name = name;
    }
    static hello() {
      return "Hello!!";
    }
  }
  
  const myCar = new Car("Ford");
  console.log(Car.hello());


  class Model extends Car {
    constructor (name, model) {
        super(name);
        this.model = model;
    }
  }

  const toyota = new Model('Car Name', 'Toyota');
  console.log(Model.hello());

/* --------------------------------------------- 1 --------------------------------------------- */
  
/*
    Create a Person class with properties: name, age, email
    Add a constructor to initialize these properties
    Add a method introduce() that returns "Hi, I'm [name] and I'm [age] years old"
    Create 3 instances and call their methods
*/

/* --------------------------------------------- 1 --------------------------------------------- */



/* --------------------------------------------- 2 --------------------------------------------- */

/*
    Create a BankAccount class with properties: accountNumber, balance
    Add methods: deposit(amount), withdraw(amount), getBalance()
    Make sure withdraw doesn't allow negative balance
    Test with multiple accounts
*/

/* --------------------------------------------- 2 --------------------------------------------- */



/* --------------------------------------------- 3 --------------------------------------------- */

/*
    Create a Temperature class that stores temperature in Celsius
    Add a getter fahrenheit that converts and returns the temperature in Fahrenheit
    Add a setter fahrenheit that accepts Fahrenheit and stores it as Celsius
    Add methods to display both temperatures
*/

/* --------------------------------------------- 3 --------------------------------------------- */



/* --------------------------------------------- 4 --------------------------------------------- */

/*
    Create a Calculator class with static methods: add(), subtract(), multiply(), divide()
    Add a static property PI with value 3.14159
    Add a static method circleArea(radius) that uses the static PI property
    Call these without creating an instance
*/

/* --------------------------------------------- 4 --------------------------------------------- */



/* --------------------------------------------- 5 --------------------------------------------- */

/*
    Create a User class with private field #password
    Add public methods: setPassword(), validatePassword(input)
    The password should not be directly accessible from outside
    Add validation rules (minimum 8 characters)
*/

/* --------------------------------------------- 5 --------------------------------------------- */



/* --------------------------------------------- 6 --------------------------------------------- */

/*
    Create a User class with private field #password
    Add public methods: setPassword(), validatePassword(input)
    The password should not be directly accessible from outside
    Add validation rules (minimum 8 characters)
*/

/* --------------------------------------------- 6 --------------------------------------------- */



/* --------------------------------------------- 7 --------------------------------------------- */

/*
    Create a User class with private field #password
    Add public methods: setPassword(), validatePassword(input)
    The password should not be directly accessible from outside
    Add validation rules (minimum 8 characters)

    Note: if yung constructor is written like 'this.#password', private field siya. Sorry ngayon ko lang din nalaman hehe
*/

/* --------------------------------------------- 7 --------------------------------------------- */



/* --------------------------------------------- 8 --------------------------------------------- */

/*
    Create a Vehicle class with properties: brand, model, year
    Add a method getInfo()
    Create a Car class that extends Vehicle
    Add additional properties: doors, fuelType
    Override getInfo() to include car-specific details
    Use super appropriately

    Note: override means, ire-redefine mo lang si method :)
    Example:
        @Parent Class
        intro() {
            return `Hi, I am ${this.name}`;
        }

        @Child Class
        intro() {
            return `Hello, I am ${this.age}`;
        }
*/

/* --------------------------------------------- 8 --------------------------------------------- */



/* --------------------------------------------- 9 --------------------------------------------- */

/*
    Create a Vehicle class with properties: brand, model, year
    Add a method getInfo()
    Create a Car class that extends Vehicle
    Add additional properties: doors, fuelType
    Override getInfo() to include car-specific details
    Use super appropriately
*/

/* --------------------------------------------- 9 --------------------------------------------- */



/* --------------------------------------------- 10 --------------------------------------------- */

/*
    Create an Animal class with a method makeSound()
    Create Dog, Cat, and Bird classes that extend Animal
    Override makeSound() in each subclass with appropriate sounds
    Create an array of different animals and call their methods
*/

/* --------------------------------------------- 10 --------------------------------------------- */
