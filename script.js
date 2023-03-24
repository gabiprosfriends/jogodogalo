const btns = document.getElementsByClassName('cell');
let turn = true;
let contadorx = 0;
let contadoro = 0;


for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", () => {
        btns[i].disabled = true;
        if (turn) {
            btns[i].innerHTML = "x";
        }
        else {
            btns[i].innerHTML = "o";
        }
        if (turn) {
            turn = false;
        }
        else {
            turn = true;
        }
        console.log(turn)

        if (btns[0 == 1] && btns[1 == 2]) {
            if (turn) {
                contadorx++;
            }
            else {
                contadoro++;
            }
        }

        else if (btns[0 == 3] && btns[3 == 6]) {
            if (turn) {
                contadorx++;
            }
            else {
                contadoro++;
            }
        }

        else if (btns[6 == 7] && btns[7 == 8]) {
            if (turn) {
                contadorx++;
            }
            else {
                contadoro++;
            }
        }

        else if (btns[8 == 4] && btns[4 == 2]) {
            if (turn) {
                contadorx++;
            }
            else {
                contadoro++;
            }
        }

        else if (btns[2 == 4] && btns[4 == 6]) {
            if (turn) {
                contadorx++;
            }
            else {
                contadoro++;
            }
        }

        else if (btns[0 == 4] && btns[4 == 8]) {
            if (turn) {
                contadorx++;
            }
            else {
                contadoro++;
            }
        }

        else {
        }
    })
}
