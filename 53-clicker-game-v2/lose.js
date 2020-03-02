function setup(){
    const win = createElement('h1', 'You Lost')
    const startButton = createButton('Play Again')
    startButton.position(windowWidth/2, windowHeight*3/4)
    startButton.mousePressed(playAgain)
}

function playAgain(){
    window.location.href = "game.html"
}
