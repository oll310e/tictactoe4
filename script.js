(function setupGameboard() {
  for (let i = 1; i < 10; i++) {
    let cell = document.createElement("div");
    cell.classList.add("cell");

    let gameboard = document.querySelector(".gameboard");
    gameboard.appendChild(cell);
  }
})();

function SetUpDomQuery() {
  return {
    gameboard: document.querySelector(".gameboard"),
    startBtn: document.querySelector(".start"),
    playersForm: document.querySelector(".players-form"),
    playerName: document.querySelector("#name"),
    playerSign: document.querySelector("#sign"),
    playerTurn: document.querySelector("#turn"),
  };
}

const DOM = SetUpDomQuery();

//

function Player(sign, name) {
  this.sign = sign;
  this.name = name;
  this.addSign = function (e) {
    console.log(e.target, this.sign);
  };
}

function addPlayers() {
  togglePlayersForm();
}

function togglePlayersForm() {
  if (DOM.playersForm.classList.contains("hidden")) {
    DOM.playersForm.classList.toggle("hidden");
  }
}

function emptyForm() {
  DOM.playerName.value = "";
  DOM.playerSign.value = "";
}

//Events

let gameStarted = false;

DOM.startBtn.addEventListener("click", (e) => {
  addPlayers();
  gameStarted = true;
});

DOM.playersForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let name = DOM.playerName.value;
  let sign = DOM.playerSign.value;

  let newPlayer = new Player(name, sign);

  DOM.playersForm.classList.toggle("hidden");

  emptyForm();

  console.log(newPlayer);
});

DOM.gameboard.addEventListener("click", (e) => {
  if (e.target.classList.contains("cell") && gameStarted) {
    turnPlayer.addSign(e);
  }
});

//start game

//add player

//place sign

//
