// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads.
$(document).ready(function () {
  render($("#display"), image);
  $("#apply").on("click", applyAndRender);
  $("#reset").on("click", resetAndRender);
});

/////////////////////////////////////////////////////////
//////// event handler functions are below here /////////
/////////////////////////////////////////////////////////

// this function resets the image to its original value; do not change this function
// this resetys and renders the fujnction
function resetAndRender() {
  reset();
  render($("#display"), image);
}

// this function applies the filters to the image and is where you should call in order for the filters to call
// all of your apply functions
// this renders the filter
function applyAndRender() {
  // Multiple TODOs: Call your apply function(s) here
  applyFilter(reddify)
  //applyFilterNoBackground(decreaseBlue)
  //applyFilterNoBackground(increaseGreenByBlue)
  // do not change the below line of code
  render($("#display"), image);
}

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2 & 4: Create the applyFilter function here
// this actually applies the filter its not callijng it but kits making the fujnction that qill be used to call it later
function applyFilter(filterFunction){
for ( r = 0; r < image.length; r++) {
  for ( c = 0; c < image[r].length; c++){
      var rgbString = image[r][c]
    var rgbNumbers = rgbStringToArray(rgbString); 
    filterFunction(rgbNumbers);
    rgbString = rgbArrayToString(rgbNumbers);
    image[r][c] = rgbString
}
}
}

// TODO 7: Create the applyFilterNoBackground function
// this applyds the fiter to the object without the background
function applyFilterNoBackground(filterFunction){
  var backgroundColor = image[0][0];
  for (var i = 0; i < image.length; i++){
    for(var j = 0; j < image[i].length; j++){
      var rgbString = image[i][j];
     
      if (rgbString !== backgroundColor){
        var rgbNumbers = rgbStringToArray(rgbString);
        filterFunction(rgbNumbers);
        rgbString = rgbArrayToString(rgbNumbers);
        image[i][j] = rgbString;
      }
    }
   
  }
  }
 
 
 // TODO 5: Create the keepInBounds function
 //keeps the fiter in bounds
 function keepInBounds(num1){
  return num1 < 0 ? 0 : (num1 > 255 ? 255 : num1);
 }
 
 
 // TODO 3: Create reddify function
 //this makes thr filter red
 function reddify(RED){
  RED[RED] = 200;
 }
 
 
 // TODO 6: Create more filter functions
 // This function decreases the blue on the filter
 function decreaseBlue (BLUE){
  BLUE[BLUE] = keepInBounds(BLUE - 50);
 }// this function will increse the green by blue in the function
 function increaseGreenByBlue (GREEN){
  GREEN[GREEN] = keepInBounds(BLUE + GREEN);
 }
 // CHALLENGE code goes below here
 
 
 