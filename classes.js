//class that stores the dimensions
//makes a matrix object
function Matrix(x, y) {
	let rows = x; //x dimension of the matrix
	let cols = y; //y dimension of the matrix
	let arr = [];
	this.getRows = function() {
		return rows;
	}

	this.getCols = function() {
		return cols;
	}

	this.getMatrix = function(){

		return arr.concat();//returns a copy
	}

	this.setMatrix = function(matrix){
		arr = matrix;
	}


	// to check if x and y are not 0, undefined, null or false
	this.sizeEval = function(){
		if(x && y){
			return true;
		}
		else alert("Please enter the dimensions!"); 

	}
	this.createMatrix = function() {
		if(this.sizeEval() === true) { 
			arr = new Array(x); 
			for (i = 0; i < x; i++) {
	  			arr[i] = new Array(y);
			}


		}
		
	}

	
	



}