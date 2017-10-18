Vue.component('space', {
  template: '<div v-on:click="callSquare()">{{ display }}</div>',
  data: function() {
    return {
      display: ''

    };
  },
  props: [ 'symbol','product' ],
  methods: {
    callSquare: function() {
      if (this.display === '') {
        // New square
        this.display = this.symbol;
        this.$emit('new',this._uid);
        console.log(this._uid);
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
    playerXSequence: [],
    playerYSequence:[],
    id:0
    
  },
  methods: {

    newClick: function(id) {
      console.log("newClick: ",id);
      this.turn++;
      this.id=id;
      this.checkForWin();
      this.checkForDraw();
    },

    repeatClick: function() {
      console.log("clicked a space again");
    },

    checkForWin: function() {
      
      if(this.symbols[0] === 'X'){
        console.log("In the Loop: ",this._uid);
        this.playerXSequence.push(this._uid);
      }
    },

    checkForDraw: function() {
     // console.log("checking for draw");
    }


  }  

});