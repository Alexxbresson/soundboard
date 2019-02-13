// TODO :
// 1 - Select corresponding audio file
// 2 - Play audio file
// 3 - Rewind audio file
// 4 - Select key divs
// 5 - Transitionend listener
// 6 - Remove transition

window.addEventListener("keydown", function(e) { 

	if (e.keyCode == 32 ) {                 
	var sounds = document.getElementsByTagName('audio');                  
	for(i=0; i<sounds.length; i++) sounds[i].pause();                   
};

	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);  
	if(!audio) return;  

			audio.currentTime = 0;



		const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

				

		key.classList.add("playing");



		audio.play();



		const keys = document.querySelectorAll(".key");

		

		keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

	});


function removeTransition(e) {
		
		if(e.propertyName !== "transform") return;

		e.currentTarget.classList.remove("playing");

};