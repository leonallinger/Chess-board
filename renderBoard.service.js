export const renderBoard = {
    boardRender() {
        const board = document.getElementById("chessBoard");
        let change = false;
        let backgroundColor = 'BurlyWood';
        for (let i = 0; i < 64; i++) {
            let n = i + 1;
            let square = document.createElement('DIV');
            square.className = 'square';
            square.setAttribute('ondragover', 'window.allowDrop(event)')
            square.setAttribute('ondrop', 'window.drop(event)')
            square.id = 'a' + n;
            if (i % 8 === 0 || i === 0) {
                change = true;
            }

            if (!change) {
                if (backgroundColor === 'SaddleBrown') {
                    backgroundColor = 'BurlyWood';
                }
                else {
                    backgroundColor = 'SaddleBrown';
                }
            }

            square.style.backgroundColor = backgroundColor;
            board.appendChild(square);
            change = false;
        }
    }
}