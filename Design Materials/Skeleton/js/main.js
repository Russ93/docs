(function() {
   
	var canvas = document.createElement("canvas");
	document.body.appendChild(canvas);
	canvas.width = 640;
	canvas.height = 480;
	var ctx = canvas.getContext("2d");

	ctx.fillStyle = '#cccccc'; //set background color
	ctx.fillRect (0,0,640,480);

	var mouse = utils.getMouse(canvas); //the getmouse function returns and object literal that has X and Y of the Mouse
	var draw = false; //boolean that holds that status of whether or not the mouse is being clicked
	var vx=0;
	var vy=0;
	
	var ball = new Ball();
	ball.x=320;
	ball.y=240;

	var color = "rgb(255,0,0)";
	ctx.strokeStyle=color;

	canvas.addEventListener("mousedown", onDraw);
	canvas.addEventListener("mouseup", onStopDraw);
	canvas.addEventListener("mouseout", onStopDraw);
	window.addEventListener("keydown", onDown);
	window.addEventListener("keyup", onUp);
	function onDown{
		if(e.keycode==39){
			vx=5;
		}
		if(e.keycode==37){
			vx=-5;
		}
	}
	function onUp{
		if(e.keycode==39){
			vx=0;
		}
	}
	
	function onDraw(e){
		draw=true;
		ctx.beginPath();
		ctx.moveTo(mouse.x,mouse.y);
	}
	function onStopDraw(e){
		draw=false;
	}
	(function update(){
		ctx.clearRect(0,0,canvas.width,canvas.height);
		ball.x+=vx;
		ball.y+=vy;
		ball.update(ctx);
		requestAnimationFrame(update); //function thats runs 60 frames per second
	})();
})();