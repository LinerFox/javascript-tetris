document.addEventListener("DOMContentLoaded", () => {
<<<<<<< HEAD
  const grid = document.querySelector(".grid");
  let squares = Array.from(document.querySelector(".grid div"));
  const width = 10;
  console.log(squares);
=======
    const grid = document.querySelector(".grid");
    let squares = Array.from(document.querySelectorAll(".grid div"));
    const width = 10;
    console.log(squares);

    // The Tetrominoes
    const lTetromino = [
        [1, width + 1, width * 2 + 1, 2],
        [width, width + 1, width + 2, width * 2 + 2],
        [1, width + 1, width * 2 + 1, width * 2],
        [width, width * 2, width * 2 + 1, width * 2 + 2]
    ]

    const theTetrominoes = [lTetromino]
    let currentPosition = 4
    // Tetrominos first shape first rotation
    let current = theTetrominoes[0][0]
    // Draw the first rotation in the first Tetromino
    function draw() {
        current.forEach(index => {
            squares[currentPosition + index].classList.add('tetromino')
        })
        
    }

    draw()
>>>>>>> d8f392382ca23ad81a35c5943c1596e8c2c00a9b
});

