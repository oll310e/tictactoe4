(function setupGameboard() {
  for (let i = 1; i < 10; i++) {
    let cell = document.createElement("div");
    cell.classList.add("cell");

    let gameboard = document.querySelector(".gameboard");
    gameboard.appendChild(cell);
  }
})();

function Player(sign, name, turn) {
  this.sign = sign;
  this.name = name;
  this.turn = turn;
}

function addPlayers() {
  togglePlayersForm();
}

function togglePlayersForm() {}

function SetUpDomQuery() {
  return {
    gameboard: document.querySelector(".gameboard"),
    startBtn: document.querySelector("start"),
  };
}

const DOM = SetUpDomQuery();

//Events
DOM.startBtn.addEventListener("click", (e) => {
  addPlayers();
});

//start game

//add player

//place sign

//
