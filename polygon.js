class Polygon{
    constructor(x,y){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':0.8
        }
        this.body = Bodies.circle(x,y,23,options);
        this.radius = 60;
        World.add(world, this.body);
        this.image = loadImage("polygon.png");
    }
    display(){
        var pos =this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x, pos.y, 60,60);
    }
}