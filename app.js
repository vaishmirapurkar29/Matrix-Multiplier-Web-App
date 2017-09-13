//class MyApp 

MyApp = (function(){

	const c1 = "#create1";
	const t1 = "#text1";
	const t2 = "#text2";
	const t3 = "#text3";
	const t4 = "#text4";
	const c2 = "#create2";
	const p1 = "#printTable";

	let app = {};
	app.matrix1 = null; //new Matrix object
	app.matrix2 = null; //new Matrix object
	app.final_array = null;

	app.step = 1;

	//function to create matrix forms for user input
	
	//function to check the compatibility of the two matrices
	
	function storeInitalValues(){
		if($(t1).val()!=null && $(t2).val()!=null && $(t3).val()!=null && $(t4).val()!=null){

			app.dim_val1 = $(t1).val(); //storing the dimensional values as properties on the app object 
			app.dim_val2 = $(t2).val(); 
			app.dim_val3 = $(t3).val(); 
			app.dim_val4 = $(t4).val(); 

		}
	}
	function checkCompatibility(m1_col,m2_row){  

	  return(m1_col === m2_row);
			
	}

	//function to make the matrices if they are compatible
	app.makeMatrices = function(row1, col1, row2, col2){
		this.matrix1 = new Matrix(row1,col1);
		this.matrix1.createMatrix();
		this.matrix2 = new Matrix(row2,col2);
		this.matrix2.createMatrix();
	}

	//callback function for the 'create' button. Takes in the dimensions and calls the checkCompatibility function  
	function takeDimensions(evt) {  

		//extract values from the textfields
	    let mtx1_row = document.querySelector(t1).value; 
	    let mtx1_col = document.querySelector(t2).value;
	    
	    let mtx2_row = document.querySelector(t3).value;
	    let mtx2_col = document.querySelector(t4).value;
   
	    if(mtx1_row && mtx1_col && mtx2_row && mtx2_col ) {
		    let compat = checkCompatibility(mtx1_col, mtx2_row);   //checking the compatibility of the matrices
		    if(compat){  //if compatible, call the makeMatrices function
		    	app.makeMatrices(mtx1_row, mtx1_col, mtx2_row, mtx2_col);
		    	app.step = 2;
		    	app.render();
		    }
		    else {  
		    	alert("The dimensions need to be compatible!");
		    	document.querySelector(t1).value = null;  //to clear out the existing values
		    	document.querySelector(t2).value = null;
		    	document.querySelector(t3).value = null;
		    	document.querySelector(t4).value = null;
		    }  
	    }

	    else alert("all fields are required!");
		

	}

	//callback function for storing values from the form and multiplying the matrices
	function storeValues() {

		let mtx1 = app.matrix1.getMatrix();
		let mtx2 = app.matrix2.getMatrix();
		let rows1 = app.matrix1.getRows();
		let cols1 = app.matrix1.getCols();
		let rows2 = app.matrix2.getRows();
		let cols2 = app.matrix2.getCols();

			   // console.log(mtx1);

		for (var i = 0; i < rows1; i++) {
			console.log(mtx1,mtx1[i]);
			for (var j = 0; j < cols1; j++) {
				mtx1[i][j] = $("#matrix1"+i+j).val();
			} 
	   }

		for (var i = 0; i < rows2; i++) {
			for (var j = 0; j < cols2; j++) {
				mtx2[i][j] = $("#matrix2"+i+j).val();

			} 
	   }

	   // console.log(mtx2);


   	app.matrix1.setMatrix(mtx1);
   	app.matrix2.setMatrix(mtx2);

   	app.step = 3;
   	app.render();

	}


	app.removeListeners = function(){
		$('#c1').off('click',takeDimensions);
		$('#c2').off('click', storeValues);

	}
	
	app.attachListeners = function(){
		//if vanilla, use addEventListener, on is used in jQuery
		if(document.querySelector(c1)){
			document.querySelector(c1).addEventListener('click',takeDimensions); 

		}

		if(document.querySelector(c2)){
		document.querySelector(c2).addEventListener('click', storeValues);

		}
		

	}



	function multiply (arr, arr2){
		let arr_temp = new Array(arr2.length);
		app.final_array = new Array(arr.length);

		for (var i = 0; i < arr.length; i++) {
	  		app.final_array[i] = new Array(arr2[0].length);
		}
		var sum;

		for (var i = 0; i < arr.length; i++) {
			for (var j = 0; j < arr2[0].length; j++) {
				for(var s = 0; s < arr[0].length;s++){
					arr_temp[s] = arr[i][s]*arr2[s][j];
				}
				sum = 0;
				for(var k = 0;k<arr_temp.length;k++){
					sum  = sum + arr_temp[k];
				}
		    	app.final_array[i][j] = sum;
			}
		

		}

		console.log(app.final_array);

	}

	app.init = function() {

		console.log("start");
		this.render();
	}
	app.render = function(){
		
		let html = '';

		storeInitalValues(); //calling the function to store the existing dimension values
    
	   // Remove my event listerners

	   app.removeListeners();
	    
	    // Dump the DOM for population
	   $('div.container').html(""); //overwrites the elements with nothing

	    // STEP 1 
	    // Render my pre data entry application
	    // Render 4 input boxes into the DOM


	   let step1 = '<p>Enter the dimensions for matrix 1</p>'+
			'<input type="number" name="dimension 1" id="text1" min="1" max="7">'+
			'<input type="number" name="dimension 2" id="text2" min="1" max="7">'+
		 	'<p>Enter the dimensions for matrix 2</p>'+
			'<input type="number" name="dimension 1" id="text3" min="1" max="7">'+
			'<input type="number" name="dimension 2" id="text4" min="1" max="7">'+
			'<input  id = "create1" type="Submit" name="Submit" value="Create">';
	    
	   // populate div#step1 with the necessary HTML
	   $('div#step1').html(step1);
	   
	   document.querySelector(t1).value = this.dim_val1;  //to keep the existing values
    	document.querySelector(t2).value = this.dim_val2;
    	document.querySelector(t3).value = this.dim_val3;
    	document.querySelector(t4).value = this.dim_val4;

		// STEP 2
    	// Check to see if my application has stored data 
    	// in matrix1 and matrix2    
    	if( this.step > 1 ) {
    			let r1 = this.matrix1.getRows();
				let r2 = this.matrix2.getRows();
				let c1 = this.matrix1.getCols();
				let c2 = this.matrix2.getCols();

				//inputting the array input boxes
				for (var i = 0; i < r1 ; i++) {
					var break_line = document.createElement('br'); 
					document.getElementById('step2').appendChild(break_line);

					for (var j = 0; j < c1; j++) {
			
						var input1 = $("<input/>",{type: 'number',id:'matrix1'+i+j});
						$('div#step2').append(input1);
					}
				}

				var break_line = document.createElement('br'); 
				document.getElementById('step2').appendChild(break_line);

				for (var i = 0; i < r2 ; i++) {
					var break_line = document.createElement('br'); 
					document.getElementById('step2').appendChild(break_line);

					for (var j = 0; j < c2; j++) {
			
						var input2 = $("<input/>",{type: 'number',id:'matrix2'+i+j});
						$('div#step2').append(input2);
					}
				}

				var break_line = document.createElement('br'); 
				document.getElementById('step2').appendChild(break_line);

			   var input1 = document.createElement('input');
			   input1.setAttribute("type", "submit");
			   input1.setAttribute("value", "Multiply");
			   input1.setAttribute("id", "create2");
				document.getElementById('step2').appendChild(input1);

				

    		}

    		//step 2 end - when the user clicks the multiply button and extracts the values from the generated matrices

    		//Step 3 - multiply them and render input to the DOM
    		if(this.step > 2) {
    			
    			// inserting the values back

    			let mat1 = app.matrix1.getMatrix();
				let mat2 = app.matrix2.getMatrix();

				console.log(mat1,mat2);

				let r1 = this.matrix1.getRows();
				let r2 = this.matrix2.getRows();
				let c1 = this.matrix1.getCols();
				let c2 = this.matrix2.getCols();

				for (var i = 0; i < r1 ; i++) {

					for (var j = 0; j < c1; j++) {
			
						document.getElementById("matrix1"+i+j).value = mat1[i][j];
					}
				}

				for (var i = 0; i < r2 ; i++) {

					for (var j = 0; j < c2; j++) {
			
						document.getElementById("matrix2"+i+j).value = mat2[i][j];
					}
				}


    			multiply(this.matrix1.getMatrix(), this.matrix2.getMatrix());  //to multiply the two matrices

    			//render input to the DOM
    			var table = document.createElement('table');
				table.setAttribute('id','table');
				document.querySelector('#step3').appendChild(table);


 				for (var i = 0; i < this.final_array.length; i++) {
 					var row = document.createElement('tr');
 					table.appendChild(row);
 					for (var j = 0; j < this.final_array[i].length; j++) {
 						var col = document.createElement('td'); 
 						col.innerHTML = this.final_array[i][j];
 			 			row.appendChild(col);	
 					}
 				}

    		}


   // Add my event listeners
		app.attachListeners();
	}
 
	return app;

})();

