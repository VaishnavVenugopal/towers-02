class block
 {
    constructor(x, y, width, height){
        var options = {
          isStatic:false,
          
            restitution:0.5,
            friction:2.0,
            density:1.0
           
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/wood1.png");
        this.Visibility = 255;
        
        World.add(world, this.body);
      }
      display(){
console.log(this.body.speed);
        if(this.body.speed < 3){
          var angle = this.body.angle;
        var pos = this.body.position;
        push();
        translate(this.body.position.x, this.body.position.y);
   
        rotate(angle);
        imageMode(CENTER);
        fill("brown")
        
        image(this.image,0,0,this.width,this.height)

       
        pop();
      
       
         }

         else{
          World.remove(world, this.body);
          push();
          this.Visiblity = this.Visiblity - 5;
          tint(255,this.Visiblity);
          image(this.image, this.body.position.x, this.body.position.y, 50, 50);
          pop();
        }
      }
}
     
  
  