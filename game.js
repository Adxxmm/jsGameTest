const MovementSpeed = 5

var Width;
var Height;
var MainRect;
var Canvas;
var Color = ("rgb(0, 255, 0)");

var XPos
var YPos

function setup() {
    Width = windowWidth * 0.8;
    Height = windowHeight * 0.8;

    Canvas = createCanvas(Width, Height);
    Canvas.background("gray");
    Canvas.parent("Game");

    let Button = createButton("Click to change color");
    Button.class("MainButton");
    Button.mousePressed(randomColor);

    Button.parent("Buttons");

    let FullScreenButton = createButton("Full Screen");
    FullScreenButton.class("MainButton");
    FullScreenButton.mousePressed(fullScreenMode);

    FullScreenButton.parent("Buttons");

    XPos = (Width / 2) - 50
    YPos = (Height / 2) - 50
}

function draw() {
    if (keyIsDown(LEFT_ARROW)) {
        XPos -= MovementSpeed;
        clear();
    }

    if (keyIsDown(RIGHT_ARROW)) {
        XPos += MovementSpeed;
    }

    if (keyIsDown(DOWN_ARROW)) {
        YPos += MovementSpeed;
    }

    if (keyIsDown(UP_ARROW)) {
        YPos -= MovementSpeed;
    }

    clear();
    Canvas.background("gray");

    Color = color(Color);
    MainRect = rect(XPos, YPos, 100, 100);
    MainRect.fill(Color);
}

function intRandom(Range) {
    Range = Math.floor(Math.random() * Range);
    return Range;
}

function randomColor() {
    Color = (`rgb(${intRandom(255).toString()}, ${intRandom(255).toString()}, ${intRandom(255).toString()})`);
    console.log(Color);
}

function fullScreenMode() {
    let fs = fullscreen();
    fullscreen(!fs);
}

function windowResized() {
    Width = windowWidth * 0.8;
    Height = windowHeight * 0.8;
    resizeCanvas(windowWidth * 0.8, windowHeight * 0.8);
    background("gray")
}