Vue.component('space', {
  template: '<div v-on:click="callSquare()">{{ display }}</div>',
  data: function() {
    return {
      display: '',
    };
  },
  props: [ 'symbol' ],
  methods: {
    callSquare: function() {
      if (this.display === '') {
        // New square
        this.display = this.symbol;
        this.$emit('new');
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
    turn: 0
  },
  methods: {

    newClick: function() {
      console.log("clicked a new space");
      this.turn++;
      this.checkForWin();
      this.checkForDraw();
    },

    repeatClick: function() {
      console.log("clicked a space again");
    },

    checkForWin: function() {
      alert("checking for win");
    },

    checkForDraw: function() {
      alert("checking for draw");
    }


  }  

});