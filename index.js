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

//level6
const sentenseA = "Hello World!";
const sentenseB = "Good Bye!";
const sentenseC = sentenseA + " cruel " +sentenseB;
console.log(sentenseC.toLowerCase());

//level7
var string = "good bye cruel world";
var str = string.split(" ");

for (var i = 0; i < str.length; i++){
  str[i] = str[i].charAt(0).toUpperCase() + str [i].slice(1);
}

console.log(str.join(" ,"));


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
