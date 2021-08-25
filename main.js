// Create a reference for the canvas
canvas = document.getElementById("Canvas");
ctx = canvas.getContext("2d");

img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add() {
	img_imgTag = new Image(); //defining a variable with a new image
	img_imgTag.onload = uploadimg; // setting a function, onloading this variable
	img_imgTag.src = img_image;   // load image
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

//Write a code to grab the key-pressed event
window.addEventListener("keydown",my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90)){
			alphabetkey();
		}
		else if(keyPressed >= 48 && keyPressed <= 57){
			numberkey();
		}
		else if(keyPressed >= 37 && keyPressed <= 40){
			arrowkey();
		}
		else if(keyPressed == 17 || keyPressed == 18 || keyPressed == 27){
			specialkey();
		}
	    else{
		    otherkey();
	    }
}

function alphabetkey(){
	document.getElementById("d1").innerHTML="You pressed an alphabet key";
	console.log("You pressed an alphabet key");
	img_image="Alpkey.png";
	add();
}
function numberkey(){
	document.getElementById("d1").innerHTML="You pressed a number key";
	console.log(" You pressed a number key");
	img_image="numkey.png";
	add();
}
function arrowkey(){
	document.getElementById("d1").innerHTML="You pressed an arrow key";
	console.log("You pressed an arrow key")
	img_image="Arrkey.png";
	add();
}
function specialkey(){
	document.getElementById("d1").innerHTML="You pressed a special key";
	console.log("You pressed a special key");
	img_image="spkey.png";
	add();
}
function otherkey(){
	document.getElementById("d1").innerHTML="You pressed a symbol key or another key";
	console.log("You pressed a symbol key or another key")
	img_image="otherkey.png";
	add();
}
	
