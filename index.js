//Data Types
  console.log('New York City'); // String— Any grouping of keyboard characters (letters, spaces, numbers, or symbols) surrounded by single quotes ('Hello') or double quotes ("World!"). In the example above, 'New York City' is a string.
  console.log(40.7); // Numbers— Any number, including numbers with decimals: 4, 1516, .002, 23.42. In the example above, 40.7 is a number.
  console.log(true); // Boolean— Either true or false, with no quotations. In the example above, true is a boolean.
  console.log(null); // Null — Can only be null. It represents the absence of value.
//Math Operators
  console.log(3 + 4); // Equals 7
  console.log(5 - 1); // Equals 4
  console.log(4 * 2); // Equals 8
  console.log(9 / 3); // Equals 3
//Properties
  console.log('Hello'.length); //In the example, the value saved to the length property is retrieved from the string, 'Hello'. The program prints 5 to the console, because Hello has five characters in it.
//Built-in Method
  console.log('Hello'.toUpperCase()); // 'HELLO'
  console.log('Hey'.startsWith('H')); // true
  console.log('    Remove whitespace   '.trim()); // Use a string method to log the following statment without whitespace at the beginning and end of it.
//Libraries
  console.log(Math.random()); // random number between 0 and 1
  console.log(Math.floor(0.98998989)); // takes a decimal number, and rounds down to the nearest whole number.
  console.log(Math.ceil(43.8));
  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number



//Control Flow: Control flow statements enable JavaScript programs to make decisions by executing code based on a condition. If a given condition is true, we execute one block of code. If the statement is false, we execute another block of code.
  //example
  let userName = null;
  let knowsJavaScript = false;
  if (knowsJavaScript && userName) {
    console.log('Great, ' + userName + '! Get ready to practice your JavaScript!');
  } else if (knowsJavaScript) {
    console.log('Great! Get ready to practice your JavaScript!');
  } else if (userName) {
    console.log('Great, ' + userName + '! Get ready to learn something new!');
  } else {
    console.log('Great! Get ready to learn something new!');
  }
  //example
  let needsCoffee = false;
  if (needsCoffee == true) {
      console.log('Finding coffee');
  } else {
      console.log('Keep on keeping on!');
  }
  //example
  let wordCount = 3; //false, 0 and -0, empty string(""), null, undefined, NaN, document.all
  if (wordCount) {
    console.log("Great! You've started your work!"); // This code will run because variableOne contains a truthy value.
  } else {
    console.log('Better get to work!'); // This code will not run because the first block ran.
  }
  //example
  let isPhoneCharged = true;
  if (!isPhoneCharged) {
    console.log('Plug in your phone!');
  } else {
    console.log('No need to charge!');
  }
  //example
  let isRaining = true;
  if (!isRaining) { //JavaScript provides an operator for swapping the truthiness and falsiness of values - the exclamation point (!).
    console.log("Carry an umbrella!");
  } else {
    console.log("Enjoy the sun!");
  }
  //Comparison Operators
  let hungerLevel = 7;
  if (hungerLevel >= 7){
  console.log("Time to eat!.");
  }
  else{
  console.log("We can eat later");
  }
  //Comparison Operators II
  let moonPhase = "solar eclipse";
  if (moonPhase == "full"){
    console.log("Howl!");
  } else if(moonPhase == "mostly full"){
    console.log("Arms and legs are getting hairier");
  } else if(moonPhase == "mostly new"){
    console.log("Back on two feet");
  } else{
    console.log("Invalid moon phase");
  }

  let stopLight = "green";
  let pedestrian = true;
  if (stopLight == "green" && pedestrian == true){//To say "either can be true," we use ||.
    console.log("Go!");
  } else{
    console.log("Stop!");
  }
  //Switch statements
  let groceryItems = "tomato";
  switch (groceryItems){
    case "tomato":
      console.log("Tomatoes are $0.49");
      break;
    case "papaya":
      console.log("Papayas are $1.29");
      break;
    case "lime":
      console.log("Limes are $1.49");
      break;
    default:
      console.log("Invalid item");
      break;
  }
  //Ternary Operator
  let age = 12;

  if (age >=16){
    console.log("You are old enough to drive in the United States!");
  } else {
    console.log("You are not old enough to drive in the United States!");
  }

  age >= 16 ? console.log("You are old enough to drive in the United States!") : console.log("You are not old enough to drive in the United States!");



