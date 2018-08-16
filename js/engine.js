// This file provides the game loop functionality & draws gameboard

var Engine = (function(global) {

    var doc = global.document,
        win = global.window,
        canvas = doc.createElement('canvas'),
        ctx = canvas.getContext('2d'),
        lastTime,
        id;

   const modal = document.querySelector('.popup-background');
   const replay = document.querySelector('.popup-button');

    replay.addEventListener('click', function() {
      modal.classList.toggle('hide');
      player.reset();
      player.victory = false;
      win.requestAnimationFrame(main);
  });

    canvas.width = 505;
    canvas.height = 606;
    doc.body.appendChild(canvas);



    //game loop and update and render methods
    function main() {
        var now = Date.now(),
            dt = (now - lastTime) / 1000.0;

        update(dt);
        render();

        lastTime = now;

        /* Use the browser's requestAnimationFrame function to call this
         * function again as soon as the browser is able to draw another frame.
         */
        if (player.victory === true) {
          win.cancelAnimationFrame(id);
          modal.classList.toggle('hide');
        }
        else {
          id = win.requestAnimationFrame(main);
        }
    }

  // initial set up only occurs once
    function init() {
        reset();
        lastTime = Date.now();
        main();
    }

    //function called by main game loop
    function update(dt) {
        updateEntities(dt);
        // checkCollisions();
    }

    //loops through objects within allEnemies and updates
    function updateEntities(dt) {
        allEnemies.forEach(function(enemy) {
            enemy.update(dt);
       });
        player.update();
    }

    //function draws game level
    function render() {
        /* This array holds the relative URL to the image used
         * for that particular row of the game level.
         */
        var rowImages = [
                'images/water-block.png',   // Top row is water
                'images/stone-block.png',   // Row 1 of 3 of stone
                'images/stone-block.png',   // Row 2 of 3 of stone
                'images/stone-block.png',   // Row 3 of 3 of stone
                'images/grass-block.png',   // Row 1 of 2 of grass
                'images/grass-block.png'    // Row 2 of 2 of grass
            ],
            numRows = 6,
            numCols = 5,
            row, col;

        // Before drawing, clear existing canvas
        ctx.clearRect(0,0,canvas.width,canvas.height)

        /* Loop through the number of rows and columns we've defined above
         * and, using the rowImages array, draw the correct image for that
         * portion of the "grid"
         */
        for (row = 0; row < numRows; row++) {
            for (col = 0; col < numCols; col++) {

                ctx.drawImage(Resources.get(rowImages[row]), col * 101, row * 83);
            }
        }

        renderEntities();
    }

    /* This function is called by the render function and is called on each game
     * tick. Its purpose is to then call the render functions you have defined
     * on your enemy and player entities within app.js
     */
    function renderEntities() {
        allEnemies.forEach(function(enemy) {
            enemy.render();
        });

        player.render();
    }

    //game reset states
    function reset() {
        
    }

    Resources.load([
        'images/stone-block.png',
        'images/water-block.png',
        'images/grass-block.png',
        'images/enemy-bug.png',
        'images/char-pink-girl.png'
    ]);
    Resources.onReady(init);
    global.ctx = ctx;
})(this);
