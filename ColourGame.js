
var square = document.getElementsByClassName("square");
var colorDisplay = document.getElementById("colorDisplay");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector("#easyBtn");
var hardButton = document.querySelector("#hardBtn");

var num = 6;
var colors = generateRandomColors(num);
var placement = Math.floor(Math.random() * num);
var pickedColor = colors[placement];
colorDisplay.textContent = pickedColor;
setColors();


easyButton.addEventListener("click", function() {
    num = 3;
    easyButton.classList.add("selected");
    hardButton.classList.remove("selected");
    message.textContent = "";
    h1.style.backgroundColor = "steelblue";
    resetButton.textContent = "New Colors";
    colors = generateRandomColors(num);
    placement = Math.floor(Math.random() * num);
    pickedColor = colors[placement];
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < square.length; i++){
        if(i < num){
            if(i === placement){
            square[i].style.backgroundColor = pickedColor;
            }
            else {
                square[i].style.backgroundColor = colors[i];
            }
        }
        else {
            square[i].style.display = "none";
        }
    }
})


hardButton.addEventListener("click", function() {
    num = 6;
    easyButton.classList.remove("selected");
    resetButton.textContent = "New Colors";
    hardButton.classList.add("selected");
    h1.style.backgroundColor = "steelblue";
    message.textContent = "";
    colors = generateRandomColors(num);
    placement = Math.floor(Math.random() * num);
    pickedColor = colors[placement];
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < square.length; i++){
        if(i === placement) {
            square[i].style.backgroundColor = pickedColor;
        }
        else {
            square[i].style.backgroundColor = colors[i];
        }
        square[i].style.display = "block";
    }
})



resetButton.addEventListener("click", function() {
    resetButton.textContent = "New Colors";
    message.textContent = "";
    colors = generateRandomColors(num);
    placement = Math.floor(Math.random() * num);
    pickedColor = colors[placement];
    colorDisplay.textContent = pickedColor;
    h1.style.backgroundColor = "steelblue";
    for(var i=0; i<num; i++) {
        if(i === placement) {
            square[i].style.backgroundColor = pickedColor;
        }
        else {
            square[i].style.backgroundColor = colors[i];
        }
        square[i].style.display = "block";
    }
})


function setColors() {
    for(var i=0; i<square.length; i++) {
        if(i === placement) {
            square[i].style.backgroundColor = pickedColor;
        }
        else {
            square[i].style.backgroundColor = colors[i];
        }
    
        square[i].addEventListener("click", function(){
            if(this.style.backgroundColor !== pickedColor) {
                this.style.backgroundColor = "#232323";
                message.textContent = "Try Again!";
            }
            else {
                resetButton.textContent = "Play Again?";
                message.textContent = "Correct";
                h1.style.backgroundColor = pickedColor;
                changeColors(pickedColor);

            }
        })
    }
}



function changeColors(color) {
    for(var i=0; i<square.length; i++){
        square[i].style.backgroundColor = color;
    }
}


function generateRandomColors(num) {
    var arr = [];
    for(var i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
}

function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var rgb = "rgb(" + r + ", " + g + ", " + b + ")"
    return rgb;
}