//Functions
  //example
  const multipleByThirteen = (inputNumber) => { //inputNumber is a parameter, but when we call multiplyByThirteen(9), the 9 is called an argument. In other words, arguments are provided when you call a function, and parameters receive arguments as their value. When we set the value 9 as the argument, we pass a value to the function.
    console.log(inputNumber * 13);
  }
  multipleByThirteen(9);
    //return
  var inputNumber = 5;
  var multipleByFive = (number) => {
    return inputNumber * 5;
  }
  console.log(multipleByFive(inputNumber));
  //example
  let lightIsOn = true;
  const pressPowerButton = () => {
    if (lightIsOn){
      console.log("Light turning off");
      lightIsOn = false;
    } else {
      console.log("Light turning on");
      lightIsOn = true;
    }
  }
  pressPowerButton();
  pressPowerButton();
  //example
  let orderCount = 0;
  const takeOrder = (topping, crustType) =>{
    console.log('Order ' + crustType + ' pizza topped with ' + topping);
    orderCount++;
  }
  const getSubTotal = (itemCount) => {
    return orderCount * 7.5;
  }
  const getTax = (orderCount) => {
    return getSubTotal(orderCount) * 0.06;
  }
  const getTotal = () => {
  return getSubTotal(orderCount) + getTax(orderCount)
  }
  takeOrder("thinCrust", "chocolate");
  takeOrder('mushrooms', 'thin crust');
  takeOrder('cow', 'original');
  takeOrder('dragon ruit', 'supreme');
  console.log(getTotal());
  //example
  const isGreaterThan = (numberOne, numberTwo) => {
    if (numberOne > numberTwo){
      return true;
    }else {
      return false;
    }
  }
  console.log(isGreaterThan(7,5));
  /*Arrow Functions
  We can refactor this function in three ways. The most condensed form of the function is known as concise body.
  Functions that take a single parameter should not use parentheses. The code will still work, but it's better practice to omit the parentheses around single parameters. However, if a function takes zero or multiple parameters, parentheses are required.
  A function composed of a sole single-line block is automatically returned. The contents of the block should immediately follow the arrow => and the return keyword can be removed. This is referred to as implicit return.
  A function composed of a sole single-line block does not need brackets.*/
  const volumeOfSphere = diameter => (1/6) * Math.PI * diameter * diameter * diameter;
  console.log('The volume of a sphere is ' + volumeOfSphere(10) + ' cubic centimeters');



//Scope
  //Global Scope
  const color = "blue"; //Global Scope refers to variables that are accessible to every part of the program.
  const colorOfSky = () => {
    return color; //blue
  }
  console.log(colorOfSky()); //blue
  //example
  const satellite = 'The moon';
  const galaxy = 'The milky way';
  let stars = 'North star';
  const myNightSky = () => {
    stars = 'sirius';//You'll notice that the global variable stars was reassigned to 'Sirius'. In other words, we unexpectedly changed the value of the global variable, and this could impact our program in ways we do not intend.
    return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
  }
  console.log(myNightSky());
  console.log(stars);
  //example block scope
  const colorOfSea = () => {
    const dusk = true;
    let seaColor = "blue";
    if (dusk){
      let seaColor = "orange blue";
      console.log(seaColor); //orange blue
    }
    console.log(seaColor); //blue
  }
  colorOfSea();
              //console.log(seaColor); //undefined
  //example block scope
  const cloudCount = () => {
    let i = 2;
    console.log(i); //2
    for(let i = 0; i < 10 ; i++){
      console.log(i);//all numbers from 0 to 9;
    }
  }
  cloudCount();
//Arrays
  //example
  let bucketList = ["Rappel into a cave", "Take a falconry class", "Learn to juggle"];
  console.log(bucketList);
  //example
  let a = ("Hello World");
  b = a.split(" ");
  console.log(b);
  c = a.charAt(0);
  console.log(c);
  //example
  const newYearsResolitions = ["Become professional programmer", "Get married", "Become rich"];
  console.log(newYearsResolitions[0]); //output array -0
  newYearsResolitions.push("item 3", "item 4");
  newYearsResolitions.pop(); //this method removes the last item of an array.
  console.log(newYearsResolitions);
  const listItem = newYearsResolitions[1]; //declare output array variable
  console.log(listItem);
  console.log(newYearsResolitions[3]); //undefined
  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array more array method
  //example
  let seasons = ["winter", "spring", "summer", "fall"];
  seasons[2] = "autumn"; //replace item
  console.log(seasons);
  console.log(seasons.length);
  //example
  const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];
  groceryList.shift();
  console.log(groceryList); //remove the first item
  groceryList.unshift("pop corn"); //add item to beginning
  console.log(groceryList);
  groceryList.slice(1, 4);
  console.log(groceryList);



