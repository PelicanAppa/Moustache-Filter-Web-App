noseX = 0;
noseY = 0;

function preload() {
    mustache = loadImage('https://i.postimg.cc/8zJn8mcB/49f5630b9d58ef169be8ebdc9100b9fa.png');
}

function setup() {
    canvas = createCanvas(400, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet is initialized');
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x - 50;
        noseY = results[0].pose.nose.y - 10;
        console.log("nose x = " + results[0].pose.nose.x)
        console.log("nose y = " + results[0].pose.nose.y)
    }
}

function draw() {
    image(video, 0, 0, 400, 300);
    image(mustache, noseX, noseY, 100, 50);
}

function take_snapshot() {
    save('myFilterImage.png');
}
