class Iron{
	constructor(x,y)
	{
	var options={
		restitution: 0.8,
		friction: 0.3,
		density: 1.0
	}
		this.body=Bodies.rectangle(x, y, 50,50, options)
		this.width=50;
		this.height=70;
		World.add(world, this.body);

	}
	display(){
	
			var ironpos=this.body.position;		
			var angle=this.body.angle;
			push();	
			translate(ironpos.x, ironpos.y);
			rotate(angle)
			rectMode(CENTER)
			fill("green");
			rect(0,0, this.width, this.height);
			pop();	
	}	
}