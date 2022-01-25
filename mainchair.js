img = "";
stat = "";
function modelLoaded() {
    console.log("Model Loaded!")
    stat = true;
    objectDetector.detect(img, gotResult);
}
function gotResult() {
    if (error) {
        console.log(error);
    }
    console.log(results);
}

function preload() {
img = loadImage('chair.png')

}
function draw() {
    image(img, 0, 0, 640, 420);
    fill("#FF0000")
    text("Chair", 45, 75);
    noFill();
    stroke("#FF0000")
    rect(30, 60, 450, 350);

    
}
function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("stat").innerHTML = "stat : Detecting Objects";
}