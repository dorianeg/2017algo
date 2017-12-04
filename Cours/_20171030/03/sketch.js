var mySound;

var counter = 0;
var soundList = ['405561__inspectorj__wind-realistic-a.wav','197714__corsica-s__atlantic-ocean-waves.wav'];

function setup (){
	
}

function mousePressed(){
loadSound = ('sound/'+ soundList[counter], ready);
	counter = counter +1;
	if (counter >= soundList.length)



function ready(sound){
	mySound = sound;
	mySound.play();
	mySound.setVolume(0.5);
}
