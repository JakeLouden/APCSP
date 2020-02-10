let goldenScar
let heading

function setup(){
    createCanvas(windowWidth, windowHeight)
    frameRate(5)
    goldenScar = createImg('goldenScar.png', "Golden Scar")
    goldenScar.size(200,200)
    heading = createElement('h2', 'Get the Golden Scar for the Victory Royale!')
    heading.position(width/3, height/3)
}

function draw(){
    goldenScar.position(random(width), random(height))
    goldenScar.mousePressed(youWon)
}

function youWon(){
    heading.html('#1 Victory Royale')
    goldenScar.remove()
}