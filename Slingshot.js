class SlingShot{
    constructor(bodyA, bodyB,bodyC,bodyD,bodyE,bodyF){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            bodyC: bodyC,
            bodyD: bodyD,
            bodyE: bodyE,
            bodyF: bodyF,
            stiffness: 0.04,
            length: 10
        }
        this.sling3=loadImage("sling3.png");
        this.sling = Matter.Constraint.create(options);
        Matter.World.add(world, this.sling);
    }
    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.sling.bodyB.position;
            var pointC = this.sling.bodyC.position;
            var pointD = this.sling.bodyD.position;
            var pointE = this.sling.bodyE.position;
            var pointF = this.sling.bodyF.position;
            push();
            stroke(48,22,8)
            strokeWeight(5);
            line(pointA.x-20, pointA.y, pointB.x+30, pointB.y-3);
            line(pointB.x-20, pointB.y, pointC.x+30, pointC.y-3);
            line(pointC.x-20, pointC.y, pointD.x+30, pointD.y-3);
            line(pointD.x-20, pointD.y, pointE.x+30, pointE.y-3);
            line(pointE.x-20, pointE.y, pointE.x+30, pointE.y-3);
            line(pointE.x-20, pointE.y, pointF.x+30, pointF.y-3);
            pop();
        }
    }
    
}