function preload(){
    clown_nose=loadImage('https://i.postimg.cc/L5sV43D1/clown-image-removebg-preview.png')
    facilal_hair=loadImage('https://i.postimg.cc/3x3QzSGq/m.png')
}
noseX=0
noseY=0
function setup(){
    canvas=createCanvas(300,300)
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded)
    poseNet.on('pose', gotPoses)
}

function modelLoaded(){
    console.log('posnets has loaded');
}

function draw(){
    image(video,0,0,300,300);
    image(clown_nose,noseX-17,noseY-17,40,40)
    image(facilal_hair,noseX-10,noseY+10,30,30)
}

function take_snapshot(){
    save('myFilterImage.png');
}

function gotPoses(results)
{
    if(results.length>0){
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
    console.log(results)
    console.log("nose x = "+results[0].pose.nose.x);
    console.log("nose y = "+results[0].pose.nose.y);
    }
}