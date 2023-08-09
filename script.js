let player_1_Name = document.getElementById("player1name");
let player_2_Name = document.getElementById("player2name");
let player1 = document.getElementById("player1");
let player2 = document.getElementById("player2");
let game = document.getElementById("game");
let playerDetailsForm = document.getElementById("playerDetails");
let result = document.getElementById("result");
let resultBlock = document.getElementById("resultBlock");
let buttons = document.querySelectorAll(".buttons");
let container = document.querySelector(".container");
let title = document.getElementById("title");
let gameMatrix = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];
let isClicked = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

let player = 1;
let winBy = "";
let res = "";

function start() {
  if (player_1_Name.value && player_2_Name.value) {
    game.style = "display:flex";
    playerDetails.style = "display:none";

    player1.innerHTML = `<b>${player_1_Name.value}<br />( X )</b>`;
    player2.innerHTML = `<b>${player_2_Name.value}<br />( O )</b>`;
  } else {
    alert("Enter the Players Name");
  }
}

function mark(id) {
  let x = id[1],
    y = id[2];
  if (!isClicked[x][y]) {
    isClicked[x][y] = 1;
    let block = document.getElementById(id);
    if (player % 2 == 0) {
      gameMatrix[x][y] = "O";
      block.innerHTML = "O";
      block.style = "box-shadow: 0 0 10px #ff1493;color: #ff1493;border: none;";
      player2.style = "color: #ffffff;box-shadow:none";
      player1.style = "box-shadow: 0 0 10px #FFD700;color: #121212;";
      isGameOver(x, y);
    } else {
      gameMatrix[x][y] = "X";
      block.innerHTML = "X";
      block.style = "color: #ffd700;border: none;box-shadow: 0 0 10px #ffd700;";
      player1.style = "box-shadow:none;color: #ffffff;";
      player2.style = "color: #121212;box-shadow:  0 0 10px #FF1493;";
      isGameOver(x, y);
    }
    player++;
  }
}

function isTie() {
  for (i = 0; i < 3; i++) {
    for (j = 0; j < 3; j++) {
      if (isClicked[i][j] == 0) {
        return false;
      }
    }
  }

  return true;
}

function isWin(x, y) {
  let win = true;
  if (player % 2 == 0) {
    // Checking the columns
    for (i = 0; i < 3; i++) {
      if (gameMatrix[x][i] != "O") {
        win = false;
        break;
      }
    }
    if (win) {
      winBy = "row";
      return true;
    } else {
      win = true;
      for (i = 0; i < 3; i++) {
        if (gameMatrix[i][y] != "O") {
          win = false;
          break;
        }
      }
      if (win) {
        winBy = "column";
        return true;
      } else {
        win = true;
        for (i = 0; i < 3; i++) {
          if (gameMatrix[i][i] != "O") {
            win = false;
            break;
          }
        }
        if (win) {
          winBy = "left-cross";
          return true;
        } else {
          win = true;
          for (i = 0, j = 2; i < 3; i++, j--) {
            if (gameMatrix[i][j] != "O") {
              win = false;
              break;
            }
          }
          if (win) {
            winBy = "right-cross";
            return true;
          }
        }
      }
    }
    return false;
  } else {
    for (i = 0; i < 3; i++) {
      if (gameMatrix[x][i] != "X") {
        win = false;
        break;
      }
    }
    if (win) {
      winBy = "row";
      return true;
    } else {
      win = true;
      for (i = 0; i < 3; i++) {
        if (gameMatrix[i][y] != "X") {
          win = false;
          break;
        }
      }
      if (win) {
        winBy = "column";
        return true;
      } else {
        win = true;
        for (i = 0; i < 3; i++) {
          if (gameMatrix[i][i] != "X") {
            win = false;
            break;
          }
        }
        if (win) {
          winBy = "left-cross";
          return true;
        } else {
          win = true;
          for (i = 0, j = 2; i < 3; i++, j--) {
            if (gameMatrix[i][j] != "X") {
              win = false;
              break;
            }
          }
          if (win) {
            winBy = "right-cross";
            return true;
          }
        }
      }
    }
    return false;
  }
}

