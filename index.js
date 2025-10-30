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
    //     }
    //     introduce() {
    //         return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
    //     }
    // }

    // const person1 = new Person("Kristine", 22, "kristine@example.com");
    // const person2 = new Person("Anselle", 23, "anselle@example.com");
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
    //     constructor(accountNumber, balance) {
    //         this.accountNumber = accountNumber;
    //         this.balance = balance;
    //     }

    //     deposit(amount) {
    //         this.balance += amount;
    //         console.log(`Deposited ₱${amount}. New balance: ₱${this.balance}`);
    //     }

    //     withdraw(amount) {
    //         if (amount > this.balance) {
    //             console.log(`Withdrawal failed. Insufficient balance in account ${this.accountNumber}.`);
    //         } else {
    //         this.balance -= amount;
    //             console.log(`Withdrew ₱${amount}. Remaining balance: ₱${this.balance}`);
    //         }
    //     }

    //     getBalance() {
    //         return `Account ${this.accountNumber} balance: ₱${this.balance}`;
    //     }
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

    // class Temperature {
    //     constructor(celsius) {
    //         this.celsius = celsius;
    //     }
    //     get fahrenheit() {
    //         return (this.celsius * 9 / 5) + 32;
    //     }
    //     set fahrenheit(value) {
    //         this.celsius = (value - 32) * 5 / 9;
    //     }
    //     display() {
    //         console.log(`Temperature: ${this.celsius.toFixed(2)}°C | ${this.fahrenheit.toFixed(2)}°F`);
    //     }
    // }

    // const temp = new Temperature(25);
    // temp.display();

    // temp.fahrenheit = 100;
    // temp.display(); 

/* --------------------------------------------- 4 --------------------------------------------- */

/*
    Create a Calculator class with static methods: add(), subtract(), multiply(), divide()
    Add a static property PI with value 3.14159
    Add a static method circleArea(radius) that uses the static PI property
    Call these without creating an instance
*/

    // class Calculator {
    //     static PI = 3.14159;
    //     static add(a, b) {
    //         return a + b;
    //     }
    //     static subtract(a, b) {
    //         return a - b;
    //     }
    //     static multiply(a, b) {
    //         return a * b;
    //     }
    //     static divide(a, b) {
    //         if (b == 0) {
    //         return "Error: Cannot divide by zero!";
    //         }
    //         return a / b;
    //     }
    //     static circleArea(radius) {
    //         return this.PI * radius * radius;
    //     }
    // }

    // console.log("Add:", Calculator.add(10, 5));
    // console.log("Subtract:", Calculator.subtract(10, 5));
    // console.log("Multiply:", Calculator.multiply(10, 5));
    // console.log("Divide:", Calculator.divide(10, 5));
    // console.log("PI:", Calculator.PI);
    // console.log("Area of circle:", Calculator.circleArea(6));

/* --------------------------------------------- 4 --------------------------------------------- */



/* --------------------------------------------- 5 --------------------------------------------- */

/*
    Create a User class with private field #password
    Add public methods: setPassword(), validatePassword(input)
    The password should not be directly accessible from outside
    Add validation rules (minimum 8 characters)
*/

