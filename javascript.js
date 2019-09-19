let currentTurn = "player1";

const columns = document.getElementsByTagName("tr");

addHandlers();

const resetButton = document.getElementById("restart");
resetButton.addEventListener("click", resetGame)

function dropChip() {
  console.log('This move: ' + currentTurn)
  let column = event.currentTarget;
  let cells = column.children;
  for (let cellIndex = cells.length - 1; cellIndex >= 0; cellIndex--) {
    if (cells[cellIndex].childElementCount === 0) {
      const chip = document.createElement("div");

      if (currentTurn === "player1") {
        chip.className = "chipRed";
      } else if (currentTurn == "player2") {
        chip.className = "chipBlack";
      }

      cells[cellIndex].appendChild(chip);
      break;
    }
  }
  let condition = checkEndCondition();

  if (condition === 'win') {
    alert("You have WON! (Hit reset to restart game!)")
    removeHandlers()
  } else if (condition === 'tie') {
    alert("Oh no, it's a TIE! (Hit reset to restart game!")
    removeHandlers()
  }    
// switch players
  if (currentTurn === 'player1') {
    currentTurn = 'player2';
  } else if (currentTurn === 'player2') {
    currentTurn = 'player1';
  } 

}
//Resetting game functions from line 42-60
function resetGame() {
  let cells = document.getElementsByTagName('td')

  for (cellIndex = 0; cellIndex < cells.length; cellIndex++) {
    cells[cellIndex].innerHTML = "";
  }
  addHandlers();
}

function removeHandlers() {
  for (let columnIndex = 0; columnIndex < columns.length; columnIndex++) {
    columns[columnIndex].removeEventListener("click", dropChip)
  }
}

function addHandlers() {
  for (let columnIndex = 0; columnIndex < columns.length; columnIndex++) {
    columns[columnIndex].addEventListener("click", dropChip);
  }
}

function checkEndCondition() {
  if (checkHorizontalWin() || checkVerticalWin() || checkDiagonalLeft() || checkDiagonalRight()) {
    return "win";
  } else if (checkTie()) {
            return "tie"
        }  else {
            return
        }
}

function checkHorizontalWin() {
  const xEdge = (columns.length - 3); 

  for (let columnIndex = 0; columnIndex < xEdge; columnIndex++) {
    let cells = columns[columnIndex].children;

    for (let cellIndex = 0; cellIndex < cells.length; cellIndex++) {

      if (cells[cellIndex].hasChildNodes()) {
        let firstCell = columns[columnIndex].children[cellIndex];
        let secondCell = columns[columnIndex + 1].children[cellIndex];
        let thirdCell = columns[columnIndex + 2].children[cellIndex];
        let fourthCell = columns[columnIndex + 3].children[cellIndex];

        const allChipsMatch = 
        (secondCell.hasChildNodes() && secondCell.firstElementChild.className === firstCell.firstElementChild.className) &&
        (thirdCell.hasChildNodes() && thirdCell.firstElementChild.className === firstCell.firstElementChild.className) &&
        (fourthCell.hasChildNodes() && fourthCell.firstElementChild.className === firstCell.firstElementChild.className);
        if (allChipsMatch) {
        return true;
        }
      }
    }
  }
  return false;
};

function checkVerticalWin() {

    let row = columns[0].children;
    const yEdge = (row.length - 3); 
  
    for (let columnIndex = 0; columnIndex < columns.length; columnIndex++) {
      let cells = columns[columnIndex].children;
  
      for (let rowIndex = 0; rowIndex < yEdge; rowIndex++) {

        if (cells[rowIndex].hasChildNodes()) {
          let firstCell = columns[columnIndex].children[rowIndex];
          let secondCell = columns[columnIndex].children[rowIndex + 1];
          let thirdCell = columns[columnIndex].children[rowIndex + 2];
          let fourthCell = columns[columnIndex].children[rowIndex + 3];
          
          const allChipsMatch = 
          (secondCell.hasChildNodes() && secondCell.firstElementChild.className === firstCell.firstElementChild.className) &&
          (thirdCell.hasChildNodes() && thirdCell.firstElementChild.className === firstCell.firstElementChild.className) &&
          (fourthCell.hasChildNodes() && fourthCell.firstElementChild.className === firstCell.firstElementChild.className);
          if (allChipsMatch)
          {
            return true;
          }
        }
      }
    }
    return false;
};

function checkDiagonalLeft() {

    const xEdge = (columns.length - 3); 
    let row = columns[0].children;
    const yEdge = (row.length - 3);
  
    for (let columnIndex = 0; columnIndex < xEdge; columnIndex++) {
      let cells = columns[columnIndex].children;
  
      for (let rowIndex = 0; rowIndex < yEdge; rowIndex++) {
  
        if (cells[rowIndex].hasChildNodes()) {
          let firstCell = columns[columnIndex].children[rowIndex];
          let secondCell = columns[columnIndex + 1].children[rowIndex + 1];
          let thirdCell = columns[columnIndex + 2].children[rowIndex + 2];
          let fourthCell = columns[columnIndex + 3].children[rowIndex + 3];
  
          const allChipsMatch = 
          (secondCell.hasChildNodes() && secondCell.firstElementChild.className === firstCell.firstElementChild.className) &&
          (thirdCell.hasChildNodes() && thirdCell.firstElementChild.className === firstCell.firstElementChild.className) &&
          (fourthCell.hasChildNodes() && fourthCell.firstElementChild.className === firstCell.firstElementChild.className);

          if (allChipsMatch)
          {
            return true;
          }
        }
      }
    }
    return false;
};

function checkDiagonalRight() {
    const countStart = columns.length - 1;

    const xEdge = (columns.length - 3); 
    let row = columns[0].children;
    const yEdge = (row.length - 3);
  
    for (let columnIndex = countStart ; columnIndex > 2 ; columnIndex--) {
      let cells = columns[columnIndex].children;
  
      for (let rowIndex = 0; rowIndex < yEdge; rowIndex++) {
  
        if (cells[rowIndex].hasChildNodes()) {
          let firstCell = columns[columnIndex].children[rowIndex];
          let secondCell = columns[columnIndex - 1].children[rowIndex + 1];
          let thirdCell = columns[columnIndex - 2].children[rowIndex + 2];
          let fourthCell = columns[columnIndex - 3].children[rowIndex + 3];

          const allChipsMatch = 
          (secondCell.hasChildNodes() && secondCell.firstElementChild.className === firstCell.firstElementChild.className) &&
          (thirdCell.hasChildNodes() && thirdCell.firstElementChild.className === firstCell.firstElementChild.className) &&
          (fourthCell.hasChildNodes() && fourthCell.firstElementChild.className === firstCell.firstElementChild.className);

          if (allChipsMatch) 
          {
            return true;
          }
        }
      }
    }
    return false;
};

function checkTie() {
  let cells  = document.getElementsByTagName('td');

  for (let cellIndex = 0; cellIndex < cells.length; cellIndex ++) {
    if (cells[cellIndex].hasChildNodes()) {
      continue;
    } else {
      return false;
    };
  };
  return true;
}
