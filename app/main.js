Vue.component('space', {
  template: '<div v-on:click="callSquare()">{{ display }}</div>',
  data: function() {
    return {
      display: '',
    };
  },
  props: [ 'symbol', 'location' ],
  methods: {
    callSquare: function() {
      if (this.display === '') {
        // New square
        this.display = this.symbol;
        this.$emit('new', this.location);
      }
      else {
        // I have been clicked already
        this.$emit('repeat');
      }
    }
  }
});

var app = new Vue({

  el: '#app',
  data: {
    symbols: ['X', 'O'],
    turn: 0,
    marks: {
      X: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      O: [0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    winnerMessage: '',
    showNotification: false
  },
  methods: {

    newClick: function(location) {
      
      // Mark location array here! Before incrementing turn!
      this.marks[this.symbols[this.turn%2]][location] = 1;

      this.turn++;

      // Only need to check for win condition if turn > 4
      if (this.turn > 4) {
        this.isGameOver();
      }

      // At this point, board is full if turn == 9
      if (this.turn === 9) {
        this.checkForDraw();
      }
    },

    repeatClick: function() {
      // Chill....
    },

    isGameOver: function() {

      var self = this;

      for (var i=0; i<wins.length; i++) {
        Object.keys(this.marks).forEach(function(symbol) {
          
          var gameWon = self.checkForWin(wins[i], self.marks[symbol]);

          console.log(gameWon);

          if (gameWon) {
            self.showNotification = true;
            self.winnerMessage = symbol + " won the game!";
          }

        });
      }

    },

    checkForWin: function(line, testArray) {
      return testArray[line[0]] * testArray[line[1]] * testArray[line[2]];
    },

    checkForDraw: function() {
    },

    resetGame: function() {

      // This reloads the whole page! Dangit!
      location.reload();

      // A better Vue solution would be to modify the components
      // How can we do that?
      // Maybe rewrite them to be bound to variables in app rather than
      // receive their symbol via prop.
      // Then we'd also need to do:
            // this.turn = 0;
            // this.marks = {
            //   X: [0, 0, 0, 0, 0, 0, 0, 0, 0],
            //   O: [0, 0, 0, 0, 0, 0, 0, 0, 0]
            // };
            // this.winnerMessage = '';
            // this.showNotification = false;
      // to fully reset app state.

    }


  }  

});