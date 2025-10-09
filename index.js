/*

    // JavaScript Classes
    JavaScript Classes are templates for JavaScript Objects.

*/

    // class Person {
    //     constructor(name, year, address) {
    //         this.name = name;
    //         this.year = year;
    //         this.address = address;
    //     }
    //     age() {
    //         let date = new Date();
    //         return date.getFullYear() - this.year
    //     }
    //     intro() {
    //         return `Hi I am ${this.name}, born on year ${this.year}. I live in ${this.address}`;
    //     }
    // }


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



// class Animal {
//     constructor (name, type, diet) {
//         this.name = name;
//         this.type = type;
//         this.diet = diet;
//     }
//     speak(sound) {
//         return `${sound}!`
//     }
//     get getName() {
//         return this.name;
//     }
//     set setName(nameParam) {
//         this.name = nameParam
//     }
// }

// const dog = new Animal('Shih Tzu', 'Mammal', 'Carnivore');
// console.log(dog);
// console.log(dog.speak('Arf'));

// console.log('----------------');
// console.log(dog.getName);
// dog.setName = 'Bulldog';
// console.log(dog.getName);
// console.log('----------------');

// class Bird extends Animal {
//     constructor (name, type, diet, color) {
//         super(name, type, diet);
//         this.color = color;
//     }
//     show () {
//         return `I am color ${this.color}`;
//     }
// }

// const bird = new Bird('Bald Eagle', 'Aerial', 'Carnivore', 'Golden');
// console.log(bird);
// console.log(bird.speak('Klee-Klee'));

// class Duck extends Bird {
//     constructor (name, type, diet, color, habitat) {
//         super(name, type, diet, color);
//         this.habitat = habitat;
//     }
//     intro () {
//         return `Hi, I am ${this.name}, I live in a ${this.habitat}`;
//     }
// }

// const donald = new Duck('Donald', 'Mallard', 'Fish', 'Blue-Green', 'Pond');
// console.log(donald);
// console.log(donald.intro());
// console.log(donald.show());
// console.log(donald.speak('Quack'));

// introduction('KIRK');

// // Dine-fine si function
// function introduction (name) {
//     console.log(`Hi am ${name}`);
// }



// class Car {
//     constructor(name) {
//       this.name = name;
//     }
//     static hello() {
//       return "Hello!!";
//     }
//   }
  
//   const myCar = new Car("Ford");
//   console.log(Car.hello());


//   class Model extends Car {
//     constructor (name, model) {
//         super(name);
//         this.model = model;
//     }
//   }

//   const toyota = new Model('Car Name', 'Toyota');
//   console.log(Model.hello());

/* --------------------------------------------- 1 --------------------------------------------- */
  
/*
    Create a Person class with properties: name, age, email
    Add a constructor to initialize these properties
    Add a method introduce() that returns "Hi, I'm [name] and I'm [age] years old"
    Create 3 instances and call their methods
*/

    // class Person {
    //     constructor(name, age, email) {
    //         this.name = name;
    //         this.age = age;
    //         this.email = email;
    // }

    // introduce() {
    //     return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
    //     }
    // }

    // const person1 = new Person("Kristine", 22, "kristine@example.com");
    // const person2 = new Person("Anselle", 22, "anselle@example.com");
    // const person3 = new Person("Kirk", 25, "kirk@example.com");

    // console.log(person1.introduce());
    // console.log(person2.introduce());
    // console.log(person3.introduce());

/* --------------------------------------------- 1 --------------------------------------------- */



/* --------------------------------------------- 2 --------------------------------------------- */

/*
    Create a BankAccount class with properties: accountNumber, balance
    Add methods: deposit(amount), withdraw(amount), getBalance()
    Make sure withdraw doesn't allow negative balance
    Test with multiple accounts
*/

    // class BankAccount {
    // constructor(accountNumber, balance) {
    //     this.accountNumber = accountNumber;
    //     this.balance = balance;
    // }

    // deposit(amount) {
    //     this.balance += amount;
    //     console.log(`Deposited ₱${amount}. New balance: ₱${this.balance}`);
    // }

    // withdraw(amount) {
    //     if (amount > this.balance) {
    //     console.log(`Withdrawal failed. Insufficient balance in account ${this.accountNumber}.`);
    //     } else {
    //     this.balance -= amount;
    //     console.log(`Withdrew ₱${amount}. Remaining balance: ₱${this.balance}`);
    //     }
    // }

    // getBalance() {
    //     return `Account ${this.accountNumber} balance: ₱${this.balance}`;
    // }
    // }

    // const acc1 = new BankAccount(1001, 5000);
    // const acc2 = new BankAccount(1002, 10000);

    // acc1.deposit(1500);
    // acc1.withdraw(2000);
    // console.log(acc1.getBalance());

    // acc2.withdraw(12000);
    // acc2.deposit(3000);
    // console.log(acc2.getBalance());

/* --------------------------------------------- 2 --------------------------------------------- */



/* --------------------------------------------- 3 --------------------------------------------- */

/*
    Create a Temperature class that stores temperature in Celsius
    Add a getter fahrenheit that converts and returns the temperature in Fahrenheit
    Add a setter fahrenheit that accepts Fahrenheit and stores it as Celsius
    Add methods to display both temperatures
*/

