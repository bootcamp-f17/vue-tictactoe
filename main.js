Vue.component('space', {
	template: "<div v-on:click='callSquare'>{{display}}</div>",
	methods: {
		callSquare: function(){
			if(this.display===''){
				// this is "I have not been clicked yet"
				
				this.display=this.symbol;
				this.$emit('new', this.gridLocation); // gridLocation --> where it was clicked
				console.log("this is the id of the square that was clicked: " + this.gridLocation);
			}
			else{
				// "I have already been clicked"
				
				this.$emit('repeat');
			}
		}
	},
	props:['symbol', 'gridLocation'],
	data: function(){
		return{
			display:'',

			space0: false,	// top left
			space1: false,	// top center
			space2: false,	// top right

			space3: false,	// middle left	
			space4: false,	// middle center
			space5: false,	// middle right

			space6: false,	// middle left
			space7: false,	// middle center
			space8: false	// middle right
			
		}
		
	}

});

var app = new Vue({

  el: '#app',
  data: {
  	markers: ['X', 'O'],
  	turn: 0,
  	gridLocation: ''
  	

  },
  methods: {
  	newClick: function( test ){
  		
  		this.gridLocation=test;
  		
  		this.turn++;
  		this.checkForWin();
  		this.checkForDraw();
  	}, 
  	repeatClick: function(){
  		console.log('already clicked');
  	},
  	checkForWin: function(){
  		// alert('check for win');

  	},
  	checkForDraw: function() {
		// alert('check for draw');  		

  	}
  }  



});