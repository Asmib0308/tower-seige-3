class Elastic{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.03,
            length: 8
        }
       
        this.pointB = pointB
        this.elastic = Constraint.create(options);
        World.add(world, this.elastic);
    }

    fly(){
        this.elastic.bodyA = null;
        console.log(fly)
    }
    attach(body){
        this.elastic.bodyA = body;
    }

    display(){
        if(this.elastic.bodyA){
            var pointA = this.elastic.bodyA.position;
            var pointB = this.pointB;
            push();            
            stroke("white");
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            pop();
        }
    }
    
};