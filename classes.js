//class that stores the dimensions
//makes a matrix object
function matrix() {
	let x; //x dimension of the matrix
	let y; //y dimension of the matrix

	this.getX = function() {
		return x;
	}

	this.getY = function() {
		return y;
	}

	this.createMatrix = function() {
		// to check if x and y are not 0, undefined, null or false
		if(x && y ) { 
			let arr = new Array(x);
			for (i = 0; i < x; i++) {
	  			arr[i] = new Array(y) ;
			}


		}
	}

	this.
}