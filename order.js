//Modules
  //require()
  const Menu = require('./menu.js'); //We can set this variable to any variable name we like, such as menuItems.
  function placeOrder() {
    console.log('My order is: ' + Menu.specialty);
  };

  placeOrder();
