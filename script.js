function switchF(buttonNumber) {
    switch (buttonNumber) {
        case 1:
            move("b1");
            break;
        case 2:
            move("b2");
            break;
        case 3:
            move("b3");
            break;
        case 4:
            move("b4");
            break;
        case 5:
            move("b5");
            break;
        case 6:
            move("b6");
            break;
        case 7:
            move("b7");
            break;
        case 8:
            move("b8");
            break;
        case 9:
            move("b9");
            break;
        default:
            console.log("Invalid button number");
    }

}

function checkWin(){
    const b1 = document.getElementById('b1').value;
    const b2 = document.getElementById('b2').value;
    const b3 = document.getElementById('b3').value;
    const b4 = document.getElementById('b4').value;
    const b5 = document.getElementById('b5').value;
    const b6 = document.getElementById('b6').value;
    const b7 = document.getElementById('b7').value;
    const b8 = document.getElementById('b8').value;
    const b9 = document.getElementById('b9').value;
    let i = 0;

    if (b1 && b1 === b2 && b1 === b3) i=1; 
    if (b4 && b4 === b5 && b4 === b6) i=1; 
    if (b7 && b7 === b8 && b7 === b9) i=1;

    if (b1 && b1 === b4 && b1 === b7) i=1;
    if (b2 && b2 === b5 && b2 === b8) i=1;
    if (b3 && b3 === b6 && b3 === b9) i=1;


    if (b1 && b1 === b5 && b1 === b9) i=1;
    if (b3 && b3 === b5 && b3 === b7) i=1;

    return i;
}

function checkDraw() {
    const b1 = document.getElementById('b1').value;
    const b2 = document.getElementById('b2').value;
    const b3 = document.getElementById('b3').value;
    const b4 = document.getElementById('b4').value;
    const b5 = document.getElementById('b5').value;
    const b6 = document.getElementById('b6').value;
    const b7 = document.getElementById('b7').value;
    const b8 = document.getElementById('b8').value;
    const b9 = document.getElementById('b9').value;
    let i = 0;
    if ((b1 !== b3 || b1 !== b2 || b1 !== b3) && (b4 !== b6 || b4 !== b5 || b4 !== b6) && (b7 !== b9 || b7 === b8 && b7 === b9) && (b1,b2,b3,b4,b5,b6,b7,b8,b9 !== "")) i=1;
    return i;
}

let flag = 1;

function move(buttonId){
    let input = document.getElementById(buttonId);
    if (flag == 1) {
        input.value = "X";
        flag = 0;
    } else {
        input.value = "0";
        flag = 1;
    }
    input.disabled = true;

    if(checkWin()) {
        const messageDiv = document.querySelector("#message");
        messageDiv.textContent = "YOU WON !";
        // resetGame();
        return;
    };

    if(checkDraw()) {
        const messageDiv = document.querySelector("#message");
        messageDiv.textContent = "EX AEQUO !";
        // resetGame();
        return;
    };
}


function resetGame() {
    const grille = document.getElementById(grille);
    grille = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ];

    flag = 1;

    const messageDiv = document.querySelector("#message");
    messageDiv.textContent = "";
}
