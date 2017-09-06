//class that stores the dimensions
//makes a matrix object
function Matrix(x, y) {
	let rows = x; //x dimension of the matrix
	let cols = y; //y dimension of the matrix
	let arr;
	this.getRows = function() {
		return rows;
	}

	this.getCols = function() {
		return cols;
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
	  			arr[i] = new Array(y) ;
			}


		}
		
	}

	this.getMatrix = function(){
		return arr;
	}

	this.createForm = function(row, col){
		for (var i = 0; i < row; i++) {
		var break_line = document.createElement('br'); 
		document.getElementById('printTable').appendChild(break_line);

			for (var j = 0; j < col; j++) {
				// var input = document.createElement('input');
				// // input.setAttribute("type", "text");
				// // input.setAttribute("id", 'mat'+i+''+j);
				// document.getElementById('printTable').appendChild(input);

				$('div#printTable').append($("<input/>",{type: 'number',id:this+i+j}));

			}

		}

	}



}