const inhale = document.getElementById('inhale');
const exhale = document.getElementById('exhale');
const countdown = document.getElementById('countdown');

	var countdownInhale = 4;
	var countdownExhale = 8;

	var countdownMinutes = 2;
	var countdownSeconds = 0;

	var countdownMinutesOut = 2;
	var countdownSecondsOut = 0;

	var x;

	var clicked = false;
	var clicked2 = false;

//hold
		var millisec = 0;
		var  sec = 0;
		var min = 0;
		var xx;
		// < 10 
		var millisecOut = 0;
		var  secOut = 0;
		var minOut = 0;




window.addEventListener('click', function(){
	if(!clicked){
		start(); //timer
		clicked=true;
	}

}) // close

window.addEventListener('dblclick', function(){
	if(clicked2){
		stopStopwatch();

		clicked2=false;

	}
})// close



	function start(){
	x = setInterval(timer, 1000);
	
} // close


	function timer(){

	clearInterval(x);
	// inhale exhale reset
	if(countdownExhale === 0 && countdownInhale === 0){
		countdownInhale = 4;
		countdownExhale = 8;
	}

	//reset seconds to 60 and -1 minute
	if(countdownSeconds === 0){
		countdownSeconds = 60;
		countdownMinutes = --countdownMinutes; //inhale
	
	}


	//inhale and exhale countdown
	
	if(countdownInhale === 0){
	countdownExhale = --countdownExhale;
	inhale.classList.remove('toggle');
	exhale.classList.add('toggle');
	}else{
	countdownInhale = --countdownInhale;
	inhale.classList.add('toggle');
	exhale.classList.remove('toggle');
	}

	//countdown
	countdownSeconds = --countdownSeconds;	

	countdownMinutesOut = checkTimer(countdownMinutes);
	countdownSecondsOut = checkTimer(countdownSeconds);

	inhale.innerHTML = `Inhale - ${countdownInhale}s`;
	exhale.innerHTML = `Exhale - ${countdownExhale}s`;
	countdown.innerHTML = `${countdownMinutesOut}:${countdownSecondsOut}s`;
	x = setInterval(timer, 1000);

	//RESET EVERYTHING ONCE IT FINISH

	if(countdownMinutes === 0 && countdownSeconds === 0){
		clearInterval(x);

		countdownMinutes = 2; //reset
	 	countdownSeconds = 0;
	 	countdownMinutesOut = 2;
	 	countdownSecondsOut = 0;

	 	 
	 	 clicked2=true;// can now execute stopStopwatch()

		xx = setInterval(startStopwatch, 200); //execute startStopwatch 
	}


} // close
	
	function checkTimer(i){
		if(i < 10){
			i = '0' + i;
		}
		return i;
	} //close
	






	function startStopwatch(){
		
		clearInterval(xx);

		millisecOut = checkTimer(millisec);
		secOut = checkTimer(sec);
		minOut = checkTimer(min);
		
		millisec = 20+millisec;

		if(millisec === 100){
			millisec = 0;
			sec = ++sec;
		}
		if(sec == 60){
			sec = 0;
			min = ++min;
		}

	 	document.getElementById('minutes').innerHTML = minOut;
		document.getElementById('seconds').innerHTML = secOut;
		document.getElementById('milliseconds').innerHTML = millisecOut;

		xx = setInterval(startStopwatch, 200);
	}

	function stopStopwatch(){
		clearInterval(xx);

		alert(`best time is ${minOut}:${secOut}:${millisecOut}`);

		reset();


	}

		function reset(){

		millisecOut = 0;  //reset
		secOut = 0;
		minOut = 0;
		millisec = 0;
		sec = 0;
		min = 0;

		millisecOut = checkTimer(millisec);//add zero if < 10
		secOut = checkTimer(sec);
		minOut = checkTimer(min);
		document.getElementById('minutes').innerHTML = minOut;
		document.getElementById('seconds').innerHTML = secOut;
		document.getElementById('milliseconds').innerHTML = millisecOut;


		inhale.innerHTML = `Inhale - 4s`;
		exhale.innerHTML = `Exhale - 8s`;
		countdown.innerHTML = `02:00`;
			
		countdown.style.animation = "resetConfirmation .9s ease";
		clicked=false; //can now start the timer

		}