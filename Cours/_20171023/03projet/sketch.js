var monArray;

function setup() {
	createCanvas(windowWidth, windowHeight);

	monArray = ["coq", "licot", "coc", "licot", "coquelicot", "cotcot"];

	print (monArray);

	print ("length =" +monArray);

	print(monArray[0]);
	print(monArray[4]);
	print(monArray[2]);
	print(monArray[100]);
	print(monArray[5]);
print(monArray[int(random(monArray.length))]);

}