let playerTurn = "white";

export const dropPieces = function(ev){

    let data = ev.dataTransfer.getData("piece");
    let s = document.getElementById(data);

    let targetPieceColor = ev.target.id.substring(0, 5);
    let startingPieceColor = data.substring(0, 5);

	if (ev.target.className === "square") {
        if (startingPieceColor === "white" && playerTurn === "white") {
            ev.target.appendChild(s);
            playerTurn = "black";
        }
        else if (startingPieceColor === "black" && playerTurn === "black") {
            ev.target.appendChild(s);
            playerTurn = "white";
        }
    }
    else {
        if (targetPieceColor === "black" && startingPieceColor === "white" && playerTurn === "white") {
            ev.target.parentNode.appendChild(s);
            ev.target.parentNode.removeChild(ev.target);
            playerTurn = "black";
        }
        else if (targetPieceColor === "white" && startingPieceColor === "black" && playerTurn === "black") {
            ev.target.parentNode.appendChild(s);
            ev.target.parentNode.removeChild(ev.target);
            playerTurn = "white";
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
