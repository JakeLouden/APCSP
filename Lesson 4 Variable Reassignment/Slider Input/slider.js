let sliderH
let sliderS
let sliderB
let message
let inp
function setup(){
    createCanvas(windowWidth-50, windowHeight-50)
    colorMode(HSB)
    sliderH = createSlider(0, 360, 100)
    sliderS = createSlider(0, 360, 100)
    sliderB = createSlider(0, 360, 100)
    inp = createInput('')
    inp.input(myInputEvent)
}

function draw(){
    background(sliderH.value(), sliderS.value(), sliderB.value())
    textSize(80)
    text(message, (width-50)/2, (height-50)/2)
}

function myInputEvent(){
    message = this.value()
}