function showResult() {
  let winner = document.getElementById("winner");
  let loser = document.getElementById("loser");
  if (res == "win") {
    // container.style = "background-color: #ffffff10;backdrop-filter: blur(15px);";
    game.style = "display:none";
    title.style = "display:none;";
    result.style = "display:flex;";
    if (player % 2 == 0) {
      winner.innerHTML = `<b>${player_1_Name.value}<br />( X )</b>`;
      winner.style = "border:1px solid black;";
      loser.innerHTML = `<b>${player_2_Name.value}<br />( O )</b>`;
      loser.style = "color:black";
    } else {
      winner.innerHTML = `<b>${player_2_Name.value}<br />( O )</b>`;
      winner.style = "background-color: #ff1493;box-shadow:  0 0 10px #FF1493;border:1px solid black;";
      loser.innerHTML = `<b>${player_1_Name.value}<br />( X )</b>`;
      loser.style = "background-color: #ffd700;box-shadow:none;color:black";
    }
  } else {
    game.style = "display:none";
    title.style = "display:none;";
    result.style = "display:flex;";

    let congrats = document.getElementById("congrats");
    congrats.innerHTML = `<b
    ><span style="color: #ffd700">T</span
    ><span style="color: #ff1493">I</span
    ><span style="color: #ffd700">E</span>
    </b>`;

    let win = document.querySelector(".win");
    let lose = document.querySelector(".lose");

    win.innerHTML = `<div id="winner">
    <b>${player_1_Name.value}<br />( X )</b>
    </div>`;
    lose.innerHTML = `<div id="loser">
    <b>${player_2_Name.value}<br />( O )</b>
    </div>`;

    result.style =
      "display:flex;width:auto;height: auto;justify-content: space-between;padding: 50px 25px;";
    resultBlock.style = "margin-top : 50px";
    buttons[1].style = "margin-top : 25px";
    lose.style = "color:black";
  }
}

function isGameOver(x, y) {
  if (isWin(x, y)) {
    switch (winBy) {
      case "row":
        for (i = 0; i < 3; i++) {
          document.getElementById(`B${x}${i}`).style =
            "box-shadow: 0 0 10px #00ff00; color:#00ff00; border: 2px solid #00ff00";
        }
        res = "win";
        setTimeout(showResult, 1000);
        break;
      case "column":
        for (i = 0; i < 3; i++) {
          document.getElementById(`B${i}${y}`).style =
            "box-shadow: 0 0 10px #00ff00; color:#00ff00; border: 2px solid #00ff00";
        }
        res = "win";
        setTimeout(showResult, 1000);
        break;
      case "left-cross":
        for (i = 0; i < 3; i++) {
          document.getElementById(`B${i}${i}`).style =
            "box-shadow: 0 0 10px #00ff00; color:#00ff00; border: 2px solid #00ff00";
        }
        res = "win";
        setTimeout(showResult, 1000);
        break;
      case "right-cross":
        for (i = 0, j = 2; i < 3; i++, j--) {
          document.getElementById(`B${i}${j}`).style =
            "box-shadow: 0 0 10px #00ff00; color:#00ff00; border: 2px solid #00ff00";
        }
        res = "win";
        setTimeout(showResult, 1000);
        break;
    }
  } else if (isTie()) {
    res = "tie";
    setTimeout(showResult, 1000);
  }
}

function playAgain() {
  player = 1;
  for (i = 0; i < 3; i++) {
    gameMatrix[i].fill("");
    isClicked[i].fill(0);
  }

  for (i = 0; i < 3; i++) {
    for (j = 0; j < 3; j++) {
      document.getElementById(`B${i + "" + j}`).innerHTML = "";
      document.getElementById(`B${i + "" + j}`).style =
        "box-shadow: 0 0 2px #ffffff;";
    }
  }
  player2.style = "color: #ffffff;box-shadow:none";
  player1.style = "box-shadow: 0 0 10px #FFD700;color: #121212;";
  game.style = "display:flex";
  title.style = "display:block;";
  result.style = "display:none;";
}

function reset() {
  player = 1;
  for (i = 0; i < 3; i++) {
    gameMatrix[i].fill("");
    isClicked[i].fill(0);
  }

  for (i = 0; i < 3; i++) {
    for (j = 0; j < 3; j++) {
      document.getElementById(`B${i + "" + j}`).innerHTML = "";
      document.getElementById(`B${i + "" + j}`).style =
        "box-shadow: 0 0 2px #ffffff;";
    }
  }
  game.style = "display:none";
  playerDetails.style = "display:block";
  player2.style = "color: #ffffff;box-shadow:none";
  player1.style = "box-shadow: 0 0 10px #FFD700;color: #121212;";
  title.style = "display:block;";
  result.style = "display:none;";
  player_1_Name.value = "";
  player_2_Name.value = "";
}
