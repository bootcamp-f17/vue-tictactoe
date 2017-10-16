var app = new Vue({

	el: "#app",

	data: {
		symbols: ['O', 'X'],
		turn: 0,
		restart: true,
		winnerMessage: false,
		notification: false,
		spaces: '',
		wins : [
		  [0,1,2],
		  [3,4,5],
		  [6,7,8],
		  [0,3,6],
		  [1,4,7],
		  [2,5,8],
		  [0,4,8],
		  [2,4,6]
				]
	},

	methods: {
		startgame : function() {
			this.turn = 0;
			this.winnerMessage = '';
			this.notification = false;

			for (var i = this.spaces.length - 1; i >= 0; i--) {
				this.spaces[i] = '';
				takespace();
			}

		},
			takeSpace : function() {
				
				// var currentPlayer = '';
				// this.turn++;
				// currentPlayer = symbols[turn % 2];



				// Need to use the {{ mustache }} to replace .innerhtml

			this.turn++;
			var currentPlayer = this.symbols[this.turn % 2];
			this.innerHTML = currentPlayer;
			removeEventListener("click", this.takeSpace);  

			for (var i = 0; i < wins.length; i++) {
			  	if (this.checkForWin(wins[i])) {

			      // No more clicking!
				for (var j = 0; j < this.spaces.length; j++) {
				        this.spaces[j]("click", this.takeSpace);
				    }

			      // Notify the players
			      notification.style.display = 'block';
			      winnerMessage.innerHTML = "Yay! " + currentPlayer + " won!";

			    }
			    else {
			      if (this.turn == 9) {
			        notification.style.display = "block";
			        winnerMessage.innerHTML += "Bummer! It's a draw!";
			      }
			    }
			}
		},
		

			checkForWin : function(wins) {

			return this.spaces[wins[0]] !== '' && 
		    this.spaces[wins[0]] === this.spaces[wins[1]] && 
		    this.spaces[wins[0]] === this.spaces[wins[2]];

			}

     	}
});