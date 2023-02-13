let tictactoe = (function () {
  //Setup
  (function setupGameboard() {
    for (let i = 1; i < 10; i++) {
      let cell = document.createElement("div");
      cell.classList.add("cell");
      cell.setAttribute("cell-id", i);

      let gameboard = document.querySelector(".gameboard");
      gameboard.appendChild(cell);
    }
  })();

  function SetUpDomQuery() {
    return {
      gameboard: document.querySelector(".gameboard"),
      cells: document.querySelectorAll(".cell"),
      startBtn: document.querySelector(".start"),
      playersForm: document.querySelector(".players-form"),
      playerName: document.querySelector("#name"),
      playerSign: document.querySelector("#sign"),
    };
  }

  const DOM = SetUpDomQuery();

  function Player(name, sign) {
    this.sign = sign.toUpperCase();
    this.name = name;
    this.addSign = function (e) {
      if (e.target.innerText == "") {
        e.target.innerText = `${this.sign}`;
        checkWin();
        toggleTurnPlayer();
      }
    };
  }

  let gameStarted = false;
  let players = [];
  let playerIndex = 0;

  //Functions

  function addPlayers() {
    togglePlayersForm();
  }

  function togglePlayersForm() {
    DOM.playersForm.classList.toggle("hidden");
  }

  function emptyForm() {
    DOM.playerName.value = "";
    DOM.playerSign.value = "";
  }

  function startGame() {
    gameStarted = true;
  }

  function toggleTurnPlayer() {
    if (playerIndex == 0) {
      playerIndex = 1;
    } else {
      playerIndex = 0;
    }
  }

  function clearGame() {
    DOM.cells.forEach((cell) => {
      cell.innerText = "";
    });
    players = [];
  }

  function checkWin() {
    let c = DOM.cells;
    if (
      (c[0].innerText == players[playerIndex].sign &&
        c[1].innerText == players[playerIndex].sign &&
        c[2].innerText == players[playerIndex].sign) ||
      (c[3].innerText == players[playerIndex].sign &&
        c[4].innerText == players[playerIndex].sign &&
        c[5].innerText == players[playerIndex].sign) ||
      (c[6].innerText == players[playerIndex].sign &&
        c[7].innerText == players[playerIndex].sign &&
        c[8].innerText == players[playerIndex].sign) ||
      (c[0].innerText == players[playerIndex].sign &&
        c[3].innerText == players[playerIndex].sign &&
        c[6].innerText == players[playerIndex].sign) ||
      (c[1].innerText == players[playerIndex].sign &&
        c[4].innerText == players[playerIndex].sign &&
        c[7].innerText == players[playerIndex].sign) ||
      (c[2].innerText == players[playerIndex].sign &&
        c[5].innerText == players[playerIndex].sign &&
        c[8].innerText == players[playerIndex].sign) ||
      (c[0].innerText == players[playerIndex].sign &&
        c[4].innerText == players[playerIndex].sign &&
        c[8].innerText == players[playerIndex].sign) ||
      (c[2].innerText == players[playerIndex].sign &&
        c[4].innerText == players[playerIndex].sign &&
        c[6].innerText == players[playerIndex].sign)
    ) {
      winner(players[playerIndex]);
    }
  }

  function winner(player) {
    alert(
      `${player.name}, ${player.sign} Enjoys Winner Winner Chicken Dinner!!`
    );
    clearGame();
  }

  //Events

  DOM.startBtn.addEventListener("click", (e) => {
    clearGame();
    addPlayers();
  });

  DOM.playersForm.addEventListener("submit", (e) => {
    e.preventDefault();

    if (players.length == 1) {
      togglePlayersForm();
      startGame();
    }

    let name = DOM.playerName.value;
    let sign = DOM.playerSign.value;

    let newPlayer = new Player(name, sign);
    players.push(newPlayer);

    emptyForm();
  });

  DOM.gameboard.addEventListener("click", (e) => {
    if (e.target.classList.contains("cell") && gameStarted) {
      players[playerIndex].addSign(e);
    }
  });
})();
