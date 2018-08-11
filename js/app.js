// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    //x positon
    //y position

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    //if enemy is not passed boundary
        //move forward
        //Increment x by speed * dt
    //else
        //reset to starting position
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//Hero class
class Hero {
  constructor() {
    this.step = 101;
    this.jump = 83;
    this.startX = this.step * 2;
    this.startY = this.jump * 5;
    this.x = this.startX;
    this.y = this.startY;
    this.sprite = 'images/char-boy.png';
  }
  render (){
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }

    handleInput(input) {
      switch(input) {
        case 'left':
          if (this.x >0) {
              this.x -= this.step;
            }
          break;
        case 'up':
          if (this.y > this.jump) {
              this.y -= this.jump;
            }
          break;
        case 'right':
          if (this.x < this.step * 4) {
              this.x += this.step;
            }
          break;
        case 'down':
          if (this.y < this.jump * 5){
              this.y += this.jump;
            }
          break;
    }
}
}

    //methods
      //update position
        //check collision
          //Did player colide with enemy?
        //check win
          //Did player positon win game?
      //render
          //Draw player sprite on x and y coord
      //Handle keyboard input
      //Reset hero
          //set to startin x and y position

//New Hero object - in a variable called player
const player = new Hero();

//Init allEnemies array
//For each enemy create and push new enemy object into above array







// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
