class Slingshot{
    constructor(bodyA, pB){
        var options = {
            bodyA: bodyA,
            pointB: pB,
            stiffness: 0.04,
            length: 10
        }
        this.pB=pB;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    attach(bodyA){
        this.sling.bodyA=bodyA;
    }

    Fly(){
        this.sling.bodyA=null
    }

    display(){
        if(this.sling.bodyA){var pointA = this.sling.bodyA.position;
        var pointB = this.pB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}