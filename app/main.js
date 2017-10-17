var tictactoe = new Vue({

	el: '#tictactoe',

	data: {
		

		turn: 0,
		currentPlayer: "",
		symbols : ["X","O"],
		item: "",
		winnerMessage:"",
		spaces:[
			{
				space: 1
			},{
				space: 2
			},{
				space: 3
			},{
				space: 4
			},{
				space: 5
			},{
				space: 6
			},{
				space: 7
			},{
				space: 8
			},{
				space: 9
			}
			]

	},

	methods: {
		startGame: function(){

			this.turn = 0;


			alert("startGame");
		},



		takeSpace: function(){
		
			this.turn++;
			this.currentPlayer=this.symbols[this.turn%2];
			console.log(this.id);
			console.log(this.currentPlayer);
			this.item.id=this.currentPlayer;

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