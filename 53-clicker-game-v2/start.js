function setup(){
  const heading = createElement('h1', 'Catch the banana or die')
  heading.style('font-family: roboto')
  heading.style('font-size: 50px')
  heading.style('text-align: center')
  heading.style('position: absolute')
  heading.style('width: 100%')
  heading.style('top: 100px')

  const startButton = createButton('Start')
  startButton.position(windowWidth/2, windowHeight/2)
  startButton.mousePressed(start)
}

function start(){
    window.location.href = "game.html"
}