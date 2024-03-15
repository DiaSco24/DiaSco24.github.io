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
  // creates variables used in further functions throughout making the game
    var walker = {
    positionX :  0,
    speedX : 0,
    positionY : 0,
    speedY : 0,
    };
   

  // one-time setup

  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);  
  $(document).on('keyup', handleKeyUp);  
  // making the keys known for their nunber variable in order to call my funcion later
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
 // calling my functions that i made in order for them to run
  function newFrame() {

    repositionwalker();
    wallCollision();
    redrawwalker();
    
  }

  // this runs the functions created
  
  /* 
  Called in response to events.
  */
 // when the keys are pressed the walker will move
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
  // whent he key is up the walker will not continue moving
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


 

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
// ends the game once its copleted/ or it hits the borders
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }

  // self explanatory, it ends the game
// repositions the walker every time it respawns
  function repositionwalker() {
   
    walker.positionX += walker.speedX;
    walker.positionY += walker.speedY;

  }
  // this function helps redraw the walker
  function redrawwalker(){
    $("#walker").css("left", walker.positionX);
    $("#walker").css("top", walker.positionY);
  }
  
}
 // this function adds borders so the walker does not go past them
  function wallCollision(){
    if (walker.positionX <= 0){
      walker.positionX = 0
    }
    if (walker.positionX >= $("#board").width()-50){
      walker.positionX = $("#board").width()-50
    }
    if (walker.positionY <= 0) {
      walker.positionY = 0
    }
    if (walker.positionY >= $("#board").height()-50){
      walker.positionY = $("#board").height()-50
    }
  }
