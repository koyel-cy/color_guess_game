let numSquares = 6;
let colors = generateRandomColors(numSquares);
let squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let colorDisplay = document.getElementById("colorDisplay");    
let message = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let easyBtn = document.querySelector("#easyBtn");
let hardBtn = document.querySelector("#hardBtn");


easyBtn.addEventListener("click", function(){
	easyBtn.classList.add("selected")
	hardBtn.classList.remove("selected")
	//generate new random colors only 3 
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	//change the picked color
	pickedColor = pickColor();
	//change the display of the picked color
	colorDisplay.textContent = pickedColor;
	//arrange colors of the squares
	for(let i=0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		} else{
			squares[i].style.display = "none";
		  }
	}
	//hide the squares which isnt inside the loop
});
hardBtn.addEventListener("click", function(){
	hardBtn.classList.add("selected")
	easyBtn.classList.remove("selected")
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	//change the picked color
	pickedColor = pickColor();
	//change the display of the picked color
	colorDisplay.textContent = pickedColor;
	//arrange colors of the squares
	for(let i=0; i < squares.length; i++){
		
		squares[i].style.backgroundColor = colors[i];		
		squares[i].style.display = "block";		  
	}
});






resetButton.addEventListener("click", function(){
	//generate new random colors
	colors = generateRandomColors(numSquares);

	//change the picked color
	pickedColor = pickColor();
	//change the text content of picked color
	colorDisplay.textContent = pickedColor;
	this.textContent = "NEW COLORS";
	//arange the new colors of the square
	for(let i=0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "steelblue";
	message.textContent = "";	
});
colorDisplay.textContent = pickedColor;

for(i=0; i < squares.length; i++){
	squares[i].style.backgroundColor = colors[i];

	squares[i].addEventListener("click", function(){
		let clickedColor = this.style.backgroundColor;
		
		if(clickedColor === pickedColor){
			resetButton.textContent = "PLAY AGAIN?"
			message.textContent = "CORRECT!!"
			changedColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
		} else{
			this.style.backgroundColor = "#232323";
			message.textContent = "TRY AGAIN!"
		}
	});
}
function changedColors(color){
	for(i=0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}
function pickColor(){
	let random = Math.floor(Math.random() * colors.length);
	return colors[random];
}
function generateRandomColors(num){
	//have an arr
	let arr = []
	//generate random colors
	for(i=0; i < num; i++){
		arr.push(randomColors());
	}
	
	//push it into the arr
	return arr;

}

function randomColors(){
	let r = Math.floor(Math.random() * 256);
	let g = Math.floor(Math.random() * 256);
	let b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

