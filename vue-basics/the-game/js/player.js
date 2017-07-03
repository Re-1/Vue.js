var player = function () {
  //private
  var playerName = '';

  function logPlayer () {
    console.log('The current player is: ' + playerName);
  }
  function setName (newName) {
    playerName = newName;
  }
  function getName () {
    return playerName;
  }

  // public API
  return {
    logPlayer: logPlayer,
    setName: setName,
    getName: getName
  }
}();
