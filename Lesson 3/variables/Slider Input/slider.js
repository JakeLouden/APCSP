let slider
function setup(){
    createCanvas(600, 120)
    colorMode(HSB)
    slider = createSlider(0, 360, 100)
}

function draw(){
    background(slider.value(), 100, 100)

    textSize(80)
    text('hello', 210, 100)
}


