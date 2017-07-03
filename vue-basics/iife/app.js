//klasická funkce
function foo () {
  // ...
}

// IIFE
(function () {
 //..
 console.log('Zdravím, já jsem IIFE.');
})();

// IIFE s parametrem
(function (jmeno) {
  //...
  console.log('Ahoj, já jsem IIFE s parametrem: ' + jmeno);
})('Monika');

// Singleton module
var scoreboard = function () {
  var message = 'Welcoem to the game!';
  function printMessage () {
    console.log(message);
  }
  return {
    showMessage: printMessage;
  }
}();
