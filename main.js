function setup() { 
    canvas = createCanvas(1120, 600); 
    canvas.center();
    capture = createCapture(VIDEO);
    capture.hide();

}

function draw() {  
    push();
    translate(width,0);
    scale(-1, 1);
    image(capture, 0, 0, 1120, 600);
    pop();
}