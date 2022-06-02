//codes for loading images needed for game and code for beginning the mario game
function preload() {
	mario_gameover = loadSound("gameover.wav");
	mario_jump = loadSound("jump.wav");
	mario_coin = loadSound("coin.wav");
	mario_kick = loadSound("kick.wav");
	mario_die = loadSound("mariodie.wav");
	world_start = loadSound("world_start.wav");
	setSprites();       //load all the images used in the game
	MarioAnimation();      //l loads all the animation   
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
//parent() is a p5.js function used to put canvas or any p5.js component like webcam live view inside a HTML div.
	

    instializeInSetup(mario);  //will set up all the required variables and functions needed for mario game
	
	video = createCapture(VIDEO);
	video.size(800,400);
	video.parent('game_console');

	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);

}

function modelLoaded() {
	console.log('Model Loaded!');
  }

  function gotPoses(results)
  {
	if(results.length > 0)
	{
	  console.log(results);
	  noseX = results[0].pose.nose.x;
	  noseY = results[0].pose.nose.y;
	}
  }
   
  //draw() function is called continuously, means game() function will also be called continuously
function draw() {
	game();       //starts the Mario game
}