//Loops
  //example
  let cookies = ["chocolate chip", "raisin", "macademia nut", "sugar"];
  for (i = 0; i < cookies.length; i++){
    console.log('I would love to eat a ' + cookies[i] + ' cookie right now!');
  }
  //example
  let vacationSpots = ["Paris", "London", "Bali"];
  for (let vacationSpotIndex = 0; vacationSpotIndex < vacationSpots.length; vacationSpotIndex++){
    console.log("I would like to visit" + vacationSpots[vacationSpotIndex]);
  }
  //for loops backwards
  let vacationSpotsBackwards = ["Bali", "Japan", "London"];
  for (let vacationSpotIndex = vacationSpotsBackwards.length -1; vacationSpotIndex >= 0; vacationSpotIndex--){
    console.log("I would love to visit " + vacationSpotsBackwards[vacationSpotIndex]);
  }
  //nested for Loops
  let myPlaces = ["London", "Japan", "Bali"];
  let friendPlaces = ["Venezuela", "Zimbabwe", "London"];

  for (let myPlaceIndex = 0; myPlaceIndex < myPlaces.length; myPlaceIndex++){
    for(let friendPlaceIndex = 0; friendPlaceIndex < friendPlaces.length; friendPlaceIndex++){
      if (myPlaces[myPlaceIndex] == friendPlaces[friendPlaceIndex]){
          console.log(myPlaces[myPlaceIndex]);
      }
    }
  }
  //while loops
  let cards = ["Diamond", "Spade", "Heart", "Club"];
  let currentCard = "Heart";
  while (currentCard !== "Spade"){
    console.log(currentCard);
    currentCard = cards[Math.floor(Math.random() *4)];
  }
  console.log("You found a spade!");



//Iterators
  //forEach
  let fruits = ["mango", "papaya", "pineapple", "apple"];
  fruits.forEach(function(fruits){
    console.log("I want to eat " + fruits);
  })
  fruits.forEach(fruitLists => console.log('I want to eat ' + fruitLists));
  //example map()
  let numbersss = [1, 2, 3, 4, 5];
  numbersss.map(function(numbersss){
    console.log(numbersss);
  })
  numbersss.map(numberssslist => console.log(numberssslist));
  //map()
  let numbers = [1, 2, 3, 4, 5];
  let bigNumbers = numbers.map(function(number){
    return number  * 10;
  })
  //example
  let animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];
  let secretMessage = animals.map(function(animal){
    console.log(animal.charAt(0));
  })
  console.log(secretMessage.join(""))
    //let secretMessage = animals.map(animal => console.log(animal.charAt(0)));
    //console.log(secretMessage.join(""));
  //filter()
  let randomNumbers = [375, 200, 3.14, 7, 13, 852];
  let smallNumbers = randomNumbers.filter(function(number){
    return number < 250;
  })
  console.log(smallNumbers);
    //let smallNumbers = randomNumbers.filter(number => number < 250);
    //console.log(smallNumbers);
  //example
  let favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];
  let longFavoriteWords = favoriteWords.filter(function(word){
    return word.length > 7;
  })
  console.log(longFavoriteWords);
    //let longFavoriteWords = favoriteWords.filter(word => word.length > 7);
    //console.log(longFavoriteWords);