/* --------------------------------------------- 3 --------------------------------------------- */

    class Temperature {
        constructor(celsius) {
            this.celsius = celsius;
        }
    get fahrenheit() {
        return (this.celsius * 9 / 5) + 32;
        }
    set fahrenheit(value) {
        this.celsius = (value - 32) * 5 / 9;
        }

    display() {
        console.log(`Temperature: ${this.celsius.toFixed(2)}°C / ${this.fahrenheit.toFixed(2)}°F`);
        }
    }

    const temp = new Temperature(25);
    temp.display();

    temp.fahrenheit = 100;
    temp.display(); 

/* --------------------------------------------- 4 --------------------------------------------- */

/*
    Create a Calculator class with static methods: add(), subtract(), multiply(), divide()
    Add a static property PI with value 3.14159
    Add a static method circleArea(radius) that uses the static PI property
    Call these without creating an instance
*/

    class Calculator {
        static PI = 3.14159;
        static add(a, b) {
            return a + b;
         }
        static subtract(a, b) {
            return a - b;
        }
        static multiply(a, b) {
            return a * b;
        }
        static divide(a, b) {
            if (b == 0) {
            return "Error: Cannot divide by zero!";
            }
            return a / b;
        }
        static circleArea(radius) {
            return this.PI * radius * radius;
        }
    }

    console.log("Add:", Calculator.add(10, 5));
    console.log("Subtract:", Calculator.subtract(10, 5));
    console.log("Multiply:", Calculator.multiply(10, 5));
    console.log("Divide:", Calculator.divide(10, 5));
    console.log("PI:", Calculator.PI);
    console.log("Area of circle (r=3):", Calculator.circleArea(3));

/* --------------------------------------------- 4 --------------------------------------------- */



/* --------------------------------------------- 5 --------------------------------------------- */

/*
    Create a User class with private field #password
    Add public methods: setPassword(), validatePassword(input)
    The password should not be directly accessible from outside
    Add validation rules (minimum 8 characters)
*/

/* --------------------------------------------- 5 --------------------------------------------- */

    class User1 {
    #password;

    constructor(username, password = "") {
        this.username = username;
        this.#password = password;
    }

    setPassword(newPassword) {
        if (newPassword.length < 8) {
            console.log("Password must be at least 8 characters long.");
        } else {
            this.#password = newPassword;
            console.log("Password set successfully.");
        }
    }

    validatePassword(input) {
        if (input == this.#password) {
            console.log("Access granted.");
            return true;
        } else {
            console.log("Invalid password.");
            return false;
        }
    }
    }

    const user1 = new User1("anselle");

    user1.setPassword("mySecret123");
    user1.validatePassword("mySecret123");

/* --------------------------------------------- 6 --------------------------------------------- */

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

/* --------------------------------------------- 6 --------------------------------------------- */

    // class Vehicle {
    // constructor(brand, model, year) {
    //     this.brand = brand;
    //     this.model = model;
    //     this.year = year;
    // }

    // getInfo() {
    //     return `Vehicle Info: ${this.brand} ${this.model} (${this.year})`;
    // }
    // }

    // class Car extends Vehicle {
    // constructor(brand, model, year, doors, fuelType) {
    //     super(brand, model, year);
    //     this.doors = doors;
    //     this.fuelType = fuelType;
    // }

    // getInfo() {
    //     return `${super.getInfo()} | Doors: ${this.doors}, Fuel Type: ${this.fuelType}`;
    // }
    // }

    // const car1 = new Car("Toyota", "Corolla", 2022, 4, "Gasoline");
    // const car2 = new Car("Tesla", "Model 3", 2023, 4, "Electric");

    // console.log(car1.getInfo());
    // console.log(car2.getInfo());

/* --------------------------------------------- 7 --------------------------------------------- */

/*
    Create an Animal class with a method makeSound()
    Create Dog, Cat, and Bird classes that extend Animal
    Override makeSound() in each subclass with appropriate sounds
    Create an array of different animals and call their methods
*/

/* --------------------------------------------- 7 --------------------------------------------- */

    // class Animal {
    // makeSound() {
    //     return "Animal sound";
    // }
    // }

    // class Dog extends Animal {
    // makeSound() {
    //     return "Arf!";
    // }
    // }

    // class Cat extends Animal {
    // makeSound() {
    //     return "Meow!";
    // }
    // }

    // class Bird extends Animal {
    // makeSound() {
    //     return "Tweet!";
    // }
    // }

    // const dog = new Dog();
    // const cat = new Cat();
    // const bird = new Bird();

    // console.log("Dog:", dog.makeSound());
    // console.log("Cat:", cat.makeSound());
    // console.log("Bird:", bird.makeSound());

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

// HEHHEHHEHEHE SAME LANG ATA po ito

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

    class Vehicle {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    getInfo() {
        return `${this.brand} ${this.model} (${this.year})`;
    }
    }

    class Car extends Vehicle {
    constructor(brand, model, year, doors, fuelType) {
        super(brand, model, year);
        this.doors = doors;
        this.fuelType = fuelType;
    }

    getInfo() {
        return `${super.getInfo()} - ${this.doors} doors, ${this.fuelType} engine`;
    }
    }

    const car1 = new Car("Toyota", "Vios", 2022, 4, "Gasoline");
    console.log(car1.getInfo());


/* --------------------------------------------- 10 --------------------------------------------- */

/*
    Create an Animal class with a method makeSound()
    Create Dog, Cat, and Bird classes that extend Animal
    Override makeSound() in each subclass with appropriate sounds
    Create an array of different animals and call their methods
*/

/* --------------------------------------------- 10 --------------------------------------------- */
