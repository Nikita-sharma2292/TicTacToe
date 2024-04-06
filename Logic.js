var turn = 'X';
var gameOver = 0;

function ChangeTurn() {
    if (turn === 'X')
        turn = '0';
    else
        turn = 'X';
}

function win() {
    var pattern = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];
    var boxValues = document.querySelectorAll(".box");
    for (var i = 0; i < 9; i++) {
        var boxPattern = pattern[i];
        if (boxValues[boxPattern[0]].innerHTML === boxValues[boxPattern[1]].innerHTML && boxValues[boxPattern[1]].innerHTML === boxValues[boxPattern[2]].innerHTML && boxValues[boxPattern[0]].innerHTML != '') {
            gameOver = 1;
            document.querySelector(".text2").innerHTML = boxValues[boxPattern[1]].innerHTML + " Wins";
        }
    }
}

var boxex = document.querySelectorAll(".box");
boxex.forEach(box => {
    box.addEventListener("click", (e) => {
        if(gameOver==0){
        e.target.innerHTML = turn;
        ChangeTurn();
        document.querySelector(".text2").innerHTML = turn + " Turn";
        win();
        }
    })
})

document.querySelector(".button").addEventListener('click', function() {
    document.querySelectorAll(".box").forEach(box => {
        box.innerHTML = "";
        turn = "X";
        document.querySelector(".text2").innerHTML = turn + " Turn";
        gameOver = 0;
    })
});

