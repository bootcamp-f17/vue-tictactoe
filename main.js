var app = new Vue({

	el:'#tic',

	data: {
		spaces: '',
		symbols: ['X', 'O'],
		turn: 0,
		currentPlayer: ''

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

	// alert('got it');
		this.turn ++;
		this.currentPlayer = this.symbols[this.turn % 2];
		

		}
	}
});




// 	function takeSpace() {

//   turn++;
//   var currentPlayer = symbols[turn % 2];
//   this.innerHTML = currentPlayer;
//   this.removeEventListener("click", takeSpace);  

//   for (var i = 0; i < wins.length; i++) {
//     if (checkForWin(wins[i])) {

//       // No more clicking!
//       for (var j = 0; j < spaces.length; j++) {
//         spaces[j].removeEventListener("click", takeSpace);
//       }

//       // Notify the players
//       notification.style.display = 'block';
//       winnerMessage.innerHTML = "Yay! " + currentPlayer + " won!";

//     }
//     else {
//       if (turn == 9) {
//         notification.style.display = "block";
//         winnerMessage.innerHTML += "Bummer! It's a draw!";
//       }
//     }
//   }

// }

// function checkForWin(winArray) {
    
//   return spaces[winArray[0]].innerHTML !== '' && 
//     spaces[winArray[0]].innerHTML === spaces[winArray[1]].innerHTML && 
//     spaces[winArray[0]].innerHTML === spaces[winArray[2]].innerHTML;
  
// }
