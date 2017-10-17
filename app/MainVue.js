var app = new Vue({

	el: "#app",

	data: {
		symbols: ['O', 'X'],
		turn: 0,
		restart: true,
		winnerMessage: '',
		showNotification: false,
		spaceP1: [0,0,0,0,0,0,0,0,0],
		spaceP2: [0,0,0,0,0,0,0,0,0]
/*		wins : [
		  [0,1,2],
		  [3,4,5],
		  [6,7,8],
		  [0,3,6],
		  [1,4,7],
		  [2,5,8],
		  [0,4,8],
		  [2,4,6]
				]*/
	},

	methods: {
		startGame: function() {
			location.reload();
			//this.turn = 0;
			//this.winnerMessage = '';
			//this.showNotification = false;



		},

		play: function(event) {
			this.takeSpace(event);
			this.checkForWin();
		},

		takeSpace: function(event) {
        	if (this.turn % 2 === 0) {
      			event.target.innerText = this.symbols[0];
          		this.turn++;
				this.spaceP1[event.target.className] = 1;
         		//console.log(event.target);

         	} else {
         		event.target.innerText = this.symbols[1];
            	this.turn++;
				this.spaceP2[event.target.className] = 1;
         		//console.log(event.target.className);
	        }
          },

          checkForWin: function() {

            var p1 = this.spaceP1;
            var p2 = this.spaceP2;

            <!-- if firstPlayer won -->
            if(p1[0] + p1[1] + p1[2] === 3 || p1[3] + p1[4] + p1[5] === 3 || p1[6] + p1[7] + p1[8] === 3 || p1[0] + p1[3] + p1[6] === 3 || p1[1] + p1[4] + p1[7] === 3 || p1[2] + p1[5] + p1[8] === 3 || p1[0] + p1[4] + p1[8] === 3 || p1[2] + p1[4] + p1[6] === 3) {
               this.showNotification = true;
               this.winnerMessage === 'Player1 won!';
               this.startGame();

            <!-- if secondPlayer won -->
          } else if (p2[0] + p2[1] + p2[2] === 3 || p2[3] + p2[4] + p2[5] === 3 || p2[6] + p2[7] + p2[8] === 3 || p2[0] + p2[3] + p2[6] === 3 || p2[1] + p2[4] + p2[7] === 3 || p2[2] + p2[5] + p2[8] === 3 || p2[0] + p2[4] + p2[8] === 3 || p2[2] + p2[4] + p2[6] === 3
            ) {
          	   this.showNotification = true;
               this.winnerMessage === 'Player2 won!';
               this.startGame();
              <!-- if draw --> 
            } else if (p1[0] + p1[1] + p1[2] + p1[3] + p1[4] + p1[5] + p1[6] + p1[7] + p1[8] + p2[0] + p2[1] + p2[2] + p2[3] + p2[4] + p2[5] + p2[6] + p2[7] + p2[8] === 9) {
	    	   this.showNotification = true;
               this.winnerMessage === 'Nobody won....';
               this.startGame();
            }
          }


			}

     	
});
