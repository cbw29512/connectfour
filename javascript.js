let currentTurn = 'player1';

const columns = document.getElementsByTagName('tr');

for (let columnIndex = 0; columnIndex < columns.length; columnIndex++) {
    columns[columnIndex].addEventListener('click', dropChip);
}

function dropChip() {
    let column = event.currentTarget
    let cells = column.children
    for (let cellIndex = cells.length - 1; cellIndex >= 0;cellIndex--) {

        console.log(row)
        if (cells[cellIndex].childElementCount === 0) {

            const chip = document.createElement('div');

            if (currentTurn === 'player1') {
                chip.className = 'chipRed';
            } else if (currentTurn == 'player2') {
                chip.className = 'chipBlack';
            };

            cells[cellIndex].appendChild(chip);
            break;
        };
    };
    let condition = checkEndCondition () 

};
    function checkEndCondition () {
        if ( checkHorizontalWin () || checkVerticialWin() || checkDiagonalLeft() || checkDiagonalright()) {
            return "win"   
        }  else if (checkTie()) {
            return "tie"
        }  else {
            return
        }
    }

    function checkHorizontalWin () {
        for ( let columnIndex = 0; columnIndex < columns.length; columnIndex++) {
            let cells = columns[columnIndex].children
                for (let cellIndex = 0 ; cellIndex < cells.length; cellIndex++) {
                    if ( cells [cellIndex].hasChildNodes()) {
                        
                }

            }

        }
    }        

           
        
        
        
        /*if horzontial || vertical || diagonalL || diagonalR 
        return 

        else tie 
        return

        else
        return
    }*/