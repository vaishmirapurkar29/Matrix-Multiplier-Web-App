const c1 = "#create1";
const t1 = "#text1";
const t2 = "#text2";
const t3 = "#text3";
const t4 = "#text4";
const c2 = "#create2";
const p1 = "#printTable";


$(document).ready(function(){

	document.querySelector(c1).onclick = function(){
		
    let mtx1_row = document.querySelector(t1).value;
    let mtx1_col =document.querySelector(t2).value;
    
    let mtx2_row =document.querySelector(t3).value;
    let mtx2_col =  document.querySelector(t4).value;
   
    if(mtx1_row )
    checkCompatibility(mtx1_row, mtx1_col, mtx2_row, mtx2_col);                    
	}
});
	
function checkCompatibility(m1_row,m1_col,m2_row,m2_col){

  if(m1_col === m2_row){
		createMatrices(m1_row,m1_col,m2_row,m2_col);
	}
	else {
		alert("These array dimensions are not compatible!");
		document.querySelector(t1).value = null;
		document.querySelector(t2).reset();
		document.querySelector(t3).reset();
		document.querySelector(t4).reset();
	}
}

function createMatrices(mat1_row,mat1_col,mat2_row,mat2_col){
	var arr;
	var arr2;
	var i;	


	arr = [];
	for (i = 0; i < mat1_row; i++) {
  		arr[i] = [];
	}

	arr2 = [];
	for (i = 0; i < mat2_row; i++) {
  		arr2[i] = [];
	}

	createGrid(arr, mat1_col,mat1_row,mat2_row,mat2_col);


	
	var break_line = document.createElement('br'); 
	document.getElementById('printTable').appendChild(break_line);

	

	store_values(arr,arr2, mat1_row,mat1_col,mat2_row,mat2_col);

}

function createGrid(arr, mat_1col,mat_1row,mat_2row,mat_2col){
	for (var i = 0; i < mat_1row; i++) {
		var break_line = document.createElement('br'); 
		document.getElementById('printTable').appendChild(break_line);

		for (var j = 0; j < mat_1col; j++) {
		
			$('div#printTable').append($("<input/>",{type: 'number',id:'mat1'+i+j}));

		}

	}
	var break_line = document.createElement('br'); 
	document.getElementById('printTable').appendChild(break_line);

	for (var i = 0; i < mat_2row; i++) {
		var break_line = document.createElement('br'); 
		document.getElementById('printTable').appendChild(break_line);

		for (var j = 0; j < mat_2col; j++) {
			// var input = document.createElement('input');
			// // input.setAttribute("type", "text");
			// // input.setAttribute("id", 'mat'+i+''+j);
			// document.getElementById('printTable').appendChild(input);

			$('#printTable').append($("<input/>",{type: 'number',id:'mat2'+i+j}));

		}

	}



}



function store_values(array1,array2, mat1row,mat1col,mat2row,mat2col){
	document.querySelector(c2).onclick = function(){
	
		for (var i = 0; i < mat1row; i++) {
			for (var j = 0; j < mat1col; j++) {
				array1[i][j] = $("#mat1"+i+j).val();


			} 
	   	}


	   	for (var i = 0; i < mat2row; i++) {
			for (var j = 0; j < mat2col; j++) {
				array2[i][j] = $("#mat2"+i+j).val();

			} 
	   	}

	   		multiply(array1,array2);

	}

}

// Multiplication
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

 	
	var para = document.createElement('table');
	para.setAttribute('id','table');
	document.querySelector('#printProduct').appendChild(para);


 	for (var i = 0; i < final_array.length; i++) {
 		var row = document.createElement('tr');
 		para.appendChild(row);
 		for (var j = 0; j < final_array[i].length; j++) {
 			var col = document.createElement('td'); 
 			col.innerHTML = final_array[i][j];
 			 row.appendChild(col);	
 			


 		}
 	}





}



