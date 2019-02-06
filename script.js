let nums = [0x7e, 0x30, 0x6d, 0x79, 0x33, 0x5b, 
0x5f, 0x70, 0x7f, 0x7b];
let index = 0;

function setup() {
  createCanvas(200, 320);
	frameRate(1.4);
}

function draw() {
  background(220);
	sevenSegment(nums[index]);
	index = (index+1) % nums.length;
}

function getColor(val, shift)  {
	let r = 255;
	let g = 0;
	let b = 0;
	let a = 22+255*((val >> shift) & 1);
	return color(r,g,b,a);
}

function sevenSegment(val){
	push();
	fill(0);
	stroke(0);
	
	fill(getColor(val, 6));
	rect(40,20,98,18,10,10); //A
	
	fill(getColor(val, 5));
	rect(140,40,18,98,10,10); //B
	
	fill(getColor(val, 4));
	rect(140,160,18,98,10,10); //C
	
	fill(getColor(val, 3));
	rect(40,260,98,18,10,10); //G
	
	fill(getColor(val, 2));
	rect(20,160,18,98,10,10);  //E
	
	fill(getColor(val, 1));
	rect(20,40,18,98,10,10);  //F
	
	fill(getColor(val, 0));
	rect(40,140,98,18,10,10); //D
	
	pop();
}

