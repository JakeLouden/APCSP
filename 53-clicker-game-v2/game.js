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
let winningNum = 5

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
  bananaImg.size(200,200)
}

function draw() {
  // Adjust frameRate according to slider
  difficultyLabel.innerHTML = 'DIFFICULTY: ' + str(difficulty)
  difficulty = difficultySlider.value()
  frameRate(difficulty*3)


  // Randomly Position Banana
  bananaImg.position(random(width), random(height))


}

function mousePressed() {
  if (dist(mouseX, mouseY, bananaImg.x, bananaImg.y) > 200) {
    decreaseLives()
  }
  if (dist(mouseX, mouseY, bananaImg.x, bananaImg.y) <= 200) {
    increaseScore()
  }
  // else (){
  //   increaseScore()
  // }
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
