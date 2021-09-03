let playerTurn = "white";

export const dropPieces = function(ev){
    let data = ev.dataTransfer.getData("piece");
    let s = document.getElementById(data);

    let targetPieceColor = ev.target.id.substring(0, 5);
    let startingPieceColor = data.substring(0, 5);

	if (ev.target.className === "square") {
        if (startingPieceColor === playerTurn) {
            ev.target.appendChild(s);
            playerTurn = (playerTurn === "white") ? "black":"white";
        }
    }

    else {
        if (targetPieceColor != startingPieceColor && startingPieceColor === playerTurn) {
            ev.target.parentNode.appendChild(s);
            ev.target.parentNode.removeChild(ev.target);
            playerTurn = (playerTurn === "white") ? "black":"white";
        }
    }

    let playerTurnText = document.getElementById("playerTurn");

    if (playerTurn === "white"){
        playerTurnText.innerText = "White to move";
    }

    else if (playerTurn === "black"){
        playerTurnText.innerText = "Black to move";
    }
}
