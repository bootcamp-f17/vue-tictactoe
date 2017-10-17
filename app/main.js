var tictactoe = new Vue({

	el: '#tictactoe',

	data: {
		

		turn: 0,
		currentPlayer: "",
		symbols : ["X","O"]


	},

	methods: {
		startGame: function(){

			alert("startGame");
		},



		takeSpace: function(){
		
			this.turn++;
			this.currentPlayer=this.symbols[this.turn%2];
			console.log(this.currentPlayer);
			this.innerHTML=this.currentPlayer;

			//checkForWin;
		},
		checkForWin: function(winArray){
			// return this.spaces[winArray[0]] !== '' && 
	  //   this.spaces[winArray[0]] === this.spaces[winArray[1]] && 
	  //   this.spaces[winArray[0]]=== this.spaces[winArray[2]];

		}

	},
	computed: {

		
	}

});