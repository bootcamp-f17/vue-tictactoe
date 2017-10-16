var app = new Vue({

	el:'#tic',

	data: {
		spaces: '',

	},
	beforeMount(){
		this.startGame();
	},

	methods: {


	startGame: function(){

	for(var i=0; i<this.spaces.length; i++){
		this.spaces[i].innerHTML = '';
		// spaces[i].addEventListener("click", takeSpace);
	
		}

	},


	takeSpace: function () {

	alert('got it');

		}
	}
});




	/*

	console.log(wins);
	turn++;
	var currentPlater = symbols[turn % 2];
	this.innerHTML = currentPlater;
	this.removeEventListener("click", takeSpace);
	
	for(var i=0; i<wins.length; i++){
	if (checkForWin(wins[i])){
		// alert("woo hoo!");

		// no more clicking!
		for(var j=0; j<spaces.length; j++){
			spaces[j].removeEventListener("click", takeSpace);
		}

		// Notify the player of success
		notification.style.display = "block";
		winnerMessage.innerHTML = "Yay! " + currentPlater + " won!";
		}
		else{
			if(turn ==9){
				notification.style.display = "block";
				winnerMessage.innerHTML="bummer you both lose";
			}
		}
		
	}
	
}


function checkForWin(winArray){

	return	spaces[winArray[0]].innerHTML !== '' && 
	spaces[winArray[0]].innerHTML === spaces[winArray[1]].innerHTML && 
	spaces[winArray[0]].innerHTML === spaces[winArray[2]].innerHTML;
	
}


	}
*/
