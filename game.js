var Width;
var Height;
var MainRect;
var Canvas;
var Color = ("rgb(0, 255, 0)");

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
}

function draw() {
    Color = color(Color);
    MainRect = rect((Width / 2) - 50, (Height / 2) - 50, 100, 100);
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