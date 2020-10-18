function setup(){
    canvas=createCanvas(640,400);
    canvas.position(300,300);
    video=createCapture(VIDEO);
    video.hide();
    }
    function draw(){
    image(video,0,0,640,400);
    stroke(100,0,0);
    fill(100,0,0);
    circle(0,0,100)
    square(600,50,50,50)
    
    }
    function take_snapshot(){
    save('MyMom.png');
    }