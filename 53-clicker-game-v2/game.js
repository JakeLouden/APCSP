// Initialize UI Elements
let bananaImg
let scoreDisplay
let livesDisplay
let difficultySlider
let title

// Initialize Game Variables
let difficulty = 1
let lives = 3
let score = 0
let winningNum = 3

function setup() {
  // Setup Canvas
  createCanvas(windowWidth, windowHeight)


  // Setup Lives Display
  livesDisplay = createElement('h4', 'LIVES: ' + lives)
  livesDisplay.position(width / 20, height / 14)


  // Creates Difficulty Slider
  difficultyLabel = createElement('h4', 'DIFFICULTY: ' + difficulty)
  difficultyLabel.position(width / 20, height / 11)
  difficultySlider = createSlider(1, 10, 1)
  difficultySlider.position(width / 20, height / 7)
  scoreDisplay = createElement('h4', 'SCORE: ' + score)
  scoreDisplay.position(width / 20, height / 18)

  bananaImg = createImg('banana.png', "Banana")
}

function draw() {
  // Adjust frameRate according to slider
  difficultyLabel.html('DIFFICULTY: ' + difficulty)
  scoreDisplay.html('SCORE: ' + score)
  livesDisplay.html('LIVES: ' + lives)
  difficulty = difficultySlider.value()
  frameRate(difficulty)


  // Randomly Position Banana
  bananaImg.position(random(width), random(height))
  bananaImg.mousePressed(increaseScore)

}

function mousePressed() {
  if (dist(mouseX, mouseY, bananaImg.x, bananaImg.y) > 300) {
    decreaseLives()
  }
}

function increaseScore() {
  score += 1
  checkWin()
}

function decreaseLives() {
  lives-= 1
  checkLose()
}

function checkWin() {
  if (score === 5){
    window.location.href = "win.html"
  }
}

function checkLose() {
  if (lives === 0){
    window.location.href = "lose.html"
  }
}
