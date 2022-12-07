var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            "name": "Robot Romp",
            "number": 1, 
            "speed": -3,
            "gameItems": [
                { "type": "sawblade", "x": 400, "y": groundY },
                { "type": "sawblade", "x": 600, "y": groundY },
                { "type": "sawblade", "x": 900, "y": groundY },
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(true);

        // TODO 6 and on go here
        // BEGIN EDITING YOUR CODE HERE

        function createSawBlade(x, y) {
            
            var hitZoneSize = 25;
            var damageFromObstacle = 10;
            var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
    
            sawBladeHitZone.x = x;
            sawBladeHitZone.y = y;
            game.addGameItem(sawBladeHitZone);

            var obstacleImage = draw.bitmap("img/sawblade.png");
            sawBladeHitZone.addChild(obstacleImage);
            obstacleImage.x = -25;
            obstacleImage.y = -25;

        }

        createSawBlade (550, 350);
        createSawBlade (340, 500);
        createSawBlade (600, 700);
        createSawBlade (800, 450);

        function brokenHeart (x, y) {

            var hitZoneSize = 25;
            var damageFromObstacle = 15;
            var brokenHeartHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);

            brokenHeartHitZone.x = x;
            brokenHeartHitZone.y = y;
            game.addGameItem(brokenHeartHitZone);

            var obstacleImage = draw.bitmap("img/brokenheart.png");
            brokenHeartHitZone.addChild(obstacleImage);
            obstacleImage.x = -25;
            obstacleImage.y = -25;

        }

        brokenHeart (400, 350);
        brokenHeart (500, 400);

        
        function createEnemy (x, y) {

            var enemy = game.createGameItem("enemy", 25);
            var redSquare = draw.bitmap("img/patrick.png");
            redSquare.x = -25;
            redSquare.y = -25;
            enemy.addChild(redSquare);
    
            enemy.x = x;
            enemy.y = groundY - y;
    
            game.addGameItem(enemy);
    
            enemy.velocityX = -1;
            enemy.rotationalVelocity = 2;
    
            enemy.onPlayerCollision = function () {
    
                game.changeIntegrity(-10)
            };
    
            enemy.onProjectileCollision = function () {
    
                game.increaseScore(100);
                enemy.fadeOut();
            }
    

        }

            createEnemy(800, groundY - 500);
            createEnemy(1500, groundY - 450);
            createEnemy(2000, groundY - 400);

        
        
        
        // DO NOT EDIT CODE BELOW HERE
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}
