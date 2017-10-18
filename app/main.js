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
        this.$emit('new',this._uid,this.symbol);
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

    newClick: function(id,symbol) {
      console.log("newClick: ",id);
      console.log("newClick: ",symbol);
      this.turn++;
      // this.id=id;

      this.checkForWin(id,symbol);
      this.checkForDraw();
    },

    repeatClick: function() {
      console.log("clicked a space again");
    },

    checkForWin: function(id,symbol) {
      
      if(symbol === 'X'){
        console.log("In the Loop: ",id);
        this.playerXSequence.push(id);
        console.log(this.playerXSequence);
      }
    },

    checkForDraw: function() {
     // console.log("checking for draw");
    }


  }  

});