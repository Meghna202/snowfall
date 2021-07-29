class Snow{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.1,
            'friction':1,
            'density':1
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("snow4.webp");
        World.add(world, this.body);
      }
      display(){
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
        }
}