//Objects
  //example
  let dog = {
    _dogName: "halley",
    _behavior: 0,

    get dogName() {
      return this.dogName;
    },
    get dogBehavior() {
      return this.behavior;
    },
    incrementBehavior() {
      this.behavior++;
    }
  }
  //example
  let person = {
    name: "Najib",
    age: 21,
    weekendAlarm: "No alarms is needed",
    weekAlarm: "Alarm is set to 7AM",
    sayHello() { //methods
      return `Hello my name is ${this.name}`
    },
    sayGoodbye() {//methods
      return `Goodbye!`
    }
  }

  person.hobbies= ["Gaming", "Coding"];// adding property
  console.log(person);

  let friend = {
    name: "Haidar"
  }

  let alarm;
  let day = "Monday"
  if (day == "Saturday" || day == "Sunday"){
    alarm = "weekendAlarm";
  } else {
    alarm = "weekAlarm";
  };

  console.log(person[alarm]);
  console.log(person.sayHello());
  friend.sayHello = person.sayHello;
  console.log(friend.sayHello());

  //example
  const restaurantSpecials = {
    breakfast: "The breakfast special is 20% off freshly squeezed orange juice",
    lunch: "The lunch special is 10% off appetizers",
    none: "There are no specials currently",
  }

  let time = 10;
  let meal = "none";
  if (time < 11){
    meal = "breakfast";
  } else if ( time < 17) {
    meal = "lunch";
  } else {
    meal = "none";
  }
  console.log(restaurantSpecials[meal]);

  //Adding a Property
  const restaurant = {
    name: "Italian Bistro",
    seatingCapacity: 120,
    hasDineInSpecial: true,
    entrees: ['Penne alla Bolognese', 'Chicken Cacciatore', 'Linguine Pesto'],
    openRestaurant() { //methods
      if(this.hasDineInSpecial){
        return 'Unlock the door, flip the open sign. We are open for business!';
      } else {
        return 'Unlock the door, then flip the open sign.';
      }
    },
    closeRestaurant() {
      return 'Lock the door, flip the open sign. We are closed.';
    }
  }
  restaurant["appetizers"] = ['Fried Calamari', 'Bruschetta'];
  restaurant.desserts = ['Homemade Tiramisu', 'Cannoli'];

  restaurant["appetizers"] = ['Fried Calamari', 'Bruschetta', 'Caprese Salad'];//editing property
  restaurant.desserts = ['Homemade Tiramisu', 'Canolli', 'Cheesecake'];//editing property
  console.log(restaurant. openRestaurant());

  //Getters and Setters
  let newRestaurant = {
    _name: 'Italian Bistro',
    _seatingCapacity: 120,
    _hasDineInSpecial: true,
    _entrees: ['Penne alla Bolognese', 'Chicken Cacciatore', 'Linguine pesto'],

    set seatingCapacity(newCapacity) {
      if (typeof newCapacity === "number") {
        this._seatingCapacity = newCapacity;
      } else {
        console.log(`Change ${newCapacity} to a number.`)
      }
    },
    get seatingCapacity() {
      console.log(`There are ${this._seatingCapacity} seats at Italian Bistro.`);
      return this._seatingCapacity;
    }
  }
  newRestaurant.seatingCapacity = 150;
  console.log(newRestaurant.seatingCapacity);
  //example
  let human = {
  _name: 'Lu Xun',
  _age: 137,

  set age(ageIn) {
      if (typeof ageIn === 'number') {
      this._age = ageIn;
      console.log(`${ageIn} is valid input`);
      } else {
      return 'Invalid input';
      }
    },
    get age() {
      console.log(`${this._name} is ${this._age} years old.`);
      return this._age;
    }
  };

  human.age = 39;
  console.log(human._age);

//Classes OOP
  //example
  class Surgeon {
    constructor(name, department) {
      this._name = name;
      this._department = department;
      this._remainingVacationDays = 20;
    }

    get name() {
      return this._name;
    }

    get department() {
      return this._department;
    }

    get remainingVacationDays() {
      return this._remainingVacationDays;
    }

    takeVacationDays(daysOff){
      this._remainingVacationDays -= daysOff;
    }
  }

  const surgeonCurry = new Surgeon('Curry', 'Cardiovascular');
  const surgeonDurant = new Surgeon('Durant', 'Orthopedics');
  console.log(surgeonCurry.name);
  surgeonCurry.takeVacationDays(3);
  console.log(surgeonCurry.remainingVacationDays);
  console.log(surgeonCurry);
  //example
   class personalPerson{
     constructor(name) {
       this._name = name;
       this._age = 0;
     }

     get name() {
       return this._name;
     }
     get age() {
       return this.age;
     }

     incrementAge() {
      this._age++;
     }
   }

   const najib = new personalPerson("Najib");
   console.log(najib.name);
   najib.incrementAge();
   console.log()

 //Inheritance
   class HospitalEmployee{
     constructor(name){
       this._name = name;
       this._holidaysRemaining = 20;
     }
     get name() {
       return this._name;
     }
     get holidaysRemaining() {
       return this._holidaysRemaining;
     }
     takeHolidays(holidaysOff) {
       this._holidaysRemaining -= holidaysOff;
     }
     static generatePassword() {//static method
       return Math.floor(Math.random() * 1000);
     }
   }
  class Nurse extends HospitalEmployee{
      constructor(name, certifications) {
        super(name);
        this._certifications = certifications;
      }
      get certifications() {
        return this._certifications;
      }
      addCertification(newCertification) {
        this._certifications.push(newCertification);
      }
  }
  const nurseOlynyk = new Nurse('Olynyk', ['Trauma', 'Pediatrics']);
  console.log(nurseOlynyk);
  nurseOlynyk.takeHolidays(5);
  console.log(nurseOlynyk.holidaysRemaining);
  nurseOlynyk.addCertification('Genetics');
  console.log(nurseOlynyk.certifications);



