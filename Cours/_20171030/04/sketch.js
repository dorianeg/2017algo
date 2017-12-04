var mySound;

var counter = 0;
var soundList = ['405561__inspectorj__wind-realistic-a.wav','197714__corsica-s__atlantic-ocean-waves.wav'];

function preload (){
mySound = loadSound ('sound/405561__inspectorj__wind-realistic-a.wav','sound/'197714__corsica-s__atlantic-ocean-waves.wav');

}

function mousePressed(){
loadSound = ('sound/' + soundList[counter], ready);

	counter = counter +1;

	if (counter >= soundList.length) {
		counter = 0;
}
}

function ready(sound){
	mySound = sound;
	mySound.play();
}
