class Snake {
  
  constructor() {
    this.body = [];
    this.len = 1;
    this.body[0] = createVector(floor(w/2), floor(h/2));
    this.xdir = 0;
    this.ydir = 0;
  }
  
  update() {
    
    let head = this.body[this.body.length-1].copy();
    this.body.shift();
    head.x += this.xdir;
    head.y += this.ydir;
    this.body.push(head);
    
    //this.body[0].x += this.xdir;
    //this.body[0].y += this.ydir;
  }
  
  show() {
    
    for(let i=0; i < this.body.length; i++) {
      fill(0);
      noStroke();
      rect(this.body[i].x, this.body[i].y, 1, 1);
    }
    
  }
  
  setDir(x, y) {
    this.xdir = x;
    this.ydir = y;
  }
  
  grow() {
    this.len++;
    let head = this.body[this.body.length-1].copy();
    this.body.push(head);
  }
  
  eat(pos) {
    let x =  this.body[this.body.length-1].x;
    let y = this.body[this.body.length-1].y;
    
    if ( x == pos.x && y == pos.y) {
      print("food eaten");
      this.grow();
      return true;
    } else return false;
    
  }
  
  endGame() {
    let x =  this.body[this.body.length-1].x;
    let y = this.body[this.body.length-1].y;
    
    if (x > w - 1 || x < 0 || y > h - 1 || y < 0) 
      return true;
    
    for(let i=0; i < this.body.length - 1; i++) {
      let part = this.body[i];
      if ( part.x == x && part.y == y) {
        return true;
      }
    }
    return false;
  }
}