//Request
  //XHR GET Request
  /* //structure
  const xhr = new XMLHttpRequest();
  const url = 'https://api-to-call.com/endpoint';
  xhr.responseType = 'json';

  xhr.onreadystatechange = function() {
  if(xhr.readyState === XMLHttpRequest.DONE ) {
    console.log(xhr.response);
  }
  }

  xhr.open('GET', url);
  xhr.send();
  */
  const apiKey = 'AIzaSyBXj0HyOMDH2uP4PElGx3and0MWMUIwooc';
  const url = 'https://www.googleapis.com/urlshortener/v1/url';
  function expandUrl() {
    const inputText = 'https://goo.gl/cjyLB1';

    const urlToExpand = url + '?key=' + apiKey + '&shortUrl=' + inputText;
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        console.log(xhr.response);
      }
    }

    xhr.open('GET', urlToExpand);
    xhr.send();
  }
  expandUrl();
  //XHR POST Request
  /*
  const xhr = new XMLHttpRequest();
  const url = 'https://api-to-call.com/endpoint';
  const data = JSON.stringify({id: '200'});
  xhr.responseType = 'json';

  xhr.onreadystatechange = function() {
    if(xhr.readyState === XMLHttpRequest.DONE ) {
      console.log(xhr.response);
    }
  }

  xhr.open('POST', url);
  xhr.send(data);
  */
  function shortenUrl() {
    const inputText = 'https://medium.com/@codecademy/breaking-the-coding-language-barrier-bf24652c3c60';
    const urlWithKey = url + '?key=' + apiKey;
    const urlToShorten = inputText;
    const data = JSON.stringify({longUrl: urlToShorten});
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.onreadystatechange = function() {
      if(xhr.readyState === XMLHttpRequest.DONE) {
        console.log(xhr.response);
      }
    }
    xhr.open('POST', urlWithKey);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(data);
  }
  shortenUrl();

  //$.ajax() GET Request
  /* structure
  $.ajax({
    url: 'https://api-to-call.com/endpoint',
    type: 'GET',
    dataType: 'json',
    success(response){
      console.log(response);
  	},
    error(jqXHR, status, errorThrown){
      console.log(jqXHR);
    }
  });
  */
  function expandUrlAjax() {
    const inputText = 'https://goo.gl/cjyLB1';
  	const urlToExpand = url + '?key=' + apiKey + '&shortUrl=' + inputText;
    $.ajax({
      url: urlToExpand,
      type: ('GET'),
      dataType: 'json',
      success(response) {
        console.log(response);
      },
      error(jqXHR, status, errorThrown){
        console.log(jqXHR);
      }
    });
  }
  expandUrlAjax();

  //$.ajax() POST Request
  /* structure
  $.ajax({
    url: 'https://api-to-call.com/endpoint',
    type: 'POST',
    data: JSON.stringify({id: 200}),
    dataType: 'json',
    success(response){
      console.log(response);
    }, error(jqXHR, status, errorThrown) {
    	console.log(jqXHR);
  	}
  });
  */
  function shortenUrlAjax() {
    const inputText = 'https://medium.com/@codecademy/breaking-the-coding-language-barrier-bf24652c3c60';
  	const urlWithKey = url + '?key=' + apiKey;
    const urlToShorten = inputText;
    $.ajax({
      url: urlWithKey,
      type: 'POST',
      data: JSON.stringify({longUrl: urlToShorten}),
      dataType: 'json',
      contentType: 'application/json',
      success(response) {
        console.log(response);
        $responseField.append('<p>Your shortened url is: </p><p>' + response.id + '</p>');
      }, error(jqXHR, status, errorThrown) {
      	console.log(jqXHR);
    	}
    });
  }
  shortenUrlAjax();

  //AJAX requests with $.get()
  /*
  $.get(urlToExpand, response => {
    $responseField.append('<p>Your expanded url is: </p><p>' +
  response.longUrl + '</p>');
  }, 'json');


  //AJAX request with $.post()
  $.post({
    url: urlWithKey,
    data: JSON.stringify({longUrl: urlToShorten}),
    dataType: 'json',
    contentType: 'application/json',
    success(response) {
      console.log(response);
      $responseField.append('<p>Your shortened url is: </p><p>' + response.id + '</p>');
    }, error(jqXHR, status, errorThrown) {
      console.log(jqXHR);
    }
  });
  */


  //
  $.getJSON(urlToExpand, response => {
    $responseField.append('<p>Your expanded url is: </p><p>' + response.longUrl + '</p>');
  });