/* --------------------------------------------- 5 --------------------------------------------- */

    // class User1 {
    // #password;

    // constructor(username, password = "") {
    //     this.username = username;
    //     this.#password = password;
    // }

    // setPassword(newPassword) {
    //     if (newPassword.length < 8) {
    //         console.log("Password must be at least 8 characters long.");
    //     } else {
    //         this.#password = newPassword;
    //         console.log("Password set successfully.");
    //     }
    // }

    // validatePassword(input) {
    //     if (input == this.#password) {
    //         console.log("Access granted.");
    //         return true;
    //     } else {
    //         console.log("Invalid password.");
    //         return false;
    //     }
    // }
    // }

    // const user1 = new User1("anselle");

    // user1.setPassword("mySecret123");
    // user1.validatePassword("mySecret123");

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
    //     constructor(brand, model, year) {
    //         this.brand = brand;
    //         this.model = model;
    //         this.year = year;
    //     }

    //     getInfo() {
    //         return `Vehicle Info: ${this.brand} ${this.model} (${this.year})`;
    //     }
    // }

    // class Car extends Vehicle {
    //     constructor(brand, model, year, doors, fuelType) {
    //         super(brand, model, year);
    //         this.doors = doors;
    //         this.fuelType = fuelType;
    //     }

    //     getInfo() {
    //         return `${super.getInfo()} | Doors: ${this.doors}, Fuel Type: ${this.fuelType}`;
    //     }
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
    //     makeSound() {
    //         return "Animal sound";
    //     }
    // }

    // class Dog extends Animal {
    //     makeSound() {
    //         return "Arf!";
    //     }
    // }

    // class Cat extends Animal {
    //     makeSound() {
    //         return "Meow!";
    //     }
    // }

    // class Bird extends Animal {
    //     makeSound() {
    //         return "Tweet!";
    //     }
    // }

    // const dog = new Dog();
    // const cat = new Cat();
    // const bird = new Bird();

    // console.log("Dog:", dog.makeSound());
    // console.log("Cat:", cat.makeSound());
    // console.log("Bird:", bird.makeSound());

/* --------------------------------------------- 8 --------------------------------------------- */

/*
    Create a Student class with properties: name, grade (current grade level like 9, 10, 11, 12), scores (array to store test scores)
    Initialize scores as an empty array in the constructor
    Add a method addScore(score) that adds a test score to the scores array
    Add a method getAverage() that calculates and returns the average of all scores
    Add a method getHighestScore() that returns the highest score
    Add a method getLowestScore() that returns the lowest score
    Add a method hasPassed() that returns true if the average is 60 or above, false otherwise
    Create multiple students, add scores, and display their statistics
*/

/* --------------------------------------------- 8 --------------------------------------------- */

    // class Student {
    //     constructor(name, gradeLevel) {
    //         this.name = name;
    //         this.gradeLevel = gradeLevel;
    //         this.scores = [];
    //     }

    //     addScore(score) {
    //         this.scores.push(score);
    //     }
    //     getAverage() {
    //         if (this.scores.length == 0) return 0;
    //         const total = this.scores.reduce(function(sum, score) {
    //             return sum + score;
    //         }, 0);

    //         return total / this.scores.length;
    //     }
    //     getHighestScore() {
    //         return Math.max(...this.scores);
    //     }
    //     getLowestScore() {
    //         return Math.min(...this.scores);
    //     }
    //     hasPassed() {
    //         return this.getAverage() >= 60;
    //     }
    // }

    // const student1 = new Student("Anselle", 22);
    // const student2 = new Student("Kristine", 22);
    // const student3 = new Student("Sanchea", 3);

    // student1.addScore(60);
    // student1.addScore(80);
    // student2.addScore(90);
    // student2.addScore(50);
    // student3.addScore(40);
    // student3.addScore(50);

    // console.log(`Name: ${student1.name}`);
    // console.log(`Average: ${student1.getAverage()}`);
    // console.log(`Highest: ${student1.getHighestScore()}`);
    // console.log(`Lowest: ${student1.getLowestScore()}`);
    // console.log(`Passed: ${student1.hasPassed()}`);
    // console.log("---------------");
    // console.log(`Name: ${student2.name}`);
    // console.log(`Average: ${student2.getAverage()}`);
    // console.log(`Highest: ${student2.getHighestScore()}`);
    // console.log(`Lowest: ${student2.getLowestScore()}`);
    // console.log(`Passed: ${student2.hasPassed()}`);
    // console.log("---------------");
    // console.log(`Name: ${student3.name}`);
    // console.log(`Average: ${student3.getAverage()}`);
    // console.log(`Highest: ${student3.getHighestScore()}`);
    // console.log(`Lowest: ${student3.getLowestScore()}`);
    // console.log(`Passed: ${student3.hasPassed()}`);

