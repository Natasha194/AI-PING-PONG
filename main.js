function setup() { 
    canvas = createCanvas(600, 600); 
    canvas.parent('canvas');
    capture = createCapture(VIDEO); 
    capture.hide();

}

function draw() {  
    push();
    translate(width,0);
    scale(-1, 1);
    image(capture, 0, 0, 600, 600);
    pop();
}