class Box{
    constructor(x, y, width, height) {
        this.body = Bodies.rectangle(x, y, width, height);
        this.width = width;
        this.height = height;
        this.image = loadImage("crowned_creature.png");
        World.add(world, this.body);
      }
      display(){
        if(this.body.speed<3){
          var angle = this.body.angle;
          push();
          translate(this.body.position.x, this.body.position.y);
          rotate(angle);
          imageMode(CENTER);
          image(this.image, 0, 0, this.width, this.height);
          pop();
        }
        else{
          World.remove(world,this.body);
          push();
          this.visibility=this.visibility-5;
          tint(255,this.visibility);
          image(this.image,this.body.position.x,this.body.position.y,50,50);
          pop();
        }
      }
      score(){
        if(this.visibility===0){
          score++;
        }
      }
};