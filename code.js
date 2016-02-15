
// This function makes a new div to the body of the DOM and sets it's 
//  styles inline.  It then calls the function to add the div to the DOM  
function makeDiv() {
  var mainDiv = document.createElement("div");
  mainDiv.id = "main-div";
  mainDiv.style.width = "100px";
  mainDiv.style.height = "100px";
  mainDiv.style.background = "red";
  addDiv(mainDiv);
}

// This inserts the new div into the DOM before the jsScript 
//  tag (which is good practice).
function addDiv(mainDiv) {
  var jsScript = document.getElementsByTagName("script");
  document.body.insertBefore(mainDiv, jsScript[0]);
}

// This function makes the enlarger button to the body of the DOM 
//  and sets it's styles inline.  It then calls the function to add 
//  the button to the DOM 
function makeButton() {
  var mainButton = document.createElement("p");
  mainButton.id = "button";
  mainButton.innerText = "Click Me";
  mainButton.style.display = "block";
  mainButton.style.width = "10%";
  mainButton.style.padding = "5px";
  mainButton.style.textAlign = "center";
  mainButton.style.background = "lightgray";
  addButton(mainButton);
}

// This inserts the enlarger button into the DOM before the jsScript 
//  tag (which is good practice).
function addButton(mainButton) {
  var jsScript = document.getElementsByTagName("script");
  document.body.insertBefore(mainButton, jsScript[0]);
}

// This adds the clickable listener for the enlarger button
function addButtonListener() {
  var button = document.getElementById("button");
  button.addEventListener("click", enlargeDiv);
}

// This function enlarges the div and then calls the timed function
//  to decrease the size of the div.
function enlargeDiv() {
  var mainDivSizer = document.getElementById("main-div");
  mainDivSizer.style.width = "200px";
  mainDivSizer.style.height = "200px";
  mainDivSizer.style.background = "blue";

  decreaseDiv(mainDivSizer);
}

// This function waits the number of milliseconds before decreasing
//  the size of the div.
function decreaseDiv(mainDivSizer) {
  var delay=3000;
  setTimeout (function() {
  mainDivSizer.style.width = "100px";
  mainDivSizer.style.height = "100px";
  mainDivSizer.style.background = "red";
  }, delay); 
}

makeDiv();
makeButton();
addButtonListener();
