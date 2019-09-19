let currentTurn = "player1";

const columns = document.getElementsByTagName("tr");

for (let columnIndex = 0; columnIndex < columns.length; columnIndex++) {
  columns[columnIndex].addEventListener("click", dropChip);
}

function dropChip() {
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
    alert("You have won!")
  } else if (condition === 'tie') {
    alert("Oh no, it's a tie!")
  }    
// switch players
  if (currentTurn === 'player1') {
    currentTurn = 'player2';
  } else if (currentTurn === 'player2') {
    currentTurn = 'player1';
  } 

}

function checkEndCondition() {
  if (checkHorizontalWin() || checkVerticialWin() || checkDiagonalLeft() || checkDiagonalRight()) {
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

        if (
          secondCell.hasChildNodes() &&
          secondCell.className === firstCell.className &&
          (thirdCell.hasChildNodes() &&
            thirdCell.className === firstCell.className) &&
          (fourthCell.hasChildNodes() &&
            fourthCell.className === firstCell.className)
        ) {
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
  
          if ((secondCell.hasChildNodes() && secondCell.className === firstCell.className) &&
            (thirdCell.hasChildNodes() && thirdCell.className === firstCell.className) &&
            (fourthCell.hasChildNodes() && fourthCell.className === firstCell.className))
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
  
      for (let rowIndex = 0; rowIndex < cells.length; rowIndex++) {
  
        if (cells[rowIndex].hasChildNodes()) {
          let firstCell = columns[columnIndex].children[rowIndex];
          let secondCell = columns[columnIndex + 1].children[rowIndex + 1];
          let thirdCell = columns[columnIndex + 2].children[rowIndex + 2];
          let fourthCell = columns[columnIndex + 3].children[rowIndex + 3];
  
          if ((secondCell.hasChildNodes() && secondCell.className === firstCell.className) &&
             (thirdCell.hasChildNodes() && thirdCell.className === firstCell.className) &&
             (fourthCell.hasChildNodes() && fourthCell.className === firstCell.className)) {
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
  
      for (let rowIndex = 0; rowIndex < cells.leng; rowIndex++) {
  
        if (cells[rowIndex].hasChildNodes()) {
          let firstCell = columns[columnIndex].children[rowIndex];
          let secondCell = columns[columnIndex - 1].children[rowIndex + 1];
          let thirdCell = columns[columnIndex - 2].children[rowIndex + 2];
          let fourthCell = columns[columnIndex - 3].children[rowIndex + 3];
  
          if ((secondCell.hasChildNodes() && secondCell.className === firstCell.className) &&
             (thirdCell.hasChildNodes() && thirdCell.className === firstCell.className) &&
             (fourthCell.hasChildNodes() && fourthCell.className === firstCell.className)) {
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
