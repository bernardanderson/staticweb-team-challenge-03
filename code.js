
// This function adds a new div to the body of the DOM and sets it's 
//  styles inline.  
function makeDiv() {
  var mainDiv = document.createElement("div");
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

function makeButton() {
  var mainButton = document.createElement("p");
  mainButton.innerText = "Click Me";
  mainButton.style.display = "block";
  mainButton.style.width = "10%";
  mainButton.style.padding = "5px";
  mainButton.style.textAlign = "center";
  mainButton.style.background = "gray";
  addButton(mainButton);
}

// This inserts the new div into the DOM before the jsScript 
//  tag (which is good practice).
function addButton(mainButton) {
  var jsScript = document.getElementsByTagName("script");
  document.body.insertBefore(mainButton, jsScript[0]);
}

makeDiv();
makeButton();