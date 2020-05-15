let player1 = 'X'
let player2 = 'O'
let turn = 2
let counter = 0
let gameOver = false


let cell = document.querySelectorAll('.row>div');

for (i = 0; i < cell.length; i++) {
    cell[i].addEventListener('click', cellClicked)
}

function cellClicked() {
    if (event.target.innerText === "") {
        if (turn === 1) {
            event.target.textContent = player1;
            turn++
            counter++


        } else {
            event.target.textContent = player2;
            turn--
            counter++


        }
    }
    winCheck()
    refreshPage
    console.log(counter)
}


function winCheck() {



    if (cell[0].innerText == cell[1].innerText && cell[1].innerText == cell[2].innerText && cell[0].innerText !== "") {
        console.log(cell[0].innerText, cell[1].innerText);
        console.log("Winner!!")
        gameOver = true

    } else if (cell[3].innerText == cell[4].innerText && cell[4].innerText == cell[5].innerText && cell[3].innerText !== "") {
        console.log("Winner!!")
        gameOver = true

    } else if (cell[6].innerText == cell[7].innerText && cell[7].innerText == cell[8].innerText && cell[6].innerText !== "") {
        console.log("Winner!!")
        gameOver = true

    } else if (cell[0].innerText == cell[3].innerText && cell[3].innerText == cell[6].innerText && cell[0].innerText !== "") {
        console.log("Winner!!")
        gameOver = true

    } else if (cell[1].innerText == cell[4].innerText && cell[4].innerText == cell[7].innerText && cell[1].innerText !== "") {
        console.log("Winner!!")
        gameOver = true

    } else if (cell[2].innerText == cell[5].innerText && cell[5].innerText == cell[8].innerText && cell[2].innerText !== "") {
        console.log("Winner!!")
        gameOver = true

    }


}

function refreshPage() {
    window.location.reload();
    alert('Game Over')
}