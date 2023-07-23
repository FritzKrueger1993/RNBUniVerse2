class Line{
   constructor() {
     this.x = random(width);
     this.y = random(height);
     this.xPrev = 0;
     this.YPrev = 0;
     this.color = random(360);
     this.degrees = random(360);
     this.growthX = 1;
     this.growthY = 1;
     this.degreesRate = 1;
     this.degressJump = 5;
     this.speed = 0.3;
   }
   
   move(){
     
     if (frameCount % this.degreesRate == 0) {
     let min = -1 * this.degressJump;
     let max = this.degressJump;
     this.degrees += int(map(random(360),0,360, min, max));
       }
     
     this.xPrev = this.x;
     this.yPrev = this.y;
     
     this.growthX = this.speed * sin(map(this.degrees,0,360,0,PI*2));
     this.growthY = this.speed * -cos(map(this.degrees,0,360,0,PI*2));
     
     this.x = this.x + this.growthX;
     this.y = this.y + this.growthY;

   }
   
   show(){
     stroke(this.color,180,360);
     beginShape();
     vertex(this.xPrev,this.yPrev);
     vertex(this.x,this.y);
     endShape();
     //point(this.x,this.y);
   }
}
