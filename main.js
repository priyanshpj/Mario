function preload() {
	world_start = loadSound("world_start.wav");
	mario_jump = loadSound("jump.wav");
	coin_collect = loadSound("coin.wav");
	gameover = loadSound("gameover.wav");
	mdie = loadSound("mariodie.wav");
	mario_kick = loadSound("kick.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');

	instializeInSetup(mario);

	video = createCapture(VIDEO);
	video.size(800, 400);
	video.parent("gamepad");

	posenet = ml5.poseNet(video, modelloaded);
	posenet.on('pose', gotposes)
}

function modelloaded() {
	console.log("Model Loaded!")
}

function gotposes(results) {
	if (results.length > 0) {
		console.log(results);
		noseX = results[0].pose.nose.x;
		noseY = results[0].pose.nose.y;
	}
}

function draw() {
	game()
}






