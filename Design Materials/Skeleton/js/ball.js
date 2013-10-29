function Ball(radius, color){
	if(radius===undefined){radius=40;}
	if(color===undefined){color="#ff0000";}
	//set Ball properties
	this.x=0;
	this.y=0;
	this.radius=radius;
	this.vx=0;
	this.vy=0;
	this.color=color;
	this.lineWidth=1;
}
Ball.prototype.update=function(context){
	context.lineWidth=this.lineWidth;
	context.fillStyle=this.color;
	context.beginPath();
	//x, y, radius, start_angle, end_angle, anti_clockwise
	context.arc(this.x,this.y,this.radius,0,(Math.PI*2),true);
	context.closePath();
	context.fill();
}