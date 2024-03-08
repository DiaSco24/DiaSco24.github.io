/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
// starts the program
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables

  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  
  // Game Item Objects

    var walker = {
    positionX :  0,
    speedX : 0,
    positionY : 0,
    speedY : 0,
    };
    // creates variables used in further functions throughout making the game

  // one-time setup

  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);  
  $(document).on('keyup', handleKeyUp);  
  var KEY = {
    "LEFT": 37,
    "UP": 38,
    "RIGHT": 39,
    "DOWN": 40,
  }        
  

  // change 'eventType' to the type of event you want to handle

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {

    repositionwalker();
    redrawwalker();
  }

  // this runs the functions created
  
  /* 
  Called in response to events.
  */

  function handleKeyDown(event) {
    if (event.which === KEY.LEFT){
      walker.speedX = -5;
     
    }
    if (event.which === KEY.UP){
      walker.speedY = -5;
    }
    if (event.which === KEY.RIGHT){
      walker.speedX = 5;
    }
    if (event.which === KEY.DOWN){
      walker.speedY = 5;
    }
  }

  // when the keys are pressed the walker will move

  function handleKeyUp(event) {
    if (event.which === KEY.LEFT){
      walker.speedX = 0;
     
    }
    if (event.which === KEY.UP){
      walker.speedY = 0;
    }
    if (event.which === KEY.RIGHT){
      walker.speedX = 0;
    }
    if (event.which === KEY.DOWN){
      walker.speedY = 0;
    }
  
  }

  // whent he key is up the walker will not continue moving
 

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }

  // self explanatory, it ends the game

  function repositionwalker() {
   
    walker.positionX += walker.speedX;
    walker.positionY += walker.speedY;

  }
  // this function helps reposition the walker

  function redrawwalker(){
    $("#walker").css("left", walker.positionX);
    $("#walker").css("top", walker.positionY);
  }

  // this function helps redraw the walker
  
}
  function wallCollision(){
    if (walker.positionX <= 0){
      walker.positionX = 0
    }
    if (walker.positionX >= $("#board").width()-50){
      walker.positionX = ($("#board").width()-50)
    }
    if (walker.positionY >= 0) {
      walker.positionY = 0
    }
    if (walker.positionY >= $("#board").height()-50){
      walker.positionY = ($("#board").height()-50)
    }
   // this function adds borders so the walker does not go past them
  }
