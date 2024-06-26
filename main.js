noseX = 0;
noseY = 0;

function preload(){
  mustache = loadImage('https://i.postimg.cc/K89PCQKK/mustache.png');
}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results){
  if(results.length > 0)
    {
      console.log(results);
      noseX = results[0].pose.nose.x;
      noseY = results[0].pose.nose.y;
      console.log("Nose X = " + noseX +115);
      console.log("Nose Y = " + noseY -30);
      
    }
}

function modelLoaded(){
  console.log('PoseNet Is Initialized');
}

function draw(){
  image(video, 0, 0, 300, 300);
  image(mustache, noseY, noseX, 40, 40);
}


function take_snapshot(){
    save('FilterImage.png');
}

