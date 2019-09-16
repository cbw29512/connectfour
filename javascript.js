let currentTurn = 'player1';

const rows = document.getElementsByTagName('tr');

for (let rowIndex = 0; rowIndex < rows.length; rowIndex++) {
    rows[rowIndex].addEventListener('click', dropChip);
}

function dropChip() {
    let row = event.currentTarget

    for (let cellIndex = row.children.length - 1; cellIndex >= 0;cellIndex--) {

        console.log(row)
        if (row.children[cellIndex].childElementCount === 0) {

            const chip = document.createElement('div');

            if (currentTurn === 'player1') {
                chip.className = 'chipRed';
            } else if (currentTurn == 'player2') {
                chip.className = 'chipBlack';
            };

            row.children[cellIndex].appendChild(chip);
            break;
        };
    };
};