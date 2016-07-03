// Enemies our player must avoid
var Enemy = function() {
    this.x = x;
    this.y =y;
    this.sprite = 'images/enemy-bug.png';
};

Enemy.prototype.update = function(dt) {
  this.x += this.speed *dt;
  if (this.x>=505){
    this.x=0;
  }
  checkCollision(this);
};
// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
// Now write your own player class
var Player = function(x,y,speed) {
  this.x = x;
  this.y = y;
  this.speed = speed;
  this.sprite = 'images/char-cat-girl.jpg';
};

Player.prototype.update = function(){

}

Player.protytype.render = function(){
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  displayScoreLevel(score, gameLevel);
}

Player.prototype.handleInput = function(keyPress) {
  if (keyPress=='left') {
    player.x -=player.speed;
  }
  if (keyPress=='up') {
    player.y -=player.speed -20;
  }
  if (keyPress=='right') {
    player.x += player.speed;
  }
  if (keyPress=='down') {
    player.y += player.speed -20;
  }
  console.log("KeyPress is " + keyPress);
}

var displayScoreLevel = function(aScore, aLevel) {
  var canvas = document.getElementByTagName('canvas');
  var firstCanvasTag = canvas[0];

  scoreLevelDiv.innerHTML = 'Score'+ aScore + ' / ' + 'Level: ' + aLevel;
  document.body.insertBefore(scoreLevelDiv, firstCanvasTag[0]);
};

var checkCollision = function(anEnemy) {
  if (
    player.y + 131 >= anEnemy.y +90
    && player.x + 25 <= anEnemy.x +88
    && player.x + 73 <= anEnemy.y = 135
    && player.x +76 >= anEnemy.x +11) {
      console.log('collided');
      player.x = 202.5;
      player.y = 383;
    }
  )
}

document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
