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

	//callback function for the 'create' button. Takes in the dimensions and calls the checkCompatibility function  
	function takeDimensions(evt) {  //why is evt required?

	    let mtx1_row = document.querySelector(t1).value;
	    let mtx1_col = document.querySelector(t2).value;
	    
	    let mtx2_row = document.querySelector(t3).value;
	    let mtx2_col = document.querySelector(t4).value;
   
	    if(mtx1_row )
		    checkCompatibility(mtx1_row, mtx1_col, mtx2_row, mtx2_col);                    
		}

	}

	//callback function for storing values from the form and multiplying the matrices
	function storeValues(rows1,cols1,rows2,cols2) {
		for (var i = 0; i < rows1; i++) {
			for (var j = 0; j < cols1; j++) {
				matrix1.getMatrix()[i][j] = $("#matrix1"+i+j).val();


			} 
	   	}


	   	for (var i = 0; i < rows2; i++) {
			for (var j = 0; j < cols2; j++) {
				matrix2.getMatrix()[i][j] = $("#matrix2"+i+j).val();

			} 
	   	}

	   	multiply(matrix1.getMatrix(), matrix2.getMatrix());

	}

	//function to check if the two dimensions are compatible or not
	function checkCompatibility(m1_row,m1_col,m2_row,m2_col){

	  if(m1_col === m2_row){
			matrix1 = new Matrix(m1_row, m1_col);
			matrix1 = new Matrix(m2_row, m2_col);
			matrix1.createMatrix();
			matrix2.createMatrix();
			matrix1.createForm(m1_row, m1_col);
			matrix1.createForm(m2_row, m2_col);

		}
		else {
			alert("These array dimensions are not compatible!");
		}
	}

	app.removeListeners = function(){
		document.querySelector(c1).off('click',takeDimensions);
		document.querySelector(c2).off('click', function(){storeValues(matrix1.getRows, matrix1.getCols, matrix2.getRows, matrix2.getCols);});

	}
	
	app.attachListeners = function(){
		document.querySelector(c1).on('click',takeDimensions);
		document.querySelector(c2).on('click', function(){storeValues(matrix1.getRows, matrix1.getCols, matrix2.getRows, matrix2.getCols);});
	}



	function multiply (arr, arr2){
		var arr_temp = new Array(arr2.length);
		var final_array = new Array(arr.length);

		for (var i = 0; i < arr.length; i++) {
	  		final_array[i] = new Array(arr2[0].length);
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
		    	final_array[i][j] = sum;
			}
		

		}

		console.log(final_array);

	 	
		// var para = document.createElement('table');
		// para.setAttribute('id','table');
		// document.querySelector('#printProduct').appendChild(para);


	 // 	for (var i = 0; i < final_array.length; i++) {
	 // 		var row = document.createElement('tr');
	 // 		para.appendChild(row);
	 // 		for (var j = 0; j < final_array[i].length; j++) {
	 // 			var col = document.createElement('td'); 
	 // 			col.innerHTML = final_array[i][j];
	 // 			 row.appendChild(col);	
	 			


	 // 		}
	 // 	}





	}

	app.render = function(){

	}
 
	return app;

})();