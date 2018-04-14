console.log("inside HTML file");
console.log("Inside Javascript file");
console.log(4*5);
let human = {
  eye_color : "brown",
  hair_color : "blonde",
  skin_color : "black oil"
};

console.log(human); //output the object
let gravity = 10;
gravity = 5;
console.log(gravity);

let city = "Jakarta";
city = "bandung";
console.log(city);

let number_1 = 4;
let number_2 = 3;
let result = number_1 + number_2;
console.log("result: ", result);

var condition_a = true;
var condition_b = false;
var reason = condition_a && condition_b;
console.log("reason: ", reason);
console.log(Math.PI);

let animal = ["anjing", "babi", "monyet"]
console.log("Animal: ", animal);

const doomsday = new Date("2012-12-02")
console.log(doomsday)
document.write(doomsday);


let kelvin = "294";
//kelvin asdf
const celcius = kelvin - 273;
//confert kelvin to celcius
let fahrenheit = celcius * (9/5) + 32;
//convert celcius to fahrenheit
fahrenheit = Math.floor(fahrenheit);
//round the decimal
let temperature = fahrenheit;
console.log(`The temperature is ${fahrenheit} degrees fahrenheit`);

let moonPhase = "Solar Eclipse";
let isFoggyNight = true;


//switch
switch (moonPhase){
  case "full":
    	console.log("Howl!");
    	break;
  case "mostly full":
    	console.log("Arms and legs are getting hairier");
    	break;
  case "mostly new":
    	console.log("Back on two feet");
      break;
  default:
      console.log("Invalid moon phase");
      break;
}


//if else
if (moonPhase === "full" || isFoggyNight){
  console.log("I swear i am not a werewolf")
}
else if(moonPhase === "mostly full"){
  console.log("Arms and legs are getting hairier");
}
else if(moonPhase ==="mostly new"){
  console.log("Back on two feet");
}
else{
  console.log("Invalid moon phase")
}

//Functions ---------------------------------------------------------------------------------------------------------------
let orderCount = 0;

function takeOrder(topping, crustType) {
  console.log('Order: ' + crustType + ' pizza topped with ' + topping);
  orderCount++;
};

takeOrder('mushroom', 'thin crust');
takeOrder('spinach', 'whole wheat');
takeOrder('pepperoni', 'brooklyn style');

let totalOrder = orderCount *5000;

function calculateTax(total){
    var tax = total * 0.1;
    return tax;
}
let totalTax = calculateTax(totalOrder);
let total = totalOrder + totalTax;
console.log(total);
console.log(`Total order: ${totalOrder}, Total tax ${totalTax}`);

console.log();
//---------------------------------------------------------------------------------------------------------------------


//return
const multiplyByNineFifths = (celsius) => {
  return celsius * (9/5);
};

const getFahrenheit = (celsius) => {
  return multiplyByNineFifths(celsius) + 32;
};

console.log('The temperature is ' + getFahrenheit(15) + '°F');
// Output: The temperature is 59°F


const satellite = "The Moon";
const galaxy = "The Milky Way";

let stars = "North Star";

const myNightSky = () =>{
  console.log(`Night sky: ${satellite}, ${stars}, ${galaxy}`);
}
myNightSky();

const visibleLightWaves = () =>{
  let lightWaves = 'Moonlight';
  console.log(lightWaves);
}

visibleLightWaves();

let vacationSpots = ["Bali", "Japan", "London"];
for (let vacationSpotIndex = 0; vacationSpotIndex < vacationSpots.length; vacationSpotIndex++){
  console.log("I would love to visit " + vacationSpots[vacationSpotIndex]);
}

let cards = ['Diamond', 'Spade', 'Heart', 'Club'];

let currentCard = 'Heart';

while (currentCard !== 'Spade') {
  console.log(currentCard);
  currentCard = cards[Math.floor(Math.random() *4)];
}

console.log('You found a spade!');

let artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];

for (let artistsIndex = 0; artistsIndex < artists.length; artistsIndex++){
  console.log( artists[artistsIndex] + ' is one of my favorite artists.');
}




let student = ["Afrizal", "Najib", "Billy"];
console.log(student);

let lampu = "on";
function tombolLampu(){
  if (lampu = "on"){
    console.log("Lampu sedang Menyala")
  }
}


let fruits = ['mango', 'papaya', 'pineapple', 'apple'];

fruits.forEach(function(fruits) {
	console.log(' ' + fruits)
});

fruits.forEach(fruitsList => console.log(' ' + fruitsList));

let animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below

let secretMessage = animals.map(animal => animal.charAt(0));
console.log(secretMessage.join(''));

let bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below

let smallNumbers = bigNumbers.map(num => num/100);


let randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below



let cities = ['Nashville', 'Charlotte', 'Asheville', 'Austin', 'Boulder'];

let nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
cities.forEach(city => console.log('Have you visited ' + city + '?'));

// Choose a method that will return a new array
let longCities = cities.filter(city => city.length > 7);

// Choose a method that will return a new array
let smallerNums = nums.map(num => num - 5);

// Choose a method that will return a boolean value
nums.every(num => num < 0);
/*
const lampu = () => {
  console.log("asdf");
}
lampu();
function lampus(){
  console.log("asdf");
}
lampus();
*/


//javascript-project1
//level6
const sentenseA = "Hello World!";
const sentenseB = "Good Bye!";
const sentenseC = sentenseA + " cruel " +sentenseB;
console.log(sentenseC.toLowerCase());

//level7
var string = "good bye cruel world";
var str = string.split(" ");

for (var i = 0; i < str.length; i++){
  str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
}



function logname(name){
  console.log(`My name is ${name}`);
}

function insertCustomName(callback){
  var name = "Najib";
  callback(name);
}

insertCustomName(logname);


let todo = [];

let inputTodo = ""

let todoPromise = new Promise((resolve, reject) => {
  if inputTodo (inputTodo === ""){
    const error = new console.error("kosong brah");;
    reject(error);
  }else{
    resolve(inputTodo);
  }
});

todoPromise
  .then(inputTodo => {
    todo.push(inputTodo);
    return todo;
  })
  .then(inputTodo ={
    inputTodo += "gg";
    todo.push(inputTodo;);
    console.log(todo);
  })
  .catch(error => {
    console.log(".catch >>>" + error.message);
  })


  let human = {
  _name: 'Lu Xun',
  _age: 137,

  set age(ageIn) {
    if (typeof ageIn === 'number') {
      this._age = ageIn;
    }
    else {
      console.log('Invalid input');
      return 'Invalid input';
    }
  },
  get age() {
    console.log(`${this._name} is ${this._age} years old.`);
    return this._age;
  }
  };

  human.age = 39;
  console.log(human.age);
