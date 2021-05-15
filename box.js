class Box{
   constructor(x,y){
       var options = {
         isStatic:false,
         restitution:0.2,             
         friction:0.1,             
         density:0.02         
        }         
        this.body = Bodies.rectangle(x,y,60,80,options);         
        this.width = 60;         
        this.height = 80;         
        World.add(world, this.body);         
        this.Visiblity = 255;     
    } 
    display(){                                   
        if(this.body.speed < 10){             
            var pos =this.body.position;             
            push()          
            translate(pos.x,pos.y)       
            rotate(this.body.angle)        
            rectMode(CENTER);             
            rect(0,0, this.width, this.height);             
            pop()          
        }         
        else{             
            var pos =this.body.position;
            World.remove(world, this.body);             
            push();             
            this.Visiblity = this.Visiblity - 5;                         
            pop();          
        }     
    } 
        
    score(){
        if(this.Visiblity <0 && this.Visiblity >-500){
            score++;
        }
    }
}