/* --------------------------------------------- 9 --------------------------------------------- */

/*
    Create a Movie class with properties: title, director, releaseYear, ratings (array to store user ratings from 1-5)
    Initialize ratings as an empty array in the constructor
    Add a method addRating(rating) that adds a rating to the ratings array
    Add validation: only accept ratings between 1 and 5 (inclusive)
    Add a method getAverageRating() that calculates and returns the average rating (rounded to 1 decimal place)
    Add a method getRatingCount() that returns how many ratings the movie has received
    Add a method getSummary() that returns a string like: "[Title] (Year) - Directed by [Director] - Average Rating: X.X/5.0 (Y ratings)"
    If no ratings exist, getAverageRating() should return "No ratings yet"
    Create several movies, add ratings, and display their summaries
*/

/* --------------------------------------------- 9 --------------------------------------------- */

    // class Movie {
    //     constructor(title, director, releaseYear) {
    //         this.title = title;
    //         this.director = director;
    //         this.releaseYear = releaseYear;
    //         this.ratings = [];
    //     }

    //     addRating(rating) {
    //         if (rating >= 1 && rating <= 5) {
    //         this.ratings.push(rating);
    //         }
    //     }

    //     getAverageRating() {
    //         if (this.ratings.length == 0) {
    //         return "No ratings yet";
    //         }
    //         let total = 0;
    //         for (let i = 0; i < this.ratings.length; i++) {
    //         total += this.ratings[i];
    //         }
    //         return (total / this.ratings.length).toFixed(1);
    //     }

    //     getRatingCount() {
    //         return this.ratings.length;
    //     }

    //     getSummary() {
    //         let avg = this.getAverageRating();
    //         let count = this.getRatingCount();
    //         if (avg == "No ratings yet") {
    //         return `${this.title} (${this.releaseYear}) - Directed by ${this.director} - No ratings yet`;
    //         } else {
    //         return `${this.title} (${this.releaseYear}) - Directed by ${this.director} - Average Rating: ${avg}/5 (${count} ratings)`;
    //         }
    //     }
    // }

    // const movie1 = new Movie("Wonder Woman", "Patty Jenkins", 2017);
    // movie1.addRating(5);
    // movie1.addRating(4);
    // movie1.addRating(3);

    // const movie2 = new Movie("Wonder Woman 1984", "Patty Jenkins", 2021);
    // movie2.addRating(5);
    // movie2.addRating(4);

    // console.log(movie1.getSummary());
    // console.log(movie2.getSummary());

/* --------------------------------------------- 10 --------------------------------------------- */

/*
    Create a Counter class with a property: count
    Initialize count to 0 in the constructor (or allow an optional starting value)
    Add a method increment() that increases count by 1
    Add a method decrement() that decreases count by 1
    Add a method reset() that sets count back to 0 (or the starting value)
    Add a method getValue() that returns the current count
    Optional: Add incrementBy(amount) and decrementBy(amount) methods
    Create multiple counters and test all methods
*/

/* --------------------------------------------- 10 --------------------------------------------- */

    // class Counter {
    //     constructor() {
    //         this.count = 0;
    //     }
    //     increment() {
    //         this.count++;
    //     }

    //     decrement() {
    //         this.count--;
    //     }

    //     reset() {
    //         this.count = 0;
    //     }

    //     getValue() {
    //         return this.count;
    //     }
    // }

    // const counter = new Counter();
    // counter.increment();
    // counter.increment();
    // counter.increment();
    // console.log(counter.getValue());
    // counter.decrement();
    // console.log(counter.getValue());
    // counter.reset();
    // console.log(counter.getValue());

/*----------------------------------------------------- START HERE -----------------------------------------------------------------*/

/*    Goal: Apply everything together. */

// Create a function that takes an array of numbers and returns only the even ones.

// function getEvenNumbers(arr) {
//   return arr.filter(num => num % 2 == 0).sort();
// }

// console.log(getEvenNumbers([1,6,5,8,2,9]));

// Build a simple calculator (add, subtract, multiply, divide) using functions.

// function add(a, b) {
//   return a + b;
// }

// function subtract(a, b) {
//   return a - b;
// }

// function multiply(a, b) {
//   return a * b;
// }

// function divide(a, b) {
//   return a / b;
// }

// console.log(add(5, 3));
// console.log(subtract(5, 3));
// console.log(multiply(5, 3));
// console.log(divide(5, 3));

// Write a program that generates a random number between 1 and 100 and asks the user to guess it.

// let number = Math.floor(Math.random() * 100) + 1;
// let guess = 0;

// while (guess !== number) {
//   guess = Number(prompt("Guess a number between 1 and 100:"));

//   if (guess == number) {
//     alert("Correct! The number was " + number);
//   } else if (guess < number) {
//     alert("Too low! Try again!");
//   } else {
//     alert("Too high! Try again!");
//   }
// }

// Create a program that counts how many words are in a sentence.

// function countWords(sentence) {
//   let words = sentence.split(" ");
//   let count = words.length;
//   console.log("There are " + count + " words in your sentence.");
// }

// countWords("I love Programming");

// Build a program that checks if a word is a palindrome (e.g. “madam”).

    // function checkPalindrome(word) {
    //     let wordToLowerCase = word.toLowerCase();
        
    //     let reversed = wordToLowerCase.split("").reverse().join("").toLowerCase();

    //     if (wordToLowerCase == reversed) {
    //         console.log("It's a palindrome!");
    //     } else {
    //         console.log("It's not a palindrome.");
    //     }
    // }

// checkPalindrome("madam");


/*----------------------------------------------------- START HERE -----------------------------------------------------------------*/

// 1. Write a function that takes a string and returns it reversed

// function reverseString(str) {
//     return str.split('').reverse().join('');
// }

// console.log(reverseString("hello"));

// 2. Write a function that takes an array of numbers and returns the largest one

// function findLargest(numbers) {
//   let largest = numbers[0];

//     for (let i = 1; i < numbers.length; i++) {
//         if (numbers[i] > largest) {
//             largest = numbers[i];
//         }
//     }

//     return largest;
// }

// console.log(findLargest([3, 7, 2, 9, 5]));

// 3. Write a function that counts the number of vowels in a string

// function countVowels(str) {
//     let count = 0;
//     let vowels = "aeiouAEIOU";

//     for (let i = 0; i < str.length; i++) {
//         if (vowels.includes(str[i])) {
//             count++;
//         }
//     }

//     return count;
// }

// console.log(countVowels("Hello World"));

// 4. Write a function that prints numbers 1-100, but for multiples of 3 print "Fizz", for multiples of 5 print "Buzz", and for multiples of both print "FizzBuzz"

// function fizzBuzz() {
//     for (let i = 1; i <= 100; i++) {
//         if (i % 3 == 0 && i % 5 == 0) {
//             console.log("FizzBuzz");
//         } else if (i % 3 == 0) {
//             console.log("Fizz");
//         } else if (i % 5 == 0) {
//             console.log("Buzz");
//         } else {
//             console.log(i);
//         }
//     }
// }

// fizzBuzz();

// 6. Write a function that removes duplicate values from an array

// function removeDuplicates(arr) {
//   let unique = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (!unique.includes(arr[i])) {
//       unique.push(arr[i]);
//     }
//   }
//   return unique;
// }

// console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));

// 7. Given an array containing n-1 numbers from 1 to n, find the missing number

// function findMissingNumber(arr, n) {
//     let total = (n * (n + 1)) / 2;
//     let sum = 0;

//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }

//     return total - sum;
// }

// console.log(findMissingNumber([1, 2, 4, 5, 6], 6));

// 8. Write a function that flattens a nested array of any depth

// function flattenArray(arr) {
//   return arr.flat();
// }

// console.log(flattenArray([1, [2, 3], 4, [5, 6]]